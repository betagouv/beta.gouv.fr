---
title: Mistral Pénal
mission: Simplifier le suivi des dossiers pour les greffiers et automatiser les activités de pilotage (statistiques) pour les DSGJ
sponsors:
  - /organisations/direction-de-programme-procedure-penale-numerique
  - /organisations/mj
  - /organisations/sous-direction-de-l-organisation-judiciaire-et-de-l-innovation-oji-4-direction-des-services-judiciaires
incubator: justice
contact: maxime.gammaire@justice.gouv.fr
accessibility_status: non conforme
redirect_from:
  - /startups/T2BJustice
events:
  - name: product_launch
    date: 2022-06-30
    comment: Appel à projet du Ministère de la justice
  - name: committee
    date: 2023-03-30
    comment: Construction du MVP
  - name: committee
    date: 2023-10-10
    comment: Lancement de l'expérimentation sous réserve des conditions de sécurité
  - name: committee
    date: 2024-04-04
    comment: Validation du lancement de l'expérimentation
  - name: committee
    date: 2024-11-07
    comment: Premières preuves d'impact. Première phase de déploiement
  - name: committee
    date: 2025-04-04
    comment: Premiers déploiements effectués - Finalisation de la phase de construction actée fin juin 2025
  - name: committee
    date: 2025-07-01
    comment: 'Passage en accélération '
phases:
  - name: investigation
    start: 2022-06-29
    end: 2023-03-30
  - name: construction
    comment: Construction du MVP et test utilisateur sur des cas vidéos
    start: 2025-04-04
  - name: acceleration
    start: 2025-07-01
thematiques:
  - Justice
analyse_risques: true
usertypes:
  - greffier/greffière
  - Magistrat
  - Directeur des services de greffe judiciaires
techno:
  - angular
  - symfony
budget_url: https://docs.numerique.gouv.fr/docs/8ed06f6a-d613-4311-a63f-1904f3548985/
link: https://mistralpenal.beta.gouv.fr/
stats_url: https://docs.numerique.gouv.fr/docs/8ed06f6a-d613-4311-a63f-1904f3548985/
repository: https://github.com/betagouv/Mistral-penal
impact_url: https://docs.numerique.gouv.fr/docs/8ed06f6a-d613-4311-a63f-1904f3548985/
contact_dinum: julie.guyot
---
## **Contexte**

