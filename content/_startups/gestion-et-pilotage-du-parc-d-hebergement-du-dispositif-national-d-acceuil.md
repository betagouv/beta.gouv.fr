---
mission: Faciliter le travail des agents publics en charge de la gestion du parc d’hébergement des demandeurs d’asile
incubator: dinum
title: Bhasile (anc. Place d'Asile)
contact: contact@bhasile.beta.gouv.fr
thematiques:
  - Administratif
  - Social
  - hébergement
  - Asile
  - Budget
  - Pilotage
usertypes:
  - association
  - etat
  - opérateurs
  - services déconcentrés
sponsors:
  - /organisations/direction-generale-des-etrangers-en-france
phases:
  - name: investigation
    start: 2024-05-14
  - name: construction
    start: 2025-02-01
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
    comment: Deuxième comité d'investissement avec la Direction de l'Asile
  - name: committee
    date: 2026-02-20
    comment: Troisième comité d'investissement avec la Direction de l'Asile
  - name: committee
    date: 2026-07-22
    comment: Quatrième comité d'investissement avec la Direction de l'Asile
link: https://www.bhasile.beta.gouv.fr/
accessibility_status: partiellement conforme
repository: https://github.com/betagouv/bhasile
stats_url: https://www.bhasile.beta.gouv.fr/usage
impact_url: https://www.bhasile.beta.gouv.fr/matrice-impact-bhasile.png
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques/p/7?embed=true&Nom_=Bhasile%20%28ex%20Place%20d%27Asile%29
contact_dinum: thibault.desjardins
contact_incubator: emilie.derpion
---
## Contexte  

L'Etat consacre chaque année un budget d’1Md€ au financement d’un parc de près de 110 000 places d'hébergement pour demandeurs d'asile, réparties au sein de 1000 structures sur l’ensemble du territoire. 

Pour obtenir des financements, les opérateurs (associations), qui gèrent ces structures, engagent un dialogue avec les services déconcentrés de l’Etat permettant d’aboutir à la signature d’une convention. 

A date, en l'absence d'outil numérique dédié au suivi et à la gestion contractuelle entre les opérateurs et les services de l'Etat en charge du pilotage du parc, tant au niveau départemental (DDETS/UD) qu’au niveau régional (DREETS/SGAR), des outils de suivi « maison », souvent sous forme de multiples fichiers Excel, ont été mis en place au niveau local. Cette situation conduit à des pratiques hétérogènes et à un manque de lisibilité à l’échelle nationale. 

## Problème

Lors de l'investigation menée courant 2024, plusieurs besoins avaient été identifiés :
1.	un outil centralisé de pilotage et de suivi du parc en temps réel;
2.	une aide pour mener un dialogue de tarification plus performant et pour gagner du temps lors du conventionnement (aujourd'hui très chronophage et encore via courriers papier);
3.	un outil pour gagner du temps sur délai d'ouverture des places.


Au lancement de la construction au premier trimestre 2025, une contraction du parc en raison de contraintes budgétaires ayant été initiée, l’équipe a décidé de se concentrer dans un premier temps sur le développement d’une solution permettant de répondre aux deux premiers besoins identifiés.

En effet, l'absence d'un outil de pilotage numérique et unique signifie qu'il est difficile, tant pour l’administration centrale  (Direction de l'Asile), que pour les échelons départementaux (DDETS/UD) et régionaux (DREETS/SGAR/DRIHL) en charge du pilotage de cette politique publique, de suivre au quotidien les structures, d'identifier des pistes d'amélioration ou des besoins d’accompagnement plus ciblé ou encore d'évaluer les besoins budgétaires sur plusieurs années. Ce manque de visibilité empêche de dépenser efficacement et d'optimiser le nombre de places disponibles. De plus, les indicateurs sont souvent trop limités pour mener un dialogue de gestion performant avec les opérateurs. Enfin, la technicité de la comptabilité orientant le pilotage par des agents, dont ce n'est pas toujours la formation initiale ou professionnelle, empêche une analyse des couts poussée et une affectation des dotations au plus près des besoins des opérateurs.

La conséquence est la difficulté à améliorer la performance de gestion des places pour héberger mieux et à coût constant.



## Solution

La première brique de l'outil numérique Bhasile (anciennement Place d'Asile) permet de recenser et cartographier toutes les structures du parc d'hébergement financées sur le programme 303 (immigration et asile – action 2, garantie de l’exercice du droit d’asile), soit environ 1 000 structures. Cela comprend tous les CADA, les CPH, les HUDA, les PRADHA, les CAES, que ces structures soient gérées en direct ou sous un CPOM.

Chaque structure possède désormais une fiche avec un grand nombre de données (administratives, financières, d'occupation, calendaires, contractuelles, d'inspection....) alimentées en temps réel. Un historique de 5 ans permet de visualiser l'évolution de ces indicateurs dans le temps. En outre, l'ensemble des documents contractuels et financiers sont stockés dans l'outil pour faciliter la centralisation et la mémoire de service. Enfin une fonctionnalité permets de suivre et d'intégrer les transformations du parc (extension, contraction, transformation HUDA/CADA).

Une fonctionnalité statistique permet d'agréger l'ensemble de ces indicateurs pour chaque opérateur afin d'offrir une visibilité par département, région ou au national des performances globales de chaque opérateur. Une autre fonctionnalité de tableau de bord permet aux agents des services à différents échelons territoriaux de suivre l'actualité de leur parc (actualisation des données à l'issue des campagnes budgétaires, suivi de la transformation du parc, suivi des échéances de conventionnement).

D'ici quelques mois, les opérateurs auront accès aux fiches de leurs structures , seront en mesure d'actualiser certaines données et d'enregistrer des documents destinés à être portés à la connaissance des services.

A terme, un module d'IA permettra d'accompagnement les agents dans l'analyse des données et des documents budgétaires, leur permettant ainsi de consacrer plus de temps à l'accompagnement de leurs opérateurs.

## Stratégie

Nous avons commencé par déployer une première version de l'outil à deux régions beta-test que sont la Normandie et le Pays de la Loire.

Suite à cette première phase de construction, il a été décidé de déployer Bhasile à l'ensemble du territoire métropolitain. Cette phase d'initialisation a permis la récupération et la centralisation de l'ensemble de l'historique de chaque structure et de chaque opérateur. 

Nous avons ensuite accompagner les agents dans l'usage au quotidien de la plateforme et poursuivi le développement de nouvelles fonctionnalités très demandées par les agents (contractualisation, aide à la tarification...).

Enfin, nous devrons nous assurer via des indicateurs clés de performance (KPI) que cet outil de pilotage permet de prendre des décisions qui améliorent la qualité de cette politique publique en permettant d'héberger plus et mieux à cout constant.


