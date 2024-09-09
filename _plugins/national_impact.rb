module Jekyll
    module NationalImpactFilter
      def get_national_impact(startup)
        if startup['events']
            national_impact = startup['events'].select{ |event| event['name'] == 'national_impact' }.first()
            if national_impact
                return national_impact['date'].year
            end
        end
        return
      end
  
      def where_national_impact(startups, date)
        list = []
        startups.each do |startup|
          if get_national_impact(startup) == date
            list << startup
          end
        end
  
        return list
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::NationalImpactFilter)
  