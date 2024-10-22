# frozen_string_literal: true

require 'active_model'

require_relative 'base'

module Beta
  class Member < Base
    include ActiveModel::AttributeAssignment

    attr_accessor :fullname, :role, :domaine, :missions, :startups, :previously

    FOLDER_IDENTIFIER = '_authors'

    def initialize(hash)
      assign_attributes(hash.slice(*%w[fullname role domaine missions startups previously]))

      @missions ||= []
      @startups ||= []
      @previously ||= []

      super()
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
  end
end
