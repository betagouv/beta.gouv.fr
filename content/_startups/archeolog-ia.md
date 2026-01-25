---
analyse_risques: false
mon_service_securise: false
contact: jonhattan.vidal@culture.gouv.fr
thematiques:
  - Patrimoine
  - Outil technique
  - Territoires
usertypes:
  - etat
  - collectivite-territoriale
  - association
techno:
  - python
title: ArchéologIA
mission: 'Assister la détection des sites archéologiques sur imagerie aérienne par intelligence artificielle. '
incubator: culture
sponsors:
  - /organisations/dgpat
phases:
  - name: investigation
    start: 2024-12-13
  - name: construction
    start: 2025-04-28
events:
  - name: product_launch
    date: 2025-04-28
repository: https://github.com/betagouv/archeologia-pipeline
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques/p/4#a1.s29.r23.c2
link: ''
---

## Contexte

500 000, c’est le nombre de sites archéologiques enregistrés dans la carte archéologique nationale, la base de données spatiale du ministère de la Culture. 

Gisements préhistoriques, villages néolithiques, camps de l’âge du Bronze, nécropoles de l’âge du Fer, sanctuaires antiques, fortifications médiévales, sites d’extraction, zones de conflits, riche est la diversité archéologique qui illustre près d’un million d’années d’occupation de notre territoire. Depuis des décennies, les archéologues du ministère de la Culture enrichissent un inventaire fondamental qui permet de cartographier ce patrimoine. L’archéologie aérienne y contribue grâce à des prises de vues et des relevés laser des microreliefs. Elle révèle ainsi de nombreux sites inédits.

Tout récemment, la mise à disposition massive de nouvelles données comme le LiDAR HD de l’institut géographique national (IGN) est de nature à renouveler considérablement notre connaissance.

## Problème

Les couvertures aériennes nationales constituent une opportunité à saisir pour identifier des milliers de sites inédits à l’échelle nationale, mais c’est un aspect qui n’est pas humainement intégrable actuellement en raison :
* **d’une masse de données** ingérable avec les moyens actuels (il faut 1 ETP pendant 1an pour réaliser un repérage simple sur 1 département);
* **d’une approche visuelle** qui en plus d’être chronophage n’est pas systématique ;
* **du besoin de dégager du temps** pour effectuer les indispensables vérifications de terrain ;
* **du décalage de pratique** qui existe entre l’évolution technologique des données et la pratique quotidienne

## Solution

**ArchéologIA**, c’est un outil de détection automatique de sites archéologiques potentiels, qui fonctionne grâce à de l’intelligence artificielle appliquée à des images spatiales (traitements de données LiDAR pour l’instant). Il automatise la préparation des données, puis détecte des anomalies de relief significatives qui correspondent à des indices archéologiques (tertre, bâtiment ruiné, creusement, etc.). Ces détections nous permettent de repérer des sites archéologiques inédits, en particulier sous couvert forestier.

**ArchéologIA permet aux archéologues** de :
* **Faciliter l’utilisation** et l’exploitation de données nouvelles
* **Augmenter sensiblement le nombre** de sites archéologiques 
* **Appréhender des zones très mal connues** et identifier des zones préservées
* **Mieux connaitre** la morphologie, la localisation et l’étendue des sites identifiés
* **Cibler et prioriser** les vérifications et expertises de terrain
* **Orienter des dynamiques de recherche** scientifique pour investiguer des sujets nouveaux et animer une communauté de chercheurs
* **Affiner la sensibilité archéologique** par région pour adapter la politique d’archéologie préventive

