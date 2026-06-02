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
  - name: consolidation
    start: 2026-06-03
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

Les grands modèles de langage (LLM) actuels sont entraînés sur des données essentiellement anglo-saxonnes, ce qui crée des biais linguistiques et culturels dans les résultats qu'ils produisent. Le développement extrêmement rapide des audiences et des usages de ces modèles, vecteurs d'une vision d'un monde non neutre, fait peser un risque sur la place des langues et des cultures française, francophone et européenne dans les imaginaires collectifs de demain.

Ces questionnements font écho à un second irritant identifié auprès des fournisseurs de modèles et de services issus de ces modèles : la difficile mise en œuvre de l'évaluation humaine des modèles sur des tâches en français. Cette évaluation humaine, coûteuse et complexe, sur des aspects spécifiques à la culture et la langue française (ou aux langues européennes) est hors de portée de la plupart des fournisseurs de modèle alors que la majorité des corpus d'évaluation existants sont en anglais, présentent un risque de contamination et ne sont pas toujours alignés avec les usages et attentes des utilisateurs.

L'amélioration de la qualité des modèles de langage conversationnels sur les usages francophones passe par la mise à disposition de jeux de données de préférence en français pour l'alignement des modèles, ressource actuellement rare pour l'écosystème des acteurs académiques et industriels qui travaillent sur ces sujets.


## Le service

Le site <https://comparia.beta.gouv.fr> permet de tester et comparer à l'aveugle les réponses de deux agents conversationnels piochés parmi une grande diversité de modèles (plus de 130 modèles semi-ouverts, open source comme propriétaires et de différentes tailles ont été testés, avec une trentaine à une quarantaine de modèles actifs simultanément). Après avoir voté, l'identité des modèles est révélée à l'utilisateur, accompagnée d'informations détaillées sur les caractéristiques des modèles et leur impact environnemental.

Les questions posées et données de préférence collectées alimentent des jeux de données repartagés en open source, sous licence **Etalab 2.0** et **CC-BY 4.0**, dans l'idée de constituer un commun numérique qui favorise l'observation des usages et la qualité des modèles sur les usages francophones. Ces données constituent une ressource rare pour l'écosystème car elles sont en français et reflètent les usages réels des utilisateurs dans des contextes d'utilisation non contraints.

Le site compar:IA est gratuit, accessible sans création de compte et répond à un **triple enjeu** :

*   **Donner accès** simplement à une grande **diversité de modèles conversationnels** dans le principe de défense d'un « droit au pluralisme des modèles »
*   **Informer l'utilisateur** sur les caractéristiques des modèles et leur impact environnemental pour encourager des usages responsables
*   **Collecter des données** de questions et de préférence et **partager les jeux de données** sous licence ouverte pour en faire bénéficier l'écosystème

Le service sert ainsi un double objectif:

*   **Former** les citoyens à l'utilisation des systèmes d'IA conversationnelle et les sensibiliser à divers enjeux : le pluralisme des modèles, leur impact environnemental, les biais culturels et linguistiques qu'ils comportent.
*   Publier les jeux de données de question et de préférence pour faciliter l'**observation des usages** et **améliorer la qualité des systèmes d'IA conversationnelles sur les usages francophones**

Ouvert au public en octobre 2024, le site compte plus de 400 000 visiteurs uniques. Le jeu de données de questions compte plus de 800 000 prompts collectés. compar:IA s'est par ailleurs vu décerner le statut de **bien public numérique (Digital Public Good)** par la Digital Public Goods Alliance en novembre 2025.

Le service évolue désormais d'un service public français vers un **commun numérique multilingue et multi-sectoriel**, conçu pour être déployable par tout gouvernement, secteur ou communauté linguistique. Le Danemark a ainsi lancé son propre déploiement ([ai-arenaen.dk](https://ai-arenaen.dk)) en novembre 2025, première réplication internationale du modèle compar:IA.


## La stratégie

La mesure d'impact de compar:IA réside dans le nombre de questions et de préférence collectées, reflétant à la fois la fréquentation du site et la volumétrie des jeux de données partagés.

Les jeux de données ont d'ores et déjà atteint une volumétrie conséquente: **plus de 800 000 prompts collectés** et plusieurs centaines de milliers de votes de préférence. A titre de comparaison, la part du français dans le jeu de données "[lmsys-chat-1m](https://huggingface.co/datasets/lmsys/lmsys-chat-1m)" qui fait autorité sur les enjeux d'alignement est de 1,5%, soit moins de 20 000 conversations en français. Les jeux de données compar:IA constituent une ressource rare et exploitable à la fois par les acteurs industriels et académiques (machine learning et sciences humaines et sociales).

Pour assurer une **fréquentation assidue de la plateforme** et faire grandir la volumétrie des jeux de données, plusieurs leviers de croissance et d'accélération du service ont été activés **depuis le lancement du service en octobre 2024**:

* **Diversification des partenariats de diffusion** et **intégration de compar:IA dans différents formats de sensibilisation et formation à l'IA générative**. compar:IA est notamment intégré aux parcours **Pix IA** : Pix intègre compar:IA dans ses modules d'apprentissage sur l'intelligence artificielle, permettant à des centaines de milliers d'élèves de découvrir, comparer et mettre à l'épreuve les IA conversationnelles directement depuis la plateforme. À travers ce partenariat, compar:IA accompagne Pix dans sa mission d'amener **1,5 million d'élèves chaque année** vers un usage éclairé, raisonné et responsable de l'IA générative.
* **Développement de nouvelles fonctionnalités** selon l'évolution des usages et des besoins et dans le cadre de **projets mutualisés avec des acteurs partenaires** (l'ensemble du code est ouvert et disponible sur [GitHub](https://github.com/betagouv/ComparIA)). Les principaux chantiers en cours visent à rendre la plateforme pleinement réappropriable par d'autres organisations et communautés linguistiques : un **back-office de personnalisation des arènes** (gestion des modèles, des suggestions de prompts, des types de votes et des utilisateurs, configuration du pipeline de publication des données) ; des **modes d'authentification et d'accès configurables** (indispensables aux arènes sectorielles à accès restreint comme compar:IA Santé) ; un **classement « 2.0 » et une cartographie des usages** (classement personnalisé à partir de ses propres votes, analyse thématique des conversations) ; l'**historique des conversations** pour les utilisateurs connectés ; ainsi que la poursuite de l'**internationalisation** de l'interface.
* **Expansion sectorielle** : une déclinaison **compar:IA Santé** est en cours de développement. Il s'agit d'une arène de comparaison de modèles à l'aveugle réservée aux professionnels de santé vérifiés, destinée à produire des jeux de données de préférence spécifiques au domaine médical. C'est le premier cas concret de la stratégie d'expansion sectorielle du projet.

Les indicateurs de résultat permettant d'évaluer l'atteinte des objectifs du projet sont les suivants:

* Réduire les biais culturels des grands modèles de langage grâce à **l'exploitation des jeux de données**: il s'agit d'avoir qualifié au moins trois réutilisations à impact des jeux de données.

* **Passage à l'échelle du module compar:IA sur de nouvelles langues et de nouveaux secteurs**

Les services produits par la start-up s'inscrivent dans les prérogatives des établissements LANGU:IA et ALT-EDIC en cours de structuration.