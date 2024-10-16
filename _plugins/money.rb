# frozen_string_literal: true

module Jekyll
  module BetaGouv
    # MoneyFilter provides way to convert numbers into money
    # things. It could have been done through the money gem but money
    # does a *lot* of things we don't need and I couldn't even get the
    # French locale to work correclty so just do it ourselves ¯\_(ツ)_/¯
    module MoneyFilter
      def to_euros(number)
        raise "to_euros only works with integers, and #{number} is not an integer" unless number.integer?

        sum = number
              .to_s
              .chars
              .reverse
              .each_slice(3)
              .to_a
              .map(&:join)
              .join(' ')
              .reverse

        "#{sum} €"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::BetaGouv::MoneyFilter)
