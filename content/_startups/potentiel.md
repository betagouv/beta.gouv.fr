---
title: Potentiel
mission: Faciliter le parcours des producteurs d'énergies renouvelables électriques
sponsors:
  - /organisations/ministere-charge-de-l-energie
incubator: mtes
link: https://potentiel.beta.gouv.fr/
repository: https://github.com/MTES-MCT/potentiel
contact: contact@potentiel.beta.gouv.fr
usertypes:
  - collectivite-territoriale
  - entreprise
  - etat
stats_url: https://potentiel.beta.gouv.fr/statistiques-publiques
stats: true
dashlord_url: https://dashlord.mte.incubateur.net/dashlord/url/potentiel-beta-gouv-fr/
phases:
  - name: investigation
    start: 2019-10-01
    end: 2019-11-30
  - name: construction
    start: 2019-11-30
  - name: acceleration
    start: 2022-01-01
accessibility_status: non conforme
thematiques:
  - Écologie
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view
techno:
  - typescript
  - next.js
  - postgresql
  - react-dsfr
  - tailwindcss
  - storybook
  - sentry
  - chai
  - cucumber
impact_url: https://potentiel.beta.gouv.fr/statistiques-publiques
---
##  Introduction - contexte

L’Etat met en œuvre une politique volontariste de soutien au développement des énergies renouvelables (EnR) électriques sous forme d’appel d’offres.

L’objectif est d’atteindre une part de 40% de ces énergies sur le total de l’électricité produite à l’horizon 2030. 

**Potentiel** permet de faciliter le suivi de ces projets, de gagner en traçabilité et en efficacité en fluidifiant les échanges entre porteurs de projets, administrations centrales et déconcentrées, acheteurs obligés et régulateurs, puis à terme entre gestionnaires de réseau et organismes de contrôle.

Notre objectif : Faciliter le parcours des producteurs d'énergies renouvelables électriques

## Les problématiques


### Les projets lauréats d’EnR électriques sont soumis à : 

* De nombreuses procédures administratives qui engendrent des lourdeurs administratives : candidature, désignation, autorisation d’exploiter, raccordement au réseau, demandes de modifications, contractualisation... ;
* Des demandes et instructions au format papier ; 
* Une multiplicité des acteurs amenés à intervenir sur le projet : porteurs de projets, administrations centrales et déconcentrées, acheteurs obligés, gestionnaires de réseau etc… ;

Les informations détenues par chaque acteur intervenant sur le projet sont parcellaires car elles ne sont pas partagées. Cela entraîne un allongement des délais d’instruction dans la mesure où aucun croisement de ces données n’est opéré, incluant par ailleurs des possibilités de contentieux accrues.
* Une durée du développement des projets longue (de 2 jusqu’à 10 ans)

En conclusion, cela entraîne un manque de suivi global des projets d’EnR permettant de piloter les dispositifs de soutien et de suivre l’atteinte des objectifs de la PPE.

## La solution => Potentiel

Potentiel a vocation à réunir l’ensemble des acteurs de la filière et à rendre accessible, en un lieu unique, les informations détenues par ceux-ci aux différentes phases de développement des projets d’EnR.

L’outil simplifie les démarches, harmonise les pratiques et génère un gain de temps considérable pour tous.

### Notre proposition de valeur pour les porteurs de projet

Les porteurs de projets d’EnR répondant aux appels d’offres de l’État souffrent de complexité administrative dans la gestion de leurs projets. 

Potentiel leur offre des fonctionnalités sur mesure visant à faciliter la gestion de leurs projets.

### Notre proposition de valeur pour les partenaires et administrations

Les partenaires et administrations peinent à récupérer les informations liées aux projets d’EnR répondant aux appels d’offres de l’État.

Potentiel permet à tous les acteurs concernés de consulter ces informations grâce à une plateforme unique qui centralise la donnée disponible à tout moment et gagner en :

* Transparence
* Gain de temps
* Suivi des politiques publiques

## Les premières étapes - Périmètre de test (2020)

L’objectif, dans un premier temps, a été de dématérialiser l’ensemble des interactions entre porteurs de projets et administrations pour assurer une traçabilité des décisions. Les premiers tests lancés en avril 2020 ont visé les candidats des nouveaux appels d’offres. Ce périmètre a permis d’essayer l’outil étape par étape, permettant un développement progressif en suivant l’avancée des porteurs de projets dans leurs démarches.

### Déploiement des étapes de test

* L’envoi d’emails automatisés à partir de la plateforme pour annoncer les résultats d’une candidature à l’un des appels d’offres (aussi bien pour les lauréats que pour les éliminés) ;
* La réalisation, pour les lauréats des premières étapes du processus de développement de leur projet ;
* Une vue d’ensemble de l’avancée de leurs projets pour tous les candidats ;
* La possibilité pour tous les candidats de faire des demandes de modification pour leurs projets (pour les non lauréats : une demande de recours, pour les lauréats : toute autre demande) ;
* D’autre part, pour préparer l’importation de l’historique des projets pré-2020, (période allant de 2016 à 2020), l’équipe a recensé les différents paramètres à prendre en compte, les formats et les règles de gestion.

## Nos réalisations

### Implémentation des règles métier

