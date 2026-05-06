---
mission: Elever le niveau de sécurité numérique des collectivités territoriales
incubator: anct
title: Suite territoriale
contact: lasuiteterritoriale@anct.gouv.fr
accessibility_status: non conforme
sponsors:
  - /organisations/anct
  - /organisations/anssi
  - /organisations/dinum
phases:
  - name: investigation
    start: 2023-12-07
  - name: construction
    start: 2024-05-29
  - name: acceleration
    start: 2025-06-26
  - name: opere
    start: 2026-01-01
link: https://suiteterritoriale.anct.gouv.fr/
thematiques:
  - Collectivités
  - Cybersécurité
  - Souveraineté
  - Simplicité
usertypes:
  - collectivite-territoriale
techno:
  - react
  - python
  - django
repository: https://github.com/suitenumerique/st-home/tree/main
analyse_risques: false
mon_service_securise: true
dashlord_url: https://dashlord.incubateur.anct.gouv.fr/
events:
  - name: product_launch
    date: 2023-12-07
    comment: Convention SGDSN x ANCT
  - name: committee
    date: 2024-05-29
    comment: Comité de fin d'investigation
  - name: committee
    date: 2024-12-11
    comment: 'Comité d''investissement #1'
  - name: committee
    date: 2025-06-26
    comment: 'Comité d''investissement #2'
---
## 🧩 Contexte

Dans le cadre du Plan France 2030, et plus particulièrement son volet "Maîtriser les technologies numériques souveraines et sûres", l'Agence nationale de la sécurité des systèmes d'information (ANSSI) a pour objectif de **poursuivre la sécurisation des systèmes numériques des collectivités territoriales**. 

L'Agence nationale de la cohésion des territoires (ANCT), *via* son Incubateur des Territoires, a pour objet la **construction de services publics numériques par, pour et avec les collectivités territoriales**, en particulier celles ne disposant pas ou peu des ressources nécessaires à la réalisation de leurs projets. 

## 🤔 Problème

Un rapport d'information du Sénat [*Les collectivités territoriales face au défi de la cybersécurité*](https://www.senat.fr/rap/r21-283/r21-283_mono.html) établit que : 
* **le recours grandissant au télétravail dans la fonction publique territoriale et des services numériques parfois inadaptés** accentuent l'ampleur des menaces numériques ; 
* **La fréquence croissante des cyberattaques sur des administrations a de lourdes conséquences** (dysfonctionnement des services publics locaux, perte irrémédiable de données, paiement de rançons...) ;
* **Les "petites collectivités" sont identifiées comme des cibles privilégiées et particulièrement vulnérables** face aux cyberattaques.

