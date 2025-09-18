---
analyse_risques: false
mon_service_securise: false
contact: metiers.dsi.courdecassation@justice.fr
thematiques:
  - Justice
usertypes:
  - etat
  - particulier
techno:
  - 'Nodejs, Typescript, React, Nextjs, mongoDB  '
title: API & communs numériques de la Cour de cassation
mission: 'Fiabiliser, enrichir et ouvrir les données juridictionnelles. Diversifier, fiabiliser et automatiser la collecte des données requises par l’activité juridictionnelle de la Cour de cassation auprès de systèmes tiers. Diversifier, fiabiliser et simplifier l’accès aux données et aux documents des procédures de la Cour de cassation par des systèmes tiers valorisant ces informations auprès des magistrats, greffiers, avocats et justiciables. Visualiser les données pour permettre le pilotage des activités de la Cour de cassation. '
incubator: justice
sponsors:
  - /organisations/cour-de-cassation
phases:
  - name: investigation
    start: 2025-03-03
  - name: construction
    start: 2025-06-16
events:
  - name: product_launch
    date: 2025-09-15
link: ''
---
## Contexte

La Cour de cassation a pour mission d’unifier et de contrôler l'interprétation du droit par l’ensemble des juridictions de l’ordre judiciaire. A cette fin, elle est saisie chaque année d’environ 20.000 affaires. La Cour de cassation s’est en outre vue confier des missions en lien avec sa place particulière. Parmi celles-ci, la Cour est chargée de la diffusion en données ouvertes (open data) de l’ensemble des décisions judiciaires françaises, soit plusieurs millions de décisions de justice rendues chaque année. Par l’entremise de son Service de la documentation, des études et du Rapport (SDER), la Cour de cassation est également chargée d’apporter son expertise à l’ensemble des juridictions judiciaires, notamment sous la forme de diffusion de documentations enrichies et contextualisées.
Dans l’exercice de ces missions, elle est amenée à collecter les données relatives à l’enregistrement puis l’instruction des affaires, données dont elle doit garantir la fiabilité, la disponibilité et l’accessibilité dans des conditions de confidentialité et de sécurités optimales auprès de l’ensemble des acteurs intervenant au cours du traitement des affaires. Une fois la décision rendue, elle doit en assurer la diffusion puis décliner son contenu dans le cadre de diverses publications dans les meilleures conditions de disponibilité, fiabilité et sécurité.

## Problème

La Cour de cassation sert à la fois des utilisateurs internes (magistrats, greffiers), les parties et leurs conseils en proximité (requérants, avocats aux Conseils), ainsi que des utilisateurs des données produites par la Cour (juridictions, communauté des juristes, notamment par l’intermédiaire des éditeurs juridiques, grand public). Chacun doit pouvoir accéder aux informations qui lui sont utiles de manière fiable, actualisée et sécurisée. 

Les interfaces qui assurent actuellement ces fonctions sont le fruit de développements successifs exploitant des technologies hétérogènes, partiellement obsolètes et peu documentées. En conséquence, la technicité et le temps requis pour la maintenance de l’ensemble de ces interfaces n’a cessé de croître pour atteindre une masse critique venant largement obérer la capacité à innover de la juridiction pour mieux répondre aux besoins de ses usagers. Ces interfaces nécessitent en outre d'être adaptées aux standards et usages actuels des différents consommateurs d'une donnée structurée, enrichie et fiable.

Aujourd'hui les difficultés suivantes sont observées :
* Décentralisation des données à exploiter :
L’ensemble des outils du système d‘information juridictionnel de la Cour de cassation consomment et/ou délivrent des données utiles aux traitements globaux de ses activités. La complexité technique et fonctionnelle des interfaces qui assurent ces échanges est proportionnelle à leur diversité et leurs spécificités. Le besoin d’adaptabilité requis par les processus juridictionnels et les différents acteurs de la Cour vient davantage complexifier la structure hétérogène du système.
* Évolutivité / Administration limitée :
Les données sont consommées et/ou restituées sous de multiples formats et modalités ce qui en rend l’administration et, parfois, l’usage, très complexe. 

