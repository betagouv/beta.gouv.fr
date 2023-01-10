# frozen_string_literal: true

module BetaDsl
  class Startup < Base
    folder '_startups'

    PHASES = %w[investigation
                construction
                acceleration
                alumni
                transfer
                success].freeze

    def self.active
      all.select(&:active?)
    end

    PHASES.each do |phase|
      define_method "#{phase}_phase" do
        phases.find { |p| p['name'] == phase }
      end

      define_method "#{phase}_phase?" do
        phases.any? { |p| p['name'] == phase }
      end
    end

    def active?
      !alumni_phase?
    end

    def members
      @members ||= Member.all.select { |member| member.startups&.include? id }
    end

    def last_phase
      phases.sort_by { |phase| phase['end'] }.last
    end
  end
end
