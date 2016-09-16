---
title: inspire.data.gouv.fr
mission: Libérer les données géographiques pour intensifier leurs usages.
link: https://inspire.data.gouv.fr
repository: https://github.com/sgmap-inspire/
status: consolidation
contact: jerome.desboeufs@data.gouv.fr
start: 2015-01-01
owner: SGMAP
---

La passerelle Inspire est un outil coproduit par l'[Incubateur de Services Numériques](https://beta.gouv.fr) du [Secrétariat Général pour la Modernisation de l'Action Publique](http://modernisation.gouv.fr) et la [mission Etalab](http://www.etalab.gouv.fr), avec le soutien du groupe de travail intéropérabilité de l'[AFIGéo](http://www.afigeo.asso.fr/).

Notre ambition est d'apporter de nouveaux outils et bonnes pratiques permettant de répondre de manière plus pragmatique à la [directive Inspire](http://inspire.ec.europa.eu/), et d'en tirer des usages. Cela se concrétise par la mise en place d'une passerelle entre les standards utilisés dans le secteur de la donnée géographique (OGC CSW, ISO19139…) et les standards du web utilisé dans les modèles du portail [data.gouv.fr](https://www.data.gouv.fr) (GeoJSON, CSV, SHP…).

## Qu'est-ce que la passerelle Inspire ?

Il s'agit d'un ensemble d'outils permettant de publier des jeux de données géographiques _"Inspire"_  sur la plateforme des données publiques françaises, [data.gouv.fr](https://www.data.gouv.fr).

Elle répond à plusieurs objectifs :

* Mieux valoriser l’information géographique via l’Open Data.
* S’appuyer sur les infrastructures existantes et sur Inspire.
* Disposer d’un outil performant de suivi des données.

Elle s'appuie sur plusieurs standards devant être mis en oeuvre dans le cadre de la directive Inspire ainsi que sur quelques formats additionnels :

* Métadonnées : CSW 2.0.2 / ISO-19139, XML / ISO-19139, XML / Dublin-Core
* Données vectorielles : WFS (toutes versions), Shapefile, MapInfo MIF/MID, MapInfo TAB, GML
* Données de type _raster_ : ECW, GeoTIFF

D'un point de vue opérationnel, la passerelle Inspire moissonne un ensemble de catalogues CSW considérés comme pertinents et _analyse_ les métadonnées collectées. L'analyse porte essentiellement sur la __détection des conditions d'utilisation__ et de réutilisation des données et sur la __détection de la disponibilité effective__ des données.

Lorsqu'un jeu de données est compatible avec les critères de la plateforme [data.gouv.fr](https://www.data.gouv.fr), il peut être publié par l'un des organismes point de contact, à l'aide d'un outil dédié qui réalise les opérations suivantes :

* Création et mise à jour de la fiche descriptive
* Création à la volée de versions GeoJSON, CSV et Shapefile du jeu de données, avec reprojection le cas échéant
* Collecte d'informations sur l'utilisation des données
