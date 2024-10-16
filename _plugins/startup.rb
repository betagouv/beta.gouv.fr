# frozen_string_literal: true

require_relative '../lib/models/member'

module Jekyll
  module StartupFilter
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
