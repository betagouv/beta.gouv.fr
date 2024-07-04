---
title: PEBA
mission: Faciliter la lutte contre la fraude sociale et fiscale
sponsors:
  - /organisations/mefr
incubator: dinum
contact: christine.fournier@finances.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2023-10-15
  - name: alumni
    start: 2024-01-08
---
## Problème

Dans le cadre de la lutte contre la fraude fiscale et sociale, les administrations effectuent auprès des banques des demandes d'accès aux données bancaires. Ces échanges de données se font actuellement manuellement et les délais peuvent prendre jusqu'à plusieurs mois, ce qui ralenti le travail des enquêteurs et des agents des services de contrôle.

## Solution

Depuis deux ans, le dispositif PEBA permettant la dématérialisation du droit de communication entre les banques et les administrations a été développé et testé dans la sphère judiciaire. Ce dispositif basé sur un schéma de données unique, permet la transmission des informations bancaires en moins de 24h, facilitant le travail des enquêteurs et des banques.

## Stratégie

L'investigation sera menée par la MICAF et aura pour objectif d'identifier la meilleure opportunité de déploiement du dispositif afin de le rendre interministériel, avec comme première direction utilisatrice la DGFIP.

## Fin d'investigation - post mortem

La MICAF souhaite répondre à l’irritant par la mise à disposition d’une API reprenant les données de PEBA.

Suite à l’investigation, la DINUM considère que les critères de lancement d’un service numérique selon l’approche “Startup d’État” ne sont pas réunis. Cette approche n’est probablement pas le mode de développement le plus adapté au développement d’une API raccordée à PEBA. En effet, le projet présente de trop grandes dépendances par rapport au SI du MIOM (PEBA) qui semble avoir une capacité d’évolution assez restreinte (point à confirmer car l’investigation n’a pas permis une analyse approfondie de PEBA). L’approche Startup d’État nécessite la mise en place d’une zone d’autonomie technique avec le minimum d’adhérence à des SI existants.

Concernant la poursuite du projet, la DINUM émet plusieurs points d’attention :

- afin de couvrir l’essentiel des cas d’usages des droits de communication que peuvent émettre les enquêteurs, des évolutions de PEBA sont nécessaires. PEBA étant hébergé dans une autre administration que la MICAF, il sera nécessaire que la MICAF assure une coordination étroite avec les équipes du MIOM afin de prendre en compte les évolutions de PEBA dès le cadrage technique pour que l’API PEBA puisse s’y adapter ;
- dans une démarche privilégiant l’attention à l’“expérience utilisateur” du point de vue de l’enquêteur, il serait opportun que le pilotage du projet ne se fasse pas qu’au niveau de l’API PEBA, mais plutôt sur l’ensemble de la chaîne de valeur (de l’émission du droit de communication jusqu’à la réception des pièces), ce qui permettrait de mieux garantir la prise en compte des besoins des enquêteurs.