---
title: L’Annuaire des Entreprises
mission: Retrouver toutes les informations concernant les entreprises françaises
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    start: 2020-09-01
  - name: construction
    start: 2021-04-01
  - name: acceleration
    start: 2024-01-01
usertypes:
  - collectivite-territoriale
  - association
  - particulier
  - entreprise
  - etat
incubator: dinum_produits_interministeriels
link: https://annuaire-entreprises.data.gouv.fr
repository: https://github.com/etalab/annuaire-entreprises.data.gouv.fr
stats: true
stats_url: https://annuaire-entreprises.data.gouv.fr/stats
budget_url: https://annuaire-entreprises.data.gouv.fr/budget
dashlord_url: https://dashlord.incubateur.net/url/annuaire-entreprises-data-gouv-fr/
contact: annuaire-entreprises@data.gouv.fr
thematiques:
  - Open-Data
  - Entreprises
  - Collectivités
  - Administratif
mon_service_securise: true
techno:
  - next.js
  - node
  - elasticSearch
  - fastAPI
  - nginx
  - OVH
---
## Le problème :

Au sein de l’administration, la donnée des entreprises est une ressource dispersée. De nombreuses directions, agences ou instituts sont responsables d'une fraction de cette donnée et en assurent la publication.

Résultat, les citoyens, entrepreneurs et agents publics jonglent entre :

-   les acteurs privés qui centralisent les données et qui en facturent une partie sans pouvoir en garantir l’exactitude ;
-   les acteurs publics officiels, chacun garant d’une ou plusieurs bases de données, avec ses propres modalités d’accès (sites, jeux de données, API).

Cette complexité entraine une perte de temps, qui pénalise plus particulièrement les entreprises dans leurs démarches et rend l’administration moins efficace dans ses missions en rapport avec les entreprises.

## La solution :

[L’Annuaire des Entreprises](https://annuaire-entreprises.data.gouv.fr) est un site internet qui propose :

- un moteur de recherche public qui permet de retrouver facilement n’importe quelle entreprise, association ou administration dotée d'un numéro siren et de consulter ses informations ;
- une API publique, qui permet à tout développeur(euse) d'accéder aux informations publiques sur une organisation dotée d’un siren. Cette API est notamment utilisée par des startups d’État pour simplifier des démarches en ligne (Code du Travail Numérique, Mon Entreprise, GIP de l'Inclusion, Conseillers Entreprises, Portail RSE, Mon Service Sécurise) ;
- un [compte dédié pour les agents publics](https://annuaire-entreprises.data.gouv.fr/lp/agent-public), grâce auquel ceux-ci peuvent bénéficier d’un accès à des informations plus complètes, selon leur droit d’en connaître.

## L’impact :

Consultez notre [page de statistiques](https://annuaire-entreprises.data.gouv.fr/stats).
