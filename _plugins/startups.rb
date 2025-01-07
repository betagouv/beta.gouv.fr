# frozen_string_literal: true

module Jekyll
  class RenderStartupsApi < Liquid::Tag
    def render(context)
      result = {}
      authors = context.registers[:site].collections['authors']
      now = Date.today
      authors.docs.each do |author|
        author['startups']&.each do |startup|
          unless result[startup]
            result[startup] = {
              'active_members' => [],
              'previous_members' => [],
              'expired_members' => []
            }
          end
          if author.data['missions']&.last&.[]('end')&.<= now
            result[startup]['expired_members'].push(author.id.gsub('/authors/', ''))
          else
            result[startup]['active_members'].push(author.id.gsub('/authors/', ''))
          end
        end
        author['previously']&.each do |previous_startup|
          unless result[previous_startup]
            result[previous_startup] = {
              'active_members' => [],
              'previous_members' => [],
              'expired_members' => []
            }
          end
          result[previous_startup]['previous_members'].push(author.id.gsub('/authors/', ''))
        end
        next unless author['missions']

        author['missions'].each do |mission|
          next unless mission['startups']

          mission['startups'].each do |startup|
            unless result[startup]
              result[startup] = {
                'active_members' => [],
                'previous_members' => [],
                'expired_members' => []
              }
            end
            if !mission['end'] || ((mission['start'] <= now) && (mission['end'] >= now))
              result[startup]['active_members'].push(author.id.gsub('/authors/', ''))
            elsif mission['end'] <= now
              result[startup]['expired_members'].push(author.id.gsub('/authors/', ''))
            end
          end
        end
      end
      startups = context.registers[:site].collections['startups']
      startups.docs.each do |startup|
        startupId = startup.id.gsub('/startups/', '')
        unless result[startupId]
          result[startupId] = {
            'active_members' => [],
            'previous_members' => [],
            'expired_members' => []
          }
        end
        result[startupId]['id'] = startupId
        result[startupId]['name'] = startup['title']
        result[startupId]['repository'] = startup['repository']
        result[startupId]['contact'] = startup['contact']
        result[startupId]['phases'] = startup['phases']
        result[startupId]['active_members'] = result[startupId]['active_members'].uniq
        result[startupId]['previous_members'] = result[startupId]['previous_members'].uniq
        result[startupId]['expired_members'] = result[startupId]['expired_members'].uniq
      end
      JSON.pretty_generate(result)
    end
  end

  module FastFilter
    def fast_promotion(startups, promotion, sort_order = nil)
      laureates = startups.filter do |startup|
        startup.data.dig('fast', 'promotion') == promotion
      end

      return laureates if sort_order.nil?

      laureates.sort_by { |l| l.data.dig('fast', sort_order) }
    end
  end
end

Liquid::Template.register_filter(Jekyll::FastFilter)

Liquid::Template.register_tag('render_startups_api', Jekyll::RenderStartupsApi)
