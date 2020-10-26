---
title: Itou
mission: La réussite pour tous
owner: la Délégation générale à l’emploi et à la formation professionnelle
  (DGEFP) & Pôle emploi, appuyé par le Haut-commissariat à l'inclusion dans
  l'emploi et à l'engagement des entreprises
sponsors: 
    - name: Délégation générale à l'emploi et à la formation professionnelle
      acronym: DGEFP
      domaine_ministeriel: travail
      type: administration-centrale
    - name: Pôle emploi
      domaine_ministeriel: travail
      type: operateur
incubator: dinum
link: https://inclusion.beta.gouv.fr
repository: http://github.com/betagouv/itou
contact: contact@inclusion.beta.gouv.fr
stats: true
events: []
phases:
  - name: investigation
    start: 2019-06-10
  - name: construction
    start: 2019-06-10
  - name: acceleration
    start: 2020-07-10
rgpd:
  responsable: DGEFP
  finalites:
    - faciliter l’identification des structures d’insertion par l’activité économique
    - fluidifier le recrutement des personnes éligibles
    - réduire la charge administrative des structures de l’insertion
    - renforcer les outils de suivi et de pilotage de la performance des structures d’insertion
    - stimuler le développement et l’accès aux outils digitaux d’appui aux parcours d’insertion
  donnees:
    - "données relatives aux candidats: état-civil détaillé, domicile, téléphone, courriel"
    - "données relatives à la candidature, au contrat d'agrément et de travail"
    - "données relatives au parcours de formation"
    - "critères d'éligibilité des candidats"
    - "données relatives aux employeurs: nom, prénom, structure, identifiants professionnels"
    - "données relatives aux prescripteurs: nom, prénom, structure, identifiants professionnels"
    - "données techniques en vue de la traçabilité des actions sur la plateforme"
  controles:
    - type: Analyse des risques
      intervenant: Equipe Itou
      date: 2020-01-07
    - type: Tests d'intrusion
      intervenant: Ernst & Young
      date: 2020-03-01
    - type: Homologation provisoire
      intervenant: Anne-Laure Hochedez-Planche
      date: 2020-04-02
    - type: Tests d'intrusion
      intervenant: Ernst & Young
      date: 2020-05-02
    - type: Homologation ferme
      intervenant: Anne-Laure Hochedez-Planche
      date: 2020-10-06
  exercer_vos_droits: https://doc.inclusion.beta.gouv.fr/mentions/protection-des-donnees
  mesures_securite: "La plateforme est hébergée en France par un prestataire certifié ISO."
  validite_homologation: 2023-10-06
---


