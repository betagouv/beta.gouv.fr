---
title: Medistock
mission: Améliorer le flux de gestion des stocks de médicaments pour éviter les ruptures
incubator: dinum
contact: joelle.chong@beta.gouv.fr
sponsors:
  - /organisations/ansm
phases:
  - name: investigation
    start: 2024-02-01
  - name: construction
    start: 2024-07-01
thematiques:
  - Santé
usertypes:
  - etat
techno:
  - Talend
  - Mendix
  - java
  - docker
events:
  - name: committee
    date: 2025-01-17
  - name: committee
    date: 2025-04-09
  - name: committee
    date: 2025-11-14
link: ''
---
**Améliorer le flux de gestion des stocks de médicaments pour éviter les ruptures**

## 💥 1. Enjeu de politique publique

En 2023, plus de 5 000 déclarations de ruptures de stock ou de risques de rupture ont été déposées auprès de l'ANSM. Ces pénuries, souvent d'origine nationale ou mondiale (épidémies, conflits, surconsommation), perturbent l'accès aux soins et peuvent, dans les cas les plus graves, entraîner une perte de chance pour le patient.

**Objectif d'impact :** réduire les situations de pénurie au contact du patient, pour les médicaments suivis, grâce à une meilleure circulation de l'information dans la chaîne.

---

## 🎁 2. La solution

Medistock est un outil de pilotage conçu pour fluidifier la prise de décision sur les médicaments en tension par une surveillance renforcée et un pilotage de l'impact des mesures de l'ANSM.

**Levier 1 — Suivi des plans de risque de rupture**

Medistock automatise la production des indicateurs du Plan Hivernal et des autres plans de suivi (psychotropes, plan canicule, médicaments dérivés du sang, ventes directes), permettant à l'ANSM de piloter les tensions sur l'ensemble de la chaîne en limitant les tâches chronophages à faible valeur ajoutée.

**Levier 2 — Fiches de rupture de stock**

Medistock aide les instructeurs ANSM à produire et piloter les fiches de rupture destinées aux prescripteurs de médicaments.

---

## 📊 3. Résultats & impacts

### Levier 1 — Suivi des plans de risque de rupture

**⚙️ Utilisable**

Indice de confiance utilisateurs : 7,3/10 en janvier 2025, 8,3/10 en avril 2025.

Le Plan Hivernal 2025-2026 est piloté exclusivement via Medistock depuis octobre 2025, validant son statut de source officielle des indicateurs.

Cinq plans sont actuellement suivis : Plan Hivernal, psychotropes, plan canicule, ventes directes, médicaments dérivés du sang.

Plusieurs plans peuvent être suivis en parallèle sans charge supplémentaire de production une fois les paramétrages réalisés — la maintenance représente au maximum 1h/semaine VS 8h/semaine pour une création manuelle.

**🚀 Utilisé**

Les indicateurs de l'ensemble des plans sont produits depuis Medistock et ont complètement remplacé les fichiers excel.

**👍 Utile**

- Effets
    - Gain de productivité estimé à 8h/semaine sur la production des indicateurs pour chaque plan, réparti sur trois directions.
- Impact
    - Le suivi renforcé des psychotropes a permis l'application de mesures correctives.
    - Le suivi des ventes directes a créé une capacité de rappel à l'ordre en cas de non-respect des directives de l'ANSM.

**Limites**

Le suivi de nouvelles classes de médicaments n'est pas envisageable dans le périmètre actuel — la fourniture de données supplémentaires est trop chronophage pour les laboratoires et grossistes.

---

### Levier 2 — Fiches de rupture de stock

**⚙️ Utilisable**

Le MVP est en cours de finalisation, avec une livraison prévue en janvier 2026 (retard par rapport à l'objectif initial d'octobre 2025).

**🚀 Utilisé**

En attente du MVP - tests utilisateurs en cours. Les futurs utilisateurs primaires sont les instructeurs des équipes DI et DIRCOM.

**👍 Utile**

- Effets visés
    - Gain estimé à 1 ETP sur la création, le suivi et la mise à jour des fiches.
    - Réduction du nombre de fiches en retard de mise à jour — 15 à 20 concernées chaque mois sur 290 en ligne.
    - Bonne intégration des fiches rupture dans les logiciels de prescription.
- Impact visé
    - Prise en compte par les professionnels de santé des données de rupture via leur logiciel d'aide à la prescription.
    - Propositions d'alternatives aux médicaments en risque de rupture, réduisant le sentiment de rupture en bout de chaîne.

---

## 🔭 4. Perspectives 2026

Mise en œuvre de la première version du Levier 2 (module de création de fiches de rupture) et itération avec les utilisateurs pour valider l'utilisabilité.

Anticiper les risques de rupture en créant une note de risque par groupe de médicaments.

---

## 📖 5. Historique

### 5A. Construction #1 — Juillet 2024 / Janvier 2025

**Irritants à résoudre.** Le Plan Hivernal, mis en place par l'ANSM et le CNOP en novembre 2023, est efficace mais repose sur des processus entièrement manuels — extraction, compilation, analyse, communication. Ce fonctionnement est chronophage pour toutes les parties (laboratoires, grossistes, équipes ANSM) et limite structurellement le nombre de références pouvant être suivies.

**Nos réalisations.** Construction d'un produit minimum viable permettant d'automatiser la production des tableaux de bord du Plan Hivernal, en remplacement des compilations Excel et des exports PowerPoint.

**Apprentissages.**

- Il est possible d'automatiser la production des tableaux de bord sur l'ensemble des références du Plan Hivernal
- Les directions métier acceptent le changement d'outils et de méthodes de travail
- Le gain de productivité est réel : 0,75 ETP sur 8 mois pour les équipes DI et SURV, avec un gain estimé à 1 ETP/période hivernale pour le CASAR

**Limite identifiée.** Les laboratoires et grossistes ne sont pas en capacité de fournir davantage de données, ce qui bloque l'extension du périmètre de suivi.

**Pivot.** L'équipe propose de répliquer l'approche sur d'autres plans existants, d'enrichir Medistock avec de nouvelles sources de données, et d'automatiser la production des fiches de rupture.

---

### 5B. Construction #2 — Janvier 2025 / Novembre 2025

**Irritants à résoudre.** Le gain de productivité sur le Plan Hivernal est validé, mais insuffisant pour atteindre l'objectif d'impact. Deux goulots d'étranglement sont identifiés : d'autres plans de suivi au sein de l'ANSM souffrent des mêmes problèmes de compilation manuelle ; la production des fiches de rupture de stock — 290 fiches en ligne, 15 à 20 en retard de mise à jour par mois — est entièrement manuelle, ce qui entraîne des retards et des renoncements.

**Nos réalisations.**

- Extension du suivi à de nouveaux plans : psychotropes, plan canicule, ventes directes, médicaments dérivés du sang
- Développement du module Fiches de rupture de stock
- Initiation des travaux d'analyse de risque

**Apprentissages.**

- Le modèle du Plan Hivernal est réplicable à d'autres plans sans charge supplémentaire, une fois les paramétrages réalisés
- Le suivi des ventes directes crée une capacité de contrôle et de régulation inexistante auparavant
- La production manuelle des fiches RS constitue un goulot d'étranglement que l'automatisation peut lever