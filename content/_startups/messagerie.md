---
analyse_risques: true
mon_service_securise: true
contact: christophe.ninucci@beta.gouv.fr
link: https://webmail.numerique.gouv.fr
thematiques:
  - Administratif
  - Outil technique
  - Sécurité informatique
usertypes:
  - etat
  - association
  - collectivite-territoriale
  - etablissement-scolaire
title: Messagerie
mission: Une boite mail et agenda open-source sécurisés pour les petites équipes
incubator: dinum_produits_interministeriels
sponsors:
  - /organisations/dinum
phases:
  - name: construction
    start: 2024-09-01
events:
  - name: other
    date: 2025-01-15
    comment: Homologation de sécurité
techno:
  - postfix
  - dovecot
  - imap
  - smtp
  - caldav
  - open-xchange
accessibility_status: partiellement conforme
repository: https://gitlab.mim-libre.fr/dimail/
---
## Contexte

La suite numérique de la DINUM cherche a intégrer une brique messagerie dans son offre de service.

## Problème

- opérer un service de messagerie en devops
- intégrer ce service de messagerie dans les SI partenaires
- fournir un environnement permettant l'autonomie et le self-care

## Solution

Gérez vos emails et vos rendez-vous dans un environnement sécurisé conçu pour les besoins des agents du service public

Gérez votre boîte aux lettres avec une interface dernière génération
Partagez vos agendas facilement

## Stratégie

Plusieurs axes:
- la constitution d'un commun numérique pour éprouver le produit face aux différents usages
- la mise à disposition de services en self-care aux agents publics
- la mise en place d'APIs et interface de gestion pour introduire les fonctionnalités de gestion collaborative.
