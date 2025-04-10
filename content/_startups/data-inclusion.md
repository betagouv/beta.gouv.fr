---
title: data·inclusion
mission: Recenser toute l'offre d'insertion sociale et professionnelle de France
sponsors:
  - /organisations/francetravail
  - /organisations/mtei
incubator: gip-inclusion
link: https://data.inclusion.gouv.fr/
repository: https://github.com/gip-inclusion/data-inclusion
contact: data-inclusion@inclusion.gouv.fr
stats: true
stats_url: https://data.inclusion.gouv.fr/nos-indicateurs/
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

Si un grand nombre d’outils existent, dont plusieurs financés par la dépense publique, portails locaux ou nationaux, annuaires d’associations, éditeurs de logiciels, **les données elles-mêmes circulent mal d’un outil à l’autre et un grand nombre d’acteurs sont contraints de “réinventer la roue” à leur échelle ou de voir leurs bases de données devenir peu à peu obsolètes.**

*Le Ministère du Travail, de l'Emploi et de l'Insertion a lancé la création d’un patrimoine commun de l’offre d’insertion en open data où chaque acteur pourra partager son offre de services en matière d’insertion, et récupérer les données des autres.*

## Notre service

data·inclusion est le commun numérique de l'offre d'insertion. Nous recensons, grâce à nos 16 producteurs de données, plus de 100.000 structures proposant près de 150.000 services d'insertion sur des thématiques variées (mobilité, garde d'enfant, numérique, etc).

### **Les objectifs de data·inclusion**

* Un professionnel de l'insertion ou un usager doit accéder facilement à l’ensemble de l'offre sur son territoire, quel que soit l’outil numérique utilisé
* Une structure ne doit pas saisir ou partager plus d'une fois ses données - c’est la condition pour qu’elle joue le jeu du patrimoine commun et accepte de mettre à jour les données clés qui la concerne.

### **Qui sont les utilisateurs de data·inclusion ?**

D’une part les **producteurs de données** représentant l'ensemble des sites dédiés à la saisie de l'offre d'insertion : site local porté par un département, outil national porté par une administration, producteurs de catalogues (Action logement, AFPA, etc).

D'autre part les **consommateurs de données**  qui accédent aux données data·inclusion que l'on distingue en deux catégories : 
- "Mobilisation" : les données sont affichées dans des annuaires d'insertion, des outils de mobilisation ou de suivi de parcours à destination des professionnels de l'insertion ou directement des usagers ;
- "Pilotage" : les données sont utilisées à des fins d'analyse budgétaire ou d'études sur les territoires.

## Comment contribuer au patrimoine commun ?

### Mettre vos données à disposition sur data·inclusion
Les modalités diffèrent selon vos compétences techniques et le volume de données à intégrer. Rendez-vous sur [notre page dédiée](https://data.inclusion.gouv.fr/partager-vos-donnees/).

### Consommer et réutiliser les données de data·inclusion
Deux choix s'offrent à vous : consommer via notre API ou télécharger nos fichiers de données en accès ouvert. Suivez les étapes sur [notre page dédiée](https://data.inclusion.gouv.fr/acceder-aux-donnees/).
