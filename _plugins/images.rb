# frozen_string_literal: true

require 'json'

module Jekyll
  # provides a shortcut to the Jekyll static files
  module StaticFiles
    def static_files
      @context.registers[:site].static_files
    end
  end

  # provides a `screenshot` filter that will use the startup image
  # found in /img/startups/{id} or a placeholder instead
  module ScreenshotFilter
    include StaticFiles

    PLACEHOLDER = '/img/betagouv-rectangle.png'

    def screenshot(startup)
      # FIXME: this is fishy, why would startup be nil? (it does happen)
      return PLACEHOLDER if startup.nil?

      screenshot_file(startup) || PLACEHOLDER
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

  # provides an `avatar' filter that will return the author image in
  # `/img/authors/{slug}`, or the path in `author.avatar', or use
  # their GitHub avatar, or a placeholder.
  module AvatarFilter
    include StaticFiles

    PLACEHOLDER = '/img/logo-generique-startup-carre-2019.jpg'

    def avatar(person)
      avatar_file(person['slug']) ||
        avatar_attribute(person) ||
        github_avatar(person['github']) ||
        PLACEHOLDER
    end

    private

    def avatar_files
      static_files
        .filter { |f| f.data['authors_img'] == true }
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