Par ailleurs, la *[Synthèse 2023 de la menace ciblant les collectivités territoriales](https://www.cert.ssi.gouv.fr/cti/CERTFR-2025-CTI-002/)* de l'ANSSI dénombre **une moyenne de 18 incidents cyber affectant les collectivités territoriales chaque mois.**

**Les plus petites collectivités territoriales ne disposent pas de services numériques essentiels à leurs usages quotidiens,** (nom de domaine, email, stockage de fichiers...), qui leur permettent d'être identifiées formellement en ligne ou de garantir la maîtrise de leurs données. Elles font donc appel à des services sans garantie suffisante en matière de cybersécurité et de RGPD, souvent distribués par des entreprises extra-européennes.

50% des communes françaises sont, à titre d'exemple, non conformes au regard du [Référentiel de Conformité de la Présence Numérique des Territoires](https://suiteterritoriale.anct.gouv.fr/conformite/referentiel) mis en place par l'ANCT. En mai 2025, seules 18% des communes respectent l'ensemble des critères fixés en matière de nommage, d'adresse de messagerie et de site internet.

## 💡 Solution

Afin d'améliorer, à meilleur coût, la sécurité et la souveraineté numérique nationale, ANSSI et ANCT sont partenaires depuis décembre 2023 dans **"le développement et le déploiement d'une plateforme sécurisée au profit des collectivités territoriales comprenant notamment" :**
* Un nom de domaine institutionnel ; 
* Une messagerie et des adresses professionnelles ; 
* Un espace de stockage minimal. 

Conformément aux statuts de l'ANCT et à son périmètre d'intervention, cette offre de services essentiels s'adresse à **toute commune de moins de 3 500 habitants et tout EPCI de moins de 15 000 habitants** ainsi qu'aux territoires d'outre-mer. 

L'ANCT est, *via* cette plateforme, invités à mettre à disposition des collectivités toutes **les briques techniques et services numériques déjà existants, développés en *open source* par des acteurs étatiques** (ANCT, DINUM, ANSSI) **ou territoriaux** (Opérateurs Publics de Services Numériques). 

## ♟️ Stratégie

La stratégie adoptée repose sur la mise en commun des ressources et la coopération avec l'ensemble de l'écosystème du numérique en France. 

### 🔴 DINUM

Tout d'abord, dans une logique de mutualisation et de coordination de l'action publique, l'ANCT a historiquement fait le choix de s'associer à l'Opérateur de Produits interministériels (OPI) de la DINUM, en cours de développement de [la Suite numérique](https://lasuite.numerique.gouv.fr/), destinée à "l'ensemble des professionnels de la sphère publique". 

Ainsi, la Suite territoriale est issue d'une coopération entre l'ANCT et la DINUM pour la contribution à des logiciels libres, utiles tant aux agents publics de l'Etat qu'aux agents publics des territoires et élus locaux. 

### 🟢 ANCT

Afin de proposer une plateforme unique d'applicatifs numériques sécurisés utiles aux collectivités territoriales, la Suite territoriale entend également s'émanciper de son périmètre initial (nom de domaine, messagerie, stockage) pour fournir un accès simplifié à l'ensemble des vingt produits développés et opérés par l'ANCT *via* son [Incubateur des territoires](https://beta.gouv.fr/incubateurs/anct.html), au sein d'un parcours utilisateur unique. 

### ⚪ ANSSI

Afin d'augmenter collectivement le niveau de sécurité numérique des collectivités territoriales, la Suite territoriale entend également au déploiement des services numériques proposés par le [Laboratoire d'innovation de l'ANSSI](https://beta.gouv.fr/incubateurs/lab-innov-anssi.html), regroupés sous l'étiquette unique de la [Suite cyber](https://messervices.cyber.gouv.fr/). 

En plus d'être le sponsor principal de la Suite territoriale, l'ANSSI participe activement à sa sécurisation *by design* en mobilisant sa Division d'Assistance Technique au cours des travaux de développement. 

### 🟧 Structures de mutualisation

Afin de garantir un déploiement et un impact national, la Suite territoriale mobilise l'ensemble des structures de mutualisation déjà actives à l'échelle nationale. Ces structures sont principalement de deux natures différentes : **intercommunalités et Opérateurs Publics de Services Numériques (OPSN).** 

Le [réseau Déclic](https://www.asso-declic.fr/notre-reseau/) regroupe **73 structures** dans toute la France pour plus de **25 000 collectivités territoriales adhérentes.** C'est donc logiquement, que ces opérateurs locaux sont associés aux développements de la Suite territorial, d'un point de vue technique mais aussi et surtout dans la construction du modèle économique et juridique proposé.

Ce dernier, reposant sur des contrats de partenariat public-public, permet la concrétisation d'un **modèle de déploiement national fondé sur la subsidiarité,** l'ANCT intervenant auprès des collectivités ne bénéficiant pas de la présence de structure locale sur leur territoire et les structures de mutualisation partenaires étant chargés du déploiement et du support des différents services auprès des collectivités de leur périmètre.

Les structures de mutualisation partenaires sont mises en valeur depuis les pages "communes" du [site](https://suiteterritoriale.anct.gouv.fr/) de la Suite territoriale et sur la [Cartographie de déploiement](https://grist.incubateur.anct.gouv.fr/o/anct/gVoLeTsdJL8q/Suite-territoriale-Deploiement/p/4?embed=true).

### 🟨 Collectivités

Les collectivités participent également aux développements des produits soit *via* les différentes associations d'élus, nationales (AMF, AMRF, APVF) ou locales, soit directement *via* leur intégration au ["Groupe pilote"](https://grist.incubateur.anct.gouv.fr/o/anct/forms/nuyZtejstHFwuekKzP3Juz/281) qui leur permet de tester les différents produits et faire leurs retours utilisateurs.

## 🧪 Produits

La Suite territoriale n'est donc pas un produit unique mais bien une suite, modulaire, de produits numériques interopérables. Elle se compose aujourd'hui de : 

* **[ProConnect](https://suiteterritoriale.anct.gouv.fr/services#proconnect) :** équivalent de France Connect pour les usages professionnels, ProConnect est le moyen d'authentification unique permettant d'accéder aux différents services de la Suite territoriale ; 
* **[Collectivite.fr](https://suiteterritoriale.anct.gouv.fr/services#collectivite-fr) :** le nom de domaine utilisé pour fournir un sous-domaine institutionnel minimal aux 10 000 communes qui n'en disposent pas, selon la nomenclature nomdedommune.collectivite.fr ;
* **[Messages](https://suiteterritoriale.anct.gouv.fr/services#messages) :** la solution de messagerie souveraine permettant la création et l'utilisation d'adresses emails professionnelles, inviduelles et collaboratives ; 
* **[Fichiers](https://suiteterritoriale.anct.gouv.fr/services#fichiers) :** permettant le stockage, l'organisation et le partage de fichiers numériques dans un unique espace sécurisé ; 
* **[La Régie](https://suiteterritoriale.anct.gouv.fr/services#regie)** : interface d'administration permettant la gestion des contacts, groupes de contacts et droits d'accès aux services. 

*In extenso*, la Suite territoriale permet l'accès, *via* [ProConnect](https://partenaires.proconnect.gouv.fr/), à un [écosystème applicatif](https://suiteterritoriale.anct.gouv.fr/services#ecosysteme) constitué de services numériques opérés par l'Etat, les OPSN ou bien les éditeurs privés.

## 📅 Calendrier

**La Suite territoriale sera déployable à l'échelle nationale au 1er janvier 2026, conformément à la convention signée entre le SGDSN et l'ANCT.**

La Suite territoriale s'inscrit dans le calendrier de développement de services publics numériques en mode agile du réseau bea.gouv.fr. 

* **7 décembre 2023 :** Convention SGDSN x ANCT 
* **29 mai 2024 :** Comité de fin d'investigation 
* **11 décembre 2024 :** Comité d'investissement #1
* **26 juin 2025 :** Comité d'investissement #2
* **Décembre 2025 :** Comité d'investissement #3
* **2026-2028 :** Phase de run et déploiement national



