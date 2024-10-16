# frozen_string_literal: true

module Jekyll
  module DateFilter
    MONTHS_FR = %w[janvier février mars avril mai juin juillet aout septembre octobre novembre décembre].freeze

    def french_long_date(input)
      day = time(input).strftime('%-d') # no leading zero
      day = '1er' if day == '1'
      month = time(input).strftime('%m')
      year = time(input).strftime('%Y')
      "#{day} #{MONTHS_FR[month.to_i - 1]} #{year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)
