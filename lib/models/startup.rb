# frozen_string_literal: true

require_relative 'base'

module Beta
  # Startup represents all of our products in
  # `content/_startpus/*.md`.
  class Startup < Base
    FOLDER_IDENTIFIER = '_startups'

    interesting :id, :incubator, :title, :phases, :mission, :accessibility_status

    PHASES = %w[investigation
                construction
                acceleration
                consolidation
                transfere
                opere
                abandon
                abandon-investigation].freeze

    ACTIVE_PHASES = %w[
      investigation
      construction
      acceleration
      consolidation
      opere
    ].freeze

    def latest_phase
      phases
        .max_by { |phase| phase['start'] }
    end

    def active?
      ACTIVE_PHASES.include?(latest_phase['name'])
    end

    def members
      @members ||= Member.all.select { |member| member.active_startups.include?(id) }
    end
    alias active_members members

    def all_members
      @all_members ||= Member.all.select { |member| member.all_startups.include?(id) }
    end

    def previous_members
      all_members - active_members
    end

    API_SINGLE_FIELDS = %w[
      id
      name
      repository
      contact
      phases
      mission
      link
      incubator
      accessibility_status
      stats_url
      budget_url
      impact_url
      dashlord_url
      redirect_from
      usertypes
      techno
      mon_service_securise
    ].freeze

    def to_api_hash
      { name: document.data['title'] }
        .merge(document.data.slice(*API_SINGLE_FIELDS))
        .merge(
          active_members: active_members.map(&:id),
          previous_members: previous_members.map(&:id)
        )
        .merge(content: document.content)
    end
  end
end
