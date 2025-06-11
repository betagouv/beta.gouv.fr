---
mission: 'Orienter les agriculteurs vers les dispositifs les plus pertinents pour leur exploitation : aide financière, formation, accompagnement...'
incubator: agriculture
title: 'Aides Agri '
contact: beatrice.neyrac@agriculture.gouv.fr
accessibility_status: non conforme
thematiques:
  - Agriculture
usertypes:
  - agriculteurices
sponsors:
  - /organisations/agriculture
phases:
  - name: investigation
    start: 2024-05-27
  - name: construction
    start: 2025-01-01
techno:
  - python
  - django
  - PostgreSQL
mon_service_securise: true
repository: https://github.com/betagouv/aides-agri
dashlord_url: https://dashlord.incubateur-agriculture.beta.gouv.fr/url/aides-agri-beta-gouv-fr/
events:
  - name: other
    date: 2025-06-05
    comment: Lancement du MVP
link: ''
---
## Contexte

Suite à la crise agricole, 70 engagements ont été pris par le gouvernement pour simplifier et améliorer le quotidien des agriculteurs. Une réunion avec les professionnels du 15 mars 2024 (CSO) a permis de faire ressortir le **besoin de faciliter et simplifier les démarches pour les agriculteurs** , en leur permettant de disposer d’informations contextuelles sur les démarches administratives. 

L’atelier de cadrage du 13 mai 2024 a ensuite fait émerger un premier périmètre à adresser : les démarches administratives de demandes d’aides financières. 
## Problème

**De nombreuses aides publiques existent, mais il y a :** 
*   **_Un manque de visibilité_**  : les agriculteurs n'ont pas toujours connaissance de leur
existence. Ces aides sont portées par une multiplicité d’acteurs dont les rôles sont parfois mal compris.
* **_Un manque de lisibilité_** : une fois identifiées, les aides ne sont pas toujours faciles
à comprendre ;
* Un sentiment de **_manque d’accompagnement_** dans des parcours qui
peuvent être complexes.


**Par ailleurs, cela provoque un accès inégal aux aides, en fonction du profil des agriculteurs** : 
* Ces dispositifs restent méconnus ou peu accessibles d’une partie significative des agriculteurs, en particulier de ceux peu connectés aux réseaux agricoles (interpro, etc) 
* Le travail de recherche d’aides, chronophage, pénalise les agriculteurs avec le moins de ressources (compétences, financiers et temps)


**Conséquences** :  
* une difficulté à identifier / solliciter les aides adéquates face à la diversité des dispositifs proposés. 
* un manque de visibilité sur les conseillers adéquats à solliciter, en fonction du projet. 


## Solution

Aides Agri est une plateforme digitale qui **permet aux exploitants d’identifier et d’activer facilement des solutions adaptées** (financières, techniques...) grâce à : 
* **_une centralisation des aides publiques à destination des agriculteurs mises à jour_**
* **_une sélection personnalisée de dispositifs adaptée à leur situation en seulement 4 étapes_**
* **_une orientation vers les interlocuteurs pertinents pour déposer votre dossier_** 

Ainsi, en fonction de leurs besoins et de leur profil, plusieurs aides pourront être proposées, avec le cas échéant un aiguillage vers les bons guichets et/ou interlocuteurs.