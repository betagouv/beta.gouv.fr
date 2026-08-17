---
analyse_risques: false
mon_service_securise: false
contact: valentin.kirchgessner@finances.gouv.fr
thematiques:
  - Administratif
usertypes:
  - etat
title: Assistant RH
mission: IA générative permettant aux gestionnaires RH des SGCD de disposer d’une première analyse rapide basée sur un corpus réglementaire à jour
incubator: alliance
sponsors:
  - /organisations/dgafp
phases:
  - name: investigation
    start: 2025-01-01
  - name: construction
    start: 2025-09-01
events:
  - name: product_launch
    date: 2025-09-01
  - name: committee
    date: 2026-02-19
    comment: '1er comité d''investissement : 2ème phase de construction validée '
techno:
  - python
repository: https://github.com/DGAFP/assistant-rh
link: ''
---
## Contexte

L'analyse initiale de la DGAFP, menée en collaboration avec la DINUM, a pointé la situation avec le plus d'irritants comme étant celle des gestionnaires RH des secrétariats généraux communs départementaux (SGCD) au sein de l'administration territoriale de l’État (ATE).

Pour mémoire, le périmètre de l'ATE est composé du ministère de l'intérieur (MI), des ministères sociaux (MSO), du ministère de l'agriculture et de la souveraineté alimentaire (MASA), des ministères de l’aménagement du territoire et de la transition écologique (MATTE), et des ministères économiques et financiers (MEF).

Ce cas d'usage des SGCD sera priorisé dans la phase d'élaboration du nouveau produit.

On observe une hétérogénéité de l'organisation des pôles RH au sein des SGCD. Les gestionnaires RH peuvent en effet être organisés selon différentes logiques :

• ministérielle versus interministérielle

• par thématiques

• par catégorie des agents

Dans ce contexte, il en ressort que le gestionnaire RH dispose d'un portefeuille varié.


## Problème

Une investigation a été réalisée début 2025 par la DINUM au sein de plusieurs SGCD conduisant à 41 entretiens avec des responsables ou gestionnaires RH. Des conseillers RH au sein des plateformes régionales d'appui interministériel à la gestion des RH (PFRH) ont également été auditionnés.

Principaux irritants remontés du terrain :

* Accéder à la source réglementaire à jour rapidement (l’accès à la source n’est pas homogène selon les ministères ; différentes plateformes de centralisation de l’information) ;

* Gérer une hétérogénéité forte des pratiques entre les ministères (l’utilisation de la circulaire ministérielle est privilégiée à la norme réglementaire interministérielle) ;

* Obtenir une réponse adaptée selon la situation de l’agent ;

* Ne pas être en capacité de répondre rapidement aux agents en raison de la complexité à naviguer dans l'information ;

* Commettre des erreurs / imprécisions dans les réponses aux agents ;

* Faire face à une pression continue dans le traitement des demandes des agents.

Conséquences :

* Allongement des délais de réponse ;
* Possibilités d'erreurs dans les réponses face à l'hétérogénéité des sources  ;
* Augmentation de la pression et du stress au travail.
* Turn-over important des équipes des gestionnaires RH en SGCD.

## Solution

Face à une question RH, une IA générative permettrait aux gestionnaires RH des SGCD de disposer d’une première analyse rapide basée sur un corpus réglementaire à jour.

L’objectif est d’obtenir une amélioration sensible du service rendu aux agents de l'ATE, d'améliorer les conditions de travail des gestionnaires RH des SGCD, d’installer les SGCD comme interlocuteur de référence pour toutes les questions RH (quel que soit le ministère dont relève l’agent), et de limiter la saisine des services d’administration centrale.

## Objectif à 6 mois : déployer un premier MVP performant en situation réelle

Première itération (de septembre 2025 à mars 2026) : 
* expérimenter sur un périmètre restreint

* 1 ministère de l'ATE

* 7 SGCD volontaires (+ 2 PFRH + 1 DREAL)

* une thématique RH à fort enjeu et donc à fort impact (les contractuels)

Les principaux indicateurs de la première itération : 
* Taux de pertinence des réponses : 70 %
* Confiance dans les réponses fournies : 78 %
* Délai de réponse aux agents : 12 minutes de gain en moyenne par réponse
* Qualité de vie au travail des gestionnaires RH des SGCD : 86 % (de réponse "Oui, cet outil améliorerait la QVT")

À noter : il existe un potentiel de réduction du nombre de recours administratifs
(hiérarchiques ou contentieux) grâce à une amélioration de la qualité des réponses
données par les agents RH des SGCD


## Lors du 1er comité d'investissement du 19 février 2026, les orientations suivantes ont été décidées : 
* 2nde itération de mars à octobre 2026 : étendre le périmètre aux quatre autres ministères de l’ATE (MI, MSO, MASA, MEF) et tester la pertinence de l’outil dans une version interministérielle (en conservant les mêmes testeurs et la même thématique RH) ; la décision d'intégration de l'Assistant RH à l'Assistant IA de la DINUM sera à l'ordre du jour du second comité d'investissement en octobre 2026 ; 
* 3ème itération de novembre 2026 à mars 2027 : en fonction des résultats en version interministérielle et des futurs choix de trajectoire, élargir à tous les 100 SGCD (1200 gestionnaires RH) et intégrer de nouvelles thématiques RH par incréments successifs (selon les capacités) ;

Au delà de la généralisation aux gestionnaires des SGCD, il sera étudié en 2027 l'ouverture à d'autres ministères hors périmètre ATE.

Il est important de souligner qu'il s'agit d'un projet qui s'inscrit dans la durée, car il faut que les données soient régulièrement actualisées afin de tenir compte des évolutions législatives et/ou réglementaires en matière RH.
