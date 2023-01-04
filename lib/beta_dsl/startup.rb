# frozen_string_literal: true

module BetaDsl
  class Startup < Base
    folder '_startups'

    def active?
      phases.none? { |phase| phase['name'] == 'alumni' }
    end

    def members
      @members ||= Member.all.select { |m| m.startups&.include? id }
    end
  end
end
