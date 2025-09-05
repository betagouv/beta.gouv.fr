---
analyse_risques: false
mon_service_securise: false
contact: raphael.bevenot@numerique.gouv.fr
repository: https://github.com/etalab-ia/mediatech
link: https://huggingface.co/collections/AgentPublic/mediatech-68309e15729011f49ef505e8
thematiques:
  - Intelligence artificielle
usertypes:
  - etat
title: MediaTech
mission: Un outil open source conçu pour convertir automatiquement les données publiques brutes des administrations en ressources fiables et prêtes à l’usage pour l’intelligence artificielle.
incubator: alliance
sponsors:
  - /organisations/dinum
phases:
  - name: construction
    start: 2025-09-03
events:
  - name: product_launch
    date: 2025-09-03
---
# MediaTech, c’est quoi ?

Un **outil open source** développé pour **transformer des données publiques brutes** (issues d’administrations) en **données prêtes à l’emploi pour l’intelligence artificielle** de manière automatisée.

### **À quoi ça sert concrètement ?**

* **Télécharger** automatiquement des jeux de données publics (ex : Service-Public.fr, Légifrance…)

* **Nettoyer, structurer et vectoriser** ces données (pour qu’elles soient comprises par une IA ou utiles pour de la recherche sémantique)

* **Les stocker** dans une base de données PostgreSQL

* **Les exporter** facilement (en fichiers Parquet, vers Hugging Face, Albert API etc.)

### **Pourquoi c’est utile ?**

* Les données publiques sont souvent **difficiles à exploiter directement**.

* MEDIATECH les rend **accessibles, normalisées et prêtes** pour :

  * des chatbots publics,

  * des moteurs de recherche augmentés (RAG),

  * ou toute application IA dans l’administration.

### **Côté technique :**

* L’exécution des différentes pipelines de données est possible directement depuis le Airflow instancié dans la VM

* Tout est aussi pilotable en ligne de commande (`mediatech`) ou avec un script (`update.sh`)

* Utilise Airflow + Docker + PostgreSQL + Python

* Compatible avec Hugging Face pour la publication de datasets

* *Met à jour automatiquement ces collections publiques présentes sur Albert API (à venir)*

### **En résumé :**

MEDIATECH, c’est **l’usine de traitement automatisée des données publiques** **vectorisées&#x20;**: elle prépare les données et s'assure de leur mise à jour pour qu’on puisse enfin **les utiliser intelligemment** dans les services publics boostés à l’IA.
