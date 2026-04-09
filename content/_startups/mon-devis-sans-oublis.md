---
accessibility_status: non conforme
contact: martin.letellier@beta.gouv.fr
repository: https://github.com/betagouv/mondevissansoublis/
link: https://mon-devis-sans-oublis.beta.gouv.fr/
redirect_from:
  - /startups/checklist.demande.aides.renovation.energetique.html
thematiques:
  - Écologie
  - Administratif
  - Logement
usertypes:
  - particulier
  - entreprise
techno:
  - rails
  - publi.codes
title: Mon Devis Sans Oublis
mission: Fluidifier l'instruction des aides en limitant les allers-retours sur les devis lors de l'instruction des dossiers de demandes d'aides à la rénovation énergétique pour les logements des particuliers
incubator: mtes
sponsors:
  - /organisations/agence-national-de-l-habitat
  - /organisations/dgaln
  - /organisations/dgec
  - /organisations/dhup
phases:
  - name: investigation
    start: 2023-11-27
  - name: construction
    start: 2024-10-01
fast:
  promotion: 17
  montant: 100000
stats_url: https://mon-devis-sans-oublis.beta.gouv.fr/statistiques
dashlord_url: https://dashlord.mte.incubateur.net/url/mon-devis-sans-oublis-beta-gouv-fr/
events:
  - name: product_launch
    date: 2025-01-13
    comment: Lancement de la 1ere version en Beta restreinte
  - name: committee
    date: 2025-01-28
  - name: fast
    date: 2025-10-01
---
Le produit Mon Devis Sans Oublis a fermé en Mai 2026. Pour aller directement au post-mortem, c'est [ici](#quelques-éléments-de-contexte). :


## Contexte

**Le logement représente 11 % de nos émissions de gaz à effet de serre (GES).** Il s’agit du deuxième plus gros poste d’émission après les transports. Le gouvernement s’est dès lors fixé des ambitions importantes en matière de rénovation énergétique des bâtiments et vise **700 000 rénovations par an**.

On doit donc accélérer la rénovation du parc privé et c'est pour cela que de nombreuses aides sont à disposition des ménages : MaPrimeRenov', les CEE, les éco-prêts à taux 0, la TVA à 5.5% et de nombreuses aides locales.

Malheureusement, certains ménages ont des craintes, fondées ou non, de ne pas savoir faire un dossier d'aide, ou encore de devoir attendre trop longtemps les aides. Certains abandonnent, certains font sans aide. C'est un fait : **un dossier incomplet ou mal renseigné notamment sur les devis peut conduire à des allers-retours qui rallongent énormément les délais d'instruction.**


## Problèmes

Aujourd'hui, **la très grande majorité des devis et des factures comportent des erreurs ou des mentions manquantes** puisqu'il est aujourd'hui difficile de savoir précisément quelles sont les informations demandées.

Cela entraîne  **de nombreux allers-retours chronophages et frustrants** pour toutes les parties prenantes (particuliers, artisans, conseillers Espace France Rénov...). 

Les délais d'instruction peuvent alors devenir très longs et la réputation de ces aides peut alors être entachée et les aides moins sollicitées. 


De plus, la nomenclature des gestes de travaux aidés n'est pas harmonisée car il existe plusieurs référentiels pour les aides. Aucun modèle de données ne liste les attendus pour chaque aide en termes de mentions minimums (généralistes et par geste) à fournir dans les devis et les factures. La réglementation est mouvante, les initiatives sont nombreuses mais les acteurs ont du mal à s'y retrouver.


## Solutions

**Mon Devis Sans Oublis aide les particuliers et les artisans à déposer des dossiers complets afin de réduire au maximum les délais d'instruction.**

Nous allons créer un **outil de pré-vérification automatique des devis** pour s'assurer d'avoir toutes les informations nécessaires à l'instruction. 
De cette manière, les devis passant par Mon Devis Sans Oublis n'auront pas d'échanges demandeurs et les délais d'instruction seront alors beaucoup moins importants. 

Cet outil se décompose en 3 briques : 

- Une brique de **lecture automatique de devis pdf** pour en sortir les données structurées 
- Un **algorithme de conformité** vérifiant ces données par rapport à la réglementation et vérifier que l'instruction peut se faire sans demandes complémentaires. 
- Une **interface d'aide à la correction du devis**

## Stratégie

L'objectif de cet outil est qu'il soit disponible sur l'ensemble du parcours utilisateur afin d'avoir un maximum de dossiers complets. 
Mon Devis Sans Oublis sera alors disponible depuis une interface web mais aussi en API pour pouvoir le pousser auprès des différents acteurs de l'éco-système.



**L'impact attendu se mesure avec différents KPIs :** 
- Baisse du nombre d'allers-retours sur les devis lors de l'instruction
- Délais d'instruction des aides raccourcis 
- Prise en main par les Espace France Rénov et les différents acteurs de la chaîne de valeur.

