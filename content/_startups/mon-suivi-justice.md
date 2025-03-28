---
title: Mon Suivi Justice
mission: Diminuer les convocations non-honorées des personnes placées sous main de justice
sponsors:
  - /organisations/mj
incubator: justice
link: https://mon-suivi-justice.beta.gouv.fr/
repository: https://github.com/betagouv/mon-suivi-justice
contact: contact@mon-suivi-justice.beta.gouv.fr
stats: true
budget_url: https://docs.google.com/spreadsheets/d/187hUwlMWpBbPxIZkDGTRRqunXogEUZ0Pd3EHldbeELY/edit?usp=sharing
analyse_risques: true
accessibility_status: non conforme
stats_url: http://msj-metabase.osc-secnum-fr1.scalingo.io/public/dashboard/7b94c699-cb73-414b-ba0d-1522e8f2c589
events:
  - name: product_launch
    date: 2021-05-07
    comment: Lancement de Mon Suivi Justice pour une première phase de 6 mois.
  - name: fast
    date: 2024-01-01
    comment: Montant de 30000€ pour la promotion 12
phases:
  - name: investigation
    start: 2020-10-04
    end: 2020-12-18
  - name: construction
    start: 2021-03-31
    end: 2022-03-31
  - name: acceleration
    start: 2022-04-01
  - name: transfer
    start: 2023-10-04
  - name: success
    start: 2025-04-01
fast:
  promotion: 12
  montant: 30000
thematiques:
  - Justice
usertypes: []
techno: []
---
## Éléments de contexte

Le suivi des probationnaires, géré conjointement par **les tribunaux judiciaires** (TJ) et **les services pénitentiaires d'insertion et de probation (SPIP)**, englobe deux volets essentiels : **la probation**, impliquant la supervision des peines en milieu ouvert (c’est à dire en dehors de la détention), et **l'insertion**, offrant un accompagnement individualisé aux personnes condamnées.

En première ligne de ce service public à forte dimension sociale, les **juges d’application des peines** (JAP) décident de l’aménagement des peines de chaque condamné et **les conseillers pénitentiaires d’insertion et de probation** (CPIP) les accompagnent dans leur parcours individualisé au sein du milieu ouvert, par des rendez-vous réguliers, en général mensuels. À l’occasion de chacun de ces rendez-vous, les probationnaires doivent attester des démarches qu’ils entreprennent en présentant des justificatifs (attestation d’emploi, certificat de domiciliation, certificat médical par exemple). 

La convocation à ces entretiens s’effectue majoritairement par **voie postale**.

Mon Suivi Justice, première start d’Etat du ministère de la Justice, s’est donnée pour mission d’améliorer le suivi des personnes condamnées en milieu ouvert en les accompagnant dans leur (ré)insertion et en contribuant à réduire la récidive par la mise en place d’un parcours de réinsertion et, parallèlement, des mesures de contrôle des condamnés.

## Le problème

L’**absentéisme aux convocations des JAP et des SPIP** représente, de manière globale, 30 à 40 % de l’ensemble des convocations émises par les CPIP et les JAP, créant ainsi une charge importante pour les agents des services d’application des peines (SAP) et des SPIP en charge de leur reconvocation et exposant les probationnaires à un risque de (ré)incarcération. 

Chaque année, près de 9 000 convocations judiciaires ne sont pas honorées par les personnes condamnées et suivies par les services judiciaires de notre périmètre d’expérimentation : les Hauts-de-Seine. L’absentéisme des personnes placées sous main de justice est multifactoriel (oubli, mauvaise compréhension, absence de volonté). Ces absences représentent 30 à 40% des convocations des JAP et des CPIP.

Pour les agents du ministère (CPIP, JAP, greffiers), cet absentéisme génère une désorganisation constante et la nécessité de reconvoquer les probationnaires ce qui crée une surcharge de travail importante, assortie de coûts supplémentaires (courriers recommandés, convocation par officier de police judiciaire) et de délais significatifs.

Au-delà, cette inconstance des probationnaires aux convocations peut conduire à l’échec de la démarche de réinsertion et augmente le risque de récidive.


## La solution

La start-up « Mon Suivi Justice » s’est fixée pour objectif de créer une solution numérique permettant aux probationnaires d’honorer plus facilement leur convocation devant le juge d’application des peines et le SPIP.

