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
dashlord_url: https://dashlord.incubateur.net/url/budget-databretagne-fr/
events:
  - name: other
    date: 2024-05-28
    comment: Homologation ANSII pour 2 ans
---
## Contexte

Lancé suite au plan de Relance avec l'enjeu de ne plus avoir à utiliser AirTable et collecter à un prix très coûteux des formats de données financières de l'Etat et de ses opérateurs parfois non fiables et souvent non interopérables... 

## Problème

Comment rendre les données comptables de l'Etat (exemple CHORUS) et de ses opérateurs intelligibles et réutilisables pour les agents métiers et leur donner enfin une vision complète des financements publics sur les territoires (jusqu'à un niveau Quartier Politique de la Ville (QPV) pour mieux piloter les politiques publiques en toute interministérialité ?

## Solution

Data-État est la création par l'administration territoriale de l'Etat d'une nouvelle infrastructure de partage et de réutilisation de la donnée de l'Etat et ses opérateurs. 

L'équipe travaille pour un écosystème qui vise à :

### Un accès simplifié et interopérable des données financières de l’État

➡️ Data-État permet aux agents autorisés de consulter, l’ensemble des engagements financiers de l’État en région, avec une géolocalisation et un étiquetage par politique publique.

➡️ L’outil centralise les financements de l’État et des collectivités, et superpose les flux financiers pour une meilleure analyse territoriale (CHORUS, ADEME, ...).

✅ Gain de temps

### Une plateforme pensée pour répondre aux besoins concrets des agents publics

➡️ Grâce à des outils en no-code et low-code (data visualisation, cartographie, tableaux dynamiques,... ), Data-État démocratise l’accès aux données pour les agents n’ayant pas de compétences avancées en analyse de données.

➡️ L’interconnexion avec des services comme Démarches Simplifiées ou Data Subvention enrichit son efficacité et évite la multiplication des demandes à différents services.
✅Simplification

### Un projet tourné vers l’avenir et l’expansion nationale
➡️ En 2025, le projet vise une montée en charge vers d’autres régions et un lien intégré avec les instances nationales, pour une généralisation des bonnes pratiques en matière de pilotage des dépenses publiques.
✅ Reproductibilité


➡️ Data-État repose sur des logiciels libres et souverains, garantissant interopérabilité et autonomie.

## Mesure d’impact et autres indicateurs

L'équipe anticipe divers impacts :

 ✅ Impact économique  :

➡️ En facilitant l'accès aux données financières et en limitant la médiation, l’outil optimise les ressources humaines et accélère les prises de décision.

*90,91 % des utilisateurs sont satisfaits ou très satisfaits de leur expérience (1)
91 % recommanderait DATA-ETAT à un collègue (1)*

✅ Impact sur la qualité de vie et le service public :

➡️ Les agents gagnent un temps considérable dans la recherche et l’analyse des financements publics, améliorant ainsi le dialogue territorial.

*82 % des sondés estiment gagner du temps, 37 % gagner une journée ou plus de temps de travail (1)*

*(1) Enquête oct 2024 (11 répondants), une nouvelle enquête va être lancée en avril 2025.*

## Stratégie

✅ Reproductibilité et scalabilité :

➡️ Le modèle peut être étendu à d’autres régions et intégré au niveau national pour favoriser une approche uniforme du pilotage des politiques publiques.

Suite au déploiement en Bretagne (SGAR avec l'appui technique de la DREAL sur l'ATE + éducation nationale et Justice), l'équipe travaille au déploiement aux opérateurs publics et autres SGARs de France pour nationalisation et pérennisation de la solution avec l'appui d'un financement national DINUM. 