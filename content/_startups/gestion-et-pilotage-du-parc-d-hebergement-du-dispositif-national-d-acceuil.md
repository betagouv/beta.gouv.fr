---
mission: Faciliter le travail des agents publics en charge de la gestion du parc d’hébergement des demandeurs d’asile
incubator: dinum
title: Place d'Asile
contact: thibault.desjardins@beta.gouv.fr
thematiques:
  - Administratif
  - Logement
  - Social
usertypes:
  - association
  - etat
sponsors:
  - /organisations/direction-generale-des-etrangers-en-france
phases:
  - name: investigation
    start: 2024-05-14
  - name: construction
    start: 2025-09-01
mon_service_securise: false
techno:
  - next.js
  - css
  - eslint
  - git
  - html
  - react
  - sql
  - tailwindcss
  - typescript
events:
  - name: committee
    date: 2024-10-18
    comment: Premier comité d'investissement avec la Direction de l'Asile
  - name: product_launch
    date: 2025-05-02
    comment: Deux premières régions en beta-teste
  - name: committee
    date: 2025-07-17
    comment: Second comité d'investissement avec la Direction de l'Asile
link: https://www.placedasile.beta.gouv.fr/
accessibility_status: partiellement conforme
repository: https://github.com/betagouv/place-asile
---
## Contexte

L'Etat finance environ 110 000 places d'hébergement pour demandeurs d'asile au sein de structures gérées par des opérateurs (associations....). Pour être financés, les opérateurs répondent à des appels à projet pour envisager la signature d'une convention. 
Le parc compte aujourd'hui près de 1 000 structures et 1 Md€ de budget. 

En l'absence d'outil numérique dédié au suivi et à la gestion contractuelle entre les opérateurs et les services de l'Etat (DREETS, DDETS et SGAR), ces derniers ont mis en place leur propre suivi "maison", souvent sous excel. Les pratiques sont donc très hétérogènes et difficilement lisibles à l'échelle nationale.

## Problème

Lors de l'investigation, plusieurs problèmes essentiels ont été recensés : 
1. Absence d'un outil centralisé de pilotage et de suivi du parc en temps réel
2. Besoin d'aide pour mener un dialogue de tarification plus performant et pour gagner du temps lors du conventionnement (aujourd'hui très chronophage et encore via courriers papier)
3. Accélérer le délai d'ouverture des places

Au lancement de la construction, le parc était plutôt en phase de contraction.  Par conséquent, l'équipe a décidé de se concentrer uniquement sur les deux premiers problèmes pour le moment. 

L'absence d'un outil de pilotage signifie qu'il est difficile pour la Direction de l'Asile, pour les DREETS, SGAR et DDETS de suivre au quotidien les structures et d'identifier des pistes d'amélioration. Ce manque de visibilité empêche de dépenser efficacement et d'optimiser le nombre de places disponibles. De plus, les indicateurs sont souvent trop limités pour mener un dialogue de gestion performant avec les opérateurs. La culture comptable parfois limitée des agents (dont ce n'est pas la formation) empêche une analyse des couts poussée et une affectation des dotations au plus près des besoins des opérateurs.

La conséquence est la difficulté à améliorer la performance de gestion des places pour héberger mieux et à coût constant. 


## Solution

L'outil numérique Place d'Asile a vocation à recenser et cartographier toutes les structures du parc d'hébergement du BoP 303, soit environ 1 000 structures. Cela comprend tous les CADA, les CPH, les HUDA, les PRADHA, les CAES, que ces structures soient gérées en direct ou sous un CPOM.

Chaque structure possédera une fiche avec un grand nombre de données (administratives, financières, d'occupation, calendaires, contractuelles, d'inspection....) alimentées en temps réel. Un historique de 5 ans permettra de visualiser l'évolution de ces indicateurs dans le temps. Enfin, l'ensemble des documents contractuels et financiers seront  stockés dans l'outil pour faciliter la centralisation et la mémoire de service. 

Ensuite, une autre brique permettra d'agréger l'ensemble de ces indicateurs pour chaque opérateur afin d'offrir une visibilité par département, région ou au national des performances globales de chaque opérateur. D'autres statistiques viendront compléter ce panel de data-visualisation. 

A terme, l'outil pourra inclure des aides à la contractualisation en ligne ou à l'analyse financière lors de la tarification. 

## Stratégie

Nous avons commencé par déployer une première version de l'outil à deux régions beta-test que sont la Normandie et le Pays de la Loire. 

Suite à cette première phase de construction, il a été décidé de déployer Place d'Asile à l'ensemble du territoire métropolitain. L'outil est donc en phase d'initialisation, c'est à dire de récupération de l'ensemble de l'historique de chaque structure et de chaque opérateur. Cette initialisation se fait en récupérant des données à la fois auprès des opérateurs et des agents avec une méthode éprouvée et rapide et des vagues de déploiement successives par région.  

Ensuite, nous devrons accompagner les agents dans l'usage au quotidien de la plateforme, continuer le développement de nouvelles fonctionnalités très demandées par les agents (contractualisation, aide à la tarification...). 

Enfin, nous devrons nous assurer via des KPI d'impact que cet outil de pilotage permet de prendre des décisions qui améliorent la qualité de cette politique publique en permettant d'héberger plus et mieux à cout constant. 
