# coding: utf-8
module Jekyll
    module DateFilterFrench
      MONTHS = {"01" => "janvier",
                "02" => "février",
                "03" => "mars",
                "04" => "avril",
                "05" => "mai",
                "06" => "juin",
                "07" => "juillet",
                "08" => "août",
                "09" => "septembre",
                "10" => "octobre",
                "11" => "novembre",
                "12" => "décembre"
               }
  
      def date_to_french(date)
        day = time(date).strftime("%e")
        month = time(date).strftime("%m")
        year = time(date).strftime("%Y")
        day + ' ' + MONTHS[month] + ' ' + year
      end

      def date_to_french_month(date)
        month = time(date).strftime("%m")
        MONTHS[month]
      end
    end
  end
  
  Liquid::Template.register_filter(Jekyll::DateFilterFrench)