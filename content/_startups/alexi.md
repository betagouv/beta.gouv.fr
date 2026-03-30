---
contact: alexi@dihal.gouv.fr
link: https://alexi.dihal.gouv.fr
thematiques:
  - Logement
usertypes:
  - particulier
  - collectivite-territoriale
  - etat
techno:
  - vue
  - postgres
  - docker
  - nest
  - rabbitMQ
title: Alexi
mission: Prévenir les impayés et les expulsions de locataires
incubator: mtes
sponsors:
  - /organisations/dihal
phases:
  - name: investigation
    start: 2025-04-21
  - name: construction
    start: 2025-07-01
  - name: acceleration
    start: 2026-03-04
events:
  - name: product_launch
    date: 2026-03-04
    comment: Mise en production sur les premiers départements pilotes
repository: https://gitlab-forge.din.developpement-durable.gouv.fr/pub/pnm-public/alexi
impact_url: https://docs.numerique.gouv.fr/docs/748cbd31-80cb-47de-863c-808dbf3919d2/
---
## Contexte

Alexi (Application de Lutte contre les Expulsions et les Impayés locatifs) est une solution portée par la Délégation interministérielle à l’hébergement et à l’accès au logement (Dihal).

Elle s’inscrit dans la politique publique de prévention des expulsions locatives, avec l'ambition d’agir plus tôt pour éviter les ruptures de parcours.

Aujourd’hui, les situations d’impayés sont souvent prises en charge trop tard, alors que des solutions existent.

Alexi vise ainsi à devenir un service public numérique capable de détecter, orienter et accompagner plus rapidement les locataires et les bailleurs confrontés à un impayé de loyer.

* * *

## Problème

Aujourd’hui, lorsqu’un impayé de loyer survient :

- **Les situations sont détectées trop tard**
    - Signalements à un stade avancé
    - Marges de prévention réduites
- **Les locataires et bailleurs ne savent pas vers qui se tourner**
    - Dispositifs peu lisibles
    - Parcours d’accès complexe
- **Les situations sont mal priorisées et peu coordonnées**
    - Difficulté à identifier les cas à risque
    - Intervention tardive ou inadaptée

**Qui en souffre :**

- Locataires en difficulté
- Bailleurs confrontés à des impayés
- Acteurs de la prévention

**Conséquences :**

- Aggravation des situations, mettant en difficulté locataires et bailleurs
- Risque accru d’expulsion et de sans-abrisme

* * *

## Solution

Alexi est un service numérique public qui vise à :

- **Détecter plus tôt les impayés**
    - Centralisation des signalements
    - Qualification du risque
- **Coordonner les acteurs**
    
    - Partage d’information
- **Orienter vers les bonnes solutions**
    - Accès simplifié aux dispositifs de prévention
- **Permettre le signalement direct (cible)**
    - Par les locataires et bailleurs

**Bénéficiaires :**

- Locataires
- Bailleurs
- Acteurs de la prévention

* * *

## Objectifs à 6 mois

**Objectif d’usage :**

- Déployer Alexi sur les premiers territoires et assurer la bascule depuis Exploc (ancien SI)
- Reprendre les données essentielles d’Exploc et garantir leur accessibilité
- Accompagner les utilisateurs pour un usage effectif de la solution

**Objectif d’impact :**

- Assurer une continuité de service sans rupture pour les usagers
- Disposer d’un périmètre fonctionnel équivalent à Exploc
- Améliorer la qualité et la centralisation des données, notamment via l’interconnexion avec la CNAF
- Mieux détecter et orienter les situations d’impayés dès les premiers signaux