---
mission: Améliorer l’orientation des lycéens en amont de Parcoursup
incubator: dinum
title: MonProjetSup
contact: hugo.gimbert@beta.gouv.fr
sponsors:
  - /organisations/mesr
  - /organisations/onisep
phases:
  - name: investigation
    start: 2023-11-11
  - name: construction
    start: 2024-03-11
  - name: acceleration
    start: 2024-12-10
accessibility_status: partiellement conforme
link: https://monprojetsup.fr/
thematiques:
  - Jeunesse
  - Education
stats_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=152&period=week&date=yesterday#?period=week&date=yesterday&category=Dashboard_Dashboard&subcategory=1
repository: https://github.com/betagouv/monprojetsup
budget_url: https://monprojetsup.fr/budget/
dashlord_url: https://dashlord.incubateur.net/url/monprojetsup-fr/
analyse_risques: true
mon_service_securise: true
usertypes:
  - particulier
  - etablissement-scolaire
techno:
  - react
  - kotlin
  - java
  - postgre
events:
  - name: product_launch
    date: 2024-12-10
impact_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=152&period=week&date=yesterday#?period=week&date=yesterday&category=Dashboard_Dashboard&subcategory=1
---
## Contexte

**Le parcours d’orientation des lycéens concerne plus de 2 millions d’élèves** chaque année et s’étend de la seconde (avec notamment le choix des EDS) à la Terminale (avec le choix des vœux sur Parcoursup). 

Selon un sondage récent réalisé par BVA pour l'Etudiant auprès de 1 609 lycéens et étudiants entre la seconde et le bac+2, **83% d’entre eux se disent inquiets lorsqu’ils pensent à leur choix d’orientation**.
Et selon un sondage IPSOS 2022 pour le Ministère de l'Enseignement Supérieur et de la Recherche, **89% des néo-bacheliers souhaiteraient un renforcement des outils d’aide à l’orientation.**

“Comment pourrait-on améliorer le parcours d'orientation de tous les lycéens quels que soient leur origine/parcours/filière et mieux les préparer à l'étape du choix des voeux sur Parcoursup ?”

Voici la question à laquelle nous nous attelons à répondre dans le cadre de cette investigation.

## Problème

Plusieurs problèmes existent aujourd’hui autour de l’orientation des lycéens : 
* un manque de préparation de certains lycéens au moment de formuler leurs vœux Parcoursup, source de stress, d’auto-censure et de déception pendant la phase d’admission,
* la difficulté à prédire les résultats des admissions sur Parcoursup, notamment pour les référents (professeurs principaux et conseiller d’orientation),
* un fort coût d’accès à l’information par un phénomène d’excès d’information (infobésité) et de manque de personnalisation de l’accès à cette information,
* des inégalités d’accès à l’information entre les différentes catégories de lycéens, dans un contexte d’offres privées très visibles de « coaching » Parcoursup.

## Investigation

L’investigation doit permettre de mieux cerner les problématiques liées à l’orientation, afin de comprendre quelles sont les problématiques terrains rencontrées par les lycéens et les parties prenantes qui interviennent dans le processus d’orientation.

Nous irons donc à la rencontre de 5 cibles prioritaires :
* un panel représentatif de lycéens (classes de la 2nde à la Terminale, avec un mix de filières et de typologie de lycées en Ile-de-France et en région bordelaise),
* des étudiants en 1ère année d’études supérieures,
* les parents d’élèves, 
* les professeurs principaux,
* les psyEN.

## Solution / MVP

L’investigation a confirmé les attentes fortes 
des lycéens pour un accompagnement personnalisé, ainsi que le besoin d'outillage des équipes pédagogiques. Il y a effectivement une opportunité à poursuivre le développement d’un service public numérique à impact. 
La solution envisagée consiste à développer MonProjetSup, service permettant de proposer des suggestions de formations personnalisées selon le profil des élèves.

## Stratégie et impact

Lancée en mars 2024, la SE MonProjetSup a pour objectif à 6 mois de construire un service numérique accessible pour les élèves de 2nde à la Terminale, proposant des suggestions personnalisées de formations, ainsi qu'un moteur de recherche.
Fin 2024, nous aurons réussi si :
* les élèves de 2nde ont ajouté au moins une formation ou un métier dans leur sélection; les élèves de 1ère ont ajouté plusieurs formations du sup et métiers d'intérêt dans leur sélection et ont pris connaissance des attendus des formations; les élèves de Terminale, avant fin février, pour chaque formation ajoutée dans MPS, auront au moins trois favoris Parcoursup, répartis entre A+ (ambitieux) A (réaliste) et B (sécurisant).
*  les professeurs principaux sont prescripteurs du service, peuvent mieux suivre le projet d'orientation de leurs élèves et MPS est le support d'un dialogue de qualité avec leurs élèves.