Parmi les solutions identifiées, l’équipe s’est employée à développer et à tester les quatre outils suivants :

- Un **outil de notification et de rappel des convocations judiciaires** (SPIP et JAP) par SMS ;
- Un **outil de gestion des sorties d’audience** permettant d’organiser la prise de convocations dès la condamnation et donnant lieu à l’envoi d’un SMS de convocation et de rappel aux probationnaires
- Un **site public** d’information pour faciliter la compréhension et la préparation des convocations ;
- Une **plateforme** offrant un suivi personnalisé aux probationnaires et l’accès à ses dates de convocations ainsi qu’à ses interlocuteurs.

## La stratégie

A l’issue d’une **expérimentation** à succès dans les Hauts-de-Seine, **trois phases d’accélération** ont permis de faire évoluer notre équipe, notre vision et nos outils, pour répondre aux mieux aux besoins des utilisateurs en fonction de leurs retours.

La dernière phase d'accélération qui s’est achevée fin septembre 2023 a été particulièrement marquante. Grâce à l’accompagnement du programme FAST, nous avons repensé l'intégralité de notre processus de déploiement. Résultat : un déploiement simplifié en quelques étapes et pour partie automatisé.

Mon Suivi Justice entre désormais **dans une nouvelle phase de son évolution : celle de la pérennisation**. Nous préparons activement l’intégration de nos outils dans l’environnement numérique du ministère de la Justice. Cette étape présente de nombreux enjeux techniques et fonctionnels auxquels l’équipe va chercher à répondre en lien avec les directions métiers concernées.

## L’impact recherché

Face au constat du fort absentéisme des probationnaires aux convocations devant le JAP et le SPIP, les outils « Mon Suivi Justice » ont notamment permis l’amélioration significative du taux de présence aux convocations (soit 74% de présence et 9% d’absences excusées de manière globale) et d’améliorer le système de prise de convocation en sortie d’audience (en évitant les convocations multiples sur un même horaire, en facilitant la communication entre la juridiction de jugement, le SAP et le SPIP).

L’accélération du déploiement de nos outils a permis d’étendre considérablement l’utilisation de Mon Suivi Justice par les services ce qui nous a mis au défi de la mise à l’échelle. A cette fin, nous avons conçu un site à destinations des agents permettant à ceux-ci de s’informer et de se former aux outils Mon Suivi Justice, en toute autonomie.

Avec 85 tribunaux judiciaires et services pénitentiaires déployés à ce jour, plus de 100 000 probationnaires bénéficient aujourd’hui du rappel de convocation par SMS. Près de 4 500 visiteurs s’informent chaque mois sur le déroulé de leur peine et l’accès aux services sur le site public dédié.

Enfin, la plateforme dédiée aux probationnaires et le déploiement de la sortie d’audience en inter-ressort (c’est à dire la convocation de la personne condamnée qui réside en dehors de la zone de compétence du tribunal qui l’a condamné), en début d’expérimentation, viennent perfectionner ce dispositif pour un suivi individualisé et efficace sur l’ensemble du territoire national.

## Nos objectifs

A ce stade, notre principal objectif est de fidéliser nos utilisateurs. La mise en place d’une stratégie de rétention grâce à des points de suivi réguliers, des formations individuelles et une communication actualisée sur nos outils doit nous permettre de maintenir le taux d’utilisation des outils MSJ après leur phase de déploiement.

Nous poursuivons en outre nos efforts de déploiements notamment à l’égard des services localisés dans des zones géographiques ne disposant pas de Mon Suivi Justice ou ne disposant que d’une partie des outils. La recherche d’un taux de couverture intégral des tribunaux judiciaires et SPIP sur le site public complète nos objectifs pour cette période de 6 mois.

## Envie d’en savoir plus ?

Suivez notre parcours et nos réalisations grâce à nos sites publics d’information et de formation :

- [https://mon-suivi-justice.beta.gouv.fr/](), où vous trouverez toutes informations utiles sur les services et le déroulement des peines ;
- [https://decouvrir.mon-suivi-justice.beta.gouv.fr/](), où vous trouverez des actualités, tutoriels vidéos, témoignages d’utilisateurs pour connaître en détail notre produit.