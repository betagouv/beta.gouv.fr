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
Document-IA est une solution **générique, souveraine** et **sécurisée** d'**analyse automatique** de **pièces justificatives**. Ce produit est portée par l'incubateur [ALLiaNCE](https://alliance.numerique.gouv.fr/) de la DINUM et pensé comme un commun numérique.

> Vous êtes un acteur de l'État et vous souhaitez bénéficier de la solution Document-IA ? Contactez l'équipe en charge de son déploiement en complétant ce [formulaire](https://grist.numerique.gouv.fr/o/document-ia/forms/3ovXs271FKtb8P22apK3eB/4) 👈

Consultez la [liste des pièces justificatives](https://github.com/betagouv/document-ia/tree/develop/document-ia-worker/src/document_ia_worker/core/prompt/document_type) actuellement compatibles avec Document-IA

> Vous êtes développeur et vous souhaitez consulter la documentation technique ? Consultez la section [📖 Comment l'utiliser ?](#-comment-lutiliser-)

---

### ⚡️ Enjeux

Chaque demande de subvention, chaque démarche entre l’administration et un particulier ou une entreprise contient des pièces justificatives. 
L’analyse manuelle pose les problèmes suivants : 

- **Chronophage**
*L’analyse manuelle est un goulot d’étranglement qui agrandit fortement le délai d’instruction et le temps de réponse à l’usager.*
- **Coût élevé** 
*Le coût humain pour lire des pièces justificatives et récupérer des données est très élevé et pèse sur la balance de l’État.*
- **Non standardisée**
*La lecture manuelle dépend de la compréhension et de l’expérience de l’instructeur. Cela pose un problème d’équité entre les dossiers. Cela provoque également des allers-retours inutiles entre les parties prenantes.*
- **Erreurs de lecture**
*Les pièces justificatives ne sont pas toujours normées. Il peut être compliqué de savoir où chercher une donnée et une lecture manuelle peut facilement passer à côté d'une information importante.*

---

### 💡 Produit

DocumentIA veut permettre à tout agent créant une démarche entre l’administration et un particulier ou une entreprise de définir un **workflow d’analyse de pièces justificatives.** 

L’objectif est de faire **gagner du temps à l’instructeur**, d’apporter une **première réponse en direct** de l’État à l’usager et d’avoir de la donnée structurée permettant un **pilotage plus précis**.

---

### 🛠️ Fonctionnalités

Document-IA déploie les fonctionnalités principales suivantes :

- **Détection de flou**
*S’assurer qu’une pièce justificative est lisible ou demander à l’utilisateur de la modifier avant l’envoi à un instructeur humain.*
- **Catégorisation**
*Si une carte d’identité est demandée, il faut s’assurer que le document déposé est bien une carte d’identité dès le dépôt plutôt que d’attendre l’analyse manuelle et un aller-retour avec l'instructeur.*
- **Extraction**
*Transformer un pdf en un ensemble de données structurées utilisables et utiles permet d’automatiser un bon nombre de vérifications et un pilotage plus précis.*
- **Conformité**
*Une première vérification automatique de la conformité permet de faire un retour en direct à l’utilisateur afin qu’il s’assure d’avoir les bonnes informations sur sa pièce. Nous pourrons filtrer dès le dépôt et envoyer en instruction uniquement les dossiers complets et propres.*

---

### 📖 Comment utiliser Document-IA ?

Document-IA est une solution interrogeable par API. Une intégration technique est nécessaire afin d'intégrer ses fonctionnalités dans un produit numérique.

[Lien vers la documentation API](https://api.staging.document-ia.beta.gouv.fr/redoc)

Le code source de la solution Document-IA est également entièrement accessible en source ouverte en suivant ce [lien](https://github.com/betagouv/document-ia) 👈

---

### 📊 Impact

Parmi les produits identifiés pour un déploiement à grande échelle, 3 démarches pilotes ont été sélectionnées pour la mise en oeuvre de la solution Document-IA 

**[Dossier facile](https://www.dossierfacile.logement.gouv.fr/)** (accès au logement) :

DossierFacile traite un volume mensuel de plus de 700 000 pièces justificatives.


**[Démarches Simplifiées](https://www.demarches-simplifiees.fr/)** (digitalisation de démarches) :

Démarches Simplifiées permet la digitalisation de démarches administratives. Ces démarches comprennent de nombreux justificatifs sous la forme de documents. Plus de 10 millions de justificatifs d'identité et de domicile ont été déposés sur la plateforme depuis sa création.

**[Mon Devis sans Oublis](https://mon-devis-sans-oublis.beta.gouv.fr/)** (rénovation énergétique) :

Dans **les dossiers de rénovation énergétique des bâtiments**, la performance des politiques publiques est freinée par un même obstacle structurel : la non-conformité des pièces justificatives qui génère des aller-retours entre le bénéficiaire et l'administration.
* **70 % des dossiers MaPrimeRenov sont bloqués** à cause de devis ou factures non conformes.

---

### 🔒 Sécurité

L'instance DINUM de Document-IA accessible à l'adresse suivante : [api.document-ia.beta.gouv.fr](https://api.document-ia.beta.gouv.fr/api/v1/health) est hébergée dans un environnement certifié **SecNumCloud** sur l'hébergeur Cloud français [Outscale](https://fr.outscale.com/).

Les modèles LLMs utilisés dans le cadre du traitement Document-IA sont hébergés et opérés par [AlbertAPI](https://albert.sites.beta.gouv.fr/) en environnement certifié **SecNumCloud** également. Il s'agit de la seule dépendance externe de Document-IA.

- Une fois les résultats d'analyse récupérés, Document-IA ne conservent aucune trace des données issues de l'analyse de vos documents
- Document-IA n'envoie aucune des données issues de l'analyse de vos documents sur Internet ou ne les partage avec des partenaires.

---

### ⚙️ Technologie


Les fonctionnalités suivantes sont envisagées en vision cible :

* **Image processing** : détection de flou, de contours, d'orientation, lecture QRcode, 2DDOC

* **OCR** : reconnaissance des textes, tableaux, formulaires

* **Classification** : classification du type de document parmi une liste extensible de catégories de documents

* **Extraction** : extraire des informations sous la forme d'un schéma standardisé à partir des résultats de l'OCR

* **Evaluation performance** : à partir d'un dataset définir la précision et le rappel de chaque tâche

* **Moteur de règles** : permettre de déclencher des checks de cohérence sur le document en fonction de règles métier.

* **Console d'administration** : permettre à nos utilisateurs d'être autonome dans la création et la configuration de leur workflow d'automatisation de documents.


Cette solution met en oeuvre les technologies suivantes :

* **Image processing :** Algorithmes de traitements d'image et modèles ML fine-tuned

* **OCR** : Algorithmes et librairies open-source auto-hébergés

* **Classification / Extraction** : Modèles ML et/ou LLMs

* **Evaluation performance** : Librairies open-source et développement spécifiques

* **Moteur de règles** : Librairies open-source et développement spécifiques

* **Console d'administration** : Framework et librairies open-source, développement spécifiques