---
analyse_risques: false
mon_service_securise: false
contact: anne.pichon@agriculture.gouv.fr
thematiques:
  - Agriculture
  - Territoires
title: Access-Sol
mission: Mettre à disposition des données de qualités des sols et identifier les cas d'usage
incubator: agriculture
sponsors:
  - /organisations/institut-national-de-recherche-pour-l-agriculture-l-alimentation-et-l-environnement
phases:
  - name: investigation
    start: 2025-02-13
  - name: construction
    start: 2026-01-20
events:
  - name: committee
    date: 2026-01-16
    comment: La création d'une plateforme unifiée d'accès aux données sols à fait consensus
usertypes: []
techno: []
link: ''
---

## Contexte

L’objectif de la démarche est de mettre à disposition des données de qualités des sols. A ce titre, l'INRAE a reçu un co-financement de 300k euros du Fonds à la planification écologique (FinDPE). 

## Problème
Les enjeux pour l’INRAE autour de leurs données :

Rassembler les données sur un seul hub ( aujourd’hui 33 jeux de données sur 46 webservices, besoin d’API différents), difficultés pour les usagers de trouver la données et donc à la valoriser.

Trois typologies usagers ressortent pour 3 cas d’usages différents mais cela reste pour l'instant très large :

1. Le MTE avec l’utilisation de données de reliquat azoté des sols (cas d’usage et impact à clarifier)
2. La branche agricole avec comme cas d’usage la connaissance de la qualité des sols dans le but d’améliorer celle-ci ( impact et cas d’usage à
investiguer)
3. Collectivité pour le suivi de la qualité des sols et l’observation des pollutions.

Questions pour l’investigation, afin de maximiser l’impact in finé :
1. Faut-il investiguer un de ces cas d’usage en particulier ? Risque de passer à côté de beaucoup d’autres.
2. Faut-il investiguer toutes les données et la qualité, les usages actuels afin d’ouvrir au maximum les données pour un hackathon qui permettrait de faire émerger plusieurs cas d’usage.

## Stratégie

**Début de construction : janvier 2026**

Access-Sol est une plateforme web et API qui :
* centralise l’accès aux principales données de sols existantes,
* harmonise leur présentation et leurs modalités d’accès,
* propose des outils de recherche, de consultation et de réutilisation,
* facilite l’émergence de cas d’usage opérationnels.

**Cibles prioritaires**

La phase de construction se concentre sur un nombre restreint de cibles, sélectionnées pour leur besoin immédiat et leur capacité à tester rapidement le produit.

* Bureaux d’études en environnement (cible principale) : utilisateurs intensifs des données de sols dans les études réglementaires et environnementales, confrontés à une forte dispersion des sources et à des formats hétérogènes.

* Collectivités territoriales et services techniques : acteurs de la planification, de l’aménagement et de la gestion des risques, ayant besoin d’un accès fiable et simplifié aux données.

* Services de l’État et opérateurs publics : producteurs et utilisateurs de données de sols, en recherche de solutions de mutualisation et de standardisation de l’accès aux données.


**Approche et méthodologie**

Le produit est développé selon l’approche Startup d’État (beta.gouv) :
* développement rapide d’un MVP,
* itérations courtes basées sur les retours utilisateurs,
* priorisation guidée par l’usage réel et l’impact observé,
* respect des standards beta.gouv (qualité, sécurité, accessibilité, ouverture).