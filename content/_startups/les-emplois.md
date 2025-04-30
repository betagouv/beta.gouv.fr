---
title: Emplois de l'inclusion
mission: Faciliter la mise en relation avec les employeurs solidaires
sponsors:
  - /organisations/dgefp
  - /organisations/francetravail
  - /organisations/mtei
incubator: gip-inclusion
contact: emplois@inclusion.gouv.fr
link: https://emplois.inclusion.beta.gouv.fr/
repository: http://github.com/gip-inclusion/les-emplois
rgpd:
  responsable: DGEFP
  finalites:
    - faciliter l’identification des structures d’insertion par l’activité économique
    - fluidifier le recrutement des personnes éligibles
    - réduire la charge administrative des structures de l’insertion
    - renforcer les outils de suivi et de pilotage de la performance des structures d’insertion
    - stimuler le développement et l’accès aux outils digitaux d’appui aux parcours d’insertion
  donnees:
    - 'données relatives aux candidats: état-civil détaillé, domicile, téléphone, courriel'
    - données relatives à la candidature, au contrat d'agrément et de travail
    - données relatives au parcours de formation
    - critères d'éligibilité des candidats
    - 'données relatives aux employeurs: nom, prénom, structure, identifiants professionnels'
    - 'données relatives aux prescripteurs: nom, prénom, structure, identifiants professionnels'
    - données techniques en vue de la traçabilité des actions sur la plateforme
  controles:
    - type: Analyse des risques
      intervenant: Equipe Itou
      date: 2020-01-07
    - type: Tests d'intrusion
      intervenant: Ernst & Young
      date: 2020-03-01
    - type: Homologation approuvée pour 3 ans
      intervenant: Arnaud Denoix
      date: 2024-02-20
    - type: Tests d'intrusion
      intervenant: Ernst & Young
      date: 2020-05-02
    - type: Homologation ferme
      intervenant: Anne-Laure Hochedez-Planche
      date: 2020-10-06
    - type: Tests d'intrusion
      intervenant: Ernst & Young
      date: 2021-11-18
    - type: Tests d'intrusion
      intervenant: Secureaks (Romain GARCIA)
      date: 2023-08-24
    - type: Homologation MonServiceSécurisé
      intervenant: Arnaud Denoix
      date: 2024-02-20
  exercer_vos_droits: https://emplois.inclusion.beta.gouv.fr/legal/privacy/#quels-droits-avez-vous-
  mesures_securite: La plateforme est hébergée en France par un prestataire certifié ISO.
  validite_homologation: 2027-02-19T00:00:00.000Z
stats: true
phases:
  - name: investigation
    start: 2019-06-10
  - name: construction
    start: 2019-06-10
  - name: acceleration
    start: 2020-07-10
events:
  - name: national_impact
    date: 2021-12-31
usertypes:
  - collectivite-territoriale
  - entreprise
  - etat
dashlord_url: https://dashlord.incubateur.net/url/emplois-inclusion-beta-gouv-fr/
accessibility_status: partiellement conforme
thematiques:
  - Travail / Emploi
  - Social
  - Territoires
analyse_risques: true
mon_service_securise: true
budget_url: https://gip-inclusion.notion.site/Budget-des-Emplois-de-l-inclusion-page-publique-18b5f321b604801b9e20de9dd4f821c7?pvs=4
stats_url: https://inclusion.beta.gouv.fr/presentation/impact-de-la-plateforme-de-linclusion/
techno:
  - django
---
## Une question ou un besoin d'aide dans l'utilisation du service ?
Voici un lien direct vers l'assistance : [aide.emplois.inclusion.beta.gouv.fr](https://aide.emplois.inclusion.beta.gouv.fr/)

## Contexte

L’**insertion par l’activité économique** (IAE) est un dispositif dans lequel l’État
confie une mission d’accompagnement socio-professionnel de personnes en difficulté à plus de 3 700 structures associatives ou privées. Ce dispositif bénéficie à des publics très éloignés de l’emploi (134 000 personnes en parcours d’insertion fin 2017). Il repose sur l’association de trois facteurs-clés : une mise en situation professionnelle, un accompagnement professionnel mais aussi social, et la mobilisation d’actions de formation.

