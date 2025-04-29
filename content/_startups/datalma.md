---
analyse_risques: false
mon_service_securise: true
contact: datalma@beta.gouv.fr
repository: https://github.com/orgs/betagouv/teams/datalma/repositories
thematiques:
  - Administratif
  - Open-Data
usertypes:
  - etat
techno:
  - Dagster
  - DBT
  - Python
  - Postgresql
  - S3
  - DSFR
  - React
  - vite
  - typescript
title: Datalma
mission: Appuyer les décisions prises par la Présidence, le Premier Ministre et les ministères sur des données pertinentes et récentes.
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
  - name: committee
    date: 2025-02-04
    comment: Premier comité d'investissement mené par l'équipe EIGs
link: https://datalma.fr
---
## Contexte
En 2023, la Présidence de la République crée le DataLab, équipe chargée du développement d’outils d’analyse de données et de la transformation numérique (automatisations, IA…) au sein de la Présidence, afin d’aider les agents de l’Élysée dans leur quotidien. Le DataLab a notamment travaillé sur un outil d’analyse textométrique ou sur la création d’un équivalent de “ChatGPT” interne calibré pour les besoins de la Présidence…

À partir de décembre 2023, une investigation a été menée par la DINUM pour accompagner le DataLab dans son développement et identifier des irritants liés au numérique et à la data.

## Problème
L’investigation de la DINUM a mis en lumière la difficulté pour certains décideurs publics à bénéficier de données pourtant indispensables au pilotage et à la prise de décision. Aujourd’hui, la plupart des données produites sont publiées par les Services Statistiques Ministériels au travers de rapports PDFs. Ces documents, très utiles sur le long terme, manquent de réactivité pour le court terme. 

Les systèmes d’information de l’État regorgent de données, mais celles-ci restent rarement mobilisées dans les temps utiles pour éclairer les choix stratégiques. Les rapports statistiques, bien que riches, sont publiés avec des délais qui limitent leur utilité pour la prise de décision rapide.

Différents irritants ont ainsi été relevés concernant l’accès aux données :
- **Données obsolètes ou peu réactives** : Les indicateurs clés sont souvent disponibles avec plusieurs semaines ou mois de retard, ce qui freine leur utilisation pour la prise de décision immédiate.
- **Données non calibrées aux besoins des décideurs** : Les informations disponibles ne sont pas toujours adaptées aux attentes spécifiques des conseillers et directeurs de cabinet, qui ont besoin de données synthétiques, fiables et personnalisées pour appuyer leurs arbitrages.
- **Accessibilité limitée** : Les données sont dispersées, difficilement accessibles et rarement croisées entre ministères, ce qui entrave la capacité à disposer d’un constat partagé et à détecter les signaux faibles.
* **Manque d’outils adaptés à la décision** : L’absence de tableaux de bord interactifs, pensés pour les usages des décideurs, limite la capacité à mesurer rapidement l’impact d’une action ou à anticiper des tendances.

Tous ces éléments empêchent les décideurs de réaliser un pilotage 


## Solution
Une procédure en quatre étapes a été mise en place pour accélérer la prise de décision par la donnée :
1. Identification et priorisation des besoins en données
2. Identification des sources de données et d’interlocuteurs privilégiés.
3. Récupération des données avec l’intervalle de temps le plus court possible et réalisation d’un tableau de bord en mode MVP pour s’assurer de la pertinence des développements.
4. Automatisation de la récupération des données et mise à disposition du tableau de bord aux décideurs concernés.

Après 9 mois de construction, **Datalma** propose désormais un commun numérique de visualisation de données, spécifiquement conçu comme outil d’aide à la décision pour les plus hauts responsables de l’État :
* **Données fraîches et pertinentes** : Accès automatisé à des indicateurs actualisés à fréquence hebdomadaire ou mensuelle, couvrant plusieurs thématiques prioritaires (santé, énergie, éducation, économie, intérieur).
* **Tableaux de bord personnalisables** : Visualisation claire et synthétique des indicateurs clés, possibilité de personnaliser les tableaux de bord selon les besoins et les enjeux du moment.
* **Détection précoce et vision globale** : Croisement de données inter-ministérielles pour identifier rapidement les tendances émergentes et points de tension, facilitant ainsi la préparation des arbitrages.
* **Intégration de l’IA** : Utilisation de l’intelligence artificielle pour générer des analyses, prédire des tendances ou créer des graphiques à la demande, accélérant la compréhension et la réactivité.


## Stratégie
L’investigation s’est d’abord concentrée sur la thématique de la santé. 17 indicateurs, soit plus des trois quarts des indicateurs identifiés avec les conseillers (Présidence, Matignon et Ministère de la Santé) ont été récupérés et visualisés, jusqu’à 12 fois plus rapidement que précédemment, validant ainsi la pertinence du MVP. 

Notre stratégie est actuellement la suivante :

**Ciblage et adoption**

Priorité aux conseillers de la Présidence et de Matignon, puis ouverture progressive aux directeurs de cabinet des ministères stratégiques (santé, énergie, éducation, intérieur, économie).


**Déploiement thématique et évolutif**

* Après la réussite du prototype santé (145 indicateurs, actualisation hebdomadaire), extension rapide à cinq thématiques prioritaires d’ici fin 2025 (énergie, éducation, intérieur, économie, santé).

* Co-construction des nouveaux tableaux de bord avec les conseillers concernés pour garantir l’adéquation aux besoins métiers et la pertinence des indicateurs.

* Ajout régulier de nouvelles données, intégration de nouvelles thématiques et automatisation des processus de collecte.



## Mesure d'impact et autres indicateurs
- **Décisions éclairées par Datalma** : Objectif d’au moins une décision explicitement influencée par Datalma dans les 6 prochains mois.
- **Adoption par les utilisateurs clés** : 5 à 10 utilisateurs réguliers à la Présidence et à Matignon, 10 à 20 utilisateurs occasionnels dans les ministères stratégiques.
- **Couverture thématique** : 5 thématiques avec au moins 5 catégories d’indicateurs chacune d’ici fin 2025.

## Moyens

La startup d’Etat Datalma est portée par un copilotage du Datalab et de deux Entrepreneurs d'intérêt général (EIG), envoyés en mission auprès du Datalab dans le cadre d'une convention de partenariat.

Un directeur de produit, pour définir la visée du produit et prioriser la feuille de route.

Un directeur technique, pour opérer des choix technologiques de manière agile et sécurisée.

L’équipe dispose du budget suivant : 

* septembre à janvier 2024 : 76k€ (dont 38k€ de la DINUM et 38k€ de l’Elysée)
* pour 2025 : 300k€ (dont 200k€ de la DINUM et 100k€ de l’Elysée)
