# frozen_string_literal: true

module Jekyll
  module NationalImpactFilter
    def get_national_impact(startup)
      if startup['events']
        national_impact = startup['events'].select { |event| event['name'] == 'national_impact' }.first
        return national_impact['date'].year if national_impact
      end
      nil
    end

    def where_national_impact(startups, date)
      list = []
      startups.each do |startup|
        list << startup if get_national_impact(startup) == date
      end

      list
    end
  end
end

Liquid::Template.register_filter(Jekyll::NationalImpactFilter)
