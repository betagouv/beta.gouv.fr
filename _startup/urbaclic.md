---
title: Urbaclic
mission: Accéder aux règles d'urbanisme en quelques clics
domain: urbaclic.beta.gouv.fr
repository: https://github.com/sgmap/urbaclic
status: construction
contact: contact@urbaclic.beta.gouv.fr
start: 2016-03-01
owner: SGAR Languedoc-Roussillon-Midi-Pyrénées, Étalab
screenshot: /img/startup/urbaclic.jpg
---

## Problème

Pour délivrer les permis de construire, les collectivités doivent consulter de nombreux documents produits par différentes administrations.

Il s'agit en particulier :

* du [plan local d'urbanisme](https://fr.wikipedia.org/wiki/Plan_local_d%27urbanisme) ;
* des [servitudes d'utilité publique](https://fr.wikipedia.org/wiki/Servitude_d%27utilit%C3%A9_publique) ;
* du [cadastre](https://fr.wikipedia.org/wiki/Cadastre) ;
* les cartes des zones à risque.

L'obtention, la consultation et l'analyse de ces informations est souvent complexe et chronophage. Il est d'ailleurs très difficile de consolider les différentes données et de les maintenir à jour.

L'existence d'un outil numérique présentant les données disponibles permettrait de simplifier grandement le travail des agents, et de fournir de l'information en amont aux usagers.

## Solution envisagée

L'utilisateur commence par saisir une adresse puis ajuste la localisation de son projet à l'aide d'une carte.
Les règles d'urbanisme ainsi que toute information complémentaire pertinente lui sont alors présentées de manière synthétique.

## Données et API

Cet outil prendrait appui sur :

* la [Base Adresse Nationale](http://adresse.data.gouv.fr) ;
* le cadastre DGFiP ;
* la [GéoAPI](https://api.gouv.fr/api/geoapi.html) ;
* les plateformes d'information géographique ;
* le [GéoPortail de l'Urbanisme](https://www.geoportail-urbanisme.gouv.fr/).

La construction d'__Urbaclic__ permettra de consolider la [GéoAPI](https://api.gouv.fr/api/geoapi.html), en l'enrichissant notamment sur les thématiques __Risques__ et __Urbanisme__.

## Contexte

Dans le cadre du programme [OpenData Lab](http://www.opendatalab.fr), un [Projet Investissements d'Avenir](http://www.gouvernement.fr/investissements-d-avenir-cgi) porté par la [Préfecture de Région Languedoc-Roussillon ­Midi­-Pyrénées](http://www.prefectures-regions.gouv.fr/languedoc-roussillon-midi-pyrenees), le SGAR avait organisé une journée de travail conjointe avec la [mission Etalab](http://www.etalab.gouv.fr/) sur les réutilisations des données publiques.


Le but était d'identifier un problème transversal à toutes les collectivités territoriales, pour lequel la solution pourrait reposer sur des données publiques.

L'urbanisme a été retenu comme le thème privilégié.
