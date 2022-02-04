---
mission: Évaluer le montant des dotations locales de son territoire
incubator: anct
repository: https://git.leximpact.dev/openfisca/openfisca-france-dotations-locales
contact: sandra.chakroun@beta.gouv.fr
stats_url: 
title: Dotations locales
owner: France Relance
sponsors:
  - name: ANCT / France Relance
    acronym: ANCT
    domaine_ministeriel: territoires
    type: collectivite-territoriale
link: 
stats: false
phases:
  - name: construction
    start: 2022-01-01
    end: 2022-07-01
---

## Le problème

Les dotations financières de l’État aux collectivités représentent près d’[un tiers de leurs ressources](https://www.cohesion-territoires.gouv.fr/budget-et-dotations-des-collectivites-locales), mais elles sont délicates à estimer : complexes à calculer, notifiées en cours d’exercice et toute projection au-delà de l’année en cours peut être coûteuse. Ceci dans un contexte d'évolution des concours financiers aux budgets des territoires (voici [ce qui change en 2022](https://www.cohesion-territoires.gouv.fr/territoires-et-collectivites-territoriales-ce-qui-change-au-1er-janvier-2022)).

Pourtant, des [données ouvertes sur les territoires](http://www.dotations-dgcl.interieur.gouv.fr/consultation/dotations_en_ligne.php) existent et une [partie de la réglementation](https://git.leximpact.dev/leximpact/openfisca-france-dotations-locales) est déjà modélisée. Mais ces éléments techniques sont-ils accessibles ?

## La solution

Construire avec les territoires un moyen d'évaluer le montant de dotations de l'État en associant la connaissance que chaque territoire a de lui-même, les textes réglementaires ainsi que les données du calcul des dotations locales publiées en open data par la [Direction Régionale des Collectivités Locales](http://www.dotations-dgcl.interieur.gouv.fr/consultation/accueil.php). 
