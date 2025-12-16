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
techno: []
repository: https://github.com/betagouv/partageonsleau/tree/main
impact_url: http://partageonsleau-metabase.osc-fr1.scalingo.io/public/dashboard/91ec0e3c-8711-4796-9fc8-e204b3c67e6c
link: ''
---
## Contexte

Objectif fixé par la **Directive-cadre sur l’eau** : rétablir le bon état quantitatif et qualitatif des masses d’eau.

Afin de s’adapter et définir des stratégies adaptées au bon état des masses d’eau, l’**amélioration de la connaissance sur l’état des ressources et des prélèvements représente un enjeu majeur.** Cet enjeu figure également dans plusieurs mesures du plan Eau.

Le plan Eau fixe par ailleurs un objectif de **réduction 10% d’eau prélevée d’ici à 2030.**


## Problème

Aujourd’hui, la connaissance sur les **prélèvements et l’état des ressources est fragmentée**, les données sont **dispersées** entre bases nationales et locales qui ne communiquent pas, elles sont aussi **incomplètes**. 

Il en résulte une difficulté pour les **services de l’Etat / collectivités et opérateurs** pour assurer leurs missions de **préservation et de partage de l’eau**, en particulier : 
* l’attribution et le contrôle des autorisations de prélèvement - loi sur l’eau (DDT/DREAL)
* la définition des volumes prélevables et le suivi des trajectoires de réduction (collectivités porteuses de SAGE / PTGE)

*"Il est très fastidieux d'obtenir les informations nécessaires pour suivre correctement les volumes prélevés."*
DDT

Il en résulte également pour les préleveurs (industriels, agriculteurs, gestionnaires eau potable) la perception unanime d’un **manque de transparence** et d’**inégalités de traitement** entre usagers ainsi qu’une **lourdeur administrative** (saisie de la même information dans différents systèmes) 

*"Nous avons réduit de 30% nos prélèvements ces 5 dernières années. En période de crise, on nous demande encore 25% de réduction. C'est la double peine."*
Industriel

*"On nous demande de remonter nos volumes au-delà de 1000m³ par an, ce qui n'est pas le cas pour les industriels ou l'eau potable."*
Agriculteur


**Conséquences à terme : risque de conflits d’usage + risque pour la préservation de la ressource**.

## Solution

**Usagers prioritaires** : services de l’état (DDT, DREAL, collectivités porteuses de SAGE/PTGE)

**Usagers secondaires** : préleveurs (industriels, agriculteurs, gestionnaires eau potable) 

**Objectif à horizon 6 mois : transparence**

Création d’une **base de donnée unique des prélèvements tous usages confondus** sur 1 à 2 périmètres de **SAGE/PTGE** : collecte des données de prélèvement au pas de temps mensuel pour 80% (en volume) des usagers soumis à autorisation/déclaration, 4 catégories d’usagers sur 5 sont représentés dans la base de donnée. Le service permettra de :
* Détecter les dépassements individuels (v/v des autorisations de prélèvement) et collectifs (v/v des volumes prélevables définis)
* Comprendre l’évolution du besoin en eau des usagers / historiser les efforts réalisés afin de faciliter les dérogations en période de restriction lorsque c'est pertinent 

Note : application du “dites le nous 1x” dès que cela est possible 

**Objectifs à moyen terme : anticipation et répartition dynamique de l’eau multi-usage** 
* Anticiper le passage des seuils et risques de stress hydrique.
* Anticiper les besoins en eau des usagers
* Proposer une répartition de l'eau plus dynamique par usager en fonction de la disponibilité de la ressource et des besoins des usagers

