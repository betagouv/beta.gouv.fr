---
analyse_risques: false
mon_service_securise: false
contact: foulques.renard@numerique.gouv.fr
thematiques:
  - Outil technique
usertypes:
  - etat
techno:
  - python
title: Dépenses éclairées
mission: Clarifier les dépenses de l'État
incubator: alliance
sponsors:
  - /organisations/dinum
phases:
  - name: investigation
    start: 2025-01-22
events:
  - name: committee
    date: 2025-05-22
    comment: Passage en comité d'investissement ALLiaNCE
link: ''
---
## Contexte

L’État français utilise Chorus, son système de gestion financière, pour enregistrer et suivre ses dépenses. Cependant, l’analyse de ces dépenses, en particulier celles liées au conseil, est devenue un enjeu majeur de transparence et de pilotage budgétaire. À la demande de la Direction du Budget et dans un contexte d’attente croissante des parlementaires, l’AIFE (agence en charge de Chorus), avec le soutien de la DINUM, a engagé une initiative pour améliorer la qualité et l’exploitabilité des données de dépenses publiques.

## Problème

La qualité des données saisies dans Chorus ne permet pas aujourd’hui d’analyser efficacement les dépenses de l’État. Les informations essentielles comme l’objet de la dépense, le service payeur ou le fournisseur sont souvent absentes, erronées ou illisibles, rendant leur exploitation difficile, y compris pour les agents en dehors du service émetteur. 
Cette opacité nuit à la transparence attendue par les citoyens et les parlementaires, et empêche toute évaluation rigoureuse de l’efficacité de la dépense publique. Face à l’exigence croissante de reddition de comptes, notamment sur les prestations de conseil, l’administration est contrainte de procéder à des analyses manuelles coûteuses et difficilement soutenables à grande échelle. À terme, ce manque de lisibilité empêche également les administrations transverses de produire des analyses thématiques ou de détecter des anomalies dans les achats publics.

## Solution

Le projet Dépenses Éclairées propose d’exploiter automatiquement les pièces jointes associées aux commandes dans Chorus — telles que les devis, cahiers des charges ou mémoires techniques — afin d’en extraire les informations clés grâce à des technologies de reconnaissance optique et de traitement du langage naturel. Un premier prototype a démontré la faisabilité de cette approche, avec des résultats prometteurs. 
L’objectif est désormais de fiabiliser et d’industrialiser cette extraction pour améliorer la compréhension des dépenses, enrichir les données disponibles dans Chorus et permettre leur réutilisation à des fins d’analyse, de contrôle budgétaire et d’aide à la décision.

## Objectifs à 6 mois

Objectif **d'usage** à 6 mois : quel usage chiffré visez-vous ?
- Augmenter le nombre de commandes disposant d’une désignation claire, d’un prestataire identifié et d’une administration bénéficiaire explicite - 100 000 dépenses traitées dans les 6 prochains mois.
- Suivre le nombre de réutilisations des données enrichies via API : 10 cas d'usage de réutilisation par API.

Objectif **d'impact** à 6 mois : quel impact vous permettra de dire que votre première phase de construction a été un succès ?

- Réduire le temps de traitement manuel des dépenses de conseil par les agents (Direction du budget et autres).
- Identifier des anomalies ou incohérences dans les marchés publics (achats hors marché, erreurs d’imputation).