- [Les enseignements des États généraux de la justice](http://www.justice.gouv.fr/plan-daction-pour-la-justice-13010/) : le numérique comme levier d’amélioration de l’efficience du pilotage de l’activité juridictionnelle (via une harmonisation et une homogénéisation des pratiques).
- Un enjeu de simplification des outils de travail : [Une volonté du Garde des Sceaux - Ministre de la Justice](http://www.presse.justice.gouv.fr/discours-10093/discours-de-2023-13026/presentation-du-second-plan-de-transformation-numerique-34759.html).

## **Problème 🛠**

À l’origine de l’investigation, le constat porte sur le manque de collaboration entre les outils utilisés, un partage d’informations peu fluide et une redondance dans la saisie des données. Ces irritants quotidiens peuvent entraîner une perte de plusieurs heures par semaine pour chaque agent en charge de manipuler les données, en particulier les greffiers.

- La première période d’investigation a cherché à identifier comment rendre les intervenants de la chaîne pénale plus efficaces afin de réduire les délais d’exécution des jugements.
- La seconde période d’investigation s’est concentrée sur la manière d’améliorer l’efficience du suivi et du pilotage des dossiers tout au long de la chaîne pénale.

## **Apprentissages 🔎**

- **Pour les greffiers** : il est essentiel de simplifier drastiquement la saisie des données sur l’ensemble de l’audience (éviter les copier-coller, synchroniser les documents et logiciels) et pas seulement le reporting. La simplification de la saisie est un prérequis pour améliorer les étapes suivantes (agrégation, lecture). Actuellement, les greffiers perdent entre 4 et 8 heures par semaine à télécharger des documents, ressaisir des données et naviguer entre des interfaces complexes pour vérifier les informations.
- **Pour les Directeurs des services de greffe judiciaire (DSGJ)** : les enjeux sont de fiabiliser la saisie des données pour garantir leur qualité et de simplifier l’agrégation des tableaux (réduire les bugs et les risques d’erreurs de manipulation). L’objectif est de gagner du temps et d’assurer une remontée d’informations fiable.
- **Pour les chefs de juridiction / chefs de cour** : il s’agit de favoriser le partage des bonnes pratiques en matière d’indicateurs, d’améliorer leur lisibilité pour faciliter leur exploitation et d’optimiser l’efficience du pilotage.

## **Nos partis pris 💡**

- Sortir de la logique **« le document contient la donnée »** pour adopter l’approche **« la donnée génère le document »**.
- Simplifier la production des tableaux de bord est une opportunité pour alléger la charge de travail des greffiers.
- Récupérer la donnée à la source (la note d’audience) afin de simplifier et automatiser son traitement.

## **Solution 🎯**

**MISTRAL Pénal** est un service numérique qui simplifie le suivi des dossiers pour les greffiers et automatise les activités de pilotage (statistiques) pour les DSGJ. Il leur permet de gagner du temps au quotidien et de se concentrer sur leurs activités à forte valeur ajoutée.

MISTRAL Pénal améliore l’efficience du pilotage de l’activité juridictionnelle, de la saisie des données jusqu’à leur analyse.

- **Pour les greffiers** : suppression des tâches de recopie et de bâtonnage, suivi de la progression grâce à une barre d’avancement du travail.
- **Pour les DSGJ** : amélioration de la qualité des données et gain de temps dans la production des indicateurs, avec des statistiques toujours à jour.
- **Pour les chefs de juridiction** : accès à des indicateurs plus lisibles et actionnables, pour une organisation optimisée.

## **Apprentissages de la phase de construction #1**

Le MVP a reçu un premier accueil positif des greffiers lors de sa prise en main sur un cas fictif, avec un gain estimé d’au moins **1h30 par semaine** sur le premier périmètre testé.

## **Apprentissages de la phase de construction #2**

Cette phase s’est concentrée sur l’implémentation des éléments de sécurité permettant l’utilisation de MISTRAL Pénal en situation d’audience réelle.

## **Apprentissages de la phase de construction #3**

L’expérimentation à petite échelle auprès de **6 greffiers (5 tribunaux)** a mis en évidence :

- Une solution **simple à utiliser** (note moyenne de **9/10**).
- Une **forte envie d’adopter MISTRAL Pénal au quotidien** (note moyenne de **8,5/10**).

**Bénéfices constatés** :

- **Préparation d’audience 5 fois plus rapide**, soit un gain de **2h à 2h30 par semaine**, permettant aux greffiers de se concentrer sur des tâches à plus forte valeur ajoutée.
- **En audience** : gain de temps de quelques minutes, mais surtout **réduction du stress, meilleure concentration sur le contenu des dossiers et diminution du risque d’erreurs**.

Les pistes d’amélioration identifiées laissent envisager **un gain de temps supplémentaire d’au moins 4 heures par semaine et par greffier** :

- **2 heures** grâce aux améliorations de MISTRAL Pénal (saisie complète des décisions et génération automatique des documents de sortie d’audience).
- **2 heures** grâce à une meilleure communication avec d’autres outils du ministère (hors périmètre d’action de MISTRAL Pénal).

## **Objectifs pour la phase de construction #4**

- **Améliorer le MVP** : gestion du mode hors ligne, saisie des décisions, amélioration continue et optimisation basée sur les retours utilisateurs.
- **Déployer à plus grande échelle** : au moins **30 greffiers utilisateurs** et plus de **150 audiences couvertes**.
- **Confirmer les gains de temps** observés.
