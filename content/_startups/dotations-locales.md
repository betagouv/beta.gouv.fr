---
mission: Évaluer le montant des dotations locales de son territoire
incubator: anct
repository: https://git.leximpact.dev/openfisca/openfisca-france-dotations-locales
contact: contact-dotations-locales@anct.gouv.fr
title: Dotations locales
sponsors:
  - /organisations/anct
link: https://dotations.incubateur.anct.gouv.fr/
stats: false
phases:
  - name: construction
    start: 2022-01-01
    end: 2022-07-01
  - name: acceleration
    start: 2022-07-01
  - name: alumni
    start: 2024-01-01
usertypes:
  - collectivite-territoriale
accessibility_status: non conforme
---
## Le problème

Les [dotations financières de l’État](https://www.vie-publique.fr/fiches/21932-quelles-sont-les-dotations-de-letat-aux-collectivites) aux collectivités représentent près d’[un tiers de leurs ressources](https://www.cohesion-territoires.gouv.fr/budget-et-dotations-des-collectivites-locales), mais elles sont délicates à estimer : complexes à calculer, notifiées en cours d’exercice et toute projection au-delà de l’année en cours peut être coûteuse. Ceci dans un contexte d'évolution des concours financiers aux budgets des territoires (voici [ce qui change en 2022](https://www.cohesion-territoires.gouv.fr/territoires-et-collectivites-territoriales-ce-qui-change-au-1er-janvier-2022)).

Pourtant, des [données ouvertes sur les territoires](http://www.dotations-dgcl.interieur.gouv.fr/consultation/dotations_en_ligne.php) existent et une [partie de la réglementation](https://git.leximpact.dev/leximpact/openfisca-france-dotations-locales) est déjà modélisée. Mais ces éléments techniques sont-ils accessibles ?

## La phase d'investigation

Une première phase de recherche va permettre de détecter les besoins réels des utilisateurs et, dans un second temps, d’identifier les problématiques liées à la prise de connaissance des montants de dotations et à la compréhension des méthodes de calcul.

**Plusieurs typologies de collectivités sont concernées par l’étude  :**
* Communes rurales de moins de 3500 habitants,
* Communes de montagne,
* Communes bourgs-centres,
* EPCI et Communautés d’agglomérations,
* Départements et Régions.

## Les hypothèses d’amélioration

Construire avec les territoires un moyen d'évaluer le montant de dotations de l'État en associant la connaissance que chaque territoire a de lui-même, les textes réglementaires ainsi que les données du calcul des dotations locales publiées en open data par la [Direction Régionale des Collectivités Locales](http://www.dotations-dgcl.interieur.gouv.fr/consultation/accueil.php).

**Plusieurs axes d’amélioration sont étudiés pour permettre aux collectivités de :**
* Mieux comprendre les mécanismes des composantes de la dotation globale de fonctionnement,
* Suivre l’historique et l’évolution de leurs dotations,
* Comprendre des critères qui interviennent dans le calcul,
* Visualiser et identifier les seuils qui ont un impact sur le calcul,
* Se comparer facilement avec d’autres collectivités.

La solution contribuera également à la poursuite de l’ouverture et de la publication du modèle de calcul des dotations locales.
