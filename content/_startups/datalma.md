---
analyse_risques: false
mon_service_securise: false
contact: datalab@elysee.fr
repository: https://gitlab.com/datalab5084531/datalma
thematiques:
  - Administratif
  - Open-Data
  - Santé
usertypes:
  - etat
techno: []
title: Datalma
mission: Permettre un pilotage des politiques publiques par la donnée en permettant un accès facilité aux données pour les décideurs politiques.
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
En 2023, la Présidence de la République crée le DataLab, équipe chargée du développement d'outils d'analyse de données et de la transformation numérique (automatisations, IA...) au sein de la Présidence, afin d'aider les agents de l'Élysée dans leur quotidien. Le DataLab a notamment travaillé sur un outil d'analyse et de veille complet sur les données de la presse, un outil d'analyse textométrique, la création d'un équivalent de "ChatGPT" interne calibré pour les besoins de la Présidence...

À partir de décembre 2023, une investigation a été menée par la DINUM pour accompagner le DataLab dans son développement et identifier des irritants liés au numérique et à la data.


## Problème
Le Président de la République a exprimé son souhait d'avoir accès à un maximum de données, réactualisées aussi régulièrement que possible, lui permettant de suivre de nombreux indicateurs liées à l'activité de l'Etat ou du pays.

À la suite d'un prototype de tableau de bord "Macroéconomie / Énergie / Inflation" à destination du président de la République, les conseillers du Président ont exprimé leur souhait d'obtenir un tableau de bord dédié à leur thématique.

Aujourd'hui, la plupart des données produites sont publiées par les Services Statistiques Ministériels au travers de rapports PDFs. Ces documents, très utiles sur le long terme, manquent de réactivité pour le court terme. En effet, lors de l'investigation de la DINUM, différents irritants ont été relevés concernant l'accès aux données :

- les données sont mises à jour trop peu régulièrement. La dernière donnée peut remonter à plusieurs trimestres ou années, alors qu'une donnée fraîche est nécessaire pour permettre la prise de décision ; 
- les données à disposition ne sont pas calibrées aux besoins des conseillers ;
- les données sont parfois difficilement accessibles par les décideurs.  
    
Tous ces éléments empêchent les décideurs de réaliser un pilotage efficace des politiques publiques par la donnée. 


## Solution
Une procédure en quatre étapes a été mise en place pour accélérer la prise de décision par la donnée : 

1°) Identification et priorisation des besoins en données des conseillers (Présidence, Matignon et ministères). 
2°) Identification des sources de données et d'interlocuteurs privilégiés. 
3°) Récupération des données avec l’intervalle de temps le plus court possible et réalisation d'un tableau de bord en mode MVP pour s'assurer de la pertinence auprès des conseillers.
4°) Automatisation de la récupération des données et mise à disposition du tableau de bord auprès des conseillers ou divers usagers au sein de l'administration.  

Ce nouvel outil assure aux conseillers l'accès à des données de qualité, actualisées automatiquement à intervalles réguliers (hebdomadaire ou mensuel) et permet ainsi un pilotage des politiques publiques par la donnée. 

## Stratégie
L'investigation s'est d'abord concentrée sur la thématique de la santé. 17 indicateurs, soit plus des trois quarts des indicateurs identifiés avec les conseillers (Présidence, Matignon et Ministère de la Santé) ont été récupérés et visualisés, jusqu'à 12 fois plus rapidement que précédemment. L'ambition est de continuer d'améliorer et d'adapter le tableau de bord selon les demandes, mais également de développer ces tableaux de bord sur de nombreuses thématiques : environnement, sécurité, éducation, justice, etc.

Sur le long terme, nous envisageons de publier ces indicateurs pour le grand public afin d'assurer une transparence totale de l'action publique auprès des citoyens et des acteurs directement concernés par ces données.

## Mesure d'impact et autres indicateurs
- mesure d'impact : nombre de décisions prises sur la base du service numérique (objectif : 1 dans les 6 prochains mois)
- mesure d'usage : nombre de conseillers utilisateurs réguliers du tableau (= 1 connexion par semaine) (objectif : 3 dans les 6 prochains mois)
- mesure d'effort : nombre d'indicateurs remontés dans le tableau (objectif = 15 indicateurs par thématique et 3 thématiques)

## Moyens
Le produit est développé par l'équipe du Datalab de l'Elysée.

L'équipe dispose en plus d'un budget de 38 000€ pour les 6 prochains mois.

Deux Entrepreneurs d’Intérêt Général (EIG) mis à disposition par la DINUM devraient rejoindre l’équipe dans les prochains mois :
- Un profil couvrant les aspects produit, passant du bizdev à la data analyse ;
- Un profil de direction technique : expérimenté en fullstack et devops pour couvrir les dashboards les plus téméraires.
