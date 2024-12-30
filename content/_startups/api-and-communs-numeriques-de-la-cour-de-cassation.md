---
analyse_risques: false
mon_service_securise: false
contact: info.nomos2@justice.fr
thematiques:
  - Justice
usertypes:
  - magistrats, avocats, procureurs, greffiers, justiciables
techno:
  - ansible
  - Terraform
  - Jenkins
  - Redhat
  - Debian
  - docker
  - kubernetes
  - php
  - timescript
  - NodeJS
  - react
  - github actions
title: 'API & communs numériques de la Cour de cassation   '
mission: Rendre accessible de manière pseudonymisées les décisions, les rapports, les documents des procédures de la Cour de Cassation pour faciliter la prise en compte de la jurisprudence pour les magistrats, les avocats, les procureurs, les greffiers, les justiciables. Visualiser les données pour permettre le pilotage des activités de la Cour de Cassation.
incubator: justice
sponsors:
  - /organisations/cour-de-cassation
  - /organisations/mj
phases:
  - name: investigation
    start: 2025-01-27
  - name: construction
    start: 2025-04-15
  - name: acceleration
    start: 2025-09-30
  - name: success
    start: 2026-01-30
events:
  - name: other
    date: 2024-12-23
    comment: ' Création de la fiche produit'
---
## Contexte

La Cour de Cassation a pour mission d’unifier et de contrôler l'interprétation du droit par l’ensemble des juridictions de l’ordre judiciaire. A cette fin, elle est saisie chaque année de plus de 20.000 affaires. La Cour de cassation s’est en outre vue confier des missions en lien avec sa place particulière. Parmi celles-ci, la Cour est chargée de la diffusion en Open Data de l’ensemble des décisions judiciaires françaises, soit plusieurs millions de décisions de justice rendues chaque année. La Cour de cassation est également, notamment par l’entremise de son Service de la documentation, des études et du Rapport (SDER), chargée d’apporter son expertise à l’ensemble des juridictions judiciaires, notamment sous la forme de diffusion documentaire.
Elle a dans ses missions l'enrichissement documentaire des données relatives aux décisions prises par la Cour (métadonnées).
Dans l’exercice de ces missions, elle doit garantir l’exactitude et la mise à disposition de données fiabilisées, structurées et normalisées concernant les données de procédure et les documents produits. Par ailleurs, elle doit tracer, enrichir et fiabiliser les échanges entre la Cour, les parties et l’ordre des avocats aux Conseils.


## Problème

La Cour de Cassation sert à la fois des utilisateurs internes (magistrats, greffiers), les parties et leurs conseils en proximité (requérants, avocats aux Conseils), ainsi que des utilisateurs des données / décisions produites par la Cour (juridictions, communauté des juristes, notamment par l’intermédiaire des éditeurs juridiques, grand public). Chacun doit pouvoir accéder aux informations qui lui sont utiles de manière fiable, actualisée et sécurisée. 

Les interfaces actuelles sont le fruit de développements successifs exploitant des technologies hétérogènes, partiellement obsolètes et peu documentées. En conséquence, la technicité et le temps requis pour la maintenance de l’ensemble de ces interfaces n’a cessé de croître pour atteindre une masse critique venant largement obérer la capacité à innover de la juridiction pour mieux répondre aux besoins de ses usagers. Ces interfaces nécessitent en outre d'être adaptées aux standards et usages actuels des différents consommateurs d'une donnée structurée, enrichie et fiable.

Aujourd'hui les difficultés suivantes sont observées :
* Décentralisation des données à exploiter :
Chaque outil du système qui est proposé à la Cour consomme et/ou délivre des données utiles aux traitements globaux des activités de la Cour. La complexité technique et fonctionnelle de l’ensemble du système est proportionnelle à la diversité et aux spécificités de ces outils. Le besoin d’adaptabilité requis par les processus juridictionnels et les organisations de la Cour vient d’avantage complexifier la structure hétérogène du système.
* Evolutivité / Administration limitée :
Les données sont consommées et/ou restituées sous de multiples formats et modalités ce qui en rend l’administration et, parfois, l’usage, très complexe. En l’état actuel du système, la maîtrise de ces différents processus et la transmission de cette maîtrise est devenue critique.

