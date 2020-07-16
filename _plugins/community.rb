module Jekyll
  module CommunityFilter
    def community(people, state)
      now = Date.today
      current = []
      past = []
      people.each do |person|
        if person.data['missions']&.last and
          person.data['missions']&.last['end'] and
          person.data['missions']&.last['end'] > now
          current << person
        else
          past << person
        end
      end

      if state == 'current'
        current
      else
        past
      end
    end
  end

  class RenderCommunityStatsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      result = {
        'admin' => [],
        'independent' => [],
        'service' => []
      }
      authors = context.registers[:site].collections['authors']
      authors.docs.each do |author|
        if author.data['missions']
          author.data['missions'].each do |mission|
            startDate = mission['start']
            endDate = mission['end']

            result[mission['status']] << {date: startDate, increment: 1} if startDate and startDate != ''
            result[mission['status']] << {date: endDate, increment: -1} if endDate and endDate != ''
          end
        end
      end
      result.to_json
    end
  end
end

Liquid::Template.register_filter(Jekyll::CommunityFilter)
Liquid::Template.register_tag('render_community_stats', Jekyll::RenderCommunityStatsTag)
