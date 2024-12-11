---
mission: Permettre aux services en charge du contrôle des frontières, de la lutte contre la fraude et de la sécurité en mer d’exploiter plus facilement les données maritimes.
incubator: dinum
repository: https://gitlab.mim-libre.fr/andv/demonstrateur-moana/moana
contact: andv-moana@interieur.gouv.fr
usertypes:
  - Police aux frontières
  - Douane
  - Garde-côte
  - Gendarmerie maritime
title: ANDV - Maritime - MOANA
sponsors:
  - /organisations/sndv
link: https://moana.beta.gouv.fr
stats: false
dashlord_url: https://dashlord.incubateur.net/url/moana-beta-gouv-fr/
phases:
  - name: investigation
    start: 2021-04-26
    end: 2021-06-18
  - name: construction
    start: 2021-09-01
    end: 2022-09-20
  - name: acceleration
    start: 2022-09-20
  - name: transfer
    start: 2024-08-01
  - name: alumni
    start: 2024-12-06
analyse_risques: true
thematiques:
  - Controle frontière
  - Lutte contre la fraude
  - Sécurité en mer
  - Maritime
accessibility_status: non conforme
budget_url: https://pad.numerique.gouv.fr/s/JIM1hTPo-#
stats_url: https://stats.moana.andv.gouv.fr/public/dashboard/741cc8d9-a8bd-4e28-88df-315c88cb106e
techno:
  - django
---
## Contexte

L'agence nationale des données de voyage (ANDV), service interministériel à compétence nationale, est en charge de l’amélioration des dispositifs de collecte et traitement des données de voyages à des fins régaliennes. En France, plus de 30 millions de personnes franchissent les frontières maritimes chaque année, hors pandémie. Les transports maritimes (cargo, croisière, ferries font l’objet d’obligations réglementaires de déclaration de données de voyage aux autorités portuaires.

Il existe 33 services (PAF/Douane) en charge du contrôle des frontières dans les points de passage frontaliers, dont 31 en France métropolitaine avec des données reçues par le guichet unique portuaire national.

L’objet des travaux de la start-up d’Etat est de permettre aux services en charge du contrôle des frontières, de la lutte contre la fraude et de la sécurité en mer d’exploiter plus facilement les données maritimes.

## Investigation préalable

L’investigation, menée entre avril et juin 2021, a permis de rencontrer différents acteurs et utilisateurs des traitements existants. Ces entretiens ont contribué à documenter les pratiques des services, en matière de traitement des données de voyage, et d’identifier les difficultés rencontrées au quotidien dans l’exercice de leurs fonctions.

## Problème identifié

Les activités de contrôle aux frontières sont soumises à des exigences de fluidité et de qualité des contrôles. L’usage actuel des données de voyage, déjà collectées au titre des traitements existants, ne permet pas de répondre pas à ces exigences par une analyse des risques en amont de l'arrivée des navires.

## Solution proposée

La solution vise à la mise en œuvre d'un portail web permettant aux autorités compétentes (Police aux frontières, Douanes, Gendarmerie maritime) 

L'outil permet 
- d'accéder à une unique source de données fiabilisée directement exploitables.
- d'anticiper les contrôles et de répondre aux obligation Schengen pour les missions de contrôle frontières (dans les PPF - points de passages frontaliers)
-  mieux préparer et identifier les contrôles pertinents pour les missions de ciblage (douane, sureté)

Chaque équipe dispose d'un accès aux données de son ou ses ports de compétence. 
- Visualisation de l'ensemble des mouvements (Départ/arrivée) des navires du port.
- Accès aux listes (passagers/équipage) formatées pour le criblage. 
- Suivi des traitements 
- Mise en attention de navire sensible et configurations d'alertes
- Réaliser des recherche spécifiques sur des navires

## Stratégie

### Investigation 
L'investigation terminée en Juin 2021 a permis d'interroger un grand nombre d'acteurs des agents de l'Etat dans le milieu maritime : Douanes, PAF, Gendarmerie maritime.
Problème identifiés : Les contrôles ne sont pas anticipés ou les agents perdent beaucoup de temps à récupérer les données dont ils ont besoin pour anticiper leur contrôles

### Construction
(Septembre 21 - Février 22 puis Mars 22 - Septembre 22)
L'outil a d'abord été testé dans 1 port sur une seule équipe avec un import manuel des données FAL  pour valider la pertinence..
L'automatisation de l'import de données a été opérée en Février 2022 et a permis ensuite d'étendre le déploiement à une dizaine d'équipe sur la 2e phase de construction.
Cette phase a fait émerger un énorme besoin de travail sur la donnée qui n'était pas toujours fiable et qui est un préalable nécessaire au bon déploiement.
La priorisation du déploiement a été guidée par deux facteurs clés : la qualité de la donnée collecté sur le port x le volume d'escale sur le port.

### Accélération 
(Octobre 22 - Avril 23 / Mai 23 - Septembre 23 / Octobre 23 -Avril 24)
Les phases d'accélérations ont permis de renforcer l'équipe et de travailler à la fois sur le produit, le déploiement et la donnée 
- Améliorer l'outil pour répondre aux besoins des différents utilisateurs 
- Grand effort sur l'analyse de données pour améliorer la couverture de données et la qualité des données en coordination avec les Systèmes d'informations portuaires et les agents maritimes
- Mise en place d'une Stratégie de Déploiement pour embarquer et accompagner les équipes utilisatrices : > 50 équipes déployées et suivies / Intégration de l'outil dans les doctrines métier des directions

### Consolidation et Transfert
(Avril 24 - Novembre 24)
Les dernières équipes (PPF) ont été déployées et de nouvelles équipes ciblage. Au total plus de 70 équipes utilisatrices.
Focus pour faciliter l'autonomie des utilisateurs (Connexion via SSO, Meilleure gestion des habilitations, notifications automatique des problèmes de données, sécurisation de l'application)

Le transfert a été décidé unilatéralement par l'administration sponsor en cours de phase de consolidation ce qui a provoqué un transfert accéléré au sein de l'administration (CF [Post Mortem](https://pad.numerique.gouv.fr/s/vQkO82N2u)) et une fin de partenariat avec les équipes de la DINUM


