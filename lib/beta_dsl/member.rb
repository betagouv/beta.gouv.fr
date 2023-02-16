# frozen_string_literal: true

require 'json'

require_relative './mission.rb'

module BetaDsl
  class Member < Base
    folder '_authors'

    def active?
      active_missions.any?
    end

    def active_missions
      missions
        .map { |m| Mission.new(m) }
        .select(&:active?)
    end
  end
end
