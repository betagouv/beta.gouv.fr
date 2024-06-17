# frozen_string_literal: true

require 'date'

module BetaDsl
  class Mission < Base
    def active?
      self.end.nil? || self.end >= Date.today
    end
  end
end
