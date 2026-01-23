---
mission: Interroger à l'aveugle deux modèles de langage conversationnels sur des tâches exprimées en français et comparer les résultats.
incubator: culture
title: Compar:IA
contact: contact@comparia.beta.gouv.fr
accessibility_status: partiellement conforme
phases:
  - name: investigation
    start: 2024-01-15
  - name: construction
    start: 2024-04-15
  - name: acceleration
    start: 2025-04-16
usertypes:
  - particulier
  - etablissement-scolaire
  - etat
  - entreprise
  - association
  - collectivite-territoriale
thematiques:
  - Open-Data
  - Démocratie
  - Écologie
  - Formation
techno:
  - kubernetes
  - python
  - gradio
  - fastapi
  - svelte
repository: https://github.com/betagouv/comparia
link: https://comparia.beta.gouv.fr/
events:
  - name: other
    date: 2024-09-25
    comment: Atelier - Numérique en communs 2024
  - name: other
    date: 2025-02-07
    comment: Journée compar:IA - Bibliothèque nationale de France
  - name: other
    date: 2025-11-04
    comment: Première publication du classement comparIA issu des votes à l'aveugle des utilisateurs de la plateforme
stats_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=126&period=day&date=yesterday#?period=day&date=yesterday&category=Dashboard_Dashboard&subcategory=1
sponsors:
  - /organisations/dinum
  - /organisations/mc
dashlord_url: https://dashlord.incubateur.net/url/www-comparia-beta-gouv-fr/
impact_url: http://metabase.comparia.beta.gouv.fr/public/dashboard/8d5418a6-40cb-4cdb-8384-101ee6cca0be
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques/p/4#a1.s29.r15.c2
---
## Le problème

Les grands modèles de langage (LLM) actuels sont entraînés sur des données essentiellement anglo-saxonnes, ce qui crée des biais linguistiques et culturels dans les résultats qu’ils produisent. Le développement extrêmement rapide des audiences et des usages de ces modèles, vecteurs d'une vision d'une monde non neutre, fait peser un risque sur la place des langues et des cultures française, francophone et européenne dans les imaginaires collectifs de demain. 

Ces questionnements font écho à un second irritant identifié auprès des fournisseurs de modèles et de services issus de ces modèles : la difficile mise en œuvre de l’évaluation humaine des modèles sur des tâches en français. Cette évaluation humaine, coûteuse et complexe, sur des aspects spécifiques à la culture et la langue française (ou aux langues européennes) est hors de portée de la plupart des fournisseurs de modèle alors que la majorité des corpus d’évaluation existants sont en anglais, présentent un risque de contamination et ne sont pas toujours alignés avec les usages et attentes des utilisateurs.

L’amélioration de la qualité des modèles de langage conversationnels sur les usages francophones passe par la mise à disposition de jeux de données de préférence en français pour l’alignement des modèles, ressource actuellement rare pour l’écosystème des acteurs académiques et industriels qui travaillent sur ces sujets.


## Le service

Le site <https://comparia.beta.gouv.fr> permet de tester et comparer à l'aveugle les réponses de deux agents conversationnels piochés parmi une grande diversité (plus d’une quarantaine de modèles open source comme propriétaires et de différentes tailles). Après avoir voté, l'identité des modèles est révélée à l'utilisateur, accompagnée d'informations détaillées sur les caractéristiques des modèles et leur impact environnemental.

Les questions posées et données de préférence collectées alimentent des jeux de données repartagés en open source, dans l’idée de constituer un commun numérique qui favorise l'observation des usages et la qualité des modèles sur les usages francophones. Ces données constituent une ressource rare pour l'écosystème car elles sont en français et reflètent les usages réels des utilisateurs dans des contextes d'utilisation non contraints.

Le site comparIA est gratuit, accessible sans création de compte et répond à un **triple enjeu** :

*   **Donner accès** simplement à une grande **diversité de modèles conversationnels** dans le principe de défense d’un « droit au pluralisme des modèles »
*   **Informer l’utilisateur** sur les caractéristiques des modèles et leur impact environnemental pour encourager des usages responsables
*   **Collecter des données** de questions et de préférence et **partager les jeux de données** sous licence ouverte pour en faire bénéficier l’écosystème

Le service sert ainsi un double objectif:

