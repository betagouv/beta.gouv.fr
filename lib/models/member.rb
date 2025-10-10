# frozen_string_literal: true

require_relative 'base'

module Beta
  class Member < Base
    FOLDER_IDENTIFIER = '_authors'

    interesting :id, :fullname, :role, :domaine, :missions, :startups, :previously

    def initialize(hash)
      super

      @missions ||= []
      @startups ||= []
      @previously ||= []
    end

    def active_missions
      @missions.filter do |mission|
        mission['end'].nil? || mission['end'] >= Date.today
      end
    end

    def legacy_missions
      @missions - active_missions
    end

    def active_startups
      (
        startups +
        active_missions.map { |mission| mission['startups'] }.flatten
      ).uniq
    end

    def legacy_startups
      (
        previously +
        legacy_missions.map { |mission| mission['startups'] }.flatten
      ).uniq
    end

    def all_startups
      active_startups + legacy_startups
    end
  end
end
