---
title: SPPNaut
mission: >-
  Faciliter l'utilisation des publications nautiques en numérisant les données
  qu'elles contiennent
sponsors:
  - /organisations/dinum
  - /organisations/shom
incubator: dinum
phases:
  - name: investigation
    start: 2021-10-07
  - name: construction
    start: 2022-01-17
link: https://sppnaut.beta.gouv.fr/
stats: false
repository: https://github.com/betagouv/SPPNautInterface/
contact: gael.roue@shom.fr
techno:
  - Python
  - PostgreSQL
  - PostGIS
usertypes:
  - entreprise
  - etat
pitch: >-
  Faciliter l'utilisation des publications nautiques en numérisant les données
  qu'elles contiennent
---

## Le contexte

Le Shom, service hydrographique français, assure la sécurité des navigateurs et de la navigation par la diffusion de produits nautiques. Parmi ceux-ci, on retrouve les Publications Nautiques, comprenant des informations nautiques qui complètent la carte marine.

Actuellement, ce riche patrimoine de données est diffusé uniquement par le biais d'ouvrages pdf. Il est stocké dans un format textuel qui rend difficile sa réutilisation dans de nouveaux services répondant aux besoins des utilisateurs.

Si aujourd'hui, la chaîne de production de ces publication permettent au Shom d'assurer ses obligations dans le cadre de la convention SOLAS, elles répondent difficilement aux attentes des utilisateurs potentiels de la donnée, et aux futures évolutions de la e-navigation.

## La solution numérique envisagée

Pour rendre les données plus accessibles aux usagers, mais aussi aux agents qui l'entretiennent, on va extraire les données présentes aujourd'hui dans les ouvrages nautiques, les enrichir avec des méta-données géographiques, et les re-structurer de manière à faciliter de nouveaux usages à court et long terme.

## La stratégie de mise sur le marché

Notre stratégie consiste à se focaliser sur certains thèmes par le biais de flux géographiques intégrés sur le portail du Shom, data.Shom.fr, plus spécifiquement les données portuaires, et les illustrations nautiques.

Le premier pas consistera simultanément à :
- Construire pour les agents du Shom les outils qui permettront d'alimenter et d'entrenir les données ;
- Créer une interface de consultation en collaboration avec les usagers ;
- Alimenter les ouvrages existants en réintégrant les données structurées.

Le deuxième pas consistera à exploiter la richesse de donnée que l'on aura rendu disponible en créant un nouveau produit dont on pourra rapidement mesurer l'usage, comme un extrait personnalisé des ouvrages, un ouvrage intéractif, ou un système nautique intéractif.
