---
mission: Rendre les sites et services numériques accessibles à toutes et à tous
incubator: dinum
title: Accès cible
contact: acces-cible@beta.gouv.fr
thematiques:
  - Inclusion numérique
usertypes:
  - etat
  - entreprise
  - association
  - particulier
  - collectivite-territoriale
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    start: 2024-06-27
  - name: construction
    start: 2024-10-07
techno:
  - Ruby on Rails
link: https://acces-cible.incubateur.net/
repository: https://github.com/betagouv/acces-cible/
dashlord_url: https://dashlord.incubateur.net/url/acces-cible-beta-gouv-fr/
events:
  - name: committee
    date: 2024-10-07
    comment: Poursuite
  - name: committee
    date: 2025-03-19
    comment: Poursuite
  - name: committee
    date: 2025-10-06
    comment: Poursuite
---
## Contexte

Plusieurs entités ont des obligations en matière d’accessibilité numérique. Sont notamment concernés, en tout ou partie, par le RGAA :

- les administrations des trois fonctions publiques, dont les collectivités territoriales et l’État, ses services déconcentrés et ses opérateurs ;
- les organisations délégataires d’une mission de service public ou sous contrôle d’une administration ;
- les entreprises dont le chiffre d’affaires en France est supérieur à 250 millions d’euros.

Le constat : un (très) faible nombre de services numériques respectent ces obligations, malgré le risque de sanction.

## Problème(s)

Notre enjeu : améliorer l’accessibilité des services numériques à travers leur mise en conformité.

L’[ordonnance de transposition du 6 septembre 2023](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048049674) définit de nouvelles missions pour l’Arcom en créant l’[article 47-1 de la loi n°2005-102](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000048050174), qui précise :

> « Afin de faciliter le contrôle de ces obligations, elle peut mettre en œuvre des méthodes proportionnées de collecte automatisée de données publiquement accessibles. »
> 

Malgré des obligations légales strictes, l’accessibilité numérique reste insuffisamment respectée. L’autorité de contrôle n’a pas les outils nécessaires pour assurer le suivi des mises en conformité, et les organisations concernées manquent de moyens pour s’auto-évaluer vis à vis du RGAA

## Notre hypothèse de travail

Pour accélérer leur mise en conformité, il faut permettre aux services numériques de visualiser simplement le respect de leurs obligations légales en tout ou partie et d’en suivre l’évolution.

## Nos leviers d’action

### **Levier 1 : Renforcer le contrôle et accélérer la mise en conformité**

**Objectif** : Augmenter le nombre de mises en conformité du fait de la généralisation des contrôles.

**Comment ?** 

En renforçant les capacités de l’Arcom pour :

- **Détecter** automatiquement les sites non conformes ;
- **Notifier** les responsables de la situation et des risques encourus ;
- **Suivre** les actions de mise en conformité et, si nécessaire, engager des sanctions.

### Levier 2 : Faciliter l’autocontrôle par les responsables de portefeuille et chefs de produits numériques

**Objectif** : Encourager les équipes en charge des services numériques à prendre en main leur conformité.

**Comment ?** En leur donnant les moyens de :

- **Prendre conscience** de leurs obligations en matière d’accessibilité numérique ;
- **Identifier rapidement** les points d’amélioration prioritaires ;
- **Découvrir** des moyens de formation.

Afin de :

- **Définir un plan d’action concret**, avec des étapes claires et réalisables ;
- **Mettre en œuvre les corrections nécessaires** et suivre leur progression ;
- **Réaliser un auto-contrôle régulier** pour garantir une amélioration continue ;
- **Améliorer leurs compétences** dans le domaine de l’accessibilité numérique.

## Notre solution

**Accès Cible** est un service numérique permettant de vérifier automatiquement le respect :

- des obligations de transparence en matière d’accessibilité numérique ;
- d’une partie des critères de conformité à l’accessibilité.

## Nos objectifs d’impact

Nous piloterons :

- le nombre de services informés par l’Arcom ;
- le nombre de services auto-contrôlés ;
- le nombre de plans d’action définis (déclaratif) ;
- l’évolution, dans le temps (à intervalle régulier), du taux d’accessibilité des services ayant réalisé un test.

Un échantillon de contrôle (services non testés par Accès’Cible) sera également réalisé pour évaluer l’impact du dispositif.

## Construction #1

Les efforts portent sur la construction d’un produit minimum viable en collaboration avec l’Arcom. 

Les premiers retours sont encourageants (potentiel de multiplier par quatre le nombre de sites suivis, gain de temps pour contribuer au reporting européen), mais le produit nécessite encore quelques évolutions.

## Construction #2

Les objectifs : 

- Finalisation du MVP
- Prise en main par l’ARCOM
- Adaptation de l’outil pour l’auto-contrôle