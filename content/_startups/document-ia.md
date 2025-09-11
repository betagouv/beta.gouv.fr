---
analyse_risques: false
mon_service_securise: false
contact: romaric.haldenwang@beta.gouv.fr
thematiques:
  - Administratif
  - IA
usertypes:
  - etat
techno:
  - python
title: DocumentIA
mission: Automatiser le traitement des pièces justificatives pour accélérer les démarches administratives et éliminer les aller-retours entre les usagers et les instructeurs, en déployant d'abord la solution sur deux démarches pilotes du MTE.
incubator: alliance
sponsors:
  - /organisations/dinum
  - /organisations/mtes
phases:
  - name: construction
    start: 2025-07-31
events:
  - name: product_launch
    date: 2025-07-31
  - name: other
    date: 2025-07-31
    comment: Financement FTAP IA
repository: https://github.com/betagouv/document-ia
link: ''
---
Dans **les dossiers de rénovation énergétique des bâtiments** comme dans les dossiers **de logements locatifs**, la performance des politiques publiques est freinée par un même obstacle structurel : la non-conformité des pièces justificatives qui génère des aller-retours entre le bénéficiaire et l'administration.

**Mon Devis sans Oublis** (rénovation énergétique) :

* **70 % des dossiers MPR à l’ANAH sont bloqués** à cause de devis ou factures non conformes.

* Cela entraîne des allers-retours entre particuliers, artisans et instructeurs, ce qui augmente drastiquement les délais d'instructions.

* La réglementation est **complexe et en constante évolution**, rendant son suivi difficile pour les différents acteurs.

* **Conséquences :** retards, abandons de projets, baisse du nombre d’artisans RGE, tensions de trésorerie, image de marque dégradée.

* **Résultat :** les objectifs ne sont pas atteints — **5 millions de passoires thermiques** restent à rénover.

**DossierFacile** (logement locatif) :

* En 2024, **828 000 dossiers ont été traités**, dont **442 000 refusés** (soit plus de 50 %).

* La majorité des refus sont dus à des documents :

  * **flous, illisibles ou tronqués**

  * qui ne sont plus en cours de validité

  * qui ne correspondent pas à la **catégorie** attendue

  * dont le **bénéficiaire** ne correspond à celui du dossier

* Le système OCR et le moteur de règles en place sont limités à certains modèles de documents et détectent mal les erreurs.

* **Entre 70 et 80% des raisons de refus pourraient être automatisées**. L'instruction de dossiers "simples" (ex: CDI sans garant) pourrait entièrement être automatisée.

* Les délais lors d'aller-retours avec les instructeurs sont significatifs **1er quartile : 14h32 ; Médiane : 26h39 ; 3e quartile : 68h35.**

* **Conséquences :&#x20;**&#x43;es délais causent parfois la perte d’un logement pour les candidats.

En 6 mois, l'équipe de Mon Devis Sans Oublis a analysé 6000 devis et a développé une brique d'analyse documentaire relativement fiable, et l'équipe de Dossier Facile cherche encore à trouver d'automatisation de traitement documentaire qui convient à son cas d'usage.

### 🚀 La bonne idée : document IA

Plus largement, l'**analyse documentaire** (et la transformation d'un document en un ensemble de données structurées) et le **traitement de documents&#x20;**(souvent scannés) intéressent de nombreuses administrations (France travail, l'OFPRAH, les caisses de santé etc.). Ces solutions sont appelées des IDP, pour Intelligent Document Processing.

**Mon Devis Sans Oublis**

Nous lançons le développement d’une **nouvelle plateforme de dépôt de dossiers d’aide à la prévention du retrait-gonflement des argiles (RGA)**, adossée à **Démarches Simplifiées**.

Ce dispositif, doté d’une enveloppe expérimentale de **30 millions d’euros**, sera déployé sur **4 à 5 départements** et s’inspire des règles de **MaPrimeRénov’**.

En combinant **Mon Devis Sans Oublis** à Démarches Simplifiées, nous pourrons apporter une **première réponse automatisée sur la conformité du dossier**, sans attendre une instruction manuelle.

Nous proposons une expérimentation en deux volets :

* **Créer une démarche RGA centrée sur l’utilisateur**, intégrant des pré-contrôles automatisés pour accélérer et fluidifier le parcours, avec une première évaluation en quelques minutes.

* **De concert avec Dossier facile, développer et intégrer une brique de traitement automatisé de documents** directement dans Démarches Simplifiées, pour tester sa capacité à détecter automatiquement les pièces non conformes.

