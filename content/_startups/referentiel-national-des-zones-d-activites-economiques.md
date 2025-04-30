---
analyse_risques: false
mon_service_securise: false
contact: matthias.feraga@beta.gouv.fr
thematiques:
  - Collectivités
  - Écologie
  - Administratif
  - Entreprises
  - Territoires
usertypes:
  - entreprise
  - collectivite-territoriale
techno: []
title: Référentiel National des Zones d'Activités Economiques
mission: Accélérer la réutilisation du foncier économique
incubator: fab-geocommuns
sponsors:
  - /organisations/banque-des-territoires
phases:
  - name: investigation
    start: 2024-12-20
  - name: alumni
    start: 2025-04-30
events:
  - name: other
    date: 2025-03-13
    comment: Restitution de l'investigation auprès de l'IGN et de la Banque des Territoires
  - name: committee
    date: 2025-04-30
    comment: Fin de l'investigation
link: ''
---
## Contexte

Afin de faciliter la mise en œuvre de l’objectif de « zéro artificialisation nette », la loi Climat et résilience impose désormais aux collectivités d’établir un inventaire précis de leurs Zones d’Activités Economiques (ZAE) sur leur territoire. La Banque des Territoires accompagne les collectivités à mieux identifier le potentiel foncier de leurs ZAE et ainsi limiter les phénomènes d’étalement urbain.

