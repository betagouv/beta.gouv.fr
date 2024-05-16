---
mission: >-
  Outiller les collectivités et les services de l’Etat afin de permettre aux
  territoires de suivre et d’agir pour la réduction de la fracture numérique.
incubator: anct
repository: >-
  https://gitlab.com/incubateur-territoires/startups/infrastructures-numeriques/infra-num
contact: tous-connectes@anct.gouv.fr
usertypes:
  - collectivite-territoriale
  - etat
title: Toutes et tous connecté·e·s
sponsors:
  - /organisations/anct
link: https://tous-connectes.anct.gouv.fr/
phases:
  - name: investigation
    start: 2022-05-01
  - name: construction
    start: 2022-11-01
thematiques:
  - Inclusion numérique
accessibility_status: non conforme
dashlord_url: https://dashlord.incubateur.anct.gouv.fr/url/tous-connectes-anct-gouv-fr/
stats_url: https://tous-connectes.anct.gouv.fr/statistiques-et-impact
mon_service_securise: true
---
# Contexte
L’amélioration de la couverture fixe, comme mobile est une priorité du Gouvernement afin de permettre à l’ensemble des Français, quel que soit leur lieu de résidence, de bénéficier d’une couverture de qualité. Les programmes France Très Haut Débit et France Mobile ont été conçus en ce sens. Ils pilotent les déploiements d’infrastructure numérique sur le territoire.

La startup d’Etat Infrastructures Numériques  a pour objectif d’outiller les collectivités et les services de l’Etat dans l’animation de ces politiques publiques afin de permettre aux territoires de suivre et d’agir pour la réduction de la fracture numérique.

Une nouvelle plateforme doit répondre  aux besoins de transparence et de leviers d’action pour les collectivités de façon conjointe sur la couverture internet mobile et sur la couverture internet fixe. Une plateforme commune entre fixe et mobile permet, d’une part de faciliter l’appropriation par les collectivités qui interviennent sur les sujets fixe et mobile, et d’autre part de permettre des croisements d’informations entre ces politiques publiques. Dans un premier temps, les développements seront priorisés sur le volet mobile de l’application, même si la conception de l’interface devra anticiper le volet fixe. 

Cette plateforme ne se contente pas de fournir de l’information de l’ANCT aux utilisateurs, mais également dans le sens inverse. Elle constituera un véritable outil d’aide à la décision des politiques publiques locales d’aménagement numérique. Les besoins utilisateurs sont au centre de la définition de cette plateforme.

# Problèmes et solutions envisagées
## Volet de la plateforme consacré au suivi du programme France Mobile
### Le dispositif de couverture ciblée : un coup d'entrée technique supporté par tous
Le New Deal mobile, issu d’un accord historique entre le Gouvernement, l’Arcep et les opérateurs mobiles, a pour objet la généralisation de la couverture mobile pour tous. 
Sa mise en œuvre efficace suppose la coordination de l’Etat, des collectivités territoriales et des opérateurs. Cette coordination s’appuie sur des outils bureautiques (Suite Office, mail) qui ne permettent pas de répondre aux exigences quotidiennes de ce dispositif.

En 2016, une plateforme a été développée afin d’identifier et de centraliser les signalements des élus sur les carences de couverture mobile via le remplissage d’un formulaire technique (coordonnées géographiques, etc.).
Cette plateforme, dont le code n’a pas été actualisé, est aujourd’hui dysfonctionnelle. 
La complexité générale de cette mise en œuvre favorise l’erreur et rend difficile l’appropriation par tous d’un dispositif qui réduit la fracture numérique et qui change la vie des français.

### Faciliter la mise en oeuvre du dispositif, de l'identification d'un besoin au déploiement d'un pylône
Cette nouvelle plateforme permettra à l’ensemble des acteurs du dispositif de se créer un compte. Une fois le compte créé, il est possible de naviguer sur une carte interactive et d’accéder à un espace type, défini par le statut de l’utilisateur.

Sur la carte interactive, il est possible de signaler une zone prioritaire à couvrir et de suivre, sur l’ensemble du territoire métropolitain, l’avancée des pylônes arrêtés par le dispositif. En outre, des données pourront être injectées afin d’adapter le contenu à la réalité du terrain (résultats d’études radio, shp de la cartographie radio, etc.).

Les espaces types centralisent les informations à une échelle préalablement définie (nationale, régionale, départementale) et permettent d’entrer dans le détail de chaque situation. L’interaction en fonction des différentes phases de travail est également souhaitée afin d’optimiser les processus.

