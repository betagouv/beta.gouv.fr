---
analyse_risques: false
mon_service_securise: false
contact: opicloud@numerique.gouv.fr
repository: https://github.com/cloud-gouv
thematiques:
  - Outil technique
  - Sécurité informatique
techno:
  - kubernetes
  - Cluster API
  - terraform
title: OPICloud
mission: Fournir aux équipes produits une infrastructure standardisée principalement en PaaS (Platform as a Service), permettant aux développeurs de déployer directement leur code sur un environnement dédié à leur équipe ou leur produit.
incubator: dinum_produits_interministeriels
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    start: 2024-07-10
  - name: construction
    start: 2024-10-23
events:
  - name: committee
    date: 2024-10-23
link: ''
---
## Contexte/Problème

Les équipes produits aillant des besoins de sécurités plus avancé commence à opérer et développer leurs infrastructures (en se basant sur un hébergeur SecNumCloud). Les offres actuelles de Cloud demande d'important effort pour mettre en ligne le service dans des bonnes conditions de sécurités et disponibilités, et les équipes produits sont limité par le nombre de DevOps qu'elles peuvent prendre ce qui induit : 
- **Absence de services en 24/7**
- **Manque de ressources opérationnelles**
- **Hétérogénéité des architectures et absence de mutualisation**

## Solution

L’objectif principal est de fournir aux équipes produits une infrastructure standardisée principalement en **PaaS** (Platform as a Service), permettant aux développeurs de déployer directement leur code sur un environnement dédié à leur équipe ou leur produit.

L’infrastructure sera gérée par des **ops dédiés**, avec une intégration initialement manuelle qui sera automatisée à terme. Cette approche vise à :

*   Réduire la complexité liée aux infrastructures sous-jacentes.
*   Simplifier le cycle de vie des applications.
*   Mutualiser les ressources pour réduire les coûts.

## Stratégie

Nous avons des usagers pilotes, nous mettons en place en 6 mois l'infrastructure pour l'héberger, nous développons des services mutualisées au passage pour pouvoir embarquer de nouveaux produits par la suite.
Nous nous appuyons  et collaborons avec les clouds Interne de l'Etat (Nubo et Cloud Pi) et les clouds commerciaux SecNumCloud. 
