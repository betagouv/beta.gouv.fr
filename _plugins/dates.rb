module Jekyll
    module DateFilter
        MONTHS_FR = %w(janvier février mars avril mai juin juillet aout septembre octobre novembre décembre)

        def french_long_date(input)
            day = time(input).strftime("%-d") # no leading zero
            if day == "1"; day="1er"; end
            month = time(input).strftime("%m")
            year = time(input).strftime("%Y")
            day+' '+ MONTHS_FR[month.to_i - 1]+' '+year
        end

    end
end

Liquid::Template.register_filter(Jekyll::DateFilter)