Plusieurs applications s’interfacent au système d'information de la Cour de Cassation (NOMOS 2) pour répondre à différents usages et ont été développées avec des temporalités différentes :
* COMAVO : Interface d’échange de données et de documents entre NOMOS et le SI métier des cabinets des avocats aux conseils.
* JURINET : Publication et recherche de décisions (Cour de cassation) et de documents d’instruction préparatoire accessibles aux magistrats de l’ordre judiciaire et de l’ordre administratif.
* JURICA : Publication et recherche des décisions des cours d’appel en matière civile accessible aux magistrats de l’ordre judiciaire et de l’ordre administratif (import dans NOMOS, depuis cette base, du code NAC (nomenclature des affaires) et du référencement de la décision attaquée).
* JUDILIBRE : Publication et recherche de décisions pseudonymisées de l’ensemble des juridictions judiciaires accessible au public et référencée open data.
* SITE INTERNET DE LA COUR : plusieurs fonctionnalités sont offertes aux utilisateurs justiciables, dont la possibilité d’accéder au statut d’un dossier (pour un justiciable donné), d’effectuer une demande d’aide juridictionnelle, de demander la production d’un certificat de non pourvoi ou de consulter le calendrier des audiences civiles et pénales.
* DOCAPOSTE : service d’imprimante virtuelle permettant la rematérialisation et l’envoi postal de courriers de procédure.
* BOBI (SAP BusinessObject business intelligence) : infocentre offrant une liste d’états paramétrés pour être librement exécutés par les utilisateurs avec quelques variables.
* Outil de traitements de statistiques (Scripts R exécutés sur les résultats de requêtes SQL adaptées aux besoins).

Les données à diffuser doivent être diversifiées, fiables, pseudonymisées ou anonymisées et enrichies de métadonnées pour en faciliter la recherche par mots clés. 


## Solution

L'API "Cour de Cassation" doit devenir point d’entrée unique et documenté pour faciliter l’accès à toutes les données relatives aux procédures et décisions de la Cour de Cassation. Elle est adaptée à chaque typologie d'utilisateurs et permet une sécurité accrue dans le partage des informations nécessaires aux besoins de chacun.
Elle est complétée par des traitements d’anonymisation et de pseudonymisation des décisions rendues et autres documents de procédure. 
Les données ainsi collectées permettent aussi de piloter l'activité de la Cour.



## Stratégie

En premier lieu, il faut permettre l'accès aux décisions de justice ainsi qu’à l’ensemble des données et documents de procédure : API décision (données fiabilisées et enrichies de métadonnées). A cette étape les scripts et batchs qui assurent le fonctionnement des interfaces en production seront soit décommissionnés soit revus, corrigés et optimisés. 
En deuxième lieu, il faut pseudonymiser et/ou anonymiser les décisions et documents de procédure : évolution puis interfaçage des traitements de pseudonymisation et d’anonymisation.
En troisième et dernier lieu, des travaux facilitant le pilotage de l'activité de la Cour seront entrepris. 

Elle aura un impact avéré si elle permet à ses utilisateurs :
* de gagner du temps dans la conception ou l’amélioration de leurs applications interfacées au bénéfice de leurs utilisateurs finaux communs (mesure par questionnaire sur le temps gagné à utiliser l’API de la Cour de Cassation par rapport au temps de recherche d’informations, ou de collecte et maintenance des bases de données en propre) ;
* de consommer des données qui ne leur étaient jusque la pas accessibles pour concevoir de nouvelles applications et services propres à aider les acteurs de l'écosystème : requérants, avocats et juridictions (mesure par questionnaire sur les usages de l’API) ;
* d'améliorer l’indexation et la recherche des décisions antérieures (mesure des temps passés actuels vs temps passés post mise en production) ;
* de mesurer la pertinence des résultats remontés (analyse de la jurisprudence) : taux de pertinence actuels vs taux de pertinence des résultats futurs.

Elle aura un impact supplémentaire si elle est utilisée en masse :
* Nombre d’accès à l’API
* Nombre d’utilisateurs actifs
* Statistiques du statut de l’API
* Nombre d’accès à la documentation
* Nombre de téléchargements de fichiers plats associés à ce à quoi permet d’accéder l’API