### Cible usagers
Dans le domaine du foncier économique, les usagers sont les entreprises et leurs intermédiaires (agences immobilières, consultants en immobilier, plateformes d'annonces immobilières). Les acteurs publics (EPCI, ARDE, ADDE, CCI, etc.) sont impliqués naturellement dans la production de ce nouveau service, si besoin.

### Startups d’État en lien
Partant du constat que de nombreuses Startups d’État traitent déjà du thème de l'implantation des entreprises, nous avons commencé par analyser les enseignements des autres investigations :
- [**BoursoLoco**](https://beta.gouv.fr/startups/boursoloco.html) (2021-2022, produit arrêté) : la mise en relation offre/demande n’a pas accéléré l’installation de commerçants. Les locaux intéressants sont réutilisés naturellement.
- [**DevEco**](https://beta.gouv.fr/startups/deveco.html) (2021-2025, en accélération) : la connaissance de la vacance n’est pas tant un problème local, qu’un manque de visibilité pour les acteurs nationaux. Les développeurs économiques ajustent les contours des ZAE au besoin (extension, fusion de 2 sites…). Pour DevEco le bâti (localisation précise, accès) est plus important que le terrain.
- [**Inventaire des ZAE**](https://beta.gouv.fr/startups/inventaire.zae.html) (fin 2023, investigation sans suite) : nombreuses initiatives déjà en cours autour des ZAE. Un nouveau produit n’est pas opportun. ROI et impact trop long-terme pour être apprécié et mesuré.
- [**Implantation des Entreprises**](https://beta.gouv.fr/startups/implantation.des.entreprises.html) (S1 2024, investigation sans suite) : offre souvent pourvue à l’échelle locale, sans publicité. Offre/demande immobilière régulée par le marché. Pas de faisceau d’indices justifiant un outil à l’échelle nationale.
- [**FrichesReboost**](https://beta.gouv.fr/startups/friche-reboost.html) (T1 2025, investigation en cours) : la connaissance des friches n’est pas tant un problème local. Les friches réutilisables sont réutilisées naturellement. Enjeu d’ingénierie et de budget pour réhabiliter les autres friches.
- **Référentiel National des ZAE** (2025, cette investigation)

## Problème

### Recherche d'irritant
Sans irritant pré-identifié nous avons investigué en particulier :
- l'intérêt d'une **base nationale des terrains économiques disponibles**
- l'intérêt d'un **référentiel national des pôles et sites économiques** (contours, services, transport...)

### Hypothèses considérées
- **50% écologie - 50% économie** : on considère les impacts économique et écologique à part égale
- **Région SUD (PACA)** : c'est la région avec la plus grande tension en foncier disponible sur FranceFoncier+ (20 disponibilités au 01/01/2025). Nous analysons la disponibilité du foncier disponible aux différentes strates de ce territoire : commune, EPCI, ADDE, ARDE, CCI.
- **Activités artisanales, logistiques et industrielles** : les activités commerciales, agricoles et touristiques sont hors-périmètre de l’investigation.
1000m² de surface minimum
Focus sur les moyens et gros projets d’implantation
- **Public ET Privé** : on considère le foncier en propriété privée comme publique
- **Vente ET Location** : on considère le foncier disponible à la vente (20% de l’offre) comme à la location (80% de l’offre), sans préjuger de la préférence des entreprises dans le choix d’un lieu d’implantation.
- **Priorité au foncier bâti** : l’artificialisation de nouveaux sols, même en zone économique, ne sert pas l’enjeu de Zéro Artificialisation Net. On se concentre donc sur la réutilisation du foncier bâti (local d’activité, entrepôt logistique) plutôt que sur le foncier nu.

## Enseignements sur l'axe "base de données du foncier économique disponible"
**Fort désalignement des catalogues d'offres immobilières entre les canaux de distribution publics** (sites web d’EPCI, ADDE, ARDE, CCI, FranceFoncier+) et privés (site webs immo pro comme bureauxlocaux, simplanter.fr, immo-hub.org, lbc, agences immobilières, consultants immobilier “brokers”, bouche-à-oreille…). Il y a énormément plus d'offres (jusqu'à x20) sur les canaux privés que publics. Les causes de désalignement sont multiples :
  - Le bouche-à-oreille représente une part importante du marché et échappe largement à l'observation par l'administration. Le foncier réutilisable et utile est ré-utilisé naturellement. (cf. investigation “Implantation des Entreprises”)
  - Plus de 80% du foncier économique est en propriété privée. Les acteurs privés ont donc une bien meilleure vision des disponibilités que les administrations.
  - Qualité de la donnée : une même offre peut différer au point d’empêcher son rapprochement (ex: géolocalisation incertaine, avec/sans photo, offre plus disponible sur un canal mais toujours publiée sur un autre…).
 - Acteurs publics non alignés entre eux : rétention d’information pour garder la maîtrise, intérêts divergents entre les différents niveaux de collectivité, entre les élus aussi.
- Offres publiques non visibles sur les canaux privés : y a t-il un intérêt à centraliser la disponibilité du foncier en propriété publique, en vue de sa diffusion large et systématique sur les canaux privés? **Le foncier public réellement disponible est estimé à 0.5% du foncier économique global**. Nous n'avons donc pas poursuivi dans cette voie.

## Enseignements sur l'axe "référentiel national des pôles et sites économiques"
**Contexte peu propice à la centralisation des données :**
- les ZAE ont des réalités différentes suivant les acteurs (contours des zones notamment). Il n’est pas dit que les EPCI puissent faire autorité sur ces différentes réalités, et être maîtres de la donnée de référence (cf. enseignement DevEco).
- Le format CNIG n’aide pas forcément à aligner sur une définition commune de la zone.

**Faible intérêt de la part des acteurs privés :**
- sollicitation directe et ciblée de différents types d'acteurs (annonces immo web, plateformes de multidiffusions, conseils, agents/brokers
- explication possible du faible taux de réponse : mauvaise accroche ; peur de la compétition ; méfiance vs administration ; impression de redondance par rapport aux données opendata existantes (Empcom, Fusac) ; manque d'intérêt pour le sujet ; manque de temps.

**Intérêt vague/incertain de la part des acteurs publics :**
- Enquête auprès de 65 EPCI/ADDE/CCI : faible taux de réponse (15%) et peu détaillé
- Les attentes portent plutôt sur : stratégie foncière plus intégrée entre acteurs ; meilleure mutualisation ; lever les freins à la requalification des friches ; mettre en place des incitations concrètes (financement, fiscalité, accompagnement, simplification)

## Conclusions
**Nous ne recommandons pas de lancer un nouveau produit BetaGouv** :
- les freins identifiés à la réutilisation du foncier et la centralisation des données des zones éco ne seront pas levés par la seule mise en œuvre d’un service public numérique.
- pas d’irritant au sens BetaGouv identifié. Pas de mesure objective d'impact / succès / échec pour démarrer ou arrêter un service public numérique.

**Autres suites considérées :**
- Poursuivre l'investigation (dans ou hors BetaGouv) sur une autre région pour confirmer les enseignements
- Enrichir DevEco pour permettre aux EPCI de publier les données des ZAE à d’autres acteurs, de gérer la vacance ?
- Projet classique d'urbanisation de la données

**SUITE RETENUE 30/04/2025 :**
- **PAS DE PRODUIT BETAGOUV**
- **PROJET CLASSIQUE IGN+BDT SUR l'URBANISATION DE LA DONNÉE**