---
analyse_risques: false
mon_service_securise: false
contact: jean.perret@beta.gouv.fr
thematiques:
  - Écologie
  - Collectivités
usertypes:
  - collectivite-territoriale
  - etat
title: Communs de la transition écologique des collectivités
mission: Maximiser l’impact global des services numériques publics pour la transition écologique des collectivités
incubator: dinum
sponsors:
  - /organisations/dinum
  - /organisations/sgpe
phases:
  - name: investigation
    start: 2024-06-15
  - name: construction
    start: 2024-09-16
events:
  - name: product_launch
    date: 2024-10-16
techno:
  - typescript
repository: https://github.com/betagouv/communs-de-la-transition-ecologique-des-collectivites
---
## Problème

Les collectivités territoriales sont un maillon essentiel de la transition écologique française. La déclinaison des objectifs nationaux de réductions des émission carbones et de préservation de la biodiversité repose sur les actions mises en oeuvre par ces acteurs territoriaux. 

De nombreux services numériques publics permettent d’accompagner les collectivités dans le diagnostic, la mise en oeuvre, le suivi de plan d’actions et l’accélération de projets de territoires.

Pourtant, cette offre de services souffre d’un manque de **lisibilité** et **d’interopérabilité** auprès des collectivités : 

- Il est difficile pour une collectivité d’identifier les services numériques les plus pertinents pour accélérer la mise en oeuvre de ses projets
- Il est laborieux de devoir toujours re-renseigner les mêmes informations à chaque nouvelle inscription à un nouveau service numérique.

Dans l’objectif d’augmenter l’impact global de ces services numériques pour les collectivités, la Direction interministérielle du numérique (DINUM) et le Secrétariat Générale à la planification écologique (SGPE) ont conduit une mission de convergence des services pour la transition écologique des collectivités financés par le Fonds d’investissement « Numérique et Données » pour la Planification écologique (FINDPE) en 2024. 

Les conclusions de cette mission ont fait émerger le besoin :

- d’une **coordination renforcée des roadmaps** de chaque produit pour garantir une véritable complémentarité des services
- de **Simplifier** l’expérience des collectivités et favoriser le **dites-le-nous-une-fois** entre les services disponibles
## Solution

Dans la continuité de cette mission de convergence et afin de simplifier et connecter cet écosystème de services numériques publics pour la transition écologique des collectivités, le SGPE et la DINUM ont lancé la construction de produits numériques incubés à l’Incubateur des services numériques de la DINUM : 

- Une **base de données de *projets de collectivités* de référence**. Cette base s’appuie sur un schema de données commun à l’ADEME, l’ANCT, le CGDD, le SGPE et la DINUM pour catégoriser ces projets. Un outil de qualification automatique permet de catégoriser les projets de collectivités dans ce référentiel.
- Un **widget d'aiguillage** permettant aux collectivités d'accéder aux services les plus pertinents en fonction de leurs projets . Ce widget a vocation à intégrer des services existants, à commencer par Mon Espace Collectivité, le guichet unique des collectivités.

Ainsi, chaque collectivité retrouvera facilement les informations renseignées de manière fragmentaires à travers les différents services. De même, l’usager en collectivité découvrira de façon centralisée les services numériques pertinents.

Ces deux produits composent la startup d’Etat des communs de la Transition écologique des collectivités. Concrètement, il s’agit d’un ensemble d’API et de composants d’interfaces pour s’intégrer dans d’autres applications déployées. Ce n’es donc pas une nouvelle URL pour les collectivités, mais  plutôt un “liant” entre services existants.

En favorisant la coopération entre services portés par des administrations différentes ( Ademe, ANCT, Cerema, Ministère de la transition écologique, etc…), les communs de la Transition écologique des collectivités jouent pleinement leur rôle interministériel. 

Si les communs de la transition écologique des collectivités constituent la pierre angulaire de cet écosystème, leur efficacité repose sur des bonnes pratiques adoptées progressivement par les services numériques bénéficiaires : 

- Dites-le-nous-une-fois :
    - L’adoption d’un **service d’authentification unique, Pro connect**, pour faciliter le partage d’informations entre services et diminuer la friction pour l’usager
    - la catégorisation des projets de territoires selon un même schema de données (présenté ci-dessus). Il s’agit de parler le même langage entre services.
    - le partage de ces projets dans la base de données de *projets de collectivités* de référence tenu par la DINUM et le SGPE
- Etat plateforme :
    - La connexion au widget pour orienter l’usager dans son parcours
    - La création et le maintien d’API pour interfacer les produits numériques entre eux
- Le partage de règles de bonne conduite :
    - Capitaliser sur la richesse de l’écosystème avant de développer un nouveau service
    - Penser d’abord tout nouveau service comme un module interopérable avec l’écosystème plutôt que comme nouvelle interface utilisateur
    - faire des services numériques bien identifiés, qui ont fairt la preuve de leur impact, le socle de l’écosystème

## Stratégie

**Développement des communs** :

Un premier POC (produit minimum viable) a été réalisé pendant l’été 2024. La construction des Communs a débuté en octobre 2024. 

SGPE, DINUM, CGDD, Ademe, ANCT se sont accordés schema de données de *projets de collectivités* fin 2024.  

Un premier service de qualification et une base de données des projets de collectivités seront disponibles début 2025. Il s’agira d’accompagner les différents services de l’écosystème dans l’intégration de ce référentiel commun et la connexion à cette base de données.

Une première version du widget d’aiguillage et d’accès aux différents services de l’écosytème sera mise en ligne en janvier 2025. Mon Espace Collectivité intègrera nativement ce widget dès le premier trimestre 2025. 

**Déploiement** :

Le succès des communs de la transition écologique des collectivités repose sur deux pilliers : 

- l’intégration et la connexion de la base de données et du widget par les services à impact de l’écosystème
- la capacité du ou des services qui intègrent le widget à se déployer auprès des collectivités

Dans la première partie de l’année 2025, l’équipe des communs aura donc pour mission d’accompagner les premiers services numériques publics à intégrer les communs. 

L’ensemble des services pertinents de cet écosystème sont visés par les communs. Impliqués depuis le début de la mission de convergence, les services financés par le FINDPE sont les premiers à se connecter aux communs et devront entraîner les autres services de l’écosystème. 

**Impact** : 

La métrique de pilotage principale, la north star, suivie est le nombre de nouvelles utilisations de services numériques de l’écosystème public permise par notre produit.

A terme, l’impact des communs sera mesuré à travers le succès global de l’écosystème connecté dans l’accélération des pojets de collectivités pour la transition écologique.