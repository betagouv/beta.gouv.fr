# frozen_string_literal: true

require 'active_support/core_ext/string'
require 'json'
require 'net/http'
require 'uri'

S3_BASE_URL = ENV.fetch('S3_BASE_URL', nil)

module Jekyll
  # provides a shortcut to the Jekyll static files
  module StaticFiles
    def static_files
      @context.registers[:site].static_files
    end
  end

  module S3ImageFiles
    def s3_image_file(template, id)
      asset_key = template % id

      File.join(S3_BASE_URL, asset_key) if s3_bucket_keys.find { |key| key == asset_key }
    end

    private

    def s3_bucket_keys
      @context.registers[:site].config['s3_keys']
    end
  end

  # provides a `screenshot` filter that will use the startup image
  # found in /img/startups/{id} or a placeholder instead
  module ScreenshotFilter
    include StaticFiles
    include S3ImageFiles

    FALLBACK = '/img/betagouv-rectangle.png'

    def screenshot(startup)
      return FALLBACK if startup.nil?

      startup_s3_image_file(startup) || screenshot_file(startup) || FALLBACK
    end

    private

    def startup_s3_image_file(startup)
      s3_image_file('startups/%s/shot.jpg', startup_id(startup))
    end

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

    FALLBACK = '/img/logo-generique-startup-carre-2019.jpg'

    def avatar(person)
      return FALLBACK if person.nil?

      slug = person['slug']

      member_s3_image_file(slug) ||
        avatar_file(slug) ||
        avatar_attribute(person) ||
        github_avatar(person['github']) ||
        FALLBACK
    end

    private

    def member_s3_image_file(slug)
      s3_image_file('members/%s/avatar.jpg', slug)
    end

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

  module IncubatorLogoFilter
    include StaticFiles

    FALLBACK = '/img/incubators/logo_beta.png'

    def incubator_logo(incubator)
      return FALLBACK if incubator.nil?

      incubator_s3_image_file(incubator) || incubator_file(incubator) || FALLBACK
    end

    private

    def incubator_id(incubator)
      incubator.id.split('/').last.parameterize # they come as /incubateurs/{id}
    end

    def incubator_s3_image_file(incubator)
      s3_image_file('incubators/%s/logo.jpg', incubator_id(incubator))
    end

    def incubator_files
      static_files.filter { |f| f.data['incubators_img'] == true }
    end

    def incubator_file(incubator)
      file = incubator_files.find do |f|
        incubator['logo'].include?(f.basename)
      end
      file&.relative_path
    end
  end
end

Liquid::Template.register_filter(Jekyll::ScreenshotFilter)
Liquid::Template.register_filter(Jekyll::AvatarFilter)
Liquid::Template.register_filter(Jekyll::IncubatorLogoFilter)
