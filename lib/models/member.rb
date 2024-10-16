# frozen_string_literal: true

require 'active_model'
require 'yaml'

module Beta
  class Member
    include ActiveModel::AttributeAssignment

    attr_accessor :fullname, :role, :domaine, :missions, :startups, :previously

    class << self
      def all
        @all ||= fetch_all
      end

      private

      def fetch_all
        Dir
          .glob(File.expand_path('content/_authors/**.md', Dir.pwd))
          .map { |file| Psych.unsafe_load_file(file) }
          .map { |data| new(data) }
      end
    end

    def initialize(hash)
      assign_attributes(hash.slice(*%w[fullname role domaine missions startups previously]))

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
  end
end