## Quelques éléments de contexte


* 10/2024 : Premiers développements sur Mon devis Sans Oublis après avoir échangé avec l'ensemble de la filière (publique et privé)

* 01/2025 : Sortie de la première version de Mon Devis Sans Oublis

* 27/03/2025 : 1000 premiers devis analysés

* 05/2025 : 1000 devis analysés en 1 semaine

* 06/2025 : Suspension temporaire du guichet

* 09/2025 : Réouverture du guichet mais avec très peu de volume

* 31/12/2025 : Fermeture temporaire du guichet en l’absence de loi de finances pour 2026

* 23/02/2026 : Re-ouverture du guichet pour l'ensemble des parcours et l'ensemble des ménages avec un rendez-vous personnalisé obligatoire avec un conseiller France Rénov’ .

## Usage de Mon Devis Sans Oublis en mars 2026

* Environ **200 visites par semaine**

* Environ **100 devis analysés par semaine**

* **11 000+ devis analysés** depuis Janvier 2025 et 7000 visiteurs

![Statistiques Mon Devis Sans Oublis](https://beta.gouv.fr/assets/images/stat-mdso.png)

## Typologie des devis

* **Majorité de rénovations d’ampleur**

* **Grosse majorité d’utilisateurs conseillers** (accompagnateurs, structures d’accompagnement)

![Devis analysés par type de rénovation](https://beta.gouv.fr/assets/images/type-reno-mdso.png)
![Devis analysés par personae](https://beta.gouv.fr/assets/images/personae-mdso.png)

## Budget de la startup d'état

455 k€ sur 2 ans :

* 15% de coaching

* 15% de déploiement

* 70% sur le produit tech

## Constats

*Mon Devis Sans Oublis* (MDSO) vise à automatiser la pré-instruction des devis de rénovation énergétique afin de réduire au maximum le nombre d'allers-retours avec les instructeurs.

En quelques mois, une solution efficace est sortie de terre et apporte déjà beaucoup de valeur à ses utilisateurs. La filière reconnaît l'intérêt d'une telle solution (plus de 300 visios avec des acteurs publics et privés) et plus de 11 000 devis ont été analysés en 1 an ; 3 partenariats API avec des outils métiers en production et une quinzaine en discussion d'intégration retardée compte tenu des suspensions et réouvertures du guichet.

Malgré des investissements significatifs (455 k€ au total) et les excellents retours de la première année, le projet rencontre des obstacles majeurs :

* **Faible impact usagers à court terme** : Les importants retards dans l’instruction du stock de dossiers à l’ANAH (6-7 mois voire plus dans certains territoires) rendent l’optimisation des dossiers presque invisible pour les usagers concernant les délais d'instruction.

* **Blocages techniques** : L’intégration aux SI de l’ANAH est actuellement limitée par les délais d’évolution de ses systèmes dans le cadre du nouveau modèle de distribution ; parcours usager et instructeur non testable.

* **Dynamique MaPrimeRénov' fortement ralentie** : Suspension temporaire en juin 2025, réouverture partielle en septembre 2025 avec une dynamique beaucoup plus faible. Fermeture totale au 1er janvier en l'absence de loi de finance puis réouverture avec un marché difficile et de nombreux acteurs en difficulté économique.

* **Un besoin de financement encore important** : Nous n'avons pas encore l'outil suffisant pour répondre parfaitement aux besoins utilisateurs. Plusieurs fonctionnalités majeures et l'amélioration de la fiabilité restent à développer dans un contexte de restriction budgétaire.

## Bilan et apprentissages

Les conditions pour que Mon Devis Sans Oublis puisse avoir un impact significatif sur la filière sont les suivantes :

* L'outillage des conseillers avec MDSO pour que la filière et les instructeurs utilisent le même système de contrôle. Cela nécessite l'intégration de MDSO dans les SI de l'ANAH.

* Traiter le stock de dossiers le plus rapidement pour revenir à des délais plus cohérents avec le terrain (MDSO pourrait aider en automatisant une pré-instruction sur l'ensemble du stock).

Début 2026, les conditions nécessaires pour atteindre ces objectifs dans un délai raisonnable ne sont pas réunies. Aussi, la DGALN et la DINUM ont convenu de suspendre Mon Devis Sans Oublis le temps de réunir l’ensemble des conditions requises.

Voici les principaux enjeux et pistes d’amélioration que nous avons identifiés début 2026 pour la filière de la rénovation énergétique des logements :

### Instabilité et incertitude économique

  La filière de la rénovation énergétique traverse une période d’instabilité marquée, ce qui entrave son développement et sa pérennité. Les ménages et les professionnels expriment des réticences à s’engager, en raison notamment de l’absence de visibilité sur les dossiers à venir. Les professionnels envisagent une baisse d'activité conséquente pour 2026.

  Cette situation conduit certains acteurs à envisager des plans de restructuration ou une diversification de leurs activités, notamment vers le secteur tertiaire et copropriété.

  Les aides publiques sont perçues par certains professionnels comme mal adaptées aux besoins réels, incitant les professionnels à privilégier les projets les plus rentables ou les moins risqués.

  **Quelques pistes d'amélioration :**

  * Renforcer la transparence sur les procédures et les budgets (délais d'instruction, état du budget consommé de MaPrimeRenov'...)

  * Clarifier et diffuser la dernière réglementation en vigueur ? (compliqué de savoir si tel ou tel message est bien le dernier à un instant T.)

### Manque de confiance généralisé

  La confiance est un des enjeux majeurs pour la rénovation énergétique des logements. La méfiance des ménages et des professionnels à l'égard de la rénovation énergétique s'explique par plusieurs facteurs :

  * Opacité des délais de traitement des dossiers

  * Interrogations sur la qualité des travaux réalisés et leur conformité

  * Perte de crédibilité du label RGE (Reconnu Garant de l'Environnement)

  * Risque de fraude

  * Incertitude sur le maintien des aides

  Ici s'appuyer sur la donnée semble être une des pistes les plus sérieuses à envisager.

  **Quelques pistes pouvant aider à redonner de la confiance :**

  * Exploiter les données disponibles (CSTB, ANAH, PNCEE, ADEME, etc) pour mieux évaluer les entreprises, les chantiers et renforcer la traçabilité des projets. Cela rejoint en partie le carnet d'information du logement.

  * Interopérabilité entre les acteurs

  * Suivi des chantiers dans le temps pour identifier des changements non pertinents ou des situations à risque (photos horodatées et géolocalisées).

  * Faciliter l'accès des ménages à des outils leur permettant de vérifier la cohérence de leur projet (devis, choix techniques, enchaînement des travaux).

  * Améliorer la transparence sur les aides, le budget, les délais, ...

### Complexité et instabilité de la réglementation

  La réglementation en matière de rénovation énergétique est perçue comme complexe et sujette à des évolutions fréquentes, ce qui génère des incompréhensions et des difficultés d’application pour l’ensemble des acteurs.

  Chaque intervenant (y compris les instructeurs) utilise ses propres outils de suivi, souvent sous forme de fichiers Excel mis à jour de manière informelle.

  **Piste d'amélioration :**

  Accélérer le déploiement du Référentiel Numérique des Travaux (RNT) afin d’harmoniser les pratiques et de fluidifier les échanges entre les parties prenantes. Nous devons déployer un socle de conformité permettant à la filière de se focaliser sur leur valeur ajoutée.

### Le financement : Un levier essentiel pour la rénovation

  La rénovation énergétique représente un investissement souvent non rentable pour les ménages sans le concours d’aides publiques. Il est donc crucial d’optimiser les dispositifs de financement existants et d’en faciliter l’accès.

  * Promouvoir et simplifier l’accès à l’éco-PTZ, notamment dans un contexte où MaPrimeRénov’ rencontre des difficultés.

  * Développer des outils permettant aux ménages de mieux maîtriser leur reste à charge (par exemple, via des contrats de performance énergétique ou des solutions de financement alternatif).

  * Sensibiliser les ménages aux gains concrets de la rénovation (amélioration du confort, réduction des factures d’énergie, valorisation du patrimoine).

## Vous voulez relancer un produit similaire ?

Nous vous conseillons fortement de vous rapprocher du référentiel numérique de travaux qui permet d'avoir un socle de conformité sur lequel tous les acteurs peuvent se baser.\
<https://gitlab.com/referentiel-numerique-travaux/referentiel-numerique-travaux>

Il est important que toute la filière utilise un outil commun et un langage commun afin d'éviter des incompréhensions et des délais supplémentaires.

La fiabilité est un sujet clé avec l'IA qui par construction n'est pas 100% fiable. Un outil comme MDSO ne peut être qu'un outil d'aide à la décision pour s'assurer de faire le moins d'erreurs possible.

Un outil intégré au parcours utilisateur est nécessaire afin d'apporter le plus de transparence et de fluidité possible. Il est important d'apporter une première réponse en direct de l'état afin de perdre le moins de temps possible.

### Ressources

Voici les liens pour retrouver le code source :

**Backend** : <https://github.com/MTES-MCT/mon-devis-sans-oublis-backend>

**Frontend** : <https://github.com/MTES-MCT/mon-devis-sans-oublis-frontend>

**OCR** : <https://github.com/MTES-MCT/mon-devis-sans-oublis-backend-ocr>

**Référentiel Numérique des Travaux** : <https://gitlab.com/referentiel-numerique-travaux/referentiel-numerique-travaux>

