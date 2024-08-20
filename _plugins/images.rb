# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'


S3_BASE_URL= ENV['S3_BASE_URL']

module Jekyll
  # provides a shortcut to the Jekyll static files
  module StaticFiles
    def static_files
      @context.registers[:site].static_files
    end
  end

  module URLChecker
    def self.url_exists?(url)
      uri = URI.parse(url)
      response = nil
      Net::HTTP.start(uri.host, uri.port, use_ssl: uri.scheme == 'https') do |http|
        response = http.head(uri.request_uri)
      end
      response.is_a?(Net::HTTPSuccess)
    rescue StandardError => e
      Jekyll.logger.error "HTTP check error: #{e.message}"
      false
    end
  end

  # provides a `screenshot` filter that will use the startup image
  # found in /img/startups/{id} or a placeholder instead
  module ScreenshotFilter
    include StaticFiles
    include URLChecker

    FALLBACK = '/img/betagouv-rectangle.png'

    def screenshot(startup)
      return FALLBACK if startup.nil?

      s3_url = "#{S3_BASE_URL}/startups/#{startup.id}/shot.jpg"
      URLChecker.url_exists?(s3_url) ? s3_url : screenshot_file(startup) || FALLBACK
    end

    private

    def startup_id(startup)
      startup.id.split('/').last # they come as /startups/{id}
    end

    def screenshot_files
      static_files.filter { |f| f.data['startups_img'] == true }
    end

    def screenshot_file(startup)
      id = startup_id(startup)
      file = screenshot_files.find { |f| f.basename == id }

      file&.relative_path
    end
  end

  # provides an `avatar` filter that will return the author image in
  # `/img/authors/{slug}`, or the path in `author.avatar`, or use
  # their GitHub avatar, or a placeholder.
  module AvatarFilter
    include StaticFiles
    include URLChecker

    FALLBACK = '/img/logo-generique-startup-carre-2019.jpg'
    S3_BASE_URL = 'https://espace-membre.s3.amazonaws.com'

    def avatar(person)
      s3_url = "#{S3_BASE_URL}/startups/#{person['slug']}/avatar.jpg"
      URLChecker.url_exists?(s3_url) ? s3_url : avatar_file(person['slug']) || avatar_attribute(person) || github_avatar(person['github']) || FALLBACK
    end

    private

    def avatar_files
      static_files.filter { |f| f.data['authors_img'] == true }
    end

    def avatar_file(slug)
      file = avatar_files.find { |f| f.basename == slug }

      file&.relative_path
    end

    def avatar_attribute(person)
      person['avatar']
    end

    def github_avatar(identifier)
      return if identifier.nil?

      "https://avatars3.githubusercontent.com/#{identifier}?s=600"
    end
  end
end

Liquid::Template.register_filter(Jekyll::ScreenshotFilter)
Liquid::Template.register_filter(Jekyll::AvatarFilter)
