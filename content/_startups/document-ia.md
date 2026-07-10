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
mission: Automatiser le traitement des pièces justificatives pour accélérer les démarches administratives et éliminer les aller-retours entre les usagers et les instructeurs
incubator: alliance
sponsors:
  - /organisations/dinum
  - /organisations/mtes
phases:
  - name: construction
    start: 2025-09-15
events:
  - name: product_launch
    date: 2025-07-31
  - name: other
    date: 2025-07-31
    comment: Financement FTAP IA
  - name: product_launch
    date: 2026-01-01
    comment: Premier déploiement dans DossierFacile
repository: https://github.com/betagouv/document-ia
link: ''
---
Document-IA est une solution **générique, souveraine** et **sécurisée** d'**analyse automatique** de **documents** et **pièces justificatives**. Ce produit est portée par l'incubateur [ALLiaNCE](https://alliance.numerique.gouv.fr/) de la DINUM et pensé comme un commun numérique.

Consultez la [liste des documents](https://github.com/betagouv/document-ia/tree/sandbox/document-ia-schemas/src/document_ia_schemas) actuellement compatibles avec Document-IA.

**Vous êtes un acteur de l'État** et vous souhaitez bénéficier de la solution Document-IA ? Contactez l'équipe en charge de son déploiement en complétant ce [formulaire](https://grist.numerique.gouv.fr/o/document-ia/forms/biMbLFoRK9yM3LoeNyMQ2E/8) 👈

**Vous êtes développeur** et vous souhaitez consulter la documentation technique ? Consultez la section dédiée "📖 Comment utiliser Document-IA ?"

**Vous êtes développeur** et vous souhaitez analyser un document qui n'est pas encore dans la liste des types de documents compatibles ? Vous pouvez contribuer au projet et proposer l'ajout d'une nouvelle catégorie de document. Voir [CONTRIBUTING.md](https://github.com/betagouv/document-ia/blob/develop/document-ia-schemas/CONTRIBUTING.md)

---

### ⚡️ Cas d'usage et bénéfices

**Pour l'usager** : un retour immédiat sur ses pièces

- Signalement en direct d'une pièce manquante, illisible ou non conforme, dès le dépôt plutôt qu'après instruction
- Possibilité de corriger son dossier en session → moins d'allers-retours et une réponse plus rapide de l'administration

**Pour l'instructeur** :  un gain de temps et de fiabilité

- Automatisation des gestes chronophages : catégorisation, extraction, contrôle de conformité
- Vue enrichie (données extraites + alertes) permettant de se concentrer sur les cas à réelle valeur ajoutée

**Pour l'administration**

- Constitution de bases de données structurées à partir de documents non structurés. Exemple : étude statistique retrospective sur des archives (arrêtés, devis etc)

---

### 🛠️ Fonctionnalités

Document-IA permet de mettre en oeuvre les fonctionnalités suivantes :

- **Catégorisation**
*Si une carte d’identité est demandée, il faut s’assurer que le document déposé est bien une carte d’identité dès le dépôt plutôt que d’attendre l’analyse manuelle et un aller-retour avec l'instructeur.*
- **Extraction**
*Transformer un document non structuré en un ensemble de données structurées permettant d’automatiser des vérifications ou de constituer une base de données.*
- **Conformité**
*Une fois les données extraites, il est possible d'effectuer une vérification automatique de la conformité d'un document. Cette vérification permet de faire un retour en direct à l’utilisateur et d'augmenter la qualité des dossiers.*

---

### 📖 Comment utiliser Document-IA ?

Document-IA est une solution interrogeable par API. Une intégration technique est nécessaire afin d'intégrer ses fonctionnalités dans un produit numérique.

[Lien vers la documentation API](https://api.staging.document-ia.beta.gouv.fr/redoc)

Le code source de la solution Document-IA est également entièrement accessible en source ouverte en suivant ce [lien](https://github.com/betagouv/document-ia) 👈

---

### 📊 Impact

Parmi les produits identifiés pour un déploiement à grande échelle, 2 produits pilotes ont été sélectionnés pour la mise en oeuvre de la solution Document-IA 

**[Dossier facile](https://www.dossierfacile.logement.gouv.fr/)** (accès au logement) :

DossierFacile traite un volume mensuel de plus de 700 000 pièces justificatives.


**[Démarche Numérique](https://demarche.numerique.gouv.fr/)** (anciennement DémarchesSimplifiées) :

Démarche Numérique permet la digitalisation de démarches administratives. Ces démarches comprennent de nombreux justificatifs sous la forme de documents. Plus de 10 millions de justificatifs d'identité et de domicile ont été déposés sur la plateforme depuis sa création.

---

### 🔒 Sécurité

L'instance DINUM de Document-IA accessible à l'adresse suivante : [api.document-ia.beta.gouv.fr](https://api.document-ia.beta.gouv.fr/api/v1/health) est hébergée dans un environnement certifié **SecNumCloud** sur l'hébergeur Cloud français [Outscale](https://fr.outscale.com/).

Les modèles LLMs utilisés dans le cadre du traitement Document-IA sont hébergés et opérés par [AlbertAPI](https://albert.sites.beta.gouv.fr/) en environnement certifié **SecNumCloud** également. Il s'agit de la seule dépendance externe de Document-IA.

- Une fois les résultats d'analyse récupérés, Document-IA ne conservent aucune trace des données issues de l'analyse de vos documents
- Document-IA n'envoie aucune des données issues de l'analyse de vos documents sur Internet ou ne les partage avec des partenaires.

*Pour en savoir plus, vous pouvez solliciter l'équipe pour disposer du Dossier d'Architecture Technique (DAT) précisant les mesures de sécurité prises.*

---

### ⚙️ Technologie

Cette solution met en oeuvre les technologies suivantes :

* **Image processing :** Algorithmes de traitements d'image et modèles ML fine-tuned

* **OCR** : Algorithmes et librairies open-source auto-hébergés

* **Classification / Extraction** : Modèles ML et/ou LLMs

* **Evaluation performance** : Librairies open-source et développement spécifiques