---
title: SPPNaut
mission: Faciliter l'utilisation des publications nautiques en numérisant les données qu'elles contiennent
sponsors:
  - /organisations/shom
  - /organisations/dinum
incubator: dinum
phases:
  - name: investigation
    start: 2021-10-07
  - name: construction
    start: 2022-01-17
  - name: alumni
    start: 2023-06-30
link: https://sppnaut.beta.gouv.fr/
stats: false
repository: https://github.com/betagouv/SPPNautCarting
contact: gael.roue@shom.fr
techno:
  - Python
  - PostgreSQL
  - PostGIS
usertypes:
  - entreprise
  - etat
---
## Le contexte

Le Shom, service hydrographique français, assure la sécurité des navigateurs et de la navigation par la diffusion de produits nautiques. Parmi ceux-ci, on retrouve les Publications Nautiques, comprenant des informations nautiques qui complètent la carte marine.

Actuellement, ce riche patrimoine de données est diffusé uniquement par le biais d'ouvrages pdf. Il est stocké dans un format textuel qui rend difficile sa réutilisation dans de nouveaux services répondant aux besoins des utilisateurs.

Si aujourd'hui, la chaîne de production de ces publication permettent au Shom d'assurer ses obligations dans le cadre de la convention SOLAS, elles répondent difficilement aux attentes des utilisateurs potentiels de la donnée, et aux futures évolutions de la e-navigation.


## Nos apprentissages :

Pour rendre les données plus accessibles aux usagers, mais aussi aux agents qui l'entretiennent, il s'agissait d'extraire les données présentes dans les ouvrages nautiques, les enrichir avec des méta-données géographiques, et les re-structurer de manière à faciliter de nouveaux usages à court et long terme.

Notre stratégie a consisté à :

- profiter d'un enjeu d'obsolescence d'une partie de la chaîne de production existante pour s'immerger dans les contraintes techniques et les enjeux organisationnels du systèmes d'information à intégrer ;
- représenter sur une carte des informations présentes dans les ouvrages (concernant une région spécifique), et intégrer les retours des navigants professionnels ;
- mettre à disposition des agents du Shom un outil de structuration des données en conformité avec les normes hydrographiques internationales en cours d'élaboration (dites "S-100"), en se focalisant sur une sous-partie de la norme.

Ce que nous avons réalisé :

- nous avons finalisé un système de publication des ouvrages nautiques plus fiable, pérenne et souple, utilisé actuellement en production par le Shom (c.f. [sources](https://github.com/betagouv/SPPNautSPO));
- nous avons mis au point un outil de visualisation cartographique des données présentes dans les ouvrages, ainsi qu'un outil de structuration des données conformes aux normes S-100 ;
- nous avons déclenché une réflexion stratégique du Shom sur les futurs produits qui pourraient remplacer les ouvrages nautiques.

Ce que nous avons appris :
- l'offre mondiale proposée par un service hydrographique concurrent au Shom est incontournable, et rend difficile la préfiguration d'usage direct des données structurées auprès des utilisateurs ;
- grâce à l'élaboration et la mise à disposition de l'outil de structuration des ouvrages nautiques à partir des normes internationales (S-100), on a pu mettre en évidence que :
  - la norme est sujette à interprétation sur plusieurs points, ce qui ouvre le risque d’un remplissage incompatible avec celui d’autres pays ;
  - le contenu des ouvrages nautiques n’est pas transposable facilement en norme S100 et requiert de très nombreuses adaptations nécessitant une expertise métier pointue et une immersion dans la norme.

## Les prochaines hypothèses à explorer

L'équipe SPPNaut a mis fin à son activité de développement en juin 2023.

Elle a émis des recommandation pour le Shom, dans la perspective d'une reprise des travaux par le Shom :

- continuer le travail de confrontation des normes S-100 à la réalité des ouvrages nautiques permettra d'alimenter la réflexion des experts métiers du Shom, qui a leur tour pourront participer activement à l'élaboration des normes, et rendre celles-ci plus pertinentes, mais aussi plus aptes à valoriser les données du Shom ;
- les outils élaborés pendant ce travail permettront au Shom de publier ses données de manière structurée en avance de phase, et ainsi d'être à la proue des services hydrographiques internationaux ;
- exploiter les possibilités ouvertes par ce format structuré permettra au Shom de proposer un produit dont on pourra rapidement mesurer l'usage, comme par exemple un extrait personnalisé des ouvrages, un ouvrage interactif, ou un système nautique interactif.

Pour plus de détail, voir les [supports de présentation du retour d'expérience au Shom](https://github.com/betagouv/SPPNautCarting/blob/main/docs/Retex_complet_findemission_20230630.pdf).
