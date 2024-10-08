---
link: https://www.dataregion.fr/
mission: Partager, visualiser et réutiliser la donnée financière de l’État et ses opérateurs pour mieux piloter les politiques publiques
repository: https://github.com/dataregion
incubator: dinum
title: Data-État
contact: julien.kounowski@bretagne.gouv.fr
accessibility_status: partiellement conforme
sponsors:
  - /organisations/interieur
  - /organisations/mefsin
phases:
  - name: investigation
    start: 2022-11-01
  - name: construction
    start: 2023-03-01
  - name: acceleration
    start: 2024-05-01
thematiques:
  - Open-Data
  - Administratif
  - Outil technique
  - Territoires
  - Démocratie
usertypes:
  - etat
  - collectivite-territoriale
techno:
  - angular
  - git
  - grist
  - ApacheSuperset
  - Mviewer
  - sql
  - redis
  - celery
  - rabbitmq
  - keycloak
  - docker
  - python
  - PostgreSQL
analyse_risques: false
mon_service_securise: true
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view#
stats_url: https://superset.databretagne.fr/superset/dashboard/9/?standalone=3&native_filters_key=T0NMSR7Ujfy_ztcp9MgFYpk4KULKnvyg98bd3rXBPjDtMELnkBWvzE4z7Hgn2cjR
dashlord_url: https://dashlord.incubateur.net/url/budget.databretagne.fr/
---
## Contexte

Lancé suite au plan de Relance avec l'enjeu de ne plus avoir à utiliser AirTable et collecter à un prix très coûteux des formats de données financières de l'Etat et de ses opérateurs parfois non fiables et souvent non interopérables... 

## Problème

Comment rendre les données comptables de l'Etat (exemple CHORUS) et de ses opérateurs intelligibles et réutilisables pour les agents métiers et leur donner enfin une vision complète des financements publics sur les territoires (jusqu'à un niveau Quartier Politique de la Ville (QPV) pour mieux piloter les politiques publiques en toute interministérialité ?

## Solution

Data-État est la création par l'administration territoriale de l'Etat d'une nouvelle infrastructure de partage et de réutilisation de la donnée de l'Etat et ses opérateurs. Via différentes solutions : tableaux dynamiques, graphiques/ data viz, cartographique... via des outils libres, souverains et no code, mettre à la main de tous les agents métiers la possibilité d'accéder aux données et de les réutiliser pour améliorer l'action publique.

*- DATA QPV fait partie des solutions propulsées par DATA-ETAT. Lauréat du TechMiup 2024, cette solution vise à l'accès aux données les plus fines dont financières de l’État et ses opérateur concernant les QPV en France*

## Stratégie

Déploiement en Bretagne (SGAR avec l'appui technique de la DREAL sur l'ATE + éducation nationale et Justice) puis déploiement aux opérateurs publics et autres SGARs de France pour nationalisation et pérennisation de la solution avec l'appui d'un financement national DINUM. 
Le développement du projet et des solutions (dont DATA QPV) est assuré via le GIP SIB dont l’État est membre.