L'objectif de ce nouveau projet est de renforcer notre brique OCR avec un deuxième cas d'usage (MaPrimeRenov' puis RGA) afin de valider qu'elle peut être utile sur plusieurs verticales. Mais aussi de montrer que le numérique peut aider à avoir des démarches moins orientées guichet où l'utilisateur doit attendre plusieurs semaines qu'un instructeur analyse son dossier.

**Dossier facile**

Nous souhaitons aujourd’hui mettre en oeuvre une brique technologique plus performante que le simple OCR que nous utilisons aujourd’hui afin de:

* **Classifier plus précisément les pièces justificatives d’un dossier afin de pouvoir caractériser leur type et rejeter automatiquement les documents flous, tronqués, incomplets, illisibles ou les documents non pertinents.**

* **Extraire de manière automatique des pièces justificatives les informations qui sont nécessaires à leur évaluation. Afin de pouvoir effectuer la validation de règles métiers sur leur contenu.**

* Fournir un outil d'aide à la décision pour les opérateurs pour leur faire gagner en efficacité de traitement.

* Automatiser le traitement de certains documents d'un dossier. Voire pour certain dossier simple, automatiser intégralement leur validation.

DossierFacile traite un volume mensuel de plus de 700 000 documents, ce qui permettra d'avoir des résultats concrets et observables rapidement, et pouvoir faire évoluer la solution en conséquence pour maximiser l'impact.

### 📊 Pari d'impact à 6 mois : principaux bénéfices et indicateurs clés d'impact mesurable

**Mon Devis Sans Oublis**

La première version de la démarche pour l'aide RGA sera mise en ligne d'ici mi Septembre.\
Nous pourrons ensuite la faire évoluer petit à petit pour automatiser certains pré-contrôles grâce aux intégrations que nous mettrons en place sur Démarches Simplifiées.

**Les objectifs d'impact sont alors les suivants :**

* Au moins 50 dossiers d'aide traités sur le dispositif de prévention RGA

* Au moins 1 autre démarche utilise notre brique de lecture de document via Démarches simplifiées

**Dossier facile**

Développer une brique d'intelligence documentaire comprenant un OCR, de la classification et de l'extraction qui permette de **rejeter automatiquement les documents flous, non pertinents et de déclencher la vérification de règles métiers simples**.

Sur les 3 catégories de documents les plus refusés, automatiser les vérifications suivantes :

* Le document est-il flou ?

* Le document est-il bien de la catégorie attendue ?

* Est-ce que le nom et prénom indiqué sur le document correspondent bien au bénéficiaire du dossier

* Est-ce que le document est en cours de validité ?

**Les objectifs d'impact sont alors les suivants :**

Pour les 3 catégories de documents sélectionnées :

* Réduire de 40% les raisons de refus sur ces catégories de documents

De manière générique :

* Amélioration détection de flou : réduire de 90% les refus manuels parce qu'un usager a transmis un document flou.

* Amélioration de la catégorisation de documents : réduire de 70% les refus manuels parce qu'un usager a transmis un document qui ne correspond pas à la catégorie attendue.

### ⚙️ Technologie et mise en œuvre

Un outil générique, clé en main (ie directement utilisable par une administration) pensé pour devenir un commun numérique au sein de l'Etat.

Les fonctionnalités suivantes sont envisagées en vision cible :

* **Image processing** : détection de flou, de contours, d'orientation, lecture QRcode, 2DDOC

* **OCR** : reconnaissance des textes, tableaux, formulaires

* **Classification** : classification du type de document parmi une liste extensible de catégories de documents

* **Extraction** : extraire des informations sous la forme d'un schéma standardisé à partir des résultats de l'OCR

* **Evaluation performance** : à partir d'un dataset définir la précision et le rappel de chaque tâche

* **Moteur de règles** : permettre de déclencher des checks de cohérence sur le document en fonction de règles métier.

* **Console d'administration** : permettre à nos utilisateurs d'être autonome dans la création et la configuration de leur workflow d'automatisation de documents.

Elles feront l'objet d'une priorisation lors de la construction d'un premier démonstrateur (MVP).

En fonction de la stratégie technique suivie, cette solution mettra en oeuvre les technologies suivantes :

* **Image processing :&#x20;**&#x41;lgorithmes de traitements d'image et modèles ML fine-tuned

* **OCR** : Algorithmes et librairies open-source auto-hébergés

* **Classification / Extraction** : Modèles ML et/ou LLMs

* **Evaluation performance** : Librairies open-source et développement spécifiques

* **Moteur de règles** : Librairies open-source et développement spécifiques

* **Console d'administration** : Framework et librairies open-source, développement spécifiques
