# frozen_string_literal: true

module Jekyll
  module PhaseFilter
    PHASE_LABELS_MAP = {
      "investigation" => {
        plural: "problèmes en investigation",
        singular: "problème en investigation",
        badge: "en investigation",
      },
      "construction" => {
        plural: "services en construction",
        singular: "service en construction",
        badge: "en construction",
      },
      "acceleration" => {
        plural: "services en accélération",
        singular: "service en accélération",
        badge: "en accélération",
      },
      "perennisation" => {
        plural: "services en pérennisation",
        singular: "service en pérennisation",
        badge: "en pérennisation",
      },
      "opere" => {
        plural: "services opérés au sein du réseau",
        singular: "service opéré au sein du réseau",
        badge: "opéré au sein du réseau",
      },
      "transfere" => {
        plural: "services transférés",
        singular: "service transféré",
        badge: "transféré",
      },
      "abandon" => {
        plural: "services arrêtés",
        singular: "service arrêté",
        badge: "arrêté",
      },
      "abandon-investigation" => {
        plural: "investigations non concluantes",
        singular: "investigation non concluante",
        badge: "investigation non concluante",
      },
    }.freeze

    def past_phase(phase)
      phase.include?("abandon")
    end

    def phase_badge_label(phase)
      PHASE_LABELS_MAP[phase][:badge]
    end

    def phase_results_label(phase, count)
      labels = PHASE_LABELS_MAP[phase]

      if count > 1
        labels[:plural]
      else
        labels[:singular]
      end
    end

    def get_phase(startup)
      Beta::Startup.new(startup.to_h).latest_phase
    end

    def where_phase(startups, phase)
      startups.select do |startup|
        Beta::Startup.from_document(startup).latest_phase['name'] == phase
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::PhaseFilter)
