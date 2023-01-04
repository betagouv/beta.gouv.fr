# frozen_string_literal: true

module Jekyll
  module IncubatorFilter
    DONE_PHASES = %w[alumni end success].freeze

    def active_incubators(incubators)
      startups_by_incubators = @context
                               .registers[:site]
                               .collections['startups']
                               .docs
                               .group_by { |s| s.data['incubator'] }

      incubators.select do |i|
        id = i.data['slug']

        startups_by_incubators[id]&.any? { |s| startup_active?(s) }
      end
    end

    private

    def startup_active?(startup)
      phases = startup
               .data['phases']
               .map { |p| p['name'] }

      # no done phase = startup is still active
      DONE_PHASES.intersection(phases).empty?
    end
  end

  class RenderIncubatorsApi < Liquid::Tag
    def render(context)
      result = {}
      startups = context.registers[:site].collections['startups']
      incubators = context.registers[:site].collections['incubators']
      now = Date.today
      startups.docs.each do |startup|
        incubator = startup["incubator"]
        if incubator
          if !result[incubator]
            result[incubator] = {
              'startups' => Array.new
            }
          end
          result[incubator]['startups'].push({
            "id" => startup.id.gsub('/startups/', ''),
            "name" => startup["title"],
            "pitch" => startup["mission"],
            "repository" => startup["repository"],
            "contact" => startup["contact"],
            "phases" => startup["phases"],
          })
        end
      end
      incubators.docs.each do |incubator|
        incubatorName = incubator.id.gsub('/incubators/', '')
        if !result[incubatorName]
          result[incubatorName] = {}
        end
        result[incubatorName]['title'] = incubator['title']
        result[incubatorName]['owner'] = incubator['owner']
        result[incubatorName]['contact'] = incubator['contact']
        result[incubatorName]['address'] = incubator['address']
        result[incubatorName]['website'] = incubator['website']
        result[incubatorName]['github'] = incubator['github']
      end
      return JSON.pretty_generate(result)
    end
  end
end

Liquid::Template.register_filter(Jekyll::IncubatorFilter)
Liquid::Template.register_tag('render_incubators_api', Jekyll::RenderIncubatorsApi)
