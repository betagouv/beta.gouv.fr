# frozen_string_literal: true

module Jekyll
  module PhaseFilter
    def get_phase(startup)
      Beta::Startup.from_document(startup).latest_phase
    end

    def where_phase(startups, phase)
      startups.select do |startup|
        Beta::Startup.from_document(startup).latest_phase['name'] == phase
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PhaseFilter)
