# frozen_string_literal: true

require 'json'
require_relative '../lib/models/startup'

module Jekyll
  # This generator builds a JSON repository of each startup through
  # our Beta::Startup objects to leverage our existing business logic
  class StartupJsonGenerator < Generator
    safe true
    priority :low

    def generate(site)
      startups = site.collections['startups']

      startups.docs.each do |doc|
        startup = Beta::Startup.from_document(doc)

        site.pages << StartupJsonPage.new(site, startup)
      end
    end
  end

  # Build a single JSON page for the API
  class StartupJsonPage < Page
    OUTPUT_PATH = 'api/v3/startups/'

    # rubocop:disable Lint/MissingSuper
    def initialize(site, startup)
      @site = site
      @base = site.source
      @dir = OUTPUT_PATH
      @name = "#{startup.id}.json"

      process(@name)

      @data = {}
      @data['layout'] = nil
      @data['permalink'] = File.join(OUTPUT_PATH, @name)

      @content = startup
                 .to_api_hash
                 .to_json
    end
    # rubocop:enable Lint/MissingSuper
  end
end
