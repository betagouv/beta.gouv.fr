module Jekyll
  module CommunityFilter
    def community(people, state, sort_by = 'oldest')
      now = Date.today
      current = []
      past = []
      people.each do |person|
        missions = person.data['missions']
        if missions&.last and # they had at least one
          missions&.last['end'] and # and it had an end date
          missions&.last['end'] <= now # and the date is in the past
          past << person
        else
          current << person
        end
      end

      if state == 'past'
        result = past
      else
        result = current
      end

      if sort_by != 'alpha' 
        result = result.sort_by { |person| person.data['missions']&.map{ |e| e['start'] || Date.today }&.min || Date.today }.reverse
      else
        result = result.sort_by { |person| person.data['fullname'] }
      end

      if state == 'recent'
        result[1..3]
      else
        result
      end
    end
  end

class RenderCommunityStatsTag < Liquid::Tag

  def initialize(tag_name, text, tokens)
    super
  end

  def render(context)
    result = {
      'employer' => {
        'admin' => [],
        'independent' => [],
        'service' => [],
        'Déploiement' => [],
        'Design' => [],
        'Développement' => [],
        'Coaching' => [],
        'Autre' => [],
        'Intraprenariat' => [],
        'Animation' => [],
        'Produit' => [],
      },
      'total' => {
        'Déploiement' => 0,
        'Design' => 0,
        'Développement' => 0,
        'Coaching' => 0,
        'Autre' => 0,
        'Intraprenariat' => 0,
        'Animation' => 0,
        'Produit' => 0
      }
    }
    authors = context.registers[:site].collections['authors']
    now = Date.today
    authors.docs.each do |author|
      if author.data['missions']
        author.data['missions'].each do |mission|
          startDate = mission['start']
          endDate = mission['end']
          result['employer'][mission['status']] << {date: startDate, increment: 1} if startDate and startDate != ''
          result['employer'][mission['status']] << {date: endDate, increment: -1} if endDate and endDate != ''
          result['employer'][author.data['domaine']] << {date: startDate, increment: 1} if startDate and startDate != ''
          result['employer'][author.data['domaine']] << {date: endDate, increment: -1} if endDate and endDate != ''
        end
        if author.data['missions']&.last['end'] >= now
          result['total'][author.data['domaine']] = result['total'][author.data['domaine']] + 1
        end
      end
    end
    result.to_json
  end
end
end

Liquid::Template.register_filter(Jekyll::CommunityFilter)
Liquid::Template.register_tag('render_community_stats', Jekyll::RenderCommunityStatsTag)
