---
accessibility_status: partiellement conforme
analyse_risques: false
mon_service_securise: false
contact: james.chaigneaud@beta.gouv.fr
thematiques:
  - Administratif
  - Outil technique
usertypes:
  - etat
  - etablissement-scolaire
techno:
  - flask
  - css
  - graphql
  - html
  - java
  - python
title: One Trick Pony - Connecteur de données entre Démarches Simplifiées et Grist
mission: Simplifier l’extraction, l’analyse et la diffusion des données issues des démarches simplifiées vers Grist pour les agents publics
incubator: agriculture
sponsors:
  - /organisations/agriculture
  - /organisations/anct
  - /organisations/dgfip
phases:
  - name: investigation
    start: 2024-10-01
  - name: construction
    start: 2025-11-10
events:
  - name: product_launch
    date: 2025-11-28
link: ''
---
## Contexte

Les outils métiers utilisés dans les ministères sont souvent anciens, rigides et peu interopérables.
Les agents publics créent de plus en plus de démarches sur **Démarches Simplifiées** mais les données collectées sont difficiles à exploiter sans appui technique.
Résultat : l’analyse et le suivi des politiques publiques restent laborieux, reposant sur des exports manuels et des retraitements fastidieux.

## Problème

Aujourd’hui, pour exploiter les données issues de **Démarches Simplifiées**, les agents doivent :

- réaliser des **exports manuels** longs et sources d’erreurs ;
- **croiser et vérifier** des données dans des tableurs complexes ;
- dépendre d’autres équipes (data, SI, support) pour obtenir des analyses fiables.
- avoir des outils hétérogènes qui ne sont pas partageables entre agents

Ces contraintes limitent la réactivité des services publics et rendent difficile la production d’indicateurs de pilotage ou de suivi.

L’automatisation de la collecte et du traitement des données permettrait de gagner du temps, de réduire les erreurs et d’améliorer la qualité des décisions

## Solution

**One Trick Pony** est un connecteur de données entre **Démarches Simplifiées** et **Grist**.

Il permet de synchroniser automatiquement les données collectées dans les démarches vers des tableaux de bord dynamiques et personnalisables.

Les agents peuvent ainsi visualiser, croiser et partager leurs données sans compétences techniques particulières.

Les principaux bénéficiaires :

- les **agents administrateurs** qui conçoivent et pilotent les démarches ;
- Les **agents instructeurs**, qui gagnent en visibilité sur l’avancement des dossiers et peuvent mieux en rendre compte.
- Les **usagers**, qui profitent d’un suivi simplifié de leur dossier et de formulaires préremplis grâce aux données déjà collectées dans Grist.

## Objectifs à 6 mois

**Objectif d’usage :**

➡️ 50 démarches connectées

➡️ au moins 20 services ayant automatisé un export de données DS vers Grist

**Objectif d’impact :**

➡️ réduction de 80 % du temps nécessaire pour produire un tableau de suivi

➡️ réduction des échanges de courriels entre les services instructeurs et les usagers, ainsi que du partage de pièces jointes entre instructeurs et partenaires du projet.

➡️ zéro recours à des exports manuels pour les démarches pilotes

