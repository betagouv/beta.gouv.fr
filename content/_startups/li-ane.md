---
accessibility_status: partiellement conforme
analyse_risques: false
mon_service_securise: false
contact: contact@demarches-simplifiees.fr
link: https://demarches.numerique.gouv.fr
thematiques:
  - Administratif
usertypes:
  - particulier
  - association
  - entreprise
  - etat
  - collectivite-territoriale
  - etablissement-scolaire
techno:
  - ruby
title: LIAne
mission: Agent intelligent de simplification des démarches numériques
incubator: alliance
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    comment: null
    start: 2025-05-01
    end: null
events:
  - name: committee
    comment: ''
    date: 2025-04-07
---
## Contexte

La plateforme Démarches Simplifiées, initiée il y a bientôt 10 ans est la première plateforme de dématérialisation publique open source avec plus de 30 000 démarches publiées et plus de 15 millions de dossiers déposés. Elle compte plus de 20 000 agents publics administrateurs, 7 millions d'usagers et 140 000 agents publics instructeurs. 
Dans un contexte où les administrations publiques doivent faire preuve d'ingéniosité et d'efficience dans un contexte contraint, démarches simplifiées apparaît comme un produit qui joue un rôle clé à la fois dans la mise en œuvre des démarches numériques usagers et dans la mise à disposition d'un back-office d'instruction et de décision. Il s'agit donc désormais d'aller plus loin dans la simplification et l'accompagnement des usagers et des agents.

## Problème

En effet, la latitude donnée aux administrateurs dans la construction des démarches numériques amène aussi un biais de qualité dans les champs de formulaires proposés, qui ne répondent pas toujours aux exigences de simplification pour les usagers et nuisent donc également à l'efficience de l'instruction. Plus largement, il est parfois difficile pour les usagers de s'y retrouver efficacement parmi les 10 000 démarches disponibles.

Les formulaires deviennent parfois incompréhensibles pour les usagers, trop longs à remplir, avec des informations redondantes et des pièces jointes mal exploitées. Le principe "dites-le nous une fois" (DLNUF) est insuffisamment appliqué, obligeant ainsi les usagers à ressaisir des informations déjà disponibles via les API existantes.

Pour l'instruction, les agents font également face à des risques d'erreurs, des délais d'instruction allongés et des pièces jointes qui nécessitent un contrôle visuel fastidieux.

Cette situation génère des coûts cachés et une sous-utilisation des capacités de la plateforme, nuisant à l'efficience de l'action publique.

## Solution

**LIAne **: un agent intelligent intégré à démarches simplifiées qui accélère l'élaboration de démarches nativement simplifiées, dans une perspective de simplification des démarches pour les usagers, et d'assistance à l'instruction et au support usagers.

**Simplification & SimpliScore**

*  LIAne ** analyse les démarches et suggère des mesures de simplification en s'appuyant sur le guide de la DITP, supprime les redondances grâce aux informations d'authentification et aux API (France Connect, Pro Connect, API Entreprise), et introduit le **SimpliScore**, indicateur de qualité des démarches.

* Dans son itération la plus aboutie, **LIAne **créé et traite une démarche simple à partir d'un unique prompt.

**Pièce justificatives :**

* LIAne vérifie la conformité des pièces jointes et extrait automatiquement les informations nécessaires pour compléter les formulaires et simplifier l'instruction.

**Assistant conversationnel :**

* En s'appuyant sur les ressources et FAQ mises à disposition au sein de la démarche, LIAne propose à l'usager des réponses de premier niveau pour assister les services.

**Eligibilité & Instruction :**

* LIAne optimise l'instruction avec une aide à la décision avancée, s'appuyant sur les critères d'éligibilité et les API, ainsi que l'amélioration du tableau de bord (filtres en langage naturel, recherche avancée, …).

## Objectifs à 6 mois

**Objectif d'usage à 6 mois :** Améliorer significativement la qualité des démarches grâce au déploiement du SimpliScore et automatiser la lecture et le contrôle de conformité des pièces jointes. Commencer également, sur quelques démarches, le déploiement de l'agent conversationnel de niveau 1 sur la base des ressources fournies par les services.

**Objectif d'impact à 6 mois :** Réduire de 20% à 30% la durée moyenne de remplissage des formulaires grâce aux simplifications suggérées par LIAne et à l'application renforcée du principe DLNUF. Diminuer de 30% le taux de demandes de correction concernant les pièces jointes grâce à l'analyse des pièces durant le dépôt. Améliorer la satisfaction des usagers et réduire du volume de support de premier niveau.
