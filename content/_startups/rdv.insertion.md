---
mission: Piloter et gérer efficacement les délais et la bonne continuité des rendez-vous des bénéficiaires du RSA
sponsors:
  - /organisations/francetravail
  - /organisations/mtei
incubator: gip-inclusion
link: https://www.rdv-insertion.fr/
repository: https://github.com/gip-inclusion/rdv-insertion
contact: rdv-insertion@beta.gouv.fr
usertypes:
  - collectivite-territoriale
  - etat
  - association
stats_url: https://www.rdv-insertion.fr/stats
title: rdv-insertion
stats: true
phases:
  - name: investigation
    start: 2021-01-15
  - name: construction
    start: 2021-06-02
  - name: acceleration
    start: 2022-01-03
thematiques:
  - Travail / Emploi
  - Social
accessibility_status: non conforme
mon_service_securise: true
budget_url: https://docs.google.com/document/d/1XAyC_ghQs9RtUtrfMRGHBvzqhjCWfqDbshT8b__XU9Q/edit?usp=sharing
techno: []
---
## Le problème

En 2021, l'équipe rdv-insertion constate que les parcours d’insertion sont longs et peu suivis :

- Fort taux d’absentéisme aux rendez-vous contractuels du parcours (ex : 50% en moyenne selon l'OARSA en 2019)
- Délais trop longs (ex : délai moyen d’orientation des BRSA de 95 jours en 2019)
- Risque de rupture de parcours post-signature CER élevé

Depuis la promulgation de la Loi Plein Emploi en 2023, des enjeux complémentaires apparaissent : 
- Nécessité de partage de données via API entre les conseils départementaux et France Travail
- Gestion de flux entrants et sortants de BRSA entre les conseils départementaux et les agences France Travail

## Notre service

Mis à disposition des conseils départementaux en charge du versement de l'allocation RSA et de l'accompagnement des bénéficiaires, le service permet :

1. D'importer un flux de bénéficiaires du RSA (émis par la CAF) afin de les inviter (par mail/sms/courrier) à choisir le plus rapidement possible un créneau de rendez-vous, quel que soit le motif : orientation, signature du contrat d'engagement, accompagnement, action spécifique d’insertion, suivi en IAE, suspension etc...
2. De s'assurer de la prise des rendez-vous ainsi que de la bonne tenue des ces derniers (rappels SMS) grâce à une interface de suivi et de pilotage où les rendez-vous sont classés en listes selon leur motif et pourvus d'un statut mis à jour automatiquement.
3. De communiquer, dès la fin de l'entretien d'orientation, la date et l'heure du prochain rendez-vous au bénéficiaire du RSA grâce à une vue instantanée sur les créneaux disponibles à venir.
3. De garantir la continuité des parcours d'accompagnement grâce à la prescription de rendez-vous entre partenaires du RPE (CD, délégataires, partenaires FT)
4. De partager les données de rendez-vous produites par le service grâce à notre API, afin d'alimenter les dossiers usagers au sein des logiciels d'action sociale et de parcours ainsi que des outils France Travail.

## Nos usagers

- Les personnes en insertion (ex. BRSA, salariés en IAE, etc.)
- Les agents en charge de l’organisation des rendez-vous d’insertion (dans les CD et structures partenaires)

## Notre impact

rdv-insertion aura réussi sa mission si :

1. les délais avant l'orientation des BRSA (95 jours selon \[l'enquête OARSA 2019 (tableau A6)] de la DREES) et de l'orientation jusqu'à l'accompagnement ont été réduits (53 jours en moyenne entre l'orientation et la signature d'un contrat d'engagement réciproque (CER) selon la même enquête) ;
2. un plus grand nombre de personnes en insertion sont accompagnées ;
3. la qualité de l'accompagnement est améliorée, vers des solutions plus individualisées et adaptées.

Retrouvez notre page statistiques [ici](https://www.rdv-insertion.fr/stats).

Notre **[carte de suivi](https://www.rdv-insertion.fr/stats/deployment_map)** permet de suivre l'avancée de **nos travaux** dans chaque département, et de connaître le degré de maturité du conseil départemental dans l’intégration et l’exploitation des flux de données existants.
