---
mission: 'Orienter les agriculteurs vers les dispositifs les plus pertinents selon leur profil et leurs besoins : aide financière, formation, accompagnement...'
incubator: agriculture
title: 'Aides Agri '
contact: aides-agri@beta.gouv.fr
accessibility_status: non conforme
thematiques:
  - Agriculture
usertypes:
  - agriculteurices
  - accompagnants agricoles
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
  - name: product_launch
    date: 2025-06-30
    comment: Lancement du MVP
  - name: committee
    date: 2025-07-04
    comment: Comité de fin de la 1ère phase d'investigation
  - name: committee
    date: 2026-03-13
    comment: Comité de fin de la 2ème phase d'investigation
link: https://aides-agri.beta.gouv.fr
budget_url: https://grist.numerique.gouv.fr/o/masaf/9mbWaZNUvym2/Budget/p/95?embed=true&Produit_=Aides-Agri
stats_url: https://aides-agri.beta.gouv.fr/pages/statistiques
---
## Contexte

Suite à la crise agricole, 70 engagements ont été pris par le gouvernement pour simplifier et améliorer le quotidien des agriculteurs. Une réunion avec les professionnels du 15 mars 2024 (CSO) a permis de faire ressortir le **besoin de faciliter et simplifier les démarches pour les agriculteurs**, en leur permettant de disposer d’informations contextuelles sur les démarches administratives. 

L’atelier de cadrage du 13 mai 2024 a ensuite fait émerger un premier périmètre à adresser : les démarches administratives de demandes d’aides financières. 
## Problème

**De nombreuses aides publiques existent, mais il y a :** 
*   **_Un manque de visibilité_**  : les agriculteurs n'ont pas toujours connaissance de leur
existence. Il y a une multiplicité d'aides portées par une multiplicité d’acteurs, dont les rôles sont parfois mal compris.
* **_Un manque de lisibilité_** : une fois identifiées, les aides ne sont pas toujours faciles
à comprendre, notamment sur les critères d'éligibilité ;


**Cela provoque un accès inégal aux aides, en fonction du profil des agriculteurs** : 
* Ces dispositifs restent méconnus ou peu accessibles d’une partie significative des agriculteurs, en particulier de ceux peu connectés aux réseaux agricoles (syndicats, chambres, coopératives, etc.) 
* Le travail de recherche d’aides, chronophage, pénalise les agriculteurs avec le moins de ressources (compétences, financiers et temps).


**Conséquence** :  
* une difficulté à identifier et solliciter les aides adaptées à sa situation, face à la diversité des dispositifs proposés. 


## Solution

Aides Agri est une plateforme digitale qui **permet aux exploitants agricoles et à leurs accompagnants d’identifier et d’activer facilement des solutions adaptées** (financières, techniques...) grâce à : 
* **_une centralisation des aides publiques à destination des agriculteurs mises à jour_**
* **_une sélection personnalisée de dispositifs adaptée à leur situation, avec filtres par critères_**

Ainsi, en fonction de leurs besoins et de leur profil, plusieurs aides pourront être proposées, avec un aiguillage vers les bons guichets et/ou interlocuteurs.