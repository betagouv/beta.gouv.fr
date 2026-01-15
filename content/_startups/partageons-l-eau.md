---
analyse_risques: false
mon_service_securise: false
contact: astrid.tarteret@beta.gouv.fr
thematiques:
  - Écologie
  - Agriculture
usertypes:
  - etat
  - entreprise
  - collectivite-territoriale
title: Partageons l'eau
mission: 'Faciliter un partage de l''eau transparent, tenant compte des besoins des usagers en respectant les objectifs de bon état des masses d’eau '
incubator: mtes
sponsors:
  - /organisations/deb
  - /organisations/dgaln
phases:
  - name: investigation
    start: 2024-12-02
  - name: construction
    start: 2025-04-09
events:
  - name: product_launch
    date: 2025-05-26
  - name: committee
    date: 2025-12-17
techno:
  - node
  - react
  - next.js
repository: https://github.com/betagouv/partageonsleau/tree/main
impact_url: http://partageonsleau-metabase.osc-fr1.scalingo.io/public/dashboard/91ec0e3c-8711-4796-9fc8-e204b3c67e6c
link: https://prelevements-deau.beta.gouv.fr
stats_url: http://partageonsleau-metabase.osc-fr1.scalingo.io/public/dashboard/91ec0e3c-8711-4796-9fc8-e204b3c67e6c
---
## 🌍 Contexte

Objectif fixé par la **Directive-cadre sur l’eau** : rétablir le bon état quantitatif et qualitatif des masses d’eau.

Face à des tensions croissantes sur la ressource en eau, l’État, sous l’impulsion du ministère chargé de l’écologie, en lien avec les agences de l’eau et les préfets coordonnateurs de bassin, a fait le choix de mettre en place des **Projets de Territoire pour la Gestion de l’Eau (PTGE)**.

Leur rôle a été renforcé par le **Plan Eau de 2023**, qui en fait un levier central de la politique publique de gestion de l’eau.

Sur le terrain, ces démarches territoriales et concertées font faces à des difficultés de mise en oeuvre, alors même qu’elles sont devenues indispensables pour :
* atteindre les objectifs de bon état des masses d’eau,
* prévenir les crises sécheresse,
* et garantir un partage équitable entre les usages.

👉 Partageons l’eau est une startup d’État portée par le ministère chargé de l’écologie et la DINUM.

Elle s’inscrit comme un **outil d’appui opérationnel aux PTGE**, en complément des cadres réglementaires existants, pour **fluidifier leur mise en œuvre** et renforcer leur impact.


## ❗Problème

Les retours des territoires (collectivités porteuses de SAGE/PTGE, services de l’État, préleveurs industriels, agriculteurs, gestionnaires eau potable) convergent sur plusieurs difficultés majeures qui freinent la mise en œuvre effective des PTGE 

1. **Un manque de transparence et de vision collective sur les usages de l'eau** -
Les données de prélèvement sont incomplètes, dispersées et peu accessibles. Elles sont pourtant indispensables pour calculer le volume prélevable, décider de la répartition de l'eau entre préleveurs, suivre le respect des volumes attribués. Il n’existe pas de base de données nationale des volumes prélevés pour un usage de connaissance (la BNPE étant conçue avant tout pour un usage redevances). 

2. **Une faible adhésion des usagers** -
Les méthodes de définition des volumes prélevables sont peu lisibles.
Les efforts déjà réalisés par certains usagers sont mal objectivés.
La défiance s’installe, rendant les compromis difficiles.

3. **Une collecte de données des volumes prélevés chronophage** -
Pour les préleveurs, en particulier agriculteurs : une obligation administrative vécue comme coûteuse et peu utile. Pour les collectivités porteuses de SAGE / PTGE et services de l’État : un temps humain considérable mobilisé pour collecter et fiabiliser la donnée.

4. **Des difficultés politiques et techniques pour réviser les autorisations** -
Absence de bancarisation des autorisations existantes.
Manque de données fiables sur les consommations réelles.
Forte sensibilité politique lors des révisions, freinant l’action.

➡️ Conséquence : les discussions locales s’enlisent, les tensions augmentent, et les objectifs des PTGE peinent à se traduire concrètement.

## Solution

Partageons l’eau vise à **mieux mesurer pour mieux partager l’eau**, en soutenant directement la mise en œuvre des PTGE.

**Usagers** : services de l’état (DDT, DREAL), collectivités porteuses de SAGE/PTGE et prélever (industriels, agriculteurs, gestionnaires eau potable) 

Le service repose sur un **triptyque indissociable** :

1. **Un levier de dialogue et de concertation** -
La donnée comme support de médiation, au service du dialogue local.
Des ateliers de co-construction réunissant l’ensemble des usagers (agriculteurs, industriels, eau potable, services de l’État, collectivités).
La production de cadres de confiance favorisant l’adhésion et l’engagement collectif.

2. **Un portage politique** - 
Un service porté par l’État, en lien étroit avec la DEB, les préfets et les partenaires du Système d’Information sur l’Eau. Une articulation avec les évolutions réglementaires (télérelève, autorisations, seuils, interopérabilité).

3. **Une infrastructure numérique comprenant** : 
- Une plateforme de suivi des volumes prélevés et des autorisations tous usages confondus, par sous bassin versant
- Un outil de visualisation accessible aux SAGE, services de l’État et usagers, pour suivre les prélèvements individuels et collectifs, comparer consommations réelles et volumes autorisés, objectiver les efforts et les marges de manœuvre de chacun.
- Une logique “dites-le-nous une fois”, interopérable avec les outils existants (BNPE, outils OUGC, outils de modélisation).

## 🚀 La stratégie pour y parvenir

**À court terme (2025–2026)**
* Consolidation du service numérique issue des premières expérimentations (La Réunion, SAGE Bièvre Liers Valloire).
* Accompagnement dédié de 4 à 5 collectivités porteuses de SAGE / PTGE pour conception et mise à disposition d'un kit de mobilisation locale, en lien avec Gest'eau
*  Mise à disposition de Partageons l'eau auprès des collectivités / services de l'Etat volontaires

**À moyen terme**
* Faciliter la révision des autorisations grâce à des données historisées et partagées.
* Explorer, avec les territoires, des briques d’aide à la répartition dynamique de l’eau, lorsque les conditions de confiance et de données sont réunies.
