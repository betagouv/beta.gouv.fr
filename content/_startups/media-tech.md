---
analyse_risques: false
mon_service_securise: false
contact: raphael.bevenot@numerique.gouv.fr
repository: https://github.com/etalab-ia/mediatech
link: https://huggingface.co/collections/AgentPublic/mediatech-68309e15729011f49ef505e8
thematiques:
  - Intelligence artificielle
  - Open-Data
usertypes:
  - etat
title: MediaTech
mission: MediaTech est une librairie de jeux de données publiques pré-traités et vectorisés, conçus pour être immédiatement exploitable dans des projets d’intelligence artificielle.
incubator: alliance
sponsors:
  - /organisations/dinum
phases:
  - name: construction
    start: 2025-09-03
events:
  - name: product_launch
    date: 2025-09-03
techno:
  - PostgreSQL
  - python
  - docker
  - airflow
---
## **Contexte**

L’administration française dispose d’une **richesse considérable de données publiques**, issues de multiples sources (Légifrance, CNIL, data.gouv.fr, etc.). Cependant, **exploiter ces données pour développer des solutions d’intelligence artificielle reste un défi majeur** : les données sont souvent dispersées, hétérogènes, non nettoyées et nécessitent un pré-traitement long et coûteux avant d’être utilisables par les équipes IA.

Dans un contexte où l’État cherche à **accélérer l’adoption de l’IA** dans ses administrations, il devient essentiel de fournir un accès simplifié à des jeux de données publics de qualité.

## **Problème**

Avant MediaTech, les équipes souhaitant développer une application basée sur des données publiques (moteur de recherche, chatbot, outil d’analyse, etc.) devaient :

- rechercher les jeux de données sur différentes plateformes,
- les télécharger et les nettoyer manuellement,
- les transformer en formats exploitables pour les modèles IA,
- et construire elles-mêmes la chaîne de vectorisation ou d’indexation.

Ce processus mobilise **des semaines de travail technique, crée des redondances entre administrations, et freine le passage à l’échelle des projets IA publics**.

En parallèle, **les jeux de données disponibles ne sont pas toujours compatibles avec les besoins des modèles modernes** (LLM, RAG, embeddings, etc.), ce qui limite leur réutilisation et leur valeur.

## **Solution**

**MediaTech** apporte une réponse directe à ces obstacles.

Il s’agit d’une **librairie de jeux de données publics pré-traités et vectorisés**, **prêts à être utilisés pour les projets d’intelligence artificielle de l’administration**.

Les données y sont :
- nettoyées, structurées et homogénéisées,
- vectorisées pour un usage immédiat dans des moteurs de recherche sémantiques ou des modèles de langage,
- hébergées sur des plateformes accessibles et souveraines, comme data.gouv.fr
 et Hugging Face.

L’ensemble du projet est **open source, disponible sur le GitHub d’Étalab, et ouvert à la contribution communautaire** (ajouts de jeux de données, signalement d’erreurs, suggestions).

## Où trouver ces données ?

Aujourd'hui, 9 jeux de données sont à disposition sur :

* **[Hugging Face](https://huggingface.co/collections/AgentPublic/mediatech-68309e15729011f49ef505e8)**, la première plateforme communautaire de l'intelligence artificielle dans le monde.

* **[data.gouv.fr](http://data.gouv.fr)**, la plateforme de diffusion de données publiques de l'État français.

## Objectif à 6 mois

Prochainement, l'objectif est que les jeux de données soient disponibles su&#x72;**&#x20;[Albert API](https://alliance.numerique.gouv.fr/produit/albert/)&#x20;**, l'outil développé par l'État français pour centraliser, sécuriser et simplifier l'usage de modèles d'IA générative de manière souveraine au sein de l'administration.