* Décryptage des règles métier permettant de remplacer l’analyse chronophage, réalisée jusque-là par des agents par une gestion automatique
* Génération automatisée de courriers d’instruction pré-complétés
* Complétude des demandes de modification (suivi de l’instruction pour les porteurs et réponses directement dans l’outil) ceci améliorant les délais de traitement et évitant aux porteurs de perdre du temps dans le développement de leurs projets
* L’ajout des cahiers de charges modificatifs dont ceux publiés en août 2022 qui offre la possibilité d’une augmentation de puissance jusqu’à 140%, une date limite d’achèvement prolongée de 18 mois supplémentaires et la possibilité de vendre de l’électricité sur le marché, en amont du démarrage du contrat de soutien

### Chantiers techniques
* La mise en place de tableaux de bord concernant les données de la filière afin d’avoir une visibilité sur l’atteinte des objectifs de la programmation pluriannuelle de l’énergie (PPE)
* L’import de l’historique des projets encore actifs (depuis septembre 2016) pour permettre aux porteurs de pouvoir gérer l’ensemble de leurs projets actifs.
* Un changement d’architecture technique pour adapter Potentiel aux développements stratégiques décidés
* Basculement vers une autre base de données sur le cloud
* L’intégration d’acteurs supplémentaires de la chaîne de valeur pour améliorer encore les délais de traitement des demandes, centraliser les données et permettre un meilleur pilotage par tous . Ajout des rôles : acheteur obligé, Commission de régulation de l’énergie, ADEME, Caisse des dépôts

### Gestion de nos utilisateurs
* Affiner les échanges avec nos utilisateurs : Un support rapide et efficace ; communiquer sur le produit et ses évolutions avec la mise en place d’une newsletter (bimestrielle) ; recueillir les besoins et la satisfaction de l’ensemble des usagers par des sondages courts et réguliers sur tous les supports d’échanges (webinaires, newsletters) ;
* Mise en place d’un support utilisateur structuré sur 3 piliers : le guide d’utilisation ; un ChatBot automatique sur les 10 questions courantes, récurrentes, les échanges via l’adresse e-mail [contact@potentiel.beta.gouv.fr]() ; des échanges en visio ;
* Présentations et démonstrations aux différents partenaires (gestionnaire de réseaux, commission de régulation de l’énergie, acheteur obligé…) pour le développement des fonctionnalités et envisager les futures interopérabilités pour s’accorder sur le contenu et le format des échanges.

## L’impact

### Sur les projets suivis

* 11 161 projets dont 7 632 lauréats
* 21,07 GW en puissance cumulée
* 3 883 demandes des porteurs de projet réalisées sur Potentiel

### Sur les statistiques utilisateurs

* 2 123 porteurs de projet inscrits
* 1 527 connexions en moyenne par mois

### Un temps moyen d’instruction des demandes divisé par 3
![](https://docs.potentiel.beta.gouv.fr/~gitbook/image?url=https:%2F%2F341821779-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-MK-BGgj_eN7FsxQv8fl%252Fuploads%252FhDpAaLnlNrlLHhfO3HZR%252Fimage.png%3Falt=media%26token=c9f030ca-e873-42a6-9d25-fb0299007ce7&width=400&dpr=3&quality=100&sign=7fed0d74dfaff35b657cda428b6dc6b82f8994720dc6fcba3d418b18681fd86d)

### La possibilité de mettre en place des mesures d’urgences afin de sauver un maximum de projets

* 4,19 GW de puissance cumulée des projets ayant choisis l’instruction selon des cahiers des charges modificatifs
* 1,05 GW avec le processus automatisé d'abandon pour recandidature

## Le budget

- 2020 : 127 135 € de la DGEC* et 80 400 € issus du programme FAST (Fonds d’accélération des startups d’Etat et de territoires)
- 2021 : 973 492 € de la DGEC, 422 937 € issus du plan France Relance et 79 812 € de l'ADEME
- 2022 : Financée par le budget de l'année 2021
- 2023 : 507 822 € de la DGEC
- 2024 : 881 063 € de la DGEC

*Direction générale de l'Énergie et du Climat (Ministère en charge de l'énergie)

## La feuille de route

* Devenir le pôle central pour la gestion administrative des projets d’EnR électriques et de gaz renouvelable soumis à appel d’offres en France avec l’intégration de nouvelles énergies : 
Biométhane (désignation et modification) puis reprise de l’historique ⇒ Potentiel va simplifier et accélérer le développement du biométhane, 60 projets historiques + désignation de 15 projets / an
Petite hydroélectricité…
* La migration de toutes les fonctionnalités sur un nouveau socle technique permettant les futurs échanges automatisés
* Faciliter l’interopérabilité avec tous les acteurs afin d’augmenter et d’accélérer les projets en service en développant les connexions API avec nos partenaires 
* Implémenter l’ensemble des étapes de développement des projets, de la notification à leur mise en service : récupération automatique des projets CRE , finalisation du processus de gestion des garanties financières et leur renouvellement (de la désignation d'un projet jusqu'à la main-levée)..., récupération automatique des dates de mise en service
* Améliorer la rétention des utilisateurs en ajoutant les fonctionnalités nécessaires au parcours des nouveaux acteurs intégrése
* Mise à disposition des données publiques (data gouv)

## Notre Vision grâce à Potentiel

* Une baisse des délais de traitement de chaque opération entraîne une diminution du temps entre la désignation et la mise en service et donc la possibilité de faire plus de projets pour chaque porteur
* Des statistiques à jour et en temps réel pour le suivi de l’atteinte des objectifs de la PPE avec la possibilité d’apporter des modifications aux dispositifs de soutien pour un pilotage efficient et efficace

Et bien plus encore à venir…