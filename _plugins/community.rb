module Jekyll
  module CommunityFilter
    def community(people, state, sort_by = 'oldest')
      now = Date.today
      lastMonth = Date.today.prev_month
      current = []
      recent = []
      past = []
      people.each do |person|
        missions = person.data['missions']
        if missions&.last and # they had at least one
          missions&.last['end'] and # and it had an end date
          missions&.last['end'] <= now # and the date is in the past
          past << person
        else
          if missions&.first and # they had at least one
            missions&.first['start'] and # and it had an end date
            missions&.first['start'] >= lastMonth # and the date is in the past month
            recent << person
          end
          current << person
        end
      end

      if state == 'current'
        result = current
      elsif state == 'recent'
        result = recent
      else
        result = past
      end

      if sort_by != 'alpha' 
        result.sort_by { |person| person.data['missions']&.map{ |e| e['start'] || Date.today }&.min || Date.today }.reverse
      else
        result.sort_by { |person| person.data['fullname'] }
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
