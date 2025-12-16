---
title: Panoramax - Base vues immersives libres
mission: L’alternative libre pour photo-cartographier les territoires
sponsors:
  - /organisations/dinum
  - /organisations/ign
incubator: fab-geocommuns
link: https://panoramax.fr/
repository: https://gitlab.com/panoramax
contact: panoramax@panoramax.fr
usertypes:
  - collectivite-territoriale
  - particulier
  - entreprise
  - association
  - etat
dashlord_url: https://dashlord.incubateur.net/url/panoramax-fr/
phases:
  - name: investigation
    start: 2022-06-24
  - name: construction
    start: 2022-10-17
  - name: acceleration
    start: 2023-11-06
fast:
  promotion: 17
  montant: 100000
stats_url: https://panoramax.fr/stats
stats: true
accessibility_status: non conforme
thematiques:
  - Open-Data
  - Outil technique
  - Collectivités
  - Territoires
  - Transports
techno: []
events:
  - name: committee
    date: 2022-10-17
    comment: Lancement en phase de construction
  - name: committee
    date: 2023-07-12
  - name: committee
    date: 2023-11-06
    comment: Lancement en phase d'accélération
  - name: committee
    date: 2024-06-03
  - name: committee
    date: 2024-11-13
  - name: fast
    date: 2025-10-01
---
## Contexte

Les collectivités locales, les gestionnaires de réseaux et d’autres acteurs ont besoin d’actualiser en permanence l’**inventaire du patrimoine mobilier urbain et des voiries** : panneaux, poteaux, affleurants, équipements, pistes cyclables, trottoirs etc.

## Problème

Historiquement et encore majoritairement aujourd’hui cela se traduit par la mobilisation de nombreux agents qui vont lever/vérifier ces éléments sur le terrain engendrant des coûts et déplacements inutiles, la mise en danger des personnels, des pertes de temps…
Aujourd'hui l'utilisation de photos/vues immersives de rues via Google StreetView et/ou Mapillary, ou via des prestations privées (ESRI/Cyclomédia, SOGEFI etc.) ouvre pas mal d'opportunités en termes de rationalisation des déplacements, facilitation et accélération du recueil d'information nécessaire aux traitements de certaines procédures et finalement d'amélioration de la connaissance du territoire.
La collecte, le partage et l'utilisation de ces données restent compliqués : problème de licences, dépendance à des sociétés privées dont la stratégie n'est pas orientée vers l'ouverture des données ou dont la stratégie n'est pas claire, difficulté à partager des bonnes pratiques, à s'assurer de la pérennité d'une solution pour y appuyer des usages métiers à partager etc.

## Investigation - terminée

**Constat initial :** Les différentes communautés (AITF, OSM, Gestionnaires de réseaux, IGN, etc.) bouillonnent d'initiatives sur le sujet, mais pour le moment rien de pérenne ne semble se dégager.
L'investigation doit permettre d'identifier s'il y a la place pour créer un géocommun de base de vues immersives libres à côté des solutions non libres existantes, et le cas échéant d'identifier ce qui bloque l'émergence du commun (manques à combler ou freins) pour y trouver des remèdes permettant de rassembler les énergies des différents acteurs et proposer enfin une alternative libre pour tous, sur laquelle on construira des usages partagés.

Lors de l'investigation ont été interrogées :
* **des collectivités** : premières utilisatrices du produit, et premières contibutrices sans doute en terme de collecte 
* **des développeurs** : ceux qui pourront faire vivre le projet en y adossant des nouveaux services
* **des communautés (OSM, AITF)** : celles qui pourront animer le commun, le faire connaître, pousser à le faire évoluer
* **des gestionnaires de réseaux** : utilisateurs et éventuels contributeurs également
* **des acteurs du secteurs privés (logiciels et/ou collecte)** : ceux qui peuvent faire évoluer leurs pratiques pour faciliter la mise en place du commun ou le rendre inutile.
* **les plate-formes privées** : Mapillary et Kartaview pour voir si on pouvait prévoir de travailler ensemble
* **Autres projets** : qui pourraient proposer des nouveaux usages et aider à valoriser/faire vivre le commun

L'investigation a permis de convaincre le sponsor qu'il était pertinent de favoriser l'émergence d'un géocommun de vues immersives. Beaucoup de contributeurs/réutilisateurs potentiels ont été identifiés. Un noyau d'outils numériques et de règles de bases à spécifier pour permettre à ce commun de pleinement exister a été déterminé : il sera l'objet de la phase de construction.
Pendant la phase d'investigation, un nom a été trouvé au "produit" (commun) via un processus participatif : Panoramax!

## Stratégie

Deux axes forts : 
* **Créer une boîte à outils numériques de base pour alimenter, gérer et partager Panoramax**
    - Développer un applicatif ou d'une brique logicielle pour créer(déployer) une instance et son catalogue
    - Mettre en place une brique logicielle d'anonymisation des images (floutage personnes et véhicules)
    - Développer des utils/API pour alimenter/interroger la base de vues de Panoramax
    - Proposer une ou plusieurs instances de stockage ouvertes

* **Animer le géocommun Panoramax**
    - Définir la gouvernance et ses règles
    - Définir les standards du commun (catalogue, données) et les licences (codes, données)
    - Proposer des guides de bonnes pratiques, des outils de référence et des résultats de tests de ces outils (performance), des tutoriels et des exemples de cas d'usages
    - Mettre en place des argumentaires pour donner envie de contribuer et proposer des modèles économiques adaptés à différentes situations pour faciliter la contribution
    - Organiser des événements pour faire connaître Panoramax et encourager la contribution (GT, Openlabs, Panoramax Party etc.)
    - Réaliser un support technique 
    - Créer un site web vitrine du commun comme point central pour trouver les informations et outils relatifs à Panoramax

## Indicateurs

Des indicateurs encore en cours de définition pour mesurer la montée en puissance du commun (nombre de vues, de contributions, de km linéaires couverts, de services à valeur ajoutée créés à partir des données du commun etc.) et l'impact en termes de solution (réduction des déplacements d'agents publics, réutilisations différentes, etc.).