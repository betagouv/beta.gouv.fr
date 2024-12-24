---
analyse_risques: false
mon_service_securise: false
contact: info.nomos2@justice.fr
thematiques:
  - Justice
usertypes:
  - etat
techno:
  - ansible
  - terraform
  - jenkins
  - Redhat
  - Debian
  - docker
  - kubernetes
  - php
  - timescript
  - NodeJS
  - react
  - github actions
title: LexBase
mission: La base documentaire qui accélère la prise de décision juridique. Réduire la charge administrative des greffiers et des magistrats de la Cour de Cassation . Diversifier les possibilités d’interfaçage liées aux documents des procédures produits par la juridiction.
incubator: justice
sponsors:
  - /organisations/cour-de-cassation
  - /organisations/mj
phases:
  - name: investigation
    comment: null
    start: 2025-01-27
    end: null
  - name: construction
    comment: null
    start: 2025-04-15
    end: null
  - name: acceleration
    comment: null
    start: 2025-09-30
    end: null
  - name: success
    comment: null
    start: 2026-01-30
    end: null
events:
  - name: other
    comment: Création de la fiche produit
    date: 2024-12-23
---

## Contexte

La Cour de cassation, en tant que plus haute juridiction de l'ordre judiciaire français, traite et produit un volume considérable de documents juridiques, notamment :
* Les arrêts rendus par la Cour (En 2023, la Cour de cassation a rendu 13 223 arrêts définitifs, et 8 498 ordonnances) ;
* Les pourvois en cassation (entre 20.000 et 35.000 pourvois par an sur les trente dernières années) ;
* Les mémoires des parties (un mémoire par parties constituées dans environ les 2 /3 des pourvois) et autres documents de procédure ;
* Les décisions des cours d’appel ;
* Les travaux préparatoires – rapports du conseiller rapporteur (un rapport dans les 2/3 des pourvois, en ligne sur Jurinet depuis 2004), avis des avocats généraux (un avis dans environ 6.000 pourvois par an en matière pénale et dans les principales affaires en matière civile), avis et projet d’arrêts du conseiller rapporteur (ces documents, couverts par le secret de délibérés, sont en nombre identique aux rapports) ;
* Les analyses et mémoires du Service de Documentation, des Études et du Rapport (SDER), qui comprennent à la fois les analyses juridiques proposées par la Cour pour son fonctionnement juridictionnel, mais également les études réalisées sur demandes des juridictions du fond et des divers partenaires.

La nature sensible des affaires traitées par la Cour de cassation exige un niveau élevé de sécurité et de confidentialité dans la gestion des documents. Un contrôle strict des accès et une protection renforcée des données sont essentiels.

## Problème

Sans accès aux documents juridiques mentionnés ci-dessus les décisions de la Cour de Cassation ne peuvent être rendues. Elle n'est donc pas en mesure de réaliser son objet.
De part les éléments éclairants qu’ils contiennent concernant le fondement de la décision prise par la juridiction, les travaux préparatoires intéressent l’ensemble de la communauté des magistrats de l’ordre judiciaire comme administratif. Ces documents ne sont actuellement que peu communiqués et sous forme non pseudonymisée.
L’importante technicité des problématiques juridiques rencontrées dans le cadre du traitement des affaires nécessite une collaboration de nombreux acteur de la juridiction. Les outils collaboratifs sont actuellement inadaptés à ces besoins.
Le cycle de vie des documents de la procédure n’est actuellement que partiellement géré par le système d’information de la Cour de cassation.


## Solution

Les magistrats et les avocats généraux doivent pouvoir accéder rapidement et efficacement à l'ensemble de la documentation pertinente pour chaque affaire. La gestion documentaire regroupe le stockage, l'indexation et la recherche des documents associés aux dossiers, la gestion des versions et des droits d’accès.
Un système de recherche performant est également crucial en vue de faciliter et d'optimiser les résultats des recherches.
En tant qu’outil transverse de gestion documentaire, la solution mise en œuvre devra s’interfacer avec l’API développée qui permettra de rendre accessible de manière pseudonymisées les décisions, les rapports, les documents des procédures de la Cour de Cassation pour faciliter la prise en compte de la jurisprudence pour les magistrats, les avocats, les procureurs, les greffiers, les justiciables. 
Des fonctionnalités avancées de collaboration simultanée sur les documents en cours de rédaction devront être proposées.
Enfin une fois ces deux chantiers terminés, il sera alors temps de travailler à un outil permettant de créer des documents (rapport et avis du conseiller rapporteur ; projets d’arrêts des magistrats délibérant ; avis de l’avocat général ; travaux du bureau d’aide juridictionnelle ; avis, notification et certificats du greffe) à partir de modèles éditables reprenant les données du système.


## Stratégie

Une première étape vise à migrer l'existant au sein d’un outil de nouvelle génération qui permettra d’assurer la continuité des activités de la Cour. 
Un travail d'indexation des documents et de conception d'un nouveau moteur de recherche permettra de prendre plus facilement en compte les usages actuels des différents utilisateurs. 
Enfin, il sera alors temps de déterminer comment faciliter la création de documents à partir de modèles éditables.

Indicateurs d'impact

Les indicateurs de succès seront réellement connus à l’issue de l’investigation. Néanmoins, nous estimons qu’ils pourraient inclure :
* un accès plus rapide et facile aux dossiers, à la jurisprudence et aux travaux préparatoires de l’ensemble des affaires : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel vs mesure du temps post MeP).
* la mesure de l'accélération des délais de traitement des procédures => réduction des temps de procédure (mesure du délai moyen d’une procédure vs mesure du délai moyen post MeP – estimation du nombre de procédures pouvant être gérées à iso effectif) ;
* le temps gagné via de nouveaux mécanismes de recherche et d’assistance à l’analyse juridique ou via une aide à la décision pour des cas similaires (+ déploiement dans les TGI et CA) ;
* un accès plus rapide et facile aux dossiers, à la jurisprudence: réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel vs mesure du temps post MeP) ;
* la réduction de la sollicitation du service informatique par le greffe (nombre d’interventions du service informatique pour débloquer des situations avant et après MeP).