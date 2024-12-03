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
  end
end
