# frozen_string_literal: true

module Jekyll
  # naive pluralize filter which infer the plural if not specified
  module PluralizeFilter
    def pluralize(count, singular, plural)
      raise unless count.is_a? Numeric

      if count > 1
        plural || "#{singular}s"
      else
        singular
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PluralizeFilter)
