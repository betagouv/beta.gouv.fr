# frozen_string_literal: true

require_relative 'base'

module Beta
  # Startup represents all of our products in
  # `content/_startpus/*.md`.
  class Startup < Base
    FOLDER_IDENTIFIER = '_startups'

    interesting :id, :title, :phases, :mission, :accessibility_status
  end
end
