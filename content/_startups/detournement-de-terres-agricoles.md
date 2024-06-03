---
mission: >-
  Détecter des situations de détournements d'usages de terres agricoles de façon
  à alimenter la connaissance de ces pressions et alimenter la politique de
  contrôle en la matière.
incubator: mtes
title: Détournement de terres agricoles
contact: gael.bettinelli@alpes-maritimes.gouv.fr
thematiques:
  - Agriculture
  - Collectivités
  - Administratif
  - Écologie
  - Outil technique
  - Territoires
usertypes:
  - collectivite-territoriale
  - etat
sponsors:
  - /organisations/ddtm34
phases:
  - name: investigation
    start: 2024-04-08
---
## Contexte

Le département des Alpes-Maritimes compte peu de surfaces agricoles et une forte pression, notamment dans la plaine du Var. Les détournements d'usage sont de différentes natures :  casses auto, stockage de matériaux, constructions illégales, etc. Le préfet affiche une volonté forte de préservation de ces espaces et en particulier des fleuves côtiers. Après échange avec la DDTM34, la DDTM 06 souhaite s'appuyer sur la base existante de l'outil AIGLE en testant les fonctionnalités existantes sur les constructions illégales (Cabanes, caravanes, mobil-home, piscines, constructions en dur) et développer de nouvelles fonctionnalités pour repérer des détournements agricoles de formes plus diverse (remblais, casses auto, dépôts d’inertes, etc.). Il s'agit d'améliorer la connaissance des pressions qui s'exercent en particulier sur les vallées des fleuves côtiers et mesurer la plus-value de ces techniques de détection par rapport aux approches plus classiques de télédétection.

## Problème

### Problème réel ?
Comment est-ce un problème ?

(hypothèse) PB 1 : Détection trop tardive
(hypothèse) PB 2 : Détection “humaine” consommatrice de temps et de moyens
(hypothèse) PB 3 : Anticiper phénomène / quantifier
(hypothèse) PB 4 : Le traitement des cas à l’aval de la détection est le facteur limitant principal

Pour qui est-ce un problème ?

(hypothèse) U 1 : Collectivité en charge de la planification
(hypothèse) U 2 : EPA Nice écovallée
(hypothèse) U 3 : Chambre d’agriculture
(hypothèse) U 4 : Préfet ou son représentant
(hypothèse) U 5 : Police de l’urbanisme / de l’environnement

### Le problème est-il “important” ?
Combien de terres sont détournées ?

(à confirmer) ~50 procédures / an maximum

Combien de terres détournées ne sont pas détectées ?

(à confirmer) à priori peu car il y a une verification manuel à exhaustive

Le problème est-il “actionnable” ? (nous verrons cela dans un second temps)


## Solution

Il s'agit de reprendre les acquis de l'outil AIGLE, d'en mesurer les apports sur le territoire maralpin et de développer une nouvelle fonctionnalité pour la détection des détournements d'usage agricole non couverts par les modèles existants de AIGLE. Grâce à cet outil, la DDTM 06 pourra améliorer sa connaissance de la situation des détournements d'usage et orienter sa politique de contrôle en la matière. L'outil pourra permettre une détection plus réactive des situations et un déclenchement plus rapide de l'action publique. Grâce à cet outil et à la politique de préservation des espaces agricoles associée (en particulier son volet contrôles et suites), les détournements d'usage agricole pourront être traités plus rapidement. La phase d'investigation permettra de mesurer les apports de cette approche de détection par rapport aux méthodes plus classiques.

## Stratégie

Le projet a été initié à la demande du préfet des Alpes-Maritimes et a donné lieu à plusieurs échanges avec la . L'objectif est de mettre à disposition le service aux équipes SIG (connaissance), urbanisme et contrôle de la DDTM de façon à outiller la stratégie de préservation  des espaces agricoles mise en œuvre (COPIL Plaine agricole du Var notamment).

A ce stade, il n'est pas envisagé de mettre l'outil à disposition des collectivités, mais de s'appuyer sur l'architecture de l'outil AIGLE 34 pour outiller la politique de l’État local.
- Construction et entraînement d'un modèle (Construction du dataset suffisant pour l’entraînement du modèle, choix d'une approche entre détection simple d'une perte de surface agricole et qualification plus fine, test et validation du modèle : faux positifs, faux négatifs)
- Travail sur la simplification du passage de la détection de changement d'usage agricole (une surface agricole ne l'est plus) à la notion de détournement d'usage agricole (la perte de surface agricole détectée n'est pas légale).
- Travail sur l'intégration de l'outil dans la conduite des politiques publiques : déclenchement de l'action publique suite à une détection confirmée, plus-value dans les faits par rapport aux autres sources d'information, capacité à traiter l'aval des détections.