---
mission: Interroger à l'aveugle deux modèles de langage conversationnels sur des tâches exprimées en français et comparer les résultats.
incubator: culture
title: Compar:IA
contact: contact@languia.beta.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2024-01-15
  - name: construction
    start: 2024-04-15
usertypes:
  - particulier
  - etablissement-scolaire
  - etat
  - entreprise
  - association
thematiques:
  - Patrimoine
  - Open-Data
  - Démocratie
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
stats_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=126#?period=month&date=2024-10-11&category=Dashboard_Dashboard&subcategory=1
sponsors:
  - /organisations/dinum
  - /organisations/mc
---
## Le problème

Les grands modèles de langage (LLM) actuels sont entraînés sur des données essentiellement anglo-saxonnes. Le développement extrêmement rapide des audiences et des usages de ces modèles fait peser un risque sur la place des langues et des cultures française, francophone et européenne dans les imaginaires collectifs de demain. En parallèle, les débats sont particulièrement vifs sur le volet juridique de l’entraînement des modèles d’IA, le respect du droit d’auteur et des données personnelles et la répartition de la valeur issue de leurs usages.

La question de la facilitation de l’accès aux données en français pour l’entraînement des modèles est directement liée à celle de l’évaluation des modèles sur des tâches en français : en quoi les données mises à disposition en français améliorent-elles les performances des modèles sur des tâches données ? Comment évaluer la capacité des modèles à « bien parler » français ou refléter la culture française, francophone, européenne ?

Ces questionnements font écho à un second irritant identifié auprès des fournisseurs de modèles et de services issus de ces modèles : la difficile mise en œuvre de l’évaluation humaine des modèles sur des tâches en français. Cette évaluation humaine, coûteuse et complexe, sur des aspects spécifiques à la culture et la langue française (ou aux langues européennes) est hors de portée de la plupart des fournisseurs de modèle alors que la majorité des corpus d’évaluation existants sont en anglais, présentent un risque de contamination et ne sont pas toujours alignés avec les usages et attentes des utilisateurs.

## Le service

La plateforme Compar:IA, arène francophone de classement des modèles par préférences humaines, permet de comparer simplement les réponses générées par différents modèles à une instruction donnée. Un utilisateur pose une question en français et obtient des réponses de deux LLM anonymes. Il vote pour le modèle qui fournit la réponse préférée et se voit ainsi révélée l’identité des modèles. Ce dispositif de crowdsourcing inspiré de la plateforme « chatbot arena » (LMSYS) permet de constituer des jeux de données de préférences humaines sur des tâches réelles, en français, utilisables notamment pour l’alignement des modèles. Ces jeux de données seront mis à la disposition des acteurs de l’écosystème académique et industriel du TAL.

L'application développée répond à un double objectif:
1.  **Améliorer la qualité des modèles de langage conversationnels sur les usages francophones** à travers la mise à disposition de jeux de données de préférence en français pour l’alignement des modèles, ressource actuellement rare pour l’écosystème des acteurs académiques et industriels qui travaillent sur ces sujets.

2. **Faciliter l’accès aux IA génératives et encourager l’esprit critique des utilisateurs en rendant effectif un droit au “pluralisme des modèles”**

L’accès simplifié et gratuit à une diversité de modèles d’IA conversationnelles, grands et petits, propriétaires et open source, permet à toutes et tous de les utiliser et de les tester. C’est une première étape de sensibilisation pour encourager l’appropriation responsable et réfléchie de ces outils par les citoyens.

## La stratégie

L’un des défis du projet est de collecter des données de préférences humaines en masse suffisante et selon un dispositif qui assure la réutilisation du jeu de données produit. L’arène LANGU:IA touchera ses premiers utilisateurs-évaluateurs à travers des modules de formation des publics professionnels au fonctionnement et aux biais de l’IA générative, intégrés à des plateformes de formation telles que PIX ou Mentor. 

Ce premier produit pose les bases de services plus ambitieux de mise à disposition de jeux de données francophones, identifiant la structure LANGU:IA comme tiers de confiance et acteur fédérateur de l’écosystème. Les services produits par la start-up s’inscrivent dans les prérogatives des établissements LANGU:IA et ALT-EDIC en cours de structuration.

