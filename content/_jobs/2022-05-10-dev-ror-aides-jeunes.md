---
roles: Dev Ruby on Rails expérimenté·e en résidence
title: "Offre : Dev Ruby on Rails expérimenté·e en résidence"
open: false
techno: Ruby on Rails
startup: aides.jeunes
domaines:
  - Développement
---

L'équipe [Aides-Jeunes](https://beta.gouv.fr/startups/aides.jeunes.html) recherche une ou un dev Ruby on Rails pour contribuer à l'enrichissement du [simulateur d'aides pour les jeunes](https://mes-aides.1jeune1solution.beta.gouv.fr/) et son amélioration continue en facilitant son intégration à d'autres produits de beta.gouv.fr !

<!--more-->

Ça peut paraître surprenant et c'est, il faut l'avouer, un peu expérimental comme approche. Aujourd'hui beta.gouv.fr nous semble assez mûr pour tirer vraiment partie des différentes équipes, initiatives et bases de codes ouvertes.

Chaque équipe a ses priorités et nous pensons que la personne qui nous rejoindra pourra avoir le rôle de dev en résidence, avec nous, l'équipe du simulateur, mais aussi en vadrouille sur les produits alentours pour les mettre en réseau au service des citoyen·ne·s et résident·e·s.

## Le produit, en 3 parties 😁

Demandé par le Premier Ministre en février 2021, le simulateur d'aides pour les jeunes a été [officiellement mis en ligne](https://twitter.com/JeanCASTEX/status/1387065585859715074) à la fin du mois d'avril 2021. Cela a été possible en capitalisant sur de nombreux apprentissages (depuis 2014) et sur la base de code de [Mes Aides](https://beta.gouv.fr/startups/mes-aides.html).

1. Un simulateur à destination des jeunes 📱🖥
2. Des moteurs de calculs pour modéliser les aides 🛠
3. Un outil de contribution pour notamment modéliser des aides plus simples 📝

Avant tout, l'équipe est responsable d'amélioration continue et de la qualité de service du simulateur [accessible en ligne](https://mes-aides.1jeune1solution.beta.gouv.fr/). Il permet aux jeunes de connaître et accéder aux aides auxquelles ils ont le droit. Ce simulateur, en VueJS, est utilisé par des milliers de personnes par jour et est régulièrement enrichi de nouvelles aides et dispositifs.

L'équipe a pour ambition d'enrichir le simulateur de nombreuses aides, notamment celles qui existent à l'échelle locale. Pour cela, nous expérimentons la possibilité de modéliser des aides plus simples, uniquement à partir d'un outil en ligne.

Plus d'informations sur les briques techniques sont données sur [une offre précédente](https://beta.gouv.fr/recrutement/2021/10/28/aides-jeunes-lead-dev.html).


## Aider les personnes à accéder à leurs droits

Quel est l'objectif de notre équipe ? Informer sur les droits ne suffit pas. Lorsque les personnes sont sur la page de résultats, elles ont accès aux services en ligne, formulaire et/ou instructions pour demander les aides affichées. Nous voulons aller plus loin.

C'est à cet endroit là que nous souhaitons faire le lien avec d'autres services numériques de l'écosystème de beta.gouv.fr.

### RDV-Solidarités pour échanger avec des humains

> RDV-Solidarités est un outil de prise de RDV en ligne et d'organisation du temps des agents. Lancé en 2019, suite à une expérimentation dans le département du Pas-de-Calais, un consortium d'une dizaine de départements accompagné par la DINUM et la Banque des Territoires, a été constitué pour construire ce service. Aujourd'hui, [plus de 10 000 RDV](https://www.rdv-solidarites.fr/stats) sont pris par semaine sur la plateforme.

> Actuellement, elle est principalement utilisée par des services médico-sociaux de départements, l'ambition est de l'adapter ou de la décliner à d'autres collectivités et à d'autres services. Un travail pour les conseillers numériques est une première étape, une exploration vers cette déclinaison.

#### Pistes à explorer

- Créer une API pour récupérer la liste des créneaux disponibles pour un lieu et un motif donné
- Créer un parcours de prise de RDV pour ce nouveau public
- Intégrer cette fonctionnalité sur la page de résultats du simulateur


### démarches-simplifiées.fr pour simplifier les démarches

> [demarches-simplifiees.fr](https://www.demarches-simplifiees.fr) permet aux administrations de dématérialiser leurs démarches papiers. Avec plus 20 000 démarches en ligne, plus de 5 millions de dossiers, et utilisateurs, nous sommes l’une des Start-ups d’état les plus utilisées. Notre produit est disponible ici : [https://www.demarches-simplifiees.fr](https://www.demarches-simplifiees.fr)

> Nous sommes une équipe de 12 personnes. Nous travaillons en itérations courtes, rencontrons régulièrement les administrations qui utilisent notre produit, et nous participons au support client afin de mieux nous confronter aux problèmes rencontrés par nos utilisateurs.

#### Principale piste à explorer

- Permettre le pré-remplissage de formulaire à partir des informations saisies ou calculées sur le simulateur (la partie envoi et mise à disposition des données hors du simulateur existent déjà).


## Responsabilités

Vous êtes autonome dans la conception, l'écriture et le déploiement de votre code, et en maîtrisez les bonnes pratiques.

Vous êtes curieuse ou curieux, et capable de travailler sur des bases de code existantes.

Intégré·e à l'équipe de Aides-Jeunes, vous êtes responsable d'expérimenter et implémenter des fonctionnalités nécessaires à la bonne articulation entre le simulateur et RDV-Solidarités puis le simulateur et démarches-simplifiées.fr.


## Stack

- Technos : Ruby on Rails/PostgreSQL pour RDV-Solidarités et démarches-simplifiées et VueJS/Node.js/MongoDB pour le simulateur
- Code ouvert et libre :
      - [https://github.com/betagouv/rdv-solidarites.fr](https://github.com/betagouv/rdv-solidarites.fr)
      - [https://github.com/betagouv/demarches-simplifiees.fr/](https://github.com/betagouv/demarches-simplifiees.fr/)
      - [https://github.com/betagouv/aides-jeunes](https://github.com/betagouv/aides-jeunes)
- Bonnes pratiques : le code est testé, linté, revu, est déployé par petits lots


## Votre profil nous intéresse si :

- Vous avez une bonne expérience en Ruby on Rails et avez idéalement déjà travaillé sur des sujets web (mise en place d'un backend, utilisation de token d'authentification, connexion auprès d'API…)
- Vous êtes animé·e par la volonté d’améliorer le service public.
- Vous savez faire preuve d’initiative, d'autonomie dans votre travail et tenir vos engagements.
- Vous aimez travailler dans une petite équipe, de manière agile et en mettant en place des expérimentations.
- Vous êtes à l’écoute et à l’aise dans la communication orale et écrite, avec vos collègues.


## Modalités

- Poste ouvert pour une indépendante ou un indépendant pour un premier contrat de 3 mois renouvelable, à temps plein (un 3/5 ou un 4/5 par semaine peuvent être négociable selon le profil).
- Le télétravail est possible, mais une présence ponctuelle à Paris est demandée pour participer aux sessions stratégiques et collaboratives. Des bureaux ou espaces de travail beta.gouv.fr sont accessibles à Paris et à Lyon.
- Démarrage dès que possible.

Racontez-nous pourquoi vous auriez envie de nous rejoindre et envoyez-nous votre CV / GitHub, le tout à [aides-jeunes@beta.gouv.fr](mailto:aides-jeunes@beta.gouv.fr?subject=Recrutement%20dev%20en%20résidence)

À bientôt ! 😀
