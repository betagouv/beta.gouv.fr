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

L’État souhaite rendre les capacités d’IA générative accessibles à ses services et produits numériques internes.

Cependant, les outils accessibles (ChatGPT, API de fournisseurs externes) présentent **des limites pour l'administration française** : dépendance à des acteurs privés, risques de fuite d’informations sensibles, difficultés de conformité et de souveraineté.

## Problèmes

1. Les administrations qui recourent à des API externes (OpenAI, etc.) prennent **le risque de divulgation et de dépendance technologique**.

2. Chaque produit numérique de l’État tente de recréer son propre "backend IA" (gestion de modèles, infrastructure GPU, scalabilité), **ce qui génère des coûts redondants**.

3. Certains services n’ont **pas les compétences** ou **les ressources** pour intégrer des modèles IA, d’autres **passent beaucoup de temps à choisir ou déployer des modèles open source**.

4. **Les données publiques ou internes manipulées sont sensibles** : il faut garantir la confidentialité, l’authentification, la traçabilité et un environnement sécurisé (SecNumCloud, etc.).

## Solution

**Albert API** est une infrastructure publique de services d’intelligence artificielle générative, développée par la DINUM pour permettre aux administrations d’expérimenter, construire et opérer des produits numériques à impact, en s’appuyant sur des modèles d’IA performants, dans un cadre souverain, sécurisé et mutualisé.

**Albert API** propose une interface simple (compatible OpenAI), permettant d’accéder à des [modèles open source](https://albert.sites.beta.gouv.fr/solutions/models/) (ex : Llama, Mistral, etc), mais aussi à des services avancés (RAG, OCR, classification, vectorisation de documents…) directement utilisables dans les produits publics.

L'outil est  déjà utilisé dans **plus de 70 projets publics** et traite plus de **100 000 requêtes hebdomadaires**.
