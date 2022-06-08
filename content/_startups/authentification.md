---
title: Authentification
mission: Proposer un serveur d'authentification centralisé avec notamment un envoi de code par la messagerie Tchap
sponsors:
  - /organisations/dinum
incubator: dinum
contact: tchap@beta.gouv.fr
link: 
repository: https://github.com/tchapgouv/tchap-identite
events: []
phases:
  - name: construction
    start: 2022-04-01
usertypes:
  - collectivite-territoriale
  - etat
---

## Contexte

Authentification a été initié en Avril 2022 afin de 

## Problèmes

L'authentification est un sujet épineux que chaque service doit résoudre. Les ministères ont des contraintes variées et parfois très restrictives : pas de cookie, pas d'authenticator. 

## Solution

Le service Authentification permet de s'authentifier simplement avec l'envoi d'un code de connecition par mail ou par messagerie sécurisée Tchap. 

## Stratégie

* Intégrer les applications clientes de la dinum afin d'éprouver le concept. Première candidate : Audioconf
* Etendre le service afin de s'intégrer dans Agent Connect
* Etudier les synergies avec le service Data Pass
* Proposer des services de Single sign on (authentification unique) afin d'éviter de s'authentifier plusieurs fois

## Indicateurs d'impact
* Ratio : Nombre de connection abandonnée / Nombre de connection successful