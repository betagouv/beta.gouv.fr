---
analyse_risques: false
mon_service_securise: false
contact: sylvie.pommier@beta.gouv.fr
thematiques:
  - Formation
  - Travail / Emploi
  - Entreprises
usertypes:
  - particulier
  - entreprise
  - etablissement-scolaire
techno:
  - Angular 20
  - Spring Boot 4
  - PostgreSQL
  - Java 21
title: La plateforme nationale du doctorat
mission: Faciliter le processus d'admission en doctorat, de la définition du sujet de recherche à la poursuite de carrière
incubator: dinum
sponsors:
  - /organisations/dgesip
  - /organisations/direction-generale-de-la-recherche-et-de-l-innovation
  - /organisations/mesr
phases:
  - name: investigation
    start: 2025-04-01
  - name: construction
    start: 2025-10-06
events:
  - name: committee
    date: 2025-06-25
  - name: product_launch
    date: 2026-02-09
    comment: Lancement de la version bêta composée du site vitrine (doctorat.gouv.fr) et de l'outil de mise en relation entre chercheurs et potentiels candidats au doctorat
link: https://doctorat.gouv.fr/
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques/p/4
impact_url: https://docs.numerique.gouv.fr/docs/6562df84-4421-4007-a5b0-107b2b72e770/
contact_dinum: cyprien.cambier
contact_incubator: lucie.zaccardi
---
## Contexte

Le processus d'inscription en doctorat en France est complexe, fragmenté et manque d'uniformité entre les établissements. 
Les étudiants, en particulier ceux issus de parcours atypiques, internationaux ou sans réseau, se heurtent à des difficultés administratives et un manque d'accompagnement qui peuvent les décourager. 
Cela a un impact sur l'attractivité de la France pour les jeunes chercheurs.

## Problème

Problèmes identifiés :
- Le doctorat souffre d'un imaginaire collectif défavorable
- L’écosystème de la recherche française est difficile d’accès
- L’attractivité du doctorat est pénalisée en France par des démarches d’accès au doctorat, complexes, mal-connues et multi-acteurs


Qui en souffre ?
- Étudiants français issus de formations non académiques habituelles
- Étudiants étrangers
- Candidats sans réseau académique établi
- Chercheurs en laboratoire
- Entreprises souhaitant développer des projets de recherche partenariale

Conséquences :
- Découragement des candidats potentiels
- Perte de temps et énergie pour les candidats et les équipes administratives
- Inégalités d'accès au doctorat
- Baisse de l'attractivité de la France pour les jeunes chercheurs


## Solution

Le Ministère de l'enseignement supérieur, de la recherche et de l'espace lance la plateforme nationale du doctorat, un outil pensé pour faciliter l'admission en doctorat des candidats de tous horizons. Pour : 
- Informer sur le doctorat
- Rendre accessibles les sujets de thèses
- Assister et aiguiller les doctorants

**1# Le site vitrine national du doctorat : doctorat.gouv.fr**

Le projet inclut la construction du site doctorat.gouv.fr, point d’entrée public et national sur le doctorat.

Ce site a pour objectifs de :
* centraliser et rendre lisible une information aujourd’hui dispersée sur le doctorat (conditions d’accès, déroulement, statuts, débouchés),
* s’adresser à des publics variés (étudiants, professionnels en reprise d’études, candidats internationaux),
* améliorer la compréhension du doctorat comme voie de formation et de recherche, y compris hors du seul cadre académique,
* proposer un service de recherche d’offres de thèses, permettant aux candidats d’identifier des sujets ouverts et d’initier leur candidature,
* poser un premier référentiel éditorial et UX commun autour du doctorat.

L'ouverture du site vitrine le 9 février 2026 a constitué un premier jalon concret de la phase de construction : il a permis de livrer rapidement de la valeur aux utilisateurs, de tester des hypothèses d’usage (information, recherche d’offres, premières candidatures) et de préparer l’atterrissage de la future plateforme d’admission.
Les enseignements issus de sa conception et de ses usages alimentent directement les choix produit de la plateforme (parcours, contenus, fonctionnalités).

**2# Une plateforme nationale d’admission en doctorat**

Une plateforme numérique centralisée permettant de :
- faciliter la mise en relation entre chercheurs et potentiels candidats au doctorat (version bêta en ligne depuis le 09/02/2026)
- uniformiser et simplifier les démarches d’admission en doctorat,
- guider les candidats à chaque étape du parcours (pré-requis, constitution du dossier, candidatures),
- faciliter les échanges entre candidats, directeurs de thèse, écoles doctorales et services administratifs,
- outiller les écoles doctorales avec des tableaux de bord de suivi et de gestion des candidatures.


## Méthodologie de construction
La phase de construction repose sur une démarche itérative, centrée utilisateurs et orientée impact, visant à réduire les risques le plus tôt possible.

La méthodologie s’articule autour de trois principes clés :

**1# Construire par jalons visibles et utiles**

Le projet adopte une logique de livraisons progressives :
* lancement rapide du site vitrine doctorat.gouv.fr comme premier service public opérationnel,
* mise en place progressive des fonctionnalités de recherche d’offres de thèses et de candidature,
* développement incrémental de la plateforme nationale d’admission.

Chaque jalon apporte une valeur immédiate aux utilisateurs et sert de base à l’itération suivante.

**2# Tester les usages avant de généraliser**

Chaque brique du service est conçue et testée avec des utilisateurs réels :
* tests utilisateurs réguliers sur les contenus, la navigation et la recherche d’offres du site vitrine,
* expérimentations sur les premières candidatures à des offres de thèse,
* pilotes ciblés avec des écoles doctorales pour la plateforme d’admission.

Les retours qualitatifs et quantitatifs (compréhension, taux d’usage, points de friction) guident les arbitrages produit.

**3# Faire du site vitrine un levier d’apprentissage produit**

Le site doctorat.gouv.fr est utilisé comme outil d’observation et de validation des besoins :
* analyse des parcours utilisateurs (information → recherche → candidature),
* identification des questions récurrentes et des points de décrochage,
* tests de vocabulaire, de structuration des contenus et de niveaux de lecture.

Les enseignements issus de ces usages alimentent directement la conception de la plateforme d’admission (parcours, fonctionnalités, priorisation).

**4# Travailler en transparence et en coopération avec l’écosystème**

La construction se fait en lien étroit avec :
* des écoles doctorales et établissements pilotes,
* les services du ministère et partenaires institutionnels,
* les communautés beta.gouv (coaching produit, design, tech).

Les arbitrages sont documentés et partagés afin de faciliter la montée en charge et l’extension du service.