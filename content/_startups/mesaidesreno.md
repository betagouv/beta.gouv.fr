---
mission: >-
  Évaluez vos aides à la rénovation en 5 minutes en fonction de votre situation
  et de votre projet
incubator: dinum
title: Mes aides Réno
contact: mael.inizan@beta.gouv.fr
accessibility_status: non conforme
link: https://mesaidesreno.beta.gouv.fr
repository: https://github.com/incubateur-ademe/nosgestesclimat
techno:
    - Next.js
    - React
    - publi.codes
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    start: 2024-12-15
---
# Le problème de politique publique

Le logement représente 11 % de nos émissions de gaz à effet de serre (GES). Il s’agit du deuxième plus gros poste d’émission après les transports. Le gouvernement s’est dès lors fixé des ambitions importantes en matière de rénovation énergétique des bâtiments.

- “En finir avec les passoires thermiques et renforcer la performance énergétique des bâtiments.”
- “Accélérer la rénovation et améliorer le niveau de performance énergétique des bâtiments publics et des logements, en tenant l’objectif de 700 000 rénovations par an (MaPrimeRénov’).” Feuille de route du MTE

La mise en oeuvre de cette politique a été confié à l’ANAH, notamment à travers le dispositifs [France Rénov’](https://france-renov.gouv.fr/), qui a en charge l’accompagnement des particuliers dans leur projets de rénovation énergétique et la distribution des aides nationales.

De son côté, Le Secrétariat général à la planification écologique (SGPE) lance le coach Agir (nom provisoire), un service numérique qui a pour **ambition d’accompagner les ménages de la manière la plus personnalisée possible** dans la **transition écologique** autour des grandes thématiques de la transition : comprendre les enjeux, évaluer ses impacts, partager les bonnes pratiques avec ses concitoyens, simuler son éligibilité aux dispositifs d’accompagnement… **L’une des thématiques centrales du “coach” est la rénovation énergétique des logements.**

Dans ce contexte, l’ANAH, le SGPE et la DINUM ont décidé d’associer leurs efforts pour améliorer l’information, la sensibilisation et l’accompagnement des usagers **dans les toutes premières étapes de la construction d’un projet de rénovation énergétique** de leur logement, en amont du parcours France Rénov’.

# Les usagers et leur problèmes

Que l’on soit propriétaire bailleur ou occupant, appréhender la construction d’un projet de rénovation énergétique d’un logement se révèle souvent très complexe.

L’un des principaux freins à la rénovation énergétique est la barrière financière. Une rénovation (performante) d’un logement réprésente souvent un investissement de plusieurs dizaine de milliers d’euros. Des dispositifs d’aides existent, cependant il reste souvent difficile pour les usagers de pouvoir les appréhender pour construire leur budget.

Des entretiens avec des usagers revèlent de nombreux obstacles dès les toutes premières étapes du parcours, parmi lesquels :
- Des évolutions régulières des critères d’éligibilité et des barèmes;
- Une superposition de dispositifs à l’échelle locale et nationale;
- Une éligibilité aux aides basée sur de multiples critères, qui compliquent la lisibilité des dispositifs, notamment à travers les notions de performance de la rénovation;
- L’existance de nombreuses plateformes commerciales (et parfois frauduleuses) en concurence avec le service public;
La nécéssité avec la réforme de 2024 de faire un choix entre deux parcours d’accompagnement;
- Une abondance d’informations génériques et une difficultés à trouver les informations pertinentes par rapport à ma propre situation et celle de mon logement;
La difficulté à évaluer le reste à charge, une fois les aides déduites;
- Et parfois, la difficulté à identifier les bons interlocuteurs succeptibles de les accompagner
(…)

Depuis l’été 2023, France Rénov’ a mis en ligne une nouvelle version d’un simulateur d’éligibilité aux aides dont l’ambition est de simplifier l’accès aux informations sur les aides. L’investigation Mes Aides Rénov’ s’inscrit dans la continuité de ces travaux et de la stratégie de l’ANAH de construction d’un “pas-à-pas” de la rénovation énergétique.

# L’hypothèse de solution

Dans le cadre de l’expérimentation du Coach Agir, l’investigation à pour objectif d’aider les usagers à répondre à deux questions principales :

- Quels montant d’aide (nationales et locales) puis-je mobiliser pour mon projet de rénovation ?
- Quel budget envisager pour mon projet de rénovation ? Quel sera mon reste à charge ?
- [et dans 2nd temps] où sont les gisements d’économie dans mon logement ? Quels travaux réaliser en priorité ?

Les usagers seront systhématiquement orientés vers leurs conseillers France Rénov’ suite à une simulation.

L’hypothèse de solution est un modèle de calcul ouvert et réutilisable via API par n’importe quel service public, à commencer par le Coach FNV. Un modèle respectant les plus hauts standards des modèles numériques publics et permettant :

- de modéliser les calculs des aides à la rénovation (locale et nationale) en fonction des profils et situation des usagers
- de donner l’accès aux données de calcul d’aides à des services tierces
- de proposer une interface pour permette aux usagers de réaliser des simulations en autonomie

# Les indicateurs d’impact

👉 Nombre de simulations effectuées au total

👉 Nombre de réutilisation des données par des services tiers

👉 % de prise de rendez-vous avec un conseiller France Rénov’ suite à une simulation
