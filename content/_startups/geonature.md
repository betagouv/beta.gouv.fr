---
contact: jerome.bailly-maitre@developpement-durable.gouv.fr
repository: https://github.com/PnX-SI/GeoNature
link: https://geonature.fr/
thematiques:
  - Biodiversité
  - Écologie
usertypes:
  - association
  - parc naturel
techno:
  - flask
  - angular
  - bootstrap
  - sql
  - api
  - leaflet
  - html
title: Geonature
mission: Centraliser la collecte, le partage et la valorisation des données faune et flore
incubator: mtes
sponsors:
  - /organisations/deb
phases:
  - name: investigation
    start: 2026-03-05
events:
  - name: product_launch
    date: 2026-03-05
---
## Contexte

La biodiversité est aujourd’hui menacée par la fragmentation des habitats, le changement climatique et la pression des activités humaines. Pour y faire face, les acteurs publics et associés doivent mieux connaître, partager et valoriser les données naturalistes afin d’éclairer les décisions et les actions de préservation. En France, l’article L411-1 A du code de l’environnement renforce cette nécessité en imposant la transmission des données aux systèmes d’information dédiés. Pourtant, le manque d’outils mutualisés et interopérables limite encore la capacité à agir efficacement, malgré l’urgence.

## Problème

Chaque année, des milliers d’acteurs de la biodiversité (parcs nationaux, associations, collectivités, scientifiques) peinent à centraliser, partager et valoriser leurs données faune et flore. Les outils existants sont souvent cloisonnés, coûteux ou peu interopérables, ce qui entraîne :

Une perte de temps dans la saisie, la gestion et l’échange des données,
Un gaspillage de ressources pour développer des solutions locales non mutualisées,
Un manque de cohérence dans les référentiels taxonomiques et les protocoles de collecte,
Une diffusion limitée des données vers le grand public et les décideurs, freinant la protection de la biodiversité.

## Solution

GeoNature est un système d’information open source conçu pour répondre à ces enjeux. Il permet à toute structure de déployer une plateforme complète pour :

Gérer les référentiels taxonomiques et les utilisateurs (via TaxHub et UsersHub),
Saisir des données sur le terrain (web et mobile, avec Occtax-mobile et GeoNature-mobile),
Intégrer des données de partenaires et les exporter selon les standards attendus,
Synthétiser les données sous forme de Données Essentielles pour l’Évaluation (DEE),
Diffuser les données via un portail grand public (GeoNature-atlas) ou une collecte citoyenne (GeoNature-citizen).

### Geonature est :
- Open source : libre, gratuit et adaptable à tous les besoins,
- Modulaire : chaque outil (TaxHub, UsersHub, GeoNature-atlas, etc.) peut être utilisé indépendamment,
- Collaboratif : développé par une communauté active de parcs nationaux et d’acteurs de la biodiversité,
- Interopérable : compatible avec les standards nationaux (Taxref, SINP, etc.) et les formats d’échange (CSV, GeoJSON, etc.).


## Objectifs à 3 mois

Pour pérenniser GeoNature, l'investigation actuelle vise à explorer 3 grands sujets :
- **Gouvernance** : Quel modèle de décision multi-acteurs intégrant les contraintes RH (plafonds d'emplois), sans ajouter de lourdeur administrative ?
- **Vision produit** : Comment inscrire Géonature dans une stratégie produit globale, créer des ponts éventuels avec d'autres produits numériques et assurer la cohérence des développements au sein de la communauté ?
- **Impact** : Comment structurer des métriques d'usage pour guider les arbitrages budgétaires et techniques.


## Pour aller plus loin

[Demo du produit](https://demo.geonature.fr/)

[Documentation technique](https://docs.geonature.fr/)
