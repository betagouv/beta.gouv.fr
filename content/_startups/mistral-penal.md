---
title: Mistral Pénal
mission: Simplifier le suivi des dossiers pour les greffiers et automatiser les activités de pilotage (statistiques) pour les DSGJ
sponsors:
  - /organisations/mj
incubator: justice
contact: maxime.gammaire@justice.gouv.fr
accessibility_status: non conforme
redirect_from:
  - /startups/T2BJustice
events:
  - name: product_launch
    date: 2022-02-01
    comment: Appel à projet du Ministère de la justice
  - name: committee
    date: 2023-10-10
    comment: Mise en sécurité pour le lancement de l'expérimentation
  - name: committee
    date: 2024-04-03
    comment: Construction sur un périmètre de juridictions restreint.
  - name: committee
    date: 2024-11-07
    comment: Expérimentation du produit MISTRAL PENAL
phases:
  - name: investigation
    start: 2022-06-29
    end: 2023-03-30
  - name: construction
    comment: Construction du MVP et test utilisateur sur des cas vidéos
    start: 2024-11-06
thematiques:
  - Justice
analyse_risques: true
usertypes:
  - greffier/greffière
  - Magistrat
  - Directeur des services de greffe judiciaires
techno: []
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view
link: ''
---
## Contexte

- [Les enseignements des Etats généraux de la justice](http://www.justice.gouv.fr/plan-daction-pour-la-justice-13010/)
  Le numérique : un levier pour améliorer l’efficience du pilotage de l’activité juridictionnelle (via une harmonisation et homogénéisation des pratiques)

- Un enjeu de simplification des outils de travail :
  [Une volonté du Garde des sceaux - Ministre de la justice](http://www.presse.justice.gouv.fr/discours-10093/discours-de-2023-13026/presentation-du-second-plan-de-transformation-numerique-34759.html)

## Problème 🛠

A l’origine de l’investigation, le constat se porte sur l’aspect peu collaboratif des outils utilisés, un partage d’information peu fluide, une redondance dans la saisie des données. Ces irritants quotidiens peuvent se traduire par la perte de plusieurs heures par semaine pour chaque agents en charge de manipuler les données) en particulier les greffiers.

La première période d'investigation a cherché à identifier comment rendre plus efficace les intervenants de la chaîne pénale pour réduire les délais d'exécution des jugements.

La seconde période d'investigation a permis de s'interroger de savoir comment faire pour rendre plus efficient le suivi et le pilotage des dossiers tout au long de la chaîne pénale.

## Apprentissages 🔎

- Pour les greffiers, il est plus important de simplifier drastiquement la saisie des données sur l’ensemble de l’audience (éviter les copier-coller, synchroniser les documents et logiciels) et pas uniquement le reporting. Simplifier la saisie des données est le pré-requis pour apporter des améliorations sur les étapes suivantes (agrégation, lecture)
- Pour les Directeurs des services de greffe judiciaire, les enjeux sont de fiabiliser la saisie des données pour en garantir la qualité et de simplifier l’agrégation des tableaux (limiter les bugs et les risques d’une mauvaise manipulation). Cela afin de gagner du temps et garantir une remontée d’informations fiables
- Pour les chefs de juridiction / chefs de cours, il y a des enjeux de partage des bonnes pratiques en matière d’indicateurs suivi de d’améliorer leur lisibilité afin de faciliter leur exploitation et d’améliorer l’efficience du pilotage.

## Nos partis pris 💡

- Sortir de la logique “le document contient la donnée”, mais, au contraire penser “la donnée génère le document”
- Simplifier la production des tableaux de bord est une occasion pour simplifier le travail des greffiers
- Récupérer la donnée à la source (la note d’audience) pour simplifier et automatiser ses différents traitements

## Solution 🎯

MISTRAL Pénal est un service numérique qui simplifie le suivi des dossiers pour les greffiers et automatise les activités de pilotage (statistiques) pour les DSGJ afin de leur faire gagner du temps au quotidien et leur permettre de se concentrer sur leurs activités à forte valeur ajoutée

MISTRAL Pénal améliore l’efficience du pilotage de l’activité juridictionnelle, de la saisie de la donnée jusqu’à son analyse.

- Pour les greffiers : gagnez du temps en supprimant les tâches de recopie de données et de bâtonnage, et suivez votre progression grâce à la barre d'avancement du travail
- Pour les DSGJ : améliorez la qualité des données, et gagnez en temps et confort lors de la production des indicateurs, tout en ayant des statistiques toujours à jour
- Pour les chefs de juridiction : bénéficiez d'indicateurs de meilleure qualité, plus lisibles et facilement actionnables, pour une organisation optimisée

## Apprentissage de la phase de construction #1 :

Le MVP montre un potentiel de gain de temps important : Prioriser les fonctionnalités sur la base des retours utilisateurs pour maximiser le potentiel d’impact

Trois fonctionnalités prioritaires pour enrichir la proposition de valeur de Mistral :

- Saisie complète des décisions dans Mistral
- Documents complémentaires (liées à l’exécution des peines)
- Mettre à jour les données dans KSP en fin d’audience

## Apprentissage de la phase de construction #2 :

La mise en oeuvre de l'expérimentation a nécessité de travailler sur les éléments de sécurité pour être utilisé en situation réelle. La majeure partie de cette phase y a été consacré.
Les échanges avec les utilisateurs et les tests de prise en main confirment les apprentissages de la première phase

## Objectifs Construction #3 :

Lancement de l'expérimentation (les conditions sont désormais réunies) avec prise en main par les greffiers en situation réelle.
Nos objectifs :

- confirmer le gain de temps du MVP sur la phase de préparation d'audience et au cours de l'audience.
- Mise en oeuvre des fonctionnalités sur la fin d'audience (décision, générations de documents de sortie d'audience)