L'**inclusion dans l'emploi** concerne le vaste dispositif de l'IAE, les [entreprises adaptées](https://travail-emploi.gouv.fr/emploi/emploi-et-handicap/article/emploi-et-handicap-les-entreprises-adaptees-ea) (EA) dont la spécificité est d'employer au moins 80% de travailleurs en situation de handicap, et les [groupements d’employeurs pour l’insertion et la qualification](https://travail-emploi.gouv.fr/emploi/insertion-activite-economique/article/groupements-d-employeurs-pour-l-insertion-et-la-qualification-geiq) (GEIQ).

## Le problème

Au moins 2 millions de personnes sont aujourd’hui éloignées de l’emploi (Bénéficiaires des minima sociaux, chômeurs de longue durée, travailleurs handicapés, jeunes et personnes isolées et sans solutions…).

Conformément au [pacte ambition IAE](https://www.google.com/url?sa=i&url=https%3A%2F%2Ftravail-emploi.gouv.fr%2FIMG%2Fpdf%2Fpacte_d_ambition___insertion_par_l_activite_economique.pdf&psig=AOvVaw2dk2LmmsO6yDRPmsj67UJu&ust=1719486855599000&source=images&cd=vfe&opi=89978449&ved=0CAQQn5wMahcKEwjIj5_rkfmGAxUAAAAAHQAAAAAQBA), il s’agit de proposer un service numérique intégré permettant de lever les freins qui limitaient l’action de l’Insertion par l’Activité Economique (difficultés d’accès aux profils éligibles, manque de visibilité des emplois inclusifs et  lenteur des procédures d’embauche en contrat d’insertion)

## Notre service

**Pour les employeurs inclusifs (Structures d’insertion par l’activité économique, Groupement d’employeurs pour l’insertion et la qualification, entreprises adaptées et facilitateurs de clauses sociales), c’est :**

- Mettre en visibilité et valoriser leurs activités et fiches de postes (offre existante)
- Identifier des publics en difficultés et les recruter
- Réduire le temps consacré aux démarches administratives - notamment obtenir un [PASS IAE](https://aide.emplois.inclusion.beta.gouv.fr/hc/fr/articles/14733528375185--PASS-IAE-Comment-%C3%A7a-marche) en ligne dès l’embauche d’un candidat
- Orienter des candidats ou salariés en fin de contrat vers d’autres employeurs inclusifs pour faciliter la poursuite de parcours

**Pour les accompagnants (prescripteurs habilités/orienteurs) et les candidats, c’est :**

- Rechercher des emplois inclusifs
- Postuler directement en ligne et suivre le traitement des candidatures
- Accompagner ou accéder à l’emploi inclusif

## Vision & ambition

Tous les acteurs mobilisés pour l'inclusion doivent pouvoir partager l'information de manière simple, efficace et rapide. C'est la vision portée par inclusion.beta.gouv.fr. Toutes les informations nécessaires pour lever les différentes contraintes du quotidien – la charge administrative, le recrutement des profils éligibles, etc. – pourront y être centralisées, à la manière d'un « guichet unique ».

L'ambition est de proposer une solution numérique intégrée permettant de lever les freins limitant aujourd'hui l'action de l'IAE (insertion par l'activité économique) : problèmes d'accès aux [profils éligibles](https://doc.inclusion.beta.gouv.fr/pourquoi-cette-plateforme/les-acteurs/qui-peut-beneficier-des-contrats-dinsertion-par-lactivite-economique) (« sourcing ») et d'accompagnement vers l'emploi durable, lourdeur administrative, et faible accès à des outils mutualisés de professionnalisation et d'accompagnement des parcours.

## Finalités

1. **Faciliter l'orientation et l'embauche** de candidats à un emploi accompagné vers des [employeurs solidaires](https://doc.inclusion.beta.gouv.fr/presentation/employeurs-solidaires) (SIAE, GEIQ, EA) en centralisant un registre de l’offre et en refondant l’agrément IAE.
2. **Réduire la charge administrative** pour tous les acteurs, et **renforcer le pilotage de l’IAE** afin d'optimiser l'offre d'inclusion sur le territoire.
3. **Faciliter les échanges entre acteurs de l’inclusion** pour améliorer l’accompagnement des personnes et alimenter les politiques publiques.
4. **Valoriser l'offre commerciale des employeurs solidaires** afin de développer le nombre d'emplois.

> « Pour l'insertion par l'activité économique, nous porterons à 240 000 le nombre de contrats, il y en a aujourd'hui 140 000.»
> Emmanuel Macron, Président de la République, Présentation de la stratégie nationale de prévention et de lutte contre la pauvreté, 13 septembre 2018
