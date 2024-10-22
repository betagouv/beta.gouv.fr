# frozen_string_literal: true

require 'active_model'

require_relative 'base'

module Beta
  # Startup represents all of our products in
  # `content/_startpus/*.md`.
  class Startup < Base
    include ActiveModel::AttributeAssignment

    attr_accessor :id, :title, :phases, :mission

    FOLDER_IDENTIFIER = '_startups'

    def initialize(hash)
      assign_attributes(hash.slice(*%w[id title phases mission]))

      super()
    end
  end
end
