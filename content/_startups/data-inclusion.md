---
title: data·inclusion
mission: Créer un référentiel commun de toutes les données de l’offre d’insertion des territoires
sponsors:
  - /organisations/francetravail
  - /organisations/mtei
incubator: gip-inclusion
link: https://api.data.inclusion.gouv.fr/api/v0/docs#/
repository: https://github.com/gip-inclusion/data-inclusion
contact: data-inclusion@inclusion.gouv.fr
stats: true
stats_url: https://metabase.data.inclusion.gouv.fr/public/dashboard/77beb1ed-42c3-4f2a-bdee-5e8378699485
phases:
  - name: investigation
    start: 2022-03-17
  - name: construction
    start: 2022-06-30
  - name: acceleration
    start: 2024-11-18
usertypes:
  - collectivite-territoriale
  - entreprise
  - association
  - etat
accessibility_status: partiellement conforme
thematiques:
  - Territoires
  - Open-Data
  - Inclusion
techno:
  - python
  - airflow
  - dbt
budget_url: https://docs.google.com/document/d/1XAyC_ghQs9RtUtrfMRGHBvzqhjCWfqDbshT8b__XU9Q/edit?tab=t.0
mon_service_securise: true
dashlord_url: https://dashlord.incubateur.net/url/api-data-inclusion-beta-gouv-fr/
---
## Le problème

Dans le contexte du service public de l’insertion et de l’emploi, de la mise en oeuvre du SPIE, et de l'expérimentation de France Travail, un sujet revient de manière prégnante : l’accès à des données fiables sur les dispositifs et l’offre d’insertion au niveau national et sur chaque territoire.

Si un grand nombre d’outils existent, dont plusieurs financés par la dépense publique - portails locaux ou nationaux, annuaires d’associations, éditeurs de logiciels, etc. -, **les données elles-mêmes circulent mal d’un outil à l’autre et un grand nombre d’acteurs sont contraints de “réinventer la roue” à leur échelle ou de voir leurs bases de données devenir peu à peu obsolètes.**

*Le Ministère du Travail, de l'Emploi et de l'Insertion a lancé la création d’un patrimoine commun de l’offre d’insertion en open data où chaque acteur pourra partager son offre de services en matière d’insertion, et récupérer les données des autres.*

## Notre service

data·inclusion est une **démarche collective** visant à créer **un référentiel commun** de toutes les données de l’offre d’insertion des territoires afin de permettre à tous les services numériques recensant et mettant en visibilité leur offre d’être **interopérables** et de **mutualiser les efforts** de recensement et de mise à jour.

### **Les objectifs de data·inclusion :**

* Un accompagnateur ou un usager doit accéder facilement à l’ensemble de l'offre connue sur un territoire, quel que soit l’outil en ligne utilisé qui variera nécessairement selon le contexte et ses besoins
* Une structure ne doit pas saisir ou partager plus d'une fois ses données - c’est la condition pour qu’elle joue le jeu du patrimoine commun et accepte de mettre à jour les données clés qui la concerne.

### **Qui est concerné par data·inclusion ?**

D’une part les producteurs de données. Représentent l'ensemble des sites dédiés au recensement et à la mise à jour de l'offre d'insertion. Site local porté par un département, outil national porté par une administration, producteurs de catalogues (Action logement, AFPA..)

D'autre part les consommateurs de données. Toute personne qui souhaite accéder à l'ensemble des données afin de les afficher sur un service numérique ou dans un logiel interne. Des acteurs publics qui souhaitent analyser les données, des têtes de réseaux qui veulent accéder à l'offre des membres de leur organisation, des personnes en charge du développement de logiciels, de sites internet, de cartographies..

Mais aussi, les offreurs de services, porteurs de solution qui ont désormais un point d’accès unique pour partager leur offre de services et gagner en visibilité auprès des différents publics qu’ils accompagnent.

Et enfin, les accompagnateurs qui ont des trésors de ressources et bases de données sur les solutions à leur territoire. S’ils contribuent au patrimoine commun, la promesse est de pouvoir utiliser des outils à jour et de gagner du temps en mutualisant nos forces pour le travail fastidieux de collecte et mise à jour des données.

## Comment contribuer au patrimoine commun ?

### Mettre vos données à disposition sur data·inclusion

Les modalités de mise à disposition de vos données pour intégration dans data·inclusion peuvent être très différentes selon l'outil que vous utilisez et la structure de vos données.

Nous vous recommandons de nous contacter par email : [data-inclusion@inclusion.gouv.fr](mailto:data-inclusion@inclusion.gouv.fr).

### Consommer et réutiliser les données de data·inclusion

Les données de data·inclusion sont mises à disposition en [téléchargement libre](https://www.data.gouv.fr/fr/datasets/6233723c2c1e4a54af2f6b2d/) selon les principes de l'Open Data pour intégration dans votre outil (formats de données Excel, CSV et JSON). Nous mettons également à disposition [une API](https://data.inclusion.gouv.fr/acceder-aux-donnees/) pour la récupération de données en temps réel, à intégrer par vos équipes informatiques ou un prestataire.\
N'hésitez pas à nous contacter pour que nous discutions de votre cas d'usage des données data·inclusion :  [data-inclusion@inclusion.gouv.fr](mailto:data-inclusion@inclusion.gouv.fr)
