# frozen_string_literal: true

require 'json'

module Jekyll
  module AvatarFilter
    def avatar(person)
      placeholder = '/img/logo-generique-startup-carre-2019.jpg'

      avatar_file(person['slug']) ||
        avatar_attribute(person) ||
        github_avatar(person['github']) ||
        placeholder
    end

    private

    def avatar_files
      @context
        .registers[:site]
        .static_files
        .filter { |f| f.data['authors_img'] == true }
    end

    def avatar_file(slug)
      avatar_files.find { |f| f.basename == slug }
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

Liquid::Template.register_filter(Jekyll::AvatarFilter)
