---
analyse_risques: false
mon_service_securise: false
contact: thomas.guillory@numerique.gouv.fr
thematiques:
  - Écologie
  - Collectivités
usertypes:
  - collectivite-territoriale
  - etat
title: API Projets Collectivités
mission: Faire circuler les données des projets de transition écologique entre les services publics numériques
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
    comment: V1 (base de données + widget)
techno:
  - typescript
repository: https://github.com/betagouv/communs-de-la-transition-ecologique-des-collectivites
stats_url: https://les-communs-transition-ecologique-api-prod.osc-fr1.scalingo.io/statistics/
impact_url: https://les-communs-transition-ecologique-api-prod.osc-fr1.scalingo.io/statistics/
link: ''
---
### Problème

Les collectivités territoriales sont accompagnées par plus d'une centaine de services numériques publics pour mener leurs projets de transition écologique. Ces services sont portés par des acteurs publics variés — ADEME, ANCT, Cerema, Banque des Territoires, ministères — et chacun apporte une expertise spécifique. Par exemple : Territoires en Transition pour la planification climat, Mon Espace Collectivité pour l'accompagnement des projets locaux, Cartofriches pour l'identification des friches, Ma Cantine pour la transition alimentaire, Aquagir pour la gestion de l'eau, et bien d'autres.

**Le constat, côté collectivités** : chaque service demande de re-saisir les mêmes informations — nom du projet, porteur, avancement, budget, territoire concerné. Une même collectivité peut déclarer le même projet sur 3, 4 ou 5 plateformes différentes. En plus de cette re-saisie, le parcours utilisateur n'est pas pensé de manière cohérente entre ces plateformes : systèmes d'authentification multiples, vocabulaires différents pour parler des mêmes concepts...

**Le constat, côté équipes produits** : chaque service développe sa propre base de projets, sans lien avec les autres. Les équipes aimeraient enrichir leurs données avec celles d'autres services, mais aucune infrastructure commune n'existe pour le permettre. Les possibilités seraient pourtant nombreuses :

* **Orienter** : en amont, rediriger une collectivité vers les services les plus pertinents selon la nature de son projet

* **Contextualiser** : savoir dans quel plan territorial s'inscrit un projet (PCAET, CRTE...), quels diagnostics ont été réalisés, quel est le plan de financement global

* **Simplifier** : éviter à l'usager de ressaisir des informations déjà connues ailleurs

***

### Solution

Nous construisons une infrastructure de partage de données entre les services numériques de la transition écologique.

Concrètement :

* **Un schéma de données commun** pour décrire les projets de collectivités, co-construit avec l'ADEME, l'ANCT, le Cerema, l'IGN, le CGDD, la DINUM et le SGPE

* **Une API** permettant aux services de partager leurs données projet et de construire des parcours utilisateurs qui évitent la ressaisie

* **Des données projet enrichies** : chaque projet peut être complété par les services partenaires — plan territorial dans lequel il s'inscrit (PCAET, CRTE...), diagnostics réalisés, avancement, financement. L'API permet de récupérer ces informations de manière unifiée.

* **Des briques de découverte** pour aider les collectivités à identifier les services pertinents pour leurs projets (module d'aiguillage, annuaire, ou autres formats à expérimenter)

Ce n'est pas un nouveau site pour les collectivités. C'est une couche technique qui connecte les services existants, pour que l'information circule sans que l'usager ait à la ressaisir.

***

### Pour qui ?

**Usagers principaux** : les équipes produits des services numériques publics de la transition écologique des collectivités, qui peuvent enrichir leurs données et proposer des parcours plus fluides à leurs utilisateurs

**Bénéficiaires finaux** : les agents de collectivités, élus et chargés de mission, qui gagnent du temps et retrouvent leurs projets d'un service à l'autre

***

### Stratégie

Nous sommes en phase d'expérimentation. L'enjeu est de démontrer la valeur de l'interopérabilité sur des cas d'usage concrets avant de généraliser.

**Premier cas d'usage pilote (en cours) : Territoires en Transitions et Mon Espace Collectivité**

L'objectif est de faire circuler les données projet entre les deux services :

* Identifier les objets communs à afficher et synchroniser des deux côtés

* Permettre de rattacher un projet à un plan territorial (PCAET, CRTE...) depuis Mon Espace Collectivité

* Afficher l'avancement de l'accompagnement des projets dans Territoires en Transitions

Ce pilote teste la synchronisation de données entre deux plateformes et nous permet de nous confronter aux difficultés concrètes que cela peut poser.

**Prochaines étapes :**

* Trouver et travailler d'autres cas d'usage pilotes, représentant des défis différents (par exemple : enrichissement de la donnée d'un projet avec des diagnostics)

* Mesurer l'adoption et l'utilité réelle de la base de données partagée et de l'API

* Itérer sur le schéma de données en fonction des retours terrain

***

### Impact

L'indicateur principal suivi (susceptible d'évoluer) :

* **Nombre de projets consultés avec des données enrichies par au moins un service partenaire**
