---
analyse_risques: true
mon_service_securise: true
contact: albert.api@numerique.gouv.fr
thematiques:
  - Outil technique
usertypes:
  - etat
techno:
  - python
  - vllm
  - fastapi
title: Albert API
mission: Fournir des services d'IA générative aux administrations
incubator: alliance
sponsors:
  - /organisations/dinum
phases:
  - name: construction
    start: 2024-12-02
events:
  - name: product_launch
    date: 2025-02-26
link: https://albert.sites.beta.gouv.fr/
repository: https://github.com/etalab-ia/OpenGateLLM
stats_url: https://albert.sites.beta.gouv.fr/about/metrics/
---
## Contexte

Les progrès récents de l'IA ont un potentiel transformateur dans l'administration.
La sortie de ChatGPT marque un tournant significatif, et les IA continuent de progresser rapidement. Pourtant, ChatGPT ou l'API OpenAI sur laquelle il s'appuie ne permet pas aujourd'hui de traiter des informations confidentielles, sur modèles libres, et sans dépendance à un acteur tiers.

## Problème

Comment matérialiser le potentiel transformateur de l'IA générative de façon souveraine, sécurisée, tout en mutualisant les coûts et les compétences ?

## Solution

Albert API propose des services d'IA génératives sous forme de boîte à outils à destination des produits numériques à impact dans l'administration.
Intégralement sur environnement sécurisé secnumcloud, l'API héberge des modèles openweights (Llama, Mistral, Qwen...) afin d'offrir les fonctionnalités d'IA avancée à nos utilisateurs (appel à un modèle de langage, connexion à une base documentaire...).

## Stratégie

Ouverte à tous les produits numériques de l'Etat en version freemium, et en partenariat privilégié avec les produits à impact (Beta, AllIAnce, La Suite Numérique), Albert API vise à maximiser l'impact transformateur de l'IA générative dans l'administration, tout en mutualisant les ressources (en particulier GPU), les talents et fonctionnalités génériques qui peuvent servir à plusieurs produits et administration (par exemple, RAG-as-a-service).