Plusieurs applications s’interfacent au système d'information juridictionnel de la Cour de cassation pour répondre à différents usages et ont été développées avec des temporalités différentes :
* COMAVO : Interface d’échange de données et de documents entre NOMOS et le SI de l’ordre des avocats aux conseils, « E-Pourvoi ».
* JURINET : Publication et recherche de décisions (Cour de cassation) et de documents d’instruction préparatoire accessibles pour les besoins de leur activité juridictionnelle aux magistrats de l’ordre judiciaire et de l’ordre administratif.
* JURICA : Publication et recherche des décisions des cours d’appel en matière civile accessible pour les besoins de leur activité juridictionnelle aux magistrats de l’ordre judiciaire et de l’ordre administratif.
* JUDILIBRE : Publication et recherche de décisions pseudonymisées de l’ensemble des juridictions judiciaires accessible au public et référencée en données ouvertes (open data).
* SITE INTERNET DE LA COUR : plusieurs fonctionnalités sont offertes aux utilisateurs justiciables, dont la possibilité d’accéder au statut d’un dossier (pour un justiciable donné), d’effectuer une demande d’aide juridictionnelle, de demander la production d’un certificat de non pourvoi ou de consulter le calendrier des audiences civiles et pénales.
* Plateforme hubmail de Docaposte/Sefas : service d’imprimante virtuelle permettant la rematérialisation et l’envoi postal de courriers de procédure.
* BOBI (SAP BusinessObject business intelligence) : infocentre offrant une liste d’états paramétrés pour être librement exécutés par les utilisateurs avec quelques variables.

Cette liste n’est pas exhaustive et la diversité de ces outils illustre la complexité que représente la gestion des interfaces au sein du SI juridictionnel de la Cour de cassation.
Le produit décrit dans cette fiche devra permettre de considérablement réduire la complexité que représente la maintenance de ces interfaces tout en permettant de diversifier, fiabiliser et enrichir les données échangées.


## Solution

Afin de faciliter l’accès à toutes les données juridictionnelles de la Cour de cassation, le portail d'API de la juridiction doit devenir l’unique point d’échange standardisé et documenté entre son système d’information juridictionnel et les systèmes tiers qui fournissent et/ou consomment ses données. Il doit offrir des interfaces adaptées à chaque typologie d'utilisateurs et permet une sécurité accrue dans le partage des informations nécessaires aux besoins de chacun.
De plus, les données collectées doivent également permettre d’assurer un pilotage optimal de l'activité de la Cour.


## Stratégie

En premier lieu, les travaux à mener consisteront à traiter les besoins relatifs aux interfaces déjà existantes. Ces chantiers seront priorisés en fonction de leur criticité et de leur impact. Pour exemple, les travaux concernant l’interfaçage assurant la communication des données des décisions à Judilibre seront parmi les premiers traités. Chaque chantier nécessitera de conduire des travaux avec les administrateurs des systèmes tiers fournissant ou consommant des données pour élaborer une planification conjointe des travaux requis. Parallèlement au passage en production des API mises en place, les scripts et traitements qui assurent actuellement le fonctionnement des interfaces en production seront décommissionnés.
En deuxième lieu, les travaux relatifs à l’enrichissement des API déjà existantes ainsi qu’à la mise en place de nouvelles API seront pris en charge. Ils seront priorisés en fonction de leurs impacts utilisateurs respectifs.
Enfin, en troisième et dernier lieu, les travaux facilitant le pilotage de l'activité de la Cour seront entrepris. 

**Indicateurs d'impact**

Ces chantiers auront un impact avéré s’ils permettent aux utilisateurs :
* de gagner du temps dans la conception ou l’amélioration de leurs applications interfacées au bénéfice de leurs utilisateurs finaux communs (mesure par questionnaire sur le temps gagné à utiliser l’API de la Cour de cassation par rapport au temps de recherche d’informations, ou de collecte et maintenance des bases de données en propre) ;
* de consommer des données qui ne leur étaient jusque-là pas accessibles pour concevoir de nouvelles applications et services propres à aider les acteurs de l'écosystème : requérants, avocats et juridictions (mesure par questionnaire sur les usages de l’API) ;
* d'améliorer l’indexation et la recherche de données et documents (mesure des temps passés actuels vs temps passés post mise en production) ;
* de mesurer la pertinence des résultats remontés via analyse : taux de pertinence actuels vs taux de pertinence des résultats futurs.

Elle aura un impact supplémentaire si elle est utilisée en masse :
* Nombre d’accès à l’API ;
* Nombre d’utilisateurs actifs ;
* Statistiques du statut de l’API ;
* Nombre d’accès à la documentation ;
* Nombre d’exports de jeux de données proposés par l’API.
