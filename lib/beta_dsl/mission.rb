# frozen_string_literal: true
require 'date'

module BetaDsl
  class Mission < OpenStruct
    def active?
      self.end.nil? || self.end >= Date.today
    end
  end
end
