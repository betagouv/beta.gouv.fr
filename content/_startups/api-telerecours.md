---
contact: julie.guyot@numerique.gouv.fr
thematiques:
  - Justice
  - Administratif
usertypes:
  - etat
title: API Télérecours
mission: Simplifier l'accès aux données de contentieux de Télérecours pour les ministères
incubator: dinum
contact_dinum: julie.guyot
contact_incubator: julie.guyot
sponsors:
  - /organisations/conseil-d-etat
phases:
  - name: investigation
    start: 2026-09-07
events:
  - name: product_launch
    date: 2026-07-10
link: ''
---
## Contexte
Télérecours est la plateforme du Conseil d'État qui centralise les échanges avec les juridictions administratives ainsi que les données relatives aux contentieux administratifs. Ces données sont utilisées par de nombreux acteurs, notamment les ministères, pour assurer le suivi de leurs procédures contentieuses et alimenter leurs outils métiers.

Plusieurs ministères ont exprimé le besoin de disposer d'un accès plus simple, standardisé et sécurisé à ces données afin de développer de nouveaux services, automatiser certains traitements et améliorer le suivi de leurs dossiers.

Le projet vise à faciliter la réutilisation des données de Télérecours grâce à la mise à disposition d'un accès API répondant aux besoins des administrations tout en respectant les règles d'accès et de consultation propres au Conseil d'État.

## Problème

Aujourd'hui, les ministères ne disposent pas d'un mode d'accès standardisé et industrialisable aux données de Télérecours pour alimenter leurs applications métiers.

En l'absence d'une API, certains besoins sont couverts par des solutions de contournement, reposant notamment sur l'automatisation d'interactions avec l'interface utilisateur (scraping), qui sont peu pérennes, difficilement mutualisables et peuvent présenter des risques en matière de sécurité et de conformité.

## Solution

Le projet vise à proposer une API unique permettant un accès sécurisé, standardisé et conforme aux règles juridiques et métier de Télérecours.

L'ambition est de concevoir une API suffisamment générique et évolutive pour couvrir les principaux cas d'usage des ministères, tout en permettant l'ouverture progressive à d'autres usages et, à terme, à d'autres catégories d'utilisateurs comme les avocats.

Dans un premier temps, l'API répondra principalement à des besoins de lecture des données de contentieux. Les besoins en écriture pourront également être étudiés lorsque ceux-ci apporteront une valeur métier et pourront être mis en œuvre dans le respect des exigences fonctionnelles, juridiques et de sécurité propres à Télérecours.