## Volet de la plateforme consacré au suivi du programme France Très Haut Débit
### Le Programme France Très Haut Débit
Le Plan France Très Haut débit fixe des objectifs ambitieux pour la couverture en internet fixe des Français, garantir à tous :
•	un accès au bon haut débit (supérieur à 8 Mbit/s) d’ici 2020 ;
•	un accès au très haut débit (supérieur à 30 Mbit/s) d’ici 2022 ;
•	un accès aux réseaux de nouvelle génération principalement en fibre optique jusqu’à l’abonné (FttH) à horizon 2025, en phase avec l’objectif européen de « Gigabit society ».

Le Plan France Très Haut Débit a été pensé comme un projet décentralisé, s'inscrivant dans une stratégie nationale, et mobilisant les opérateurs privés et les collectivités territoriales pour le déploiement des nouveaux réseaux très haut débit sur l'ensemble du territoire. Le pilotage du Plan est confié au Programme France Très Haut Débit de l’Agence Nationale de la Cohésion des Territoires.

Les collectivités territoriales ont la responsabilité d'apporter le très haut débit dans la majeure partie des territoires ruraux ; ces réseaux d'initiative publique (RIP) sont soutenus financièrement par l'État à hauteur de 3,5 milliards d'euros et par l’Union européenne. Ils visent ainsi à couvrir 38 % des foyers, entreprises et établissements publics du territoire national, répartis sur plus de 28 000 communes.

### L'extranet du plan France THD, une plateforme web existante à destination des services de l'Etat
L’extranet du Plan France THD est une plateforme permettant de centraliser l’ensemble des informations et documents de suivi du plan France THD et de les partager avec les différentes parties prenantes (DGE, DB, DGCL, CDC, Arcep, préfectures, cabinets, etc.).

Il est utilisé en interne pour avoir une vision globale de l’ensemble des projets de collectivités dans le cadre du Plan France Très Haut Débit, et également en externe (avec les administrations partenaires du PFTHD)  avec un accès restreint. Il comporte :
•	les données chiffrées relatives à tous les projets des collectivités (subventions, investissements, unités d’œuvre …),
•	les documents et événements relatifs à la vie de l’instruction des demandes de subvention des projets,
•	des graphes pour visualiser les données,
•	la gestion des types d’accès : interne et plusieurs types d’externes en fonction des besoins (membres du COEX, membres du CESAR, etc.).

L’extranet est composé de trois modules :
•	un module « instruction » permettant de suivre l’avancement de l’instruction des demandes de subvention de chaque projet,
•	un module « statistiques » fournissant les chiffres clés d’avancement des déploiements à l’échelle nationale ou territoriale,
•	un module « décaissement » permettant de suivre l’avancement des versements des subventions de chaque projet.

De nouvelles fonctionnalités répondant aux besoins remontés par les rapporteurs ou par les administrations partenaires sont ajoutées au fil de l’eau. L’Extranet L’extranet doit évoluer avec les nouveaux besoins pour être le plus utile aux besoins externes et internes, au-delà de la maintenance et de corrections mineures. 

## Une plateforme commune d'échanges avec les collectivités sur les infrastructures numériques
Si l’extranet est un outil précieux pour les échanges avec les administrations de l’État, le suivi de la couverture fixe nécessite également une plateforme d’échange avec les collectivités. Il est donc prévu de mutualiser l’interface avec ces dernières entre aménagement fixe et mobile en capitalisant sur la nouvelle plateforme. L’extranet ne sera donc conservé que pour les échanges internes au sein de l’État et pourra alimenter en données la plateforme commune. 

Voici quelques exemples non exhaustifs de fonctionnalités qui pourront être développées sur le volet fixe de la plateforme :
•	Transfert de données liées à l’instruction des projets soutenus par le plan France THD 
•	Calendrier d’évènements 
•	Échanges d’informations descendantes (État vers collectivités), ascendantes (collectivités vers État) ou transverses (collectivités entre elles)
•	Liens avec d’autres plateformes / outils existants produisant des données, cartes, visualisations.
•	Etc.
### Un one-stop-shop au service de la couverture fixe et mobile des territoires
De l’identification des zones prioritaires à couvrir jusqu’à la mise en service sur le volet mobile et du déploiement jusqu’à l’exploitation sur le volet fixe, la nouvelle plateforme incarne un one-stop shop de l’aménagement numérique fixe et mobile pour les collectivités. 

Il sera possible de l’alimenter ou d’en extraire des données de façon simple, via des outils intelligibles, mais aussi de partager de l’information entre collectivités. La carte interactive et le clic remplacent Excel, fichiers de suivi et démarches complexes. La data-visualisation remplace la donnée brute.

Par sa modularité, la plateforme s’adapte aux besoins actuels et futurs.

Bien entendu, cette liste ne représente que des hypothèses de départ qu'il s'agira de challenger en respectant la phase d'investigations de la méthodologie startup d'Etat.