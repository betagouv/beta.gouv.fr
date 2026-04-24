---
title: RNB, le Référentiel National des Bâtiments
mission: Rendre efficace et commune l'identification des bâtiments et l'échange d'informations les concernant
sponsors:
  - /organisations/ademe
  - /organisations/cstb
  - /organisations/dgaln
  - /organisations/dhup
  - /organisations/dinum
  - /organisations/ign
  - /organisations/sgpe
incubator: fab-geocommuns
contact: rnb@beta.gouv.fr
phases:
  - name: investigation
    start: 2021-09-01
  - name: construction
    start: 2023-01-01
  - name: acceleration
    start: 2024-01-01
  - name: transfer
    start: 2026-01-01
link: https://rnb.beta.gouv.fr/
budget_url: https://rnb-fr.gitbook.io/documentation/budget
accessibility_status: partiellement conforme
repository: https://github.com/fab-geocommuns/RNB-site
dashlord_url: https://dashlord.incubateur.net/url/rnb-beta-gouv-fr/
stats: true
thematiques:
  - Open-Data
  - Patrimoine
  - Écologie
  - Logement
  - Administratif
  - Collectivités
usertypes:
  - etat
  - collectivite-territoriale
  - entreprise
techno:
  - django
  - react
  - NextJS
  - PostGIS
events:
  - name: committee
    date: 2022-11-09
    comment: Lancement en phase de construction
  - name: committee
    date: 2023-06-30
  - name: committee
    date: 2023-11-28
    comment: Lancement en phase d'accélération
  - name: committee
    date: 2024-06-18
  - name: committee
    date: 2024-12-11
  - name: committee
    date: 2025-06-24
  - name: committee
    date: 2025-12-10
    comment: 'Lancement en phase de transfert pour commencer un début de phase de pérennisation et discussion sur les financements qui restent à pérenniser '
  - name: national_impact
    date: 2026-04-02
impact_url: https://docs.numerique.gouv.fr/docs/048fa61c-0541-4c45-8f58-d8c3e377ac90/
stats_url: https://rnb.beta.gouv.fr/stats
---
## Problème : le cloisonnement de l'information bâtimentaire

*"Du fait d’un écosystème atomisé, la production de l’information géolocalisée dans la sphère publique se traduit par un usage sous-optimal des deniers publics."* - Rapport d'Information, Sénat, Commission des Finances pour l'IGN, 5 Octobre 2022

Parmi ces données géolocalisées, l'information relative au bâtiment se démarque par l'absence de référentiel. Le concept de bâtiment ne faisant pas consensus, **les acteurs publics et privés travaillaient jusqu’à présent en silos** répondant chacun à leur propre vision du bâtiment.

Cette absence de base de données nationale et de référence sur le bâtiment engendre :

- **des difficultés de croisement & une qualité variable** entre les jeux de données et outils rattachés à l'adresse, au logement ou parfois à la parcelle cadastrale ;
- **une difficulté à suivre et piloter leurs actions sur leurs parcs bâtimentaires** (ex : BDD coûteuses à maintenir et/ou informations partagées tardivement)

L'objet bâtiment apparaît alors comme le maillon manquant au socle de données géolocalisées pour relier les concepts d'adresses - bâtiments - locaux et parcelles et permettre un pilotage satisfaisant des politiques publiques ; en particulier celles qui concernent la rénovation énergétique, qui nécessitent une vision exhaustive, représentative, actualisée et partagée du parc.

## Solution :  rendre efficace et commune l'identification des bâtiments et l'échange d'informations les concernant

*“La donnée apparaît aujourd’hui comme un élément déterminant pour l’élaboration de politiques publiques de qualité. Une politique éclairée par la donnée requiert, pour sa mise en œuvre, des données fiables, exhaustives, récentes et accessibles” Rapport de la Cour des Comptes - La production et l’utilisation des données utiles à la politique du Logement - 2022*

Aujourd’hui, le Référentiel National des Bâtiments (RNB) est un service public numérique, qui **répertorie l'ensemble des bâtiments du territoire** et **leur associe un** **identifiant unique et pérenne, appelé ID-RNB.**

Une fois attribué au bâtiment, cet identifiant pivot (ID-RNB), permet de **simplifier le croisement et les échanges** de données bâtimentaires entre **les administrations publiques, les collectivités et les acteurs privés.**

Le RNB a pour objectifs principaux de :
- **Standardiser** l’identification des bâtiments dans les systèmes d’information ;
- **Favoriser l’interopérabilité** entre les bases de données de l’État, des collectivités et des acteurs privés ;
- **Soutenir le pilotage des politiques publiques**, notamment en matière de **rénovation énergétique, de logement et d’aménagement du territoire.**


> Cette nouvelle maille de données doit renforcer la capacité de l’État et des collectivités à produire des analyses territoriales robustes, à prioriser les financements, et à évaluer l’impact des politiques publiques prioritaires du gouvernement.


## Stratégie : Co-construire un géocommun et une future donnée de référence

La stratégie du RNB repose sur trois approches complémentaires :

###### 1° Diffuser les ID-RNB dans les jeux de données et outils nationaux et territoriaux, en accompagnant les administrations, les collectivités et éditeurs de logiciel volontaires.

Il s’agit ici de démontrer la valeur du RNB, d’identifier les freins et proposer des solutions, afin d’intégrer les ID-RNB dans les SI des acteurs publics et de faire émerger des cas d’usage sur les différents champs de l’action publique (sport, éducation, rénovation énergétique des bâtiments…) :

- Exemple Cas d’usage DPE : **Plus de 8 millions de DPE disposent d’un ID RNB**. Cette intégration a été réalisée par un déploiement de l’équipe RNB sur le flux entrant de DPE (via l’accompagnement des éditeurs de logiciel DPE souhaitant intégrer de manière optionnelle un champ RNB pour enrichir leurs parcours utilisateurs), ainsi que sur le stock en appuyant les équipes techniques de l’Observatoire des DPE-Audit de l’Ademe (rapprochement de leur base open-data réalisé par l’équipe RNB chaque année). Résultats : **Les ID-RNB permettent d’améliorer la géolocalisation des DPE et de planifier l’évolution de la rénovation du parc dans son ensemble.**

###### 2° Disposer d’une donnée bâtimentaire la plus proche du terrain, par l’approche géocommun.

 Il s’agit ici d’expérimenter “l’édition collaborative” en ouvrant le RNB, aux contributeurs désireux de partager leur connaissance sur leur territoire, en leur permettant d'**alimenter, corriger et enrichir directement le RNB**. 

- D’une part, les outils et les modalités d’édition sont co-construits avec une vision terrain permettant de faciliter leur mise en oeuvre technique et de fédérer les parties prenantes, autour du RNB.
- D’autre part, l’élaboration des règles de gouvernance est rendue possible grâce à la co-construction avec les experts de la donnée géomatique (administrations, collectivités…), réunis dans le cadre du groupe de travail Bâti du [Conseil National de l’Information Géolocalisée](https://cnig.gouv.fr/gt-bati-a25939.html) (CNIG) ; et dont [le standard bâtiment](https://rnb.beta.gouv.fr/definition) est en cours de conception.


###### 3° Renforcer l’impact systémique du RNB, en lui conférant une base juridique, en tant que future donnée de référence

Il s’agit ici d’avancer conjointement avec les équipes responsables au sein des administrations, pour **faire évoluer le cadre juridique du RNB**, ainsi que ses différents champs d’action (ex : DPE, Permis de construire…). 

- Aujourd’hui, le RNB est confirmé comme "[Données de forte valeur](https://bisxf.r.sp1-brevo.net/mk/cl/f/sh/1f8JIKXwHGc42xsVUflXOQvnFu/hJ-ISyvdVHRX)" définies par la [Directive européenne Open Data](https://bisxf.r.sp1-brevo.net/mk/cl/f/sh/1f8JIKXwHGcT0AXiRqHOenyCM2/Q8-tcACVZt3I) et reconnu comme chantier prioritaire de la Feuille de route Numérique et Données pour la [Planification Ecologique](https://bisxf.r.sp1-brevo.net/mk/cl/f/sh/1f8JIKXwHGYqVNH4gPGZQyCALO/ykayyG0-CZtg) ;
- A terme, la diffusion d’informations avec d’autres bases de données, permise par une introduction législative ou réglementaire, représentera un gain de temps et de ressources pour les administrations, les collectivités et les acteurs privés (base des diagnostics de performance énergétique, base des autorisations d’urbanisme délivrées, RNC, etc.).




## Le Référentiel national des bâtiments, service à impact national 2025

Avant le Référentiel national des bâtiments, il n'existait aucune définition ou donnée standardisée sur le bâtiment en France. Les acteurs publics et privés (administrations, collectivités, éditeurs de logiciels, bailleurs sociaux, etc) devaient composer avec des données éparpillées, des formats de jeux de données hétérogènes et une absence de langage commun sur le bati, ce qui posait des problèmes dans la conduite de l'action publique, par exemple sur la rénovation énergétique.

Aujourd’hui, le Référentiel national des bâtiments (RNB) est un service public numérique, qui répertorie l’ensemble des bâtiments du territoire et leur associe un identifiant unique et pérenne, appelé ID-RNB.

Le service permet une meilleure planification des politiques publiques (logement, rénovation énergétique, accessibilité, etc.) et facilite la coordination entre les acteurs. Pour les collectivités, il offre une vision précise du parc et des leviers d’action. Par exemple, plus de **8 millions de DPE disposent désormais d’un ID RNB**, ce qui permet à une collectivité de planifier plus facilement la rénovation de son parc immobilier.

En décembre 2025, le RNB est intégré à plus de **63 bases** et processus administratifs (Fichiers Fonciers du Cerema, Ministère de l’Education…), comptabilise **23** millions d’appel API et **300 000** éditions **collaboratives** à la base.

