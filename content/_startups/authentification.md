---
title: Authentification
mission: Proposer un serveur d'authentification centralisé avec notamment un envoi de code par la messagerie Tchap
sponsors:
  - /organisations/dinum
incubator: dinum_produits_interministeriels
contact: contact@agentconnect.gouv.fr
link: ''
repository: https://github.com/tchapgouv/tchap-identite
phases:
  - name: construction
    start: 2022-04-01
  - name: alumni
    start: 2024-01-01
usertypes:
  - collectivite-territoriale
  - etat
thematiques:
  - Outil technique
techno: []
---
## Contexte

Authentification a été initié en Avril 2022.
En 2024, Authentification a été fusionné au sein d'un seul produit regroupant les solutions AgentConnect, ProConnect et MonComptePro.

## Problèmes

L'authentification est un sujet épineux que chaque service doit résoudre. Les ministères ont des contraintes variées et parfois très restrictives : pas de cookie, pas d'authenticator. 

## Solution

Le service Authentification permet de s'authentifier simplement par l'envoi d'un code de connexion par mail ou par messagerie sécurisée Tchap. 

## Stratégie

* Intégrer les applications clientes de la dinum afin d'éprouver le concept. Première candidate : Audioconf
* Etendre le service afin de s'intégrer dans Agent Connect
* Etudier les synergies avec le service Data Pass
* Proposer des services de Single sign on (authentification unique) afin d'éviter de s'authentifier plusieurs fois

## Indicateurs d'impact
* Nombre de connexions
* Ratio : Nombre de connexions abandonnées / Nombre de connexions réussies