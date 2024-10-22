---
analyse_risques: false
mon_service_securise: false
contact: datalma@beta.gouv.fr
repository: https://gitlab.com/datalab5084531/datalma
thematiques:
  - Administratif
  - Open-Data
  - Santé
usertypes:
  - etat
techno: []
title: Datalma
mission: Datalma propose une solution de collecte et visualisation de data, qui permet aux décideurs publics (Présidence, Matignon et ministères) de s’appuyer au quotidien sur des données pertinentes & récentes.
incubator: dinum
sponsors:
  - /organisations/pr
phases:
  - name: investigation
    start: 2023-11-22
  - name: construction
    start: 2024-06-26
events:
  - name: committee
    date: 2024-05-22
    comment: Restitution de l'investigation
---
## Contexte
En 2023, la Présidence de la République crée le DataLab, équipe chargée du développement d’outils d’analyse de données et de la transformation numérique (automatisations, IA…) au sein de la Présidence, afin d’aider les agents de l’Élysée dans leur quotidien. Le DataLab a notamment travaillé sur un outil d’analyse textométrique ou sur la création d’un équivalent de “ChatGPT” interne calibré pour les besoins de la Présidence…

À partir de décembre 2023, une investigation a été menée par la DINUM pour accompagner le DataLab dans son développement et identifier des irritants liés au numérique et à la data.

## Problème
L’investigation de la DINUM a mis en lumière la difficulté pour certains décideurs publics à bénéficier de données pourtant indispensables au pilotage et à la prise de décision. Aujourd’hui, la plupart des données produites sont publiées par les Services Statistiques Ministériels au travers de rapports PDFs. Ces documents, très utiles sur le long terme, manquent de réactivité pour le court terme. 

Différents irritants ont ainsi été relevés concernant l’accès aux données :
- les données sont mises à jour trop peu régulièrement :la dernière donnée peut remonter à plusieurs trimestres ou années, alors qu’une donnée fraîche est nécessaire pour permettre la prise de décision ;
- les données à disposition ne sont pas calibrées aux besoins des conseillers des décideurs ;
- les données sont parfois difficilement accessibles.

Tous ces éléments empêchent les décideurs de réaliser un pilotage 


## Solution
Une procédure en quatre étapes a été mise en place pour accélérer la prise de décision par la donnée :
1. Identification et priorisation des besoins en données
2. Identification des sources de données et d’interlocuteurs privilégiés.
3. Récupération des données avec l’intervalle de temps le plus court possible et réalisation d’un tableau de bord en mode MVP pour s’assurer de la pertinence des développements.
4. Automatisation de la récupération des données et mise à disposition du tableau de bord aux décideurs concernés.


Ce nouvel outil assure l’accès à des données de qualité, actualisées automatiquement à intervalles réguliers (hebdomadaire ou mensuel) et permet ainsi un pilotage  par la donnée.


## Stratégie
L’investigation s’est d’abord concentrée sur la thématique de la santé. 17 indicateurs, soit plus des trois quarts des indicateurs identifiés avec les conseillers (Présidence, Matignon et Ministère de la Santé) ont été récupérés et visualisés, jusqu’à 12 fois plus rapidement que précédemment, validant ainsi la pertinence du MVP. L’ambition est de continuer d’améliorer et d’adapter le tableau de bord, mais également de les développer sur de nombreuses thématiques : environnement, éducation, justice, etc.

Sur le long terme, l’objectif est de mettre à disposition des acteurs concernés par ces indicateurs ces tableaux de bord, afin de renforcer la transparence et l’efficacité de l’action publique. 


## Mesure d'impact et autres indicateurs
- mesure d'impact : nombre de décisions prises (objectif : 1 dans les 6 prochains mois)
- mesure d'usage : nombre de conseillers utilisateurs réguliers du tableau (= 1 connexion par semaine) (objectif : 3 dans les 6 prochains mois)
- mesure d'effort : nombre d'indicateurs remontés dans le tableau (objectif = 15 indicateurs par thématique et 3 thématiques)

## Moyens
Le produit est développé  conjointement avec l’équipe du Datalab.

Deux Entrepreneurs d’Intérêt Général (EIG) sont mis à disposition par la DINUM :
- Un profil couvrant les aspects produit, passant du bizdev à la data analyse ;
- Un profil de direction technique : expérimenté en fullstack et devops pour couvrir les dashboards les plus téméraires.
