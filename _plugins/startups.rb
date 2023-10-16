module Jekyll
  class RenderStartupsApi < Liquid::Tag
    def render(context)
      result = {}
      authors = context.registers[:site].collections['authors']
      now = Date.today
      authors.docs.each do |author|
        if author['startups']
          author['startups'].each do |startup|
            if !result[startup]
              result[startup] = {
                'active_members' => Array.new,
                'previous_members' => Array.new,
                'expired_members' => Array.new
              }
            end
            if author.data['missions']&.last['end'] <= now
              result[startup]['expired_members'].push(author.id.gsub('/authors/', ''))
            else
              result[startup]['active_members'].push(author.id.gsub('/authors/', ''))
            end
          end
        end
        if author['previously']
          author['previously'].each do |previous_startup|
            if !result[previous_startup]
              result[previous_startup] = {
                'active_members' => Array.new,
                'previous_members' => Array.new,
                'expired_members' => Array.new
              }
            end
            result[previous_startup]['previous_members'].push(author.id.gsub('/authors/', ''))
          end
        end
      end
      startups = context.registers[:site].collections['startups']
      startups.docs.each do |startup|
        startupId = startup.id.gsub('/startups/', '')
        if !result[startupId]
          result[startupId] = {
            'active_members' => Array.new,
            'previous_members' => Array.new,
            'expired_members' => Array.new
          }
        end
        result[startupId]["id"] = startupId
        result[startupId]['name'] = startup['title']
        result[startupId]['repository'] = startup['repository']
        result[startupId]['contact'] = startup['contact']
        result[startupId]['phases'] = startup['phases']
      end
      return JSON.pretty_generate(result)
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
