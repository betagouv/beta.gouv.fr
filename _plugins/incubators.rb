module Jekyll
  # an active startup is considered being either in:
  # - investigation
  # - construction
  # - acceleration
  # - transfer
  #
  # we add an exception to always consider the main incubator at the top of the list
  module ActiveStartupsFilter
    def sort_incubators_by_active_startups(incubators, startups)
      sorted_incubators = incubators.sort_by {|incubator|
        count_incubator_active_startups(incubator, startups)
      }.reverse

      # Place 'dinum' at the top
      sorted_incubators = (sorted_incubators.partition { |incubator| incubator.id == '/incubateurs/dinum' }).flatten

      sorted_incubators
    end

    def filter_incubators_with_active_startups(incubators, startups)
      incubators.select {|incubator|
        count_incubator_active_startups(incubator, startups) > 0
      }
    end

    def count_incubator_active_startups(incubator, startups)
      startups.count { |startup|
        "/incubateurs/#{startup['incubator']}" === incubator.id &&
          ['investigation', 'construction', 'acceleration', 'transfer'].include?(get_phase(startup))
      }
    end

    def count_all_active_startups(startups)
      startups.count { |startup| ['investigation', 'construction', 'acceleration', 'transfer', 'success'].include?(get_phase(startup))
      }
    end

    # copied from `_plugins/phases.rb` but it's too tricky to reapply the filter in another separated filter
    def get_phase(startup)
      startup['phases'].last['name'] || startup.data['phases']&.last['name']
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
        incubatorName = incubator.id.gsub('/incubateurs/', '')
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

Liquid::Template.register_filter(Jekyll::ActiveStartupsFilter)
Liquid::Template.register_tag('render_incubators_api', Jekyll::RenderIncubatorsApi)
