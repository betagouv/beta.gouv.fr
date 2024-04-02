---
title: Boîte aux lettres
mission: Centraliser et sécuriser les données de l'apprentissage dans le cadre
  du développement des services de la Mission interministérielle pour
  l'apprentissage.
sponsors:
  - /organisations/mtei
  - /organisations/menjs
  - /organisations/mesr
  - /organisations/mtfp
incubator: mission-apprentissage
contact: apprentissage@beta.gouv.fr
accessibility_status: non conforme
phases:
  - name: construction
    start: 2023-05-01
thematiques:
  - Formation
---
# **Contexte**

La mission Apprentissage contribue à faciliter l'écosystème de l'apprentissage. Elle a développé plusieurs produits destinés aux futurs apprentis, aux entreprises et aux organismes de formation. Actuellement, la mission propose deux principaux services :

* La bonne alternance, qui permet aux jeunes de trouver plus facilement une formation et un contrat en alternance.
* Le tableau de bord de l'apprentissage, qui permet de visualiser en temps réel les effectifs d'apprentis dans les centres et les organismes de formation.

Dans ce contexte, les services de la Mission manipulent nombreuses sources de données liées aux futurs apprentis, telles que les vœux réalisés sur Affelnet et Parcoursup, des données relatives au contrat d’apprentissage, aux employeurs et aux organismes de formation provenant de DECA (système d’information de dépôt des contrats d'apprentissage), ainsi que celles des OPCOs (Opérateurs de compétences, responsables du financement des formations en apprentissage), parmi d’autres. Ces données à caractère personnel sont soumises à des règles strictes de protection de données. BAL a été développée dans le but principal de garantir un environnement sécurisé pour l'hébergement de ces données personnelles et les centraliser pour les besoins des différents services de la Mission.

# Problématiques

* **Faible concrétisation des vœux en alternance** : Chaque année, un pourcentage significatif de vœux en alternance formulés sur Affelnet et Parcoursup ne se concrétise pas en entrée effective en alternance. Seulement 15% de ceux ayant formulé des vœux sur Parcoursup (Source : [Parcoursup - bilan de la procédure d’admission 2022](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2022-09/bilan-de-la-proc-dure-d-admission-2022-24379.pdf)) et 63% des jeunes ayant formulé des vœux sur Affelnet ([Source : Enquête Oripa 2018](https://docs.google.com/document/d/1gSxaX3enVisB7X_JPDIgtL1TFcR6jOqJ/edit)) parviennent à trouver une place en alternance. Nous souhaitons accompagner les jeunes au bon moment vers des opportunités d’emploi et par conséquent les aider à avoir plus de chances d’être acceptés en formation.
* **Jeunes en formation sans contrat** : Il existe un nombre significatif de jeunes en formation sans contrat : 2 857 parmi les 442 193 apprentis recensés par le [Tableau de bord au 29/06/2023](https://cfas.apprentissage.beta.gouv.fr/). Ces jeunes ont un délai de 3 mois pour trouver un contrat en alternance. Passé ce délai, différentes situations peuvent se présenter pour la poursuite de leur parcours, certaines moins favorables, telles que devoir financer eux-mêmes leur formation ou même l’abandonner. Nous souhaitons les soutenir dans leur recherche de contrat et leur éviter les situations d'abandon.
* **Validation manuelle des comptes sur La bonne alternance** : Pour garantir la fiabilité et la sécurité du service, les comptes de recruteurs qui souhaitent diffuser des offres sur La bonne alternance doivent être validés. Actuellement, ce processus de validation est en grande partie effectué manuellement par les chargés de déploiement, ce qui prend en moyenne 1 journée par semaine de leur temps de travail. Certaines validations de comptes prennent plus d'une semaine, ce qui bloque l’utilisateur pendant son parcours. Nous cherchons à automatiser et accélérer ce processus de validation pour améliorer l'efficacité du service.
* **Validation manuelle des comptes sur le tableau de bord** : Les chargés de déploiement du tableau de bord consacrent en moyenne une demi-journée par semaine à la validation manuelle des comptes des agents. Ce processus manuel peut être chronophage. Nous visons à rendre la validation des comptes plus efficace en automatisant autant que possible ce processus.

# Solution

## Centraliser et sécuriser les données

Nous souhaitons mettre en place une infrastructure sécurisée, en utilisant des mécanismes de sécurisation tels que le chiffrement des données, le contrôle des accès et un système d'habilitations. L'objectif est d'héberger des données fiabilisées et à caractère personnel, afin de les rendre facilement accessibles aux différents services de la Mission interministérielle pour l'apprentissage et de servir à leurs usages, comme par exemple :

### 1. Faciliter l’accès à information grâce aux listes de diffusion

Afin de rendre rapidement accessibles aux jeunes les formations et offres d'emploi en alternance disponibles sur La bonne alternance, nous prévoyons de centraliser les informations issues des vœux formulés sur Affelnet et Parcoursup. Ces données seront utilisées afin de générer des listes de diffusion, permettant à La bonne alternance d'envoyer des campagnes d'emails contenant des liens personnalisés pour prendre rendez-vous avec les centres de formation et rechercher des offres d'emploi correspondant aux vœux formulés.

* Une première campagne d'emails a été réalisée par La bonne alternance à destination de plus de 120 000 responsables légaux de jeunes ayant formulé un vœu en alternance sur Affelnet, afin de les accompagner au bon moment vers des opportunités d'emploi : 54 000 d’entre eux ont ouvert le mail (45%) et environ 20 000 ont ouvert les liens jusqu'à présent (16%). (Source : campagnes envoyées le 15/06/2023 et 26/06/2023)

Afin de prévenir les abandons de formation pour les apprenants sans contrat, nous envisageons la création de listes de diffusion basées sur les données recensées par le tableau de bord de l’apprentissage. Ces listes permettront à La bonne alternance d'envoyer des campagnes d'emails proposant des offres d'emploi disponibles en alternance avant la fin du délai de 3 mois.

### 2. Automatiser la validation des offres et des comptes

Pour garantir la fiabilité et l’efficacité du service, nous souhaitons automatiser autant que possible le processus de validation des comptes sur La bonne alternance. Pour ce faire, nous effectuons des vérifications pour confirmer que l’adresse email du recruteur appartient à une entité, en utilisant le numéro de SIRET correspondant. Nous envisageons d'intégrer de nombreuses sources de données fiabilisées et actualisées, en établissant des connexions avec différentes API telles que DECA, les OPCOs, Pôle emploi, et autres. Cette automatisation permettra d'accélérer le processus de validation, réduisant ainsi les délais entre le dépôt d’une offre et sa publication.

Parallèlement, nous cherchons également à automatiser la validation des comptes sur le tableau de bord de l’apprentissage, afin de rendre ce processus plus efficace et moins chronophage pour les chargés de déploiement.

### 3. Mesurer l’impact de bout en bout

Afin d’évaluer l'impact des services d'accompagnement des jeunes en alternance au sein de la Mission interministérielle pour l’apprentissage, nous souhaitons réaliser et afficher des mesures transversales qui nous permettront de comprendre dans quelle mesure nos services ont contribué au parcours réussi des apprenants. Nous envisageons de mesurer des indicateurs tels que :

* Le nombre de jeunes que nous avons aidés à trouver une formation grâce au service de prise de rendez-vous disponible sur La bonne alternance
* Le nombre de jeunes que nous avons aidés à signer un contrat grâce au service de candidature disponible sur La bonne alternance ou à l’envoi de liens spécifiques vers des offres ou des entreprises identifiées par La bonne alternance.

# Mesures **de succès**

* Affichage des statistiques des mesures d’impact des services de la Mission :

  * Le nombre de personnes ayant cliqué sur le lien de prise de rendez-vous de La bonne alternance et ayant effectivement pris un rendez-vous
  * Le nombre de jeunes qui ont pris rendez-vous sur La bonne alternance et qui ont été retrouvés en formation (données du tableau de bord de l'apprentissage).
  * Le nombre de jeunes ayant cliqué sur le lien des offres d'emploi de La bonne alternance et ayant postulé via la plateforme.
  * Le nombre de jeunes qui ont postulé via La bonne alternance et qui ont obtenu un contrat (données du tableau de bord de l'apprentissage).
* Gain de temps grâce aux automatisations :

  * Le nombre de comptes La bonne alternance validées automatiquement, nous permettant d'estimer le temps économisé grâce à cette automatisation.
  * Le nombre de comptes du tableau de bord de l'apprentissage validés automatiquement, nous permettant d'estimer le temps économisé grâce à cette automatisation 
  * Le pourcentage de comptes validées automatiquement par rapport au total.
* Accélération de la diffusion des informations :

  * Le temps moyen entre le dépôt d’une offre sur La bonne alternance et sa publication.

# **Périmètre**

Phase 1 (Juin - Décembre 2023)

* Le développement d'une interface permettant aux utilisateurs de sélectionner des critères spécifiques pour la création de listes de diffusion, ainsi que la possibilité de sauvegarder ces critères pour une utilisation ultérieure.
* L'ajout de nouvelles sources de données, à la fois internes et externes, et la fiabilisation de ces données, dans le but d’optimiser la validation automatique des comptes sur La bonne alternance et le tableau de bord de l’apprentissage.

Phase 2 (Jan - Mars 2024)

* La mise en place d'un tableau de bord statistique dédié permettant de mesurer l'impact transversal des services de la Mission Apprentissage sur le parcours d'un jeune.