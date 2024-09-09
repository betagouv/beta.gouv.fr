module Jekyll
    class RenderSponsorsApi < Liquid::Tag
      def render(context)
        result = {}
        sponsors = context.registers[:site].collections['organisations']
        now = Date.today
        sponsors.docs.each do |incubator|
          incubatorName = incubator.id.gsub('/organisations/', '')
          if !result[incubatorName]
            result[incubatorName] = {}
          end
          result[incubatorName]['name'] = incubator['name']
          result[incubatorName]['acronym'] = incubator['acronym']
          result[incubatorName]['domaine_ministeriel'] = incubator['domaine_ministeriel']
          result[incubatorName]['type'] = incubator['type']
        end
        return JSON.pretty_generate(result)
      end
    end
  end
    
  Liquid::Template.register_tag('render_sponsors_api', Jekyll::RenderSponsorsApi)
  