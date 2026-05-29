---
analyse_risques: false
mon_service_securise: false
contact: dgcl-elections-fpt2@dgcl.gouv.fr
thematiques:
  - Administratif
  - Collectivités
usertypes:
  - Préfectures
techno:
  - python
  - grist
  - Démarche numérique
title: Résultats Elections FPT 2026
mission: Saisir et centraliser les résultats des élections professionnelles dans la fonction publique territoriale
incubator: dinum
sponsors:
  - /organisations/direction-generale-des-collectivites-locales
phases:
  - name: construction
    start: 2025-04-30
events:
  - name: product_launch
    date: 2026-03-31
link: https://grist.numerique.gouv.fr/o/dgcl/nSM9tj7KSr5G/ResultatsElectionsFPT
repository: https://github.com/betagouv/Resultats-Elections-FPT
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques#a1.s29.r49.c2
---
## Contexte

Tous les quatre ans ont lieu les élections professionnelles dans la fonction publique. Dans la fonction publique territoriale, les agents publics sont invités à voter pour élire leurs représentants, qui siègent aux côtés de représentants de l’administration (au sein des CAP, des CCP et des CST).

## Problème

Pour la fonction publique territoriale, les scrutins sont organisés au sein des collectivités territoriales (et de leurs établissements). Or, la Direction générale des collectivités locales (DGCL) est chargée de centraliser au niveau national les résultats pour toute la fonction publique territoriale afin, notamment, de déterminer la représentation syndicale dans les instances nationales (CSFPT...).

Les préfectures doivent cartographier l'organisations des différents scrutins de leur département afin de faciliter le jour J la remonté des résultats.

L'application développée en 2022 n'est pas maintenue et est obsolète.

## Solution

Le développement d'un outil informatique de saisie et de remontée des résultats, en passant par les préfectures qui sont en lien direct avec les collectivités territoriales, permettra de faciliter cette mission de la DGCL.
Pour construire cet outil, l'équipe s'appuie intégralement sur des outils numériques déjà existant : 
- Grist pour permettre aux préfecture de cartographier les modalités des scrutins et saisir les résultats des éléctions
- Démarche numérique pour faciliter les remontés des informations des collectivités  au profit des préfectures

## Les publics cibles
- Les préfectures en charge de centraliser les informations des élections de leur département et remonter les résultats des élections.
- Les collectivités qui organisent des scrutins
- Les agents de la DGCL en charge de centraliser l'ensemble des données au niveau national et extraire les résultats.

## Objectifs 2025

Avoir un outil prêt à l'usage pour l'année 2026 avec, d'abord, l'établissement d'une cartographie des scrutins, puis, avec la remontée des résultats lors des élections de décembre 2026.

-  Construction avec les utilisateurs d'une application sur grist par itérations courtes.
- T2 2026 : Construction nocode/lowcode avec les fonctionnalités grist d'une première version de l'application
- T3 2026 : Ajout de sur-couches techniques (Widget custom) basées sur le DSFR pour améliorer l'expérience utilisateur

- montée en compétence des agents publics de la DGCL pour construire des documents grist complexes et pour les sensibilités au mode produit.

## Objectif 2026

### T1 2026 : 
- Wébinaire de présentations à l'ensemble des préfectures
- Phases de tests avec accès à un bac à sable
- Embraquement des utilisateurs

### T2 2026 : 
L'application a été mise à disposition de l'ensemble des préfectures pour une première phase d'utilisation centrée sur la cartographie des modalités de scrutins.
- les collectivités remplissent la démarche numérique pour indiquer les modalités de scrutins
- les préfectures traitent ces informations
-les préfectures mettent à jour les données de la cartographe

L'équipe met à jour en continue l'application en fonction des retours des utilisateurs

### T3 2026 
- Test des fonctionnalités liées à la saisie des résultats
- embarquement des préfectures sur les nouvelles fonctionnalités

### T4 2026

- Ouverture de la phase saisie des résultats



## Mesures d'impact
En construction

