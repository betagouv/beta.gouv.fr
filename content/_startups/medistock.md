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
events:
  - name: committee
    date: 2025-01-17
  - name: committee
    date: 2025-04-09
  - name: committee
    date: 2025-11-14
link: ''
---
## **Contexte**

En 2023, ont été déposées plus de 5000 déclarations de ruptures de stock et risques de rupture de stock auprès de l’ANSM. Les pénuries de médicaments se font souvent au niveau national et mondial (triple épidémie, guerre, surconsommation).

Ces ruptures entraînent un accès aux soins perturbé et dans certains cas peuvent aller jusqu’à une perte de chance pour le patient.

Face à ce problème, [un plan hivernal a été proposé pour pallier les pénuries de certains antibiotiques](https://ansm.sante.fr/dossiers-thematiques/plan-hivernal), notamment l’amoxicilline, des corticoïdes et le paracétamol. Suite à la demande du ministre de la Santé et de la Prévention, l’ANSM et le Conseil National de l’Ordre des pharmaciens (CNOP) ont mis en place [une charte d’engagement des acteurs de la chaine du médicament](https://ansm.sante.fr/actualites/charte-dengagement-des-acteurs-de-la-chaine-du-medicament-pour-un-acces-equitable-des-patients-aux-medicaments) le 22/11/23.

## **Apprentissages de l’Investigation**

En dehors du plan hivernal, la gestion des ruptures de stock se fait uniquement au niveau des laboratoires. La gestion des ruptures d’approvisionnement ne relève pas des missions de l’ANSM. Dans le cadre du plan hivernal, un effort est réalisé pour suivre les risques de rupture de stock (laboratoires) et les ruptures d’approvisionnement (grossistes, répartiteurs, pharmacies). Les retours collectés soulignent l’intérêt du Plan Hivernal pour prendre des décisions qui vont limiter le sentiment de pénurie par les patients. Cependant, le dispositif du plan hivernal est particulièrement chronophage :

- Pour les laboratoires et les grossistes : temps pour extraire et mettre à disposition les données
- Pour l’ANSM : temps pour compiler, préparer, analyser, communiquer les résultats

Dans les modalités actuelles, il est difficile de suivre plus de références de médicaments dans le cadre du plan hivernal.

**Notre défi** : comment faire pour fluidifier et rendre plus performantes les prises de décisions de l’ANSM en prenant pour base le principe du Plan Hivernal ?

## **Notre solution : Medistock**

L’objectif de Medistock est de fluidifier la prise de décisions sur les médicaments en tension par une surveillance renforcée et un pilotage de l’impact des mesures contrôlées par l’ANSM. Les bénéfices de Medistock :

- Gagner en productivité sur le périmètre du plan hivernal (= libérer plus de temps pour l’analyse)
- Augmenter le nombre de références suivies
- Intégrer une approche prédictive des risques de rupture.

Notre objectif d’impact est de réduire les situations de pénurie en bout de chaîne, au contact du patient, pour les médicaments suivis (grâce à une meilleure circulation de l’information).

## **Apprentissages de la première phase de Construction**

La construction du produit minimum viable a permis de démontrer :

- la capacité à reproduire et automatiser la production des tableaux de bord du plan hivernal ;
- l’acceptation, par les directions métiers, du changement d’outils et de leurs habitudes de travail ;
- un gain de temps équivalent à un temps plein ;

Si le gain de productivité constituait une étape nécessaire sur le chemin de l’impact de Medistock, il reste insuffisant. Début 2025, les conditions ne sont pas réunies pour intégrer le suivi de nouveaux médicaments dans Medistock, faute de capacité des laboratoires et grossistes à fournir davantage de données.

Lors de son comité d’investissement, l’équipe a proposé un pivot :

- Enrichir Medistock avec de nouvelles sources de données pour évaluer la capacité à améliorer les prises de décisions.
- Répliquer l’approche de Medistock à trois autres plans déjà suivis au sein de l’ANSM afin d’améliorer la productivité des agents ;
- Utiliser les apprentissages pour automatiser la production des fiches de rupture, accroître leur capacité de production et faciliter leur réappropriation par des tiers (bases de données, éditeurs de logiciels, etc.), afin d’améliorer l’information des médecins et des pharmaciens sur la situation de pénurie (ou non) d’un médicament au moment de la prescription.