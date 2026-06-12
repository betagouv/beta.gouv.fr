# frozen_string_literal: true

require_relative '../lib/models/member'

module Jekyll
  module StartupFilter
    # rubocop:disable Style/ParallelAssignment
    # looks fine here
    def to_startup_badge(event)
      case event['name']
      when 'fast'
        type, name = 'new', 'Lauréat FAST'
      when 'national_impact'
        type, name = 'success', 'Service à impact national'
      else
        return
      end

      "<span class=\"fr-badge fr-badge--#{type} fr-mr-1w\">#{name}</span>"
    end
    # rubocop:enable Style/ParallelAssignment

    def members(all_members, startup_id, alumni = false)
      id = startup_id.delete_prefix('/startups/')

      # all_members is a bunch of Jekyll::Document
      all_members.filter do |doc|
        member = Beta::Member.new(doc.data)

        collection = alumni ? :legacy_startups : :active_startups

        member.send(collection).include?(id)
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::StartupFilter)
