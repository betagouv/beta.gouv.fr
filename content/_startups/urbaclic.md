---
title: Urbaclic
mission: Accéder aux règles d'urbanisme en quelques clics
sponsors:
  - /organisations/dinum
incubator: dinum
events:
  - name: end
    date: 2017-12-31
phases:
  - name: investigation
    start: 2016-03-01
  - name: construction
    start: 2016-03-01
  - name: alumni
    start: 2017-12-31
link: http://www.opendatalab.fr/urbaclic
repository: https://github.com/betagouv/urbaclic
stats: false
contact: fmoguen@openig.org
usertypes:
  - particulier
  - collectivite-territoriale
---
## Abandon

Faute de financement pérenne, le développement du produit est suspendu en tant que Startup d'État.
Mais l'aventure se poursuit au sein du [Projet d'Investissement d'Avenir DataClic](https://www.etalab.gouv.fr/un-second-appel-a-projets-pour-le-developpement-de-lopen-data-au-sein-des-territoires).

## Problème

Pour délivrer les permis de construire, les collectivités doivent consulter de nombreux documents produits par différentes administrations.

Il s'agit en particulier :

- du [plan local d'urbanisme](https://fr.wikipedia.org/wiki/Plan_local_d%27urbanisme) ;
- des [servitudes d'utilité publique](https://fr.wikipedia.org/wiki/Servitude_d%27utilit%C3%A9_publique) ;
- du [cadastre](https://fr.wikipedia.org/wiki/Cadastre) ;
- les cartes des zones à risque.

L'obtention, la consultation et l'analyse de ces informations est souvent complexe et chronophage. Il est d'ailleurs très difficile de consolider les différentes données et de les maintenir à jour.

L'existence d'un outil numérique présentant les données disponibles permettrait de simplifier grandement le travail des agents, et de fournir de l'information en amont aux usagers.

## Solution envisagée

L'utilisateur commence par saisir une adresse puis ajuste la localisation de son projet à l'aide d'une carte.
Les règles d'urbanisme ainsi que toute information complémentaire pertinente lui sont alors présentées de manière synthétique.

## Collecte des données et API

Selon le type de données et le niveau d'équipement de l'acteur qui les produit, la collecte sera réalisée :

- manuellement auprès des agents des collectivités et des services de l'État ;
- via la plateforme régionale [PICTO Occitanie](http://www.picto-occitanie.fr/) ;
- via la plateforme nationale [GeoIDE](http://catalogue.geo-ide.developpement-durable.gouv.fr/) ;
- ou via le [GéoPortail de l'Urbanisme](https://www.geoportail-urbanisme.gouv.fr/).

L'appui de la Préfecture de Région est essentiel durant cette phase, c'est pourquoi les efforts seront concentrés sur la région Occitanie.

L'outil prendra aussi appui sur :

- la [Base Adresse Nationale](https://beta.gouv.fr/startups/ban.html) ;
- le [cadastre](https://cadastre.data.gouv.fr) ;
- l'[API Géo](https://beta.gouv.fr/startups/api-geo.html) ;
- la plateforme [geo.data.gouv.fr](https://beta.gouv.fr/startups/geo.data.gouv.fr.html)

La construction d'**Urbaclic** permettra de consolider l'[API Géo](https://beta.gouv.fr/startups/api-geo.html), en l'enrichissant notamment sur les thématiques **Risques** et **Urbanisme**.

## Déploiement

L'équipe du programme OpenData Lab de la Préfecture de Région va parcourir le territoire régional au contact des collectivités et des usagers. Elle proposera des stratégies d'intégration et récoltera des retours utilisateurs précieux.

Fort de cette première phase expérimentale, l'outil sera par la suite déployé au niveau national.
