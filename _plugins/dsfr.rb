# frozen_string_literal: true

module Jekyll
  # provides some shortcuts for the DSFR
  module DsfrFilter
    def to_badge(params)
      status, label = params

      "<p class=\"fr-badge fr-badge--#{status}\">#{label}</p>"
    end

    def to_link(href, label, icon)
      classes = []

      if icon
        classes.push(
          'fr-link',
          'fr-link--icon-left',
          "fr-icon-#{icon}-fill"
        )
      end

      if href.nil?
        "<a class=\"#{classes.join(' ')}\">#{label} (non disponible)</a>"
      else
        "<a href=\"#{href}\" target=\"_blank\" rel=\"noopener\" class=\"#{classes.join(' ')}\">#{label}</a>"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::DsfrFilter)
