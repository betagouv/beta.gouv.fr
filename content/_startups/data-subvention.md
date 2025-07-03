---
title: Data.Subvention
mission: Rassembler les informations sur les associations et leurs subventions pour simplifier la vie des associations et des agents publics
sponsors:
  - /organisations/djepva
incubator: dinum
link: https://datasubvention.beta.gouv.fr
repository: https://github.com/betagouv/api-subventions-asso
contact: contact@datasubvention.beta.gouv.fr
stats: true
dashlord_url: https://dashlord.incubateur.net/tag/data-subvention/
accessibility_status: partiellement conforme
usertypes:
  - association
  - etat
  - collectivité
  - Agents publics
stats_url: https://blog.datasubvention.beta.gouv.fr/statistiques/
budget_url: https://datasubvention.beta.gouv.fr/budgets/
phases:
  - name: construction
    start: 2022-01-03
  - name: acceleration
    start: 2024-06-10
fast:
  promotion: 13
  montant: 280000
thematiques:
  - Subventions
  - Data
  - Open-Data
events:
  - name: fast
    date: 2024-01-01
    comment: 'Lauréat du FAST 13. '
  - name: other
    date: 2024-06-10
    comment: 'Lauréat du FTAP Data : Exploitation et valorisation des données'
mon_service_securise: true
techno: []
---
## La valeur de Data.Subvention

La valeur de Data‧Subvention repose sur sa capacité à offrir aux agents publics, en un point centralisé, les données relatives aux subventions associatives les plus diversifiées, les plus riches et les plus régulièrement actualisées possibles, pour le bon accomplissement de leurs missions d’instruction et au bénéfice des associations par la réduction des sollicitations administratives qui leur sont faites.

## Le sujet des subventions publiques aux associations

Les associations occupent une place essentielle dans la vie collective de la Nation, ce secteur est à la fois un vecteur de cohésion sociale et un acteur économique majeur : elles sont 1,3 million, comptent 21 millions d’adhérents, 13 millions de bénévoles. 170 000 d’entre elles sont employeuses, totalisent près d’1,8 million de salariés – soit près de 10 % des emplois privés.

Les subventions publiques aux associations représentent 23 milliards d’Euros. Elles sont versées par des services de l’Etat, des opérateurs et des collectivités territoriales. Elles représentent 20% du budget consolidé des associations. 

En 2023, le total des versements réalisés par l’Etat à ce secteur sous forme de subventions, se monte à 8,5 milliards d’euros, imputées sur pas moins de 96 programmes budgétaires différents.

Ces soutiens sont apportés après que les associations les aient demandés, par rédaction d’une demande adressée auprès de différents services de l’État, qui ont de leur coté instruit, réuni les instances de décision, et mis en paiement les subventions.

## Problème

Coté Associations : Demander une subvention est une démarche longue répétitive pour une association et consiste souvent à déposer des pièces administratives déjà connues par d’autres autorités publiques : ces sur-sollicitations peuvent générer aussi un sentiment d’incompréhension et de lassitude vis-à-vis des démarches administratives.

Coté administrations :  la dématérialisation des démarches de demande, décision et paiement s'est faite en silo, conduisant à des données éparpillées dans une grande diversité de systèmes d’information, d’instruction, de gestion et de mise en paiement, empêchant d’atteindre un réel « dites-le-nous une fois ».

Après plusieurs réunions interministérielles en 2021 sur l’enjeu d’améliorer le pilotage des subventions de l’Etat, le Premier ministre a confié à la direction de la jeunesse, de l’éducation populaire et de la vie associative (DJEPVA) et à la direction interministérielle du numérique (DINUM) la responsabilité de bâtir un nouveau service numérique dénommé Data.Subvention, pour collecter et repartager des données consolidées et complètes.


## Construction

Depuis le mois de janvier 2022, la startup d’État Data.Subvention construit ce service destiné aux agents publics qui leur permet concrètement de :

- Consulter les informations administratives disponibles sur les associations (administrateurs, agréments)
- Consulter et prendre connaissance des subventions versées par l’Etat  et des demandes déposées via des outils de gestion auprès d’autres services 
- Gagner du temps dans la récupération des informations
- Enrichir les travaux d’observation ou de suivi des bénéficiaires au plan territorial, sous le prisme

Data.Subvention est donc composée :

- de l'API Data.Subvention : collecte les données dans les différents outils de dématérialisation,  la raffine pour la rendre réutilisable par d'autres plateformes.

- d’un portail qui présente ces données de façon simple à aux agents inscrits sur https://app.datasubvention.beta.gouv.fr/ . 

Si le portail était envisagé initialement comme une solution temporaire avant intégration de l’API dans des solutions tierces, il reste indispensable pour des administrations dépourvues de solution numérique.

LA mesure d'impact porte sur les économies générées par les gains d temps obtenus lors des instructions de demandes de subventions.

## Les étapes de développement

Data‧Subvention est progressivement déployé au plan national et territorial, auprès des administrations centrales et déconcentrées et des collectivités territoriales.

- Janvier 22 : livraison du premier produit minimum viable 
- Avril 22 - Septembre 2022 : 1ere phase de construction avec les régions Occitanie et Pays de la Loire (test auprès des agents et adaptations aux besoins et usages)
- Octobre 22 à juin 2023 :  2eme phase de construction élargie à 3 nouvelles régions : Bretagne, Hauts-de-France et Nouvelle-Aquitaine : Objectif inscription de la solution dans les services territoriaux‧
- Juillet 2023 : mise dispo de l'open Data sur GITHUB
- Septembre 23 à février 24 : passage réussi à l'échelle nationale, avec le soutien du FAST (Fonds d’Accélération des Startups d’État).

## Solution en Consolidation

- Mai 2024 : lauréats du FTAP DATA !

Avec ce soutien, Data.Subvention s'est engagé dans une nouvelle étape afin de faire face à de nouveaux défis.

Il ne pourra y avoir de partage public des données des subventions versées aux associations, sans achèvement de la complétude : récolter et repartager l’ensemble des versements de l’Etat a constitué une grande avancée, mais y adjoindre les données des collectivités et des opérateurs est indispensable pour donner une vision complète.

L'absence de complétude constitue un risque de défiance des citoyens envers la donnée (C’est pas complet = c’est faux).

Nous nous concentrons donc dans cette nouvelle phase au défi de la complétude des données : exhaustivité, intelligibilité et circulation accrue.

1. Exhaustivité : C'est d'abord rendre accessibles les données actuelles aux collectivités ou aux opérateurs et intégrer les leurs. C'est aussi développer de nouvelles fonctionnalités adaptées à de nouveaux profils métiers (pilotes / Contrôleurs) en plus des instructeurs.

2. Intelligibilité : rendre notre référentiel de données facile à comprendre et utiliser pour nos fournisseurs et consommateurs,  en lien étroit avec Data.Gouv.

3. Circulation accrue : garantir une donnée la plus fraîche possible pour un réemploi performant par des tiers (Data.Budget.Etat ; Annuaire des Entreprises, Démarches Simplifiées, les divers logiciels de gestion des ministères Subventia, Osiris, Fonjep ...) ou par nous (Portail).
