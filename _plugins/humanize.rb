# frozen_string_literal: true

module Jekyll
  module BetaGouv
    # a very naive humanize filter
    module HumanizeFilter
      def humanize(str)
        str
          .gsub(/[-_]/, ' ')
          .downcase
          .capitalize
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::BetaGouv::HumanizeFilter)