Aujourd'hui **[inclusion.beta.gouv.fr](https://inclusion.beta.gouv.fr/)** permet de mettre en relation des chercheurs d'emploi (aussi nommés candidats) auprès d'[employeurs solidaires](https://doc.inclusion.beta.gouv.fr/pourquoi-cette-plateforme/les-acteurs/employeurs-solidaires) (entreprises, associations...). Les candidats peuvent également bénéficier de l'aide de [prescripteurs](https://doc.inclusion.beta.gouv.fr/pourquoi-cette-plateforme/les-acteurs/prescripteurs-habilites) (Pôle emploi, Missions locales, Cap Emploi...).

### Contexte

L’**insertion par l’activité économique** (IAE) est un dispositif dans lequel l’État
confie une mission d’accompagnement socio-professionnel de personnes
en difficulté à plus de 3 700 strucutres associatives ou privées. Ce dispositif bénéficie à des publics très éloignés de l’emploi (134 000 personnes en parcours d’insertion fin 2017). Il repose sur l’association de trois facteurs-clés : une mise en situation professionnelle, un accompagnement professionnel mais aussi social, et la mobilisation d’actions de formation. 

L'**inclusion dans l'emploi** concerne le vaste dispositif de l'IAE, les [entreprises adaptées](https://travail-emploi.gouv.fr/emploi/emploi-et-handicap/article/emploi-et-handicap-les-entreprises-adaptees-ea) (EA) dont la spécificité est d'employer au moins 80% de travailleurs en situation de handicap, et les [groupements d’employeurs pour l’insertion et la qualification](https://travail-emploi.gouv.fr/emploi/insertion-activite-economique/article/groupements-d-employeurs-pour-l-insertion-et-la-qualification-geiq) (GEIQ).

### Problématique

Plus de 500.000 personnes sont en chômage de très longue durée (2 an ou plus) ([source INSEE](https://www.insee.fr/fr/statistiques/2417491#tableau-figure1)). L'Insertion par l’Activité Economique (IAE) peut être une des solutions, seulement un certain nombre de problèmes ont été soulevés par la [Cour des Comptes](https://www.ccomptes.fr/system/files/2019-01/20190115-rapport-insertion-chomeurs.pdf), nous alertant sur des freins d’accès à l’IAE et sur les modèles économiques des structures, peu connus, aux équilibres fragiles. 

Actuellement il existe des délais entre l’orientation d’une personne et son début de contrat. L'agrément IAE, définissant l'éligibilité d'une personne à l'IAE, doit être fiabilisé et simplifié. Enfin, les entreprises et autres acteurs de l'IAE passent un temps très important à saisir des données ou établir des rapports sur leur activité, charge administrative récurrente et parfois redondante d'un rapport à l'autre.

### Vision & ambition

Tous les acteurs mobilisés pour l'inclusion doivent pouvoir partager l'information de manière simple, efficace et rapide. C'est la vision portée par inclusion.beta.gouv.fr. Toutes les informations nécessaires pour lever les différentes contraintes du quotidien – la charge administrative, le recrutement des profils éligibles, etc. – pourront y être centralisées, à la manière d'un « guichet unique ».

L'ambition est de proposer une solution numérique intégrée permettant de lever les freins limitant aujourd'hui l'action de l'IAE (insertion par l'activité économique) : problèmes d'accès aux [profils éligibles](https://doc.inclusion.beta.gouv.fr/pourquoi-cette-plateforme/les-acteurs/qui-peut-beneficier-des-contrats-dinsertion-par-lactivite-economique) (« sourcing ») et d'accompagnement vers l'emploi durable, lourdeur administrative, et faible accès à des outils mutualisés de professionnalisation et d'accompagnement des parcours.

### Finalités

1. **Faciliter l'orientation et l'embauche** de candidats à un emploi accompagné vers des [employeurs solidaires](https://doc.inclusion.beta.gouv.fr/presentation/employeurs-solidaires) (SIAE, GEIQ, EA) en centralisant un registre de l’offre et en refondant l’agrément IAE.
2. **Réduire la charge administrative** pour tous les acteurs, et **renforcer le pilotage de l’IAE** afin d'optimiser l'offre d'inclusion sur le territoire.
3. **Faciliter les échanges entre acteurs de l’inclusion** pour améliorer l’accompagnement des personnes et alimenter les politiques publiques.
4. **Valoriser l'offre commerciale des employeurs solidaires** afin de développer le nombre d'emplois.

> « Pour l'insertion par l'activité économique, nous porterons à 240 000 le nombre de contrats, il y en a aujourd'hui 140 000.» 
> Emmanuel Macron, Président de la République, Présentation de la stratégie nationale de prévention et de lutte contre la pauvreté, 13 septembre 2018


### Outils

**[inclusion.beta.gouv.fr](https://inclusion.beta.gouv.fr/)** est doté des outils suivants : 
- [Forum - forum.inclusion.beta.gouv.fr](https://forum.inclusion.beta.gouv.fr)  - ouvert à tous, avec Discourse (cf. Chantier 3.)
- [Documentation - doc.inclusion.beta.gouv.fr](https://doc.inclusion.beta.gouv.fr) - ouvert à tous, avec GitBook
- Espace de discussion, avec Slack (interne)
- Outil de gestion de projet, avec Trello (interne)
- Outil de support utilisateur, avec Zammad (interne)
- Outil de visio, avec Whereby (interne)
- Outil de design et d'intégration, avec Sketch & Zeplin

