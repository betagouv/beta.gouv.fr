---
accessibility_status: non conforme
contact: martin.letellier@beta.gouv.fr
repository: https://github.com/betagouv/mondevissansoublis/
link: https://mon-devis-sans-oublis.beta.gouv.fr/
redirect_from:
  - /startups/checklist.demande.aides.renovation.energetique.html
thematiques:
  - Écologie
  - Administratif
  - Logement
usertypes:
  - particulier
  - entreprise
techno:
  - rails
  - publi.codes
title: Mon Devis Sans Oublis
mission: Fluidifier l'instruction des aides en limitant les allers-retours sur les devis lors de l'instruction des dossiers de demandes d'aides à la rénovation énergétique pour les logements des particuliers
incubator: mtes
sponsors:
  - /organisations/agence-national-de-l-habitat
  - /organisations/dgaln
  - /organisations/dgec
  - /organisations/dhup
phases:
  - name: investigation
    start: 2023-11-27
  - name: construction
    start: 2024-10-01
stats_url: https://mon-devis-sans-oublis.beta.gouv.fr/statistiques
dashlord_url: https://dashlord.mte.incubateur.net/url/mon-devis-sans-oublis-beta-gouv-fr/
events:
  - name: product_launch
    date: 2025-01-13
    comment: Lancement de la 1ere version en Beta restreinte
  - name: committee
    date: 2025-01-28
---
## Contexte

**Le logement représente 11 % de nos émissions de gaz à effet de serre (GES).** Il s’agit du deuxième plus gros poste d’émission après les transports. Le gouvernement s’est dès lors fixé des ambitions importantes en matière de rénovation énergétique des bâtiments et vise **700 000 rénovations par an**.

On doit donc accélérer la rénovation du parc privé et c'est pour cela que de nombreuses aides sont à disposition des ménages : MaPrimeRenov', les CEE, les éco-prêts à taux 0, la TVA à 5.5% et de nombreuses aides locales.

Malheureusement, certains ménages ont des craintes, fondées ou non, de ne pas savoir faire un dossier d'aide, ou encore de devoir attendre trop longtemps les aides. Certains abandonnent, certains font sans aide. C'est un fait : **un dossier incomplet ou mal renseigné notamment sur les devis peut conduire à des allers-retours qui rallongent énormément les délais d'instruction.**


## Problèmes

Aujourd'hui, **la très grande majorité des devis et des factures comportent des erreurs ou des mentions manquantes** puisqu'il est aujourd'hui difficile de savoir précisément quelles sont les informations demandées.

Cela entraîne  **de nombreux allers-retours chronophages et frustrants** pour toutes les parties prenantes (particuliers, artisans, conseillers Espace France Rénov...). 

Les délais d'instruction peuvent alors devenir très longs et la réputation de ces aides peut alors être entachée et les aides moins sollicitées. 


De plus, la nomenclature des gestes de travaux aidés n'est pas harmonisée car il existe plusieurs référentiels pour les aides. Aucun modèle de données ne liste les attendus pour chaque aide en termes de mentions minimums (généralistes et par geste) à fournir dans les devis et les factures. La réglementation est mouvante, les initiatives sont nombreuses mais les acteurs ont du mal à s'y retrouver.


## Solutions

**Mon Devis Sans Oublis aide les particuliers et les artisans à déposer des dossiers complets afin de réduire au maximum les délais d'instruction.**

Nous allons créer un **outil de pré-vérification automatique des devis** pour s'assurer d'avoir toutes les informations nécessaires à l'instruction. 
De cette manière, les devis passant par Mon Devis Sans Oublis n'auront pas d'échanges demandeurs et les délais d'instruction seront alors beaucoup moins importants. 

Cet outil se décompose en 3 briques : 

- Une brique de **lecture automatique de devis pdf** pour en sortir les données structurées 
- Un **algorithme de conformité** vérifiant ces données par rapport à la réglementation et vérifier que l'instruction peut se faire sans demandes complémentaires. 
- Une **interface d'aide à la correction du devis**

## Stratégie

L'objectif de cet outil est qu'il soit disponible sur l'ensemble du parcours utilisateur afin d'avoir un maximum de dossiers complets. 
Mon Devis Sans Oublis sera alors disponible depuis une interface web mais aussi en API pour pouvoir le pousser auprès des différents acteurs de l'éco-système.



**L'impact attendu se mesure avec différents KPIs :** 
- Baisse du nombre d'allers-retours sur les devis lors de l'instruction
- Délais d'instruction des aides raccourcis 
- Prise en main par les Espace France Rénov et les différents acteurs de la chaîne de valeur.
