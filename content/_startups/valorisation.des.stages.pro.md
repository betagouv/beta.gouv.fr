---
title: APLyPro
mission: Valoriser les périodes de formation en milieu professionnel (PFMP) réalisées par les lycéens et lycéennes pro.
sponsors:
  - /organisations/dgesco
incubator: dinum
link: https://aplypro.beta.gouv.fr/
stats_url: https://aplypro.beta.gouv.fr/stats
repository: https://github.com/betagouv/aplypro
contact: aplypro@beta.gouv.fr
analyse_risques: true
analyse_risques_url: https://pad.numerique.gouv.fr/PN0XQ98MQSWDMyhAS_dE6g
accessibility_status: partiellement conforme
events:
  - name: committee
    date: 2023-02-03
    comment: Comité de fin d'investigation
  - name: other
    date: 2023-08-11
    comment: Publication du décret n° 2023-765 relatif au versement d’une allocation en faveur des lycéens de la voie professionnelle dans le cadre de la valorisation des périodes de formation en milieu professionnel ainsi que de l’arrêté déterminant les montants et les conditions de versement de l’allocation aux lycéens de la voie professionnelle engagés dans des périodes de formation en milieu professionnel
phases:
  - name: investigation
    start: 2022-09-21
    end: 2023-03-01
  - name: construction
    start: 2023-03-01
thematiques:
  - Formation
---
## Contexte

L'une des volontés affirmées par le Président de la République pour son deuxième quinquennat est de transformer de manière profonde les lycées professionnels, notamment en rémunérant toutes les périodes de stage en entreprise effectuées par les élèves.

Cela permettrait de mieux de préparer les jeunes au monde de l'entreprise et de faire converger l'ensemble des voies professionnelles.

## Problème

Actuellement, seules les périodes de stages dépassant une durée de deux mois sont rémunérées. Aucune aide n'est versée aux lycéens et lycéennes pro qui effectuent des périodes de stages plus courtes.

## Solution

Fournir une plateforme qui permet aux établissements de renseigner la durée effective des stages, les coordonnées bancaires des élèves et de générer les décisions d'attribution (= document annuel ouvrant les droits de l'élève à son allocation et l'informant sur les modalités de calcul et plafond de montant). APLyPro peut ainsi calculer le montant à verser à chaque élève et transmettre les données nécessaires à l'Agence de services et de paiement (ASP) pour le versement.

Le périmètre du "produit minimum viable" en vue du lancement d'APLyPro (rentrée 2023) est présenté sur le schéma ci-dessous. Les versements interviendront à compter de 2024 (budget prévu par le projet de loi finances pour 2024).

![Schéma présentant l'architecture fonctionnelle du Produit minimum viable en vue du lancement national](https://storage.gra.cloud.ovh.net/v1/AUTH_0f20d409cb2a4c9786c769e2edec0e06/padnumerique/uploads/7940ba08-8042-496a-9f48-e66b69776f9d.jpg "Schéma d'architecture fonctionnelle")

## Stratégie

* mars à octobre 2023 : développement d'APLyPro "produit minimum viable"
* octobre 2023 : lancement auprès de 40 établissements pilotes
* novembre 2023 : lancement à l'échelle nationale
* novembre à décembre 2023 : développement du système d'envoi en paiement
* ﻿janvier 2024 : premiers versements aux élèves
* juin 2024 : internalisation du produit par la Direction du numérique pour l'éducation (DNE)
