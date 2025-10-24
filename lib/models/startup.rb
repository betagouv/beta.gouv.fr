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
                alumni
                transfer
                success].freeze

    PHASES.each do |phase|
      define_method "#{phase}_phase" do
        phases.find { |p| p['name'] == phase }
      end

      define_method "in_#{phase}?" do
        # we can't assume an active phase is "one without an end_date"
        # because we do have startups where the phase is over but not
        # terminated with an end date (ex: "Pass Culture"). Instead,
        # the logic here is "a startup is in the phase X if it has
        # exactly all the phases up to X".

        # get all the phases upto X
        upto = PHASES.slice(..PHASES.find_index(phase))

        phases.map { |p| p['name'] }.sort == upto.sort
      end
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
