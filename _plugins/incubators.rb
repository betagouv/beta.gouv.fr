module Jekyll
  class RenderIncubatorsApi < Liquid::Tag
    def render(context)
      result = {}
      startups = context.registers[:site].collections['startups']
      incubators = context.registers[:site].collections['incubators']
      now = Date.today
      startups.docs.each do |startup|
        incubator = startup.incubator
        if incubator
          if !result[incubator]
            result[incubator] = {
              'startups' => Array.new
            }
          end
          result[incubator]['startups'].push({
            "id" => startup.id.gsub('/startups/', ''),
            "name" => startup.title,
            "pitch" => startup.mission,
            "repository" => startup["repository"],
            "contact" => startup.contact,
            "phases" => startup.phases,
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
      return result.to_json
    end
  end
end
  
  Liquid::Template.register_tag('render_incubators_api', Jekyll::RenderIncubatorsApi)
