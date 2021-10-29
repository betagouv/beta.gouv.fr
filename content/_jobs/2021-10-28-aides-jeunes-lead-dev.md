---
roles: Lead dev
open: true
date: 2021-10-28
startup: aides.jeunes
---

L'équipe [Aides-Jeunes](https://beta.gouv.fr/startups/aides.jeunes.html) recherche une ou un lead dev pour contribuer à l'enrichissement du simulateur d'aides pour les jeunes, à son amélioration continue tout en assurant la pérennité de sa base de code.

<!--more-->

<style type="text/css">
p {
      margin: 1.5rem 0 0 0;
}

h2, h3 {
      margin: 3rem 0 1rem 0;
}
</style>

## Le produit, en 3 parties 😁

Demandé par le Premier Ministre en février 2021, le simulation d'aides pour les jeunes a été [officiellement mis en ligne](https://twitter.com/JeanCASTEX/status/1387065585859715074) à la fin de mois d'avril 2021. Cela a été possible en capitalisant sur de nombreux apprentissages (depuis 2014) et sur la base de code de [Mes Aides](https://beta.gouv.fr/startups/mes-aides.html).

### 1 - Un simulateur à destination des jeunes 📱🖥

Avant tout, l'équipe est responsable d'amélioration continue et de la qualité de service du simulateur [accessible en ligne](https://mes-aides.1jeune1solution.beta.gouv.fr/). Ce simulateur, en VueJS, est utilisé par des milliers de personnes par jour et est régulièrement enrichi de nouvelles aides et dispositifs. Nous le mettons à jour quotidiennement en fonction des retours des usagers.

Ressources :
- [code source du simulateur](https://github.com/betagouv/aides-jeunes) (VueJS, nodeJS, NetlifyCMS, mongoDB et pour le développement Cypress, CircleCI, Jest et Sentry)
- [Métriques suivies pour le produit](https://betagouv.github.io/mes-aides-analytics/) et [son code source](https://github.com/betagouv/mes-aides-analytics/) (NextJS)
- [OPS](https://github.com/betagouv/aides-jeunes-ops/) (Python, Fabric)


### 2 - Un moteur de calculs pour modéliser les aides complexes 🛠

Ce simulateur repose sur le moteur de calculs [OpenFisca](https://openfisca.org/) pour l'évaluation aux différentes éligibilités et pour l'estimation des montants des aides complexes.

Les dépôts :
- [OpenFisca France](https://github.com/openfisca/openfisca-france) (Python, numpy)
- [OpenFisca France Local](https://github.com/openfisca/openfisca-france-local) (Python, numpy)
- [OpenFisca Paris](https://github.com/openfisca/openfisca-paris) (Python, numpy)
- Un outil d'analyse des étapes de calculs pour faciliter la résolution de bugs [le tracer](https://github.com/openfisca/tracer/) (nextJS)


### 3 - Un outil de contribution pour notamment modéliser des aides plus simples 📝

L'équipe a pour ambition d'enrichir le simulateur de nombreuses aides, notamment celles qui existent à l'échelle locale. Pour cela, nous expérimentons la possibilité de modéliser des aides plus simples, uniquement à partir d'un outil en ligne. Initialement prévu pour le contenu éditorial (les textes, les liens, etc.), nous testons l'ajout de champs permettant la modélisation des critères d'éligibilité.

Ressources :
- [L'outil de contribution](https://contribuer-aides-jeunes.netlify.app/)
- [Configuration netlifyCMS](https://github.com/betagouv/aides-jeunes/blob/master/contribuer/public/admin/config.yml)



## La mission

Il s'agit principalement d'animer et participer à l'équipe technique du produit avec un oeil particulièrement attentif à la pérennité de sa base de code pour permettre le développement de nouvelles fonctionnalités dans de bonnes conditions. Un soin particulier a été donné pour faciliter la contribution mais le développement rapide des mois précédents l'a rendue plus compliquée que nous le souhaitons.


De plus, nous voulons être en capacité de mettre en place, rapidement, des expérimentations avec d'autres équipes intéressées par les simulateurs (comme [Tout est permis](http://beta.gouv.fr/startups/tout-est-permis.html) avec une vision thématique, [Clara](https://beta.gouv.fr/startups/clara.html) avec une vision public spécifique ou encore le [Pass Emploi](https://beta.gouv.fr/startups/pass-emploi.html)).


D'un point de vue technique, voilà quelques chantiers identifiés :
- le passage à VueJS 3
- le passage d'un audit de sécurité
- le regroupement des logiques en JS partagées entre le front et le back

Nous nous attendons à ce que cette liste soit enrichie de sujets que vous auriez identifiés au cours de vos premières semaines.


Sur la partie produit, les chantiers identifiés pour les mois à venir sont :
- l'amélioration continue de l'outil de contribution et d'ajout d'aides simples
- l'amélioration de la page de résultats (pour inciter plus de personnes à se renseigner et demander une aide)


En fil rouge, il y a toujours :
- l'amélioration continue des différentes partie du produit
- l'amélioration de la modélisation des aides


Pour vous donner une idée des travaux en cours, vous pouvez jeter un coup d'oeil à notre [Trello](https://trello.com/b/b3tqaHSD/aides-jeunes).

Un temps d'échange est organisé toutes les deux semaines avec notre sponsor, suivi d'une priorisation d'équipe.

Aujourd'hui constituée de 2 personnes (Antoine - dev qui travaille de Lille et Thomas - PO qui travaille de Strasbourg), l'équipe va s'agrandir pour accueillir une personne au rôle de lead dev et d'un binôme (dev et accompagnement/bizdev) pour avancer plus spécifiquement sur la partie contribution.

De plus, il est aussi envisagé de recruter sur des temps plus courts, une personne avec un focus design/dev front pour améliorer la hiérarchisation de l'information et ainsi que l'alignement des composants graphiques.


## Compétences

- Bonne maîtrise de VueJS.
- Expérience en conception orientée utilisateur et en expérience utilisateur.
- Vous avez l’habitude des modalités de contribution du logiciel libre (issues, PR…).


Points bonus pour :
- Intérêt pour les aides sociales et leur modélisation
- Expérience en Python/Numpy
- Expérience en NextJS


## Conditions

- Poste ouvert pour un·e indépendant·e.
- Télétravail possible, avec une présence ponctuelle à Paris (20 avenue de Ségur, 75007).
- Temps partiel accepté (80 % minimum).
- Démarrage dès que possible.

Racontez-nous pourquoi vous auriez envie de nous rejoindre et envoyez-nous votre LinkedIn / CV / GitHub, le tout à [aides-jeunes@beta.gouv.fr](mailto:aides-jeunes@beta.gouv.fr?subject=Recrutement lead dev)

À bientôt ! 😀