*   **Former** les citoyens à l'utilisation des systèmes d'IA conversationnelle et les sensibiliser à divers enjeux : le pluralisme des modèles, leur impact environnemental, les biais culturels et linguistiques qu'ils comportent.
*   Publier les jeux de données de question et de préférence pour faciliter l'**observation des usages** et **améliorer la qualité des systèmes d'IA **conversationnelles sur les usages **francophones**

Ouvert au public en octobre 2024, le site compte plus de 300 000 visiteurs uniques. Le jeu de données de questions compte plus de 300 000 lignes et le jeu de données de préférence plus de 160000 lignes (chiffres actualisés le 7 novembre 2025).


## La stratégie

La mesure d'impact de compar:IA réside dans le nombre de questions et de préférence collectées, reflétant à la fois la fréquentation du site et la volumétrie des jeux de données partagés.

Les jeux de données ont d'ores et déjà atteint une volumétrie conséquente: **160 000 votes et plus de 500 000 questions**. A titre de comparaison, la part du français dans le jeu de données “[lmsys-chat-1m](https://huggingface.co/datasets/lmsys/lmsys-chat-1m)” qui fait autorité sur les enjeux d’alignement est de 1,5%, soit moins de 20 000 conversations en français. Les jeux de données compar:IA constituent une ressource rare et exploitable à la fois par les acteurs industriels et académiques (machine learning et sciences humaines et sociales).

Pour assurer une **fréquentation assidue de la plateforme** et faire grandir la volumétrie des jeux de données, plusieurs leviers de croissance et d'accélération du service ont été activés **depuis le lancement du service en octobre 2024**:

* **Diversification des partenariats de diffusion** et **intégration de comparIA dans différents formats de sensibilisation et formation à l'IA générative**. 
  * En plus de PIX, des partenariats et collaborations sont en cours de développement avec les acteurs suivants: CNNUM, CLEMI, Campus du numérique, CAIRE, Latitudes, Datactivist, La Fresque de l'IA, UNESCO. Les contacts sont également pris avec le Réseau Canopé, BPI France Université, l'Institut Français.
  * Conception et diffusion de l'outil de médiation "Les Duels de l'IA" pour faciliter l'utilisation de comparIA dans des contextes de formation professionnelle et/ou d'enseignement: 
* **Développement de nouvelles fonctionnalités** selon l'évolution des usages et des besoins et dans le cadre de **projets mutualisés avec des acteurs partenaires**:
    *   L'intégration d'un ** classement des modèles à partir des données de préférence collectées**, construit en partenariat avec le **PEReN**, et rendu public en 11/2025. Une mise à jour hebdomadaire est prévue pour garantir la fraicheur du classement. 
    *   des synergies peuvent être établies avec Etalab afin par exemple de mettre comparIA au service des besoins de tests et d'évaluation des systèmes conversationnels dans la cadre de projets portés au sein de la sphère publique.
* **Intégration continue de nouveaux modèles**: évolution de la plateforme en fonction des nouvelles capacités des modèles pour faciliter leur compréhension auprès des utilisateurs (ex: modèles de raisonnement)

Les indicateurs de résultat permettant d’évaluer l’atteinte des objectifs du projet, d’ici octobre 2025, sont les suivants: 

* Réduire les biais culturel des grands modèles de langage grâce à **l'exploitation des jeux de données**: il s'agit d'ici six mois d'avoir qualifié au moins trois réutilisations à impact des jeux de données: 
  * Par exemple faire en sorte qu'au moins deux grands éditeurs de modèles aient utilisé les jeux de données produits par Compar’IA pour l'entraînement de la version suivante de leur modèle ; 
  * Observatoire des usages en fonction d'indicateurs et de métriques construites en synergie avec les acteurs pertinents (CNNUM, LaborIA...) facilitant l'analyse des données collectées et facilitant la valorisation des jeux de données auprès des acteurs académiques et industriels.

* **Passage à l’échelle du module Compar’IA sur de nouvelles langues**:
Un jeu de données est publié dans une langue européenne ou issue de la francophonie (avec une mention d’excellence si la langue européenne est rare). Cible : 50k lignes de questions.  

Les services produits par la start-up s’inscrivent dans les prérogatives des établissements LANGU:IA et ALT-EDIC en cours de structuration.

