module Jekyll
  module PhaseFilter
    def get_phase(startup)
      startup['phases'].last['name'] || startup.data['phases']&.last['name']
    end

    def where_phase(startups, phase)
      list = []
      startups.each do |startup|
        if get_phase(startup) == phase
          list << startup
        end
      end

      return list
    end
  end
end

Liquid::Template.register_filter(Jekyll::PhaseFilter)
