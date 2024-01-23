---
roles: Dev JavaScript
open: false
date: 2022-08-09
techno: VueJS, Node.js (TypeScript)
startup: aides.jeunes
domaines:
  - Développement
---

L'équipe [Aides-Jeunes](https://beta.gouv.fr/startups/aides.jeunes.html) recherche une ou un dev JavaScript pour contribuer à l'enrichissement du simulateur d'aides pour les jeunes et à son amélioration continue.

<!--more-->

## Le produit, en 3 parties 😁

Demandé par le Premier Ministre en février 2021, le simulateur d'aides pour les jeunes a été [officiellement mis en ligne](https://twitter.com/JeanCASTEX/status/1387065585859715074) à la fin de mois d'avril 2021. Cela a été possible en capitalisant sur de nombreux apprentissages (depuis 2014) et sur la base de code de [Mes Aides](https://beta.gouv.fr/startups/mes-aides.html).


### 1 - Un simulateur à destination des jeunes 📱🖥

Avant tout, l'équipe est responsable d'amélioration continue et de la qualité de service du simulateur [accessible en ligne](https://mes-aides.1jeune1solution.beta.gouv.fr/). Il permet aux jeunes de connaître et accéder aux aides auxquelles ils ont le droit. Ce simulateur, en VueJS, est utilisé par des milliers de personnes par jour et est régulièrement enrichi de nouvelles aides et dispositifs. Nous le mettons à jour quotidiennement en fonction des retours des usagers.

Ressources :
- [code source du simulateur](https://github.com/betagouv/aides-jeunes) (VueJS, nodeJS, NetlifyCMS)


### 2 - Un outil de contribution pour notamment modéliser des aides plus simples 📝

L'équipe a pour ambition d'enrichir le simulateur de nombreuses aides, notamment celles qui existent à l'échelle locale. Pour cela, nous expérimentons la possibilité de modéliser des aides plus simples, uniquement à partir d'un outil en ligne. Initialement prévu pour le contenu éditorial (les textes, les liens, etc.), nous y avons intégré des champs permettant la modélisation des critères d'éligibilité.

Ressources :
- [L'outil de contribution](https://contribuer-aides-jeunes.netlify.app/)
- [Configuration netlifyCMS](https://github.com/betagouv/aides-jeunes/blob/master/contribuer/public/admin/config.yml)


### 3 - Des moteurs de calculs pour modéliser les aides 🛠

Ce simulateur repose sur trois moteurs de calculs complémentaires permettant d'évaluer l'éligibilité à plus de 550 aides. Le moteur de calculs [OpenFisca](https://openfisca.org/) est celui utilisé pour évaluer l'éligibilité et pour estimer les montants des aides complexes. Le moteur de calculs de [mesaidesvelo.fr](https://mesaidesvelo.fr/) est utilisé pour évaluer les nombreuses aides au financement de vélos regroupées par un collectif de la société civile. Enfin, comme indiqué pus haut, nous avons construit un moteur de calculs en javascript alimenté par notre outil de contribution.


## Exemples de chantiers auxquels il sera possible de contribuer


Avec l'ajout d'aides en masse (plus de 500 en 6 mois), nous avons identifié des améliorations pour faciliter les contributions. Pour le moment, des profils d'éligibilité ont été ajoutés aux fiches d'aides et ils permettent de décrire les critères principaux à satisfaire pour obtenir l'aide et le montant de celle-ci ; comme par exemple pour l'[aide aux bachelier·ère·s méritant·e·s](https://contribuer-aides-jeunes.netlify.app/admin/#/collections/benefits/entries/ile-de-france-aide-aux-bacheliers-meritants) de la Région Île-de-France.


Régulièrement, nous faisons des tests avec des jeunes. Cela est très riche et met en évidence des zones de difficultés pour les personnes qui utilisent le simulateur. Nous avons besoin d'aide pour réfléchir aux améliorations incrémentales et les tester en les mettant en production avec de l'A/B testing pour évaluer l'impact et s'assurer qu'il n'y a pas de dégradation de l'expérience.


Le travail d'accompagnement des partenaires a permis leur contribution à partir de l'outil en ligne. Certaines aides sont trop complexes pour être modélisées par ce premier outil. Nous souhaitons faciliter la transition d'une modélisation via notre outil en ligne vers une modélisation en OpenFisca.


Afin d'évaluer l'impact de notre simulateur, nous avons mis en place un sondage pour savoir ce que les personnes font des informations affichées sur la page de résultats. Agrégées, les contributions sont [accessibles en ligne](https://betagouv.github.io/mes-aides-analytics/). Nous souhations améliorer ce sondage pour mieux comprendre pourquoi les personnes s'arrêtent dans les démarches.


Les informations collectées lors d'une simulation sont riches. Nous souhaitons expérimenter leur réutilisation dans de nouveaux contextes. Par exemple, nous souhaitons faciliter l'intégration du simulateur via une iframe. Nous souhaitons aussi intégrer France Connect pour tester l'utilisation des données « France Connectées » dans le contexte de notre simulateur.


Ces chantiers constituent des nouvelles fonctionnalités et nous souhaitons agrandir l'équipe sereinement et en assurant un niveau de dette technique soutenable.


Enfin, pour vous donner une idée des travaux en cours (et des nombreux envisagés 😅), vous pouvez jeter un coup d'oeil à notre [Trello](https://trello.com/b/b3tqaHSD/aides-jeunes). Des temps d'échange sont organisés toutes les deux semaines avec notre sponsor, suivi d'une priorisation d'équipe.


## Compétences

- Bonne maîtrise de VueJS 3 et Node.js (2 ans d'expérience minimum)
- Expérience en conception orientée utilisateur et en expérience utilisateur


Points bonus pour :
- Connaissance de TypeScript et/out NetlifyCMS et/ou React
- Connaissance de Python
- Habitudes des modalités de contribution du logiciel libre (issues, PR…)
- Intérêt pour les aides sociales et leur modélisation


## Conditions

- Poste ouvert pour [un·e indépendant·e](https://doc.incubateur.net/communaute/gerer-sa-startup-detat-ou-de-territoires-au-quotidien/decouvrir-les-differents-metiers-dune-startup-detat/recrutement/conseils-pour-le-recrutement/observatoire-revenus#la-grille)
- Télétravail possible, avec une présence ponctuelle à Paris (20 avenue de Ségur, 75007)
- Temps partiel accepté (80 % minimum)
- Démarrage dès que possible

Racontez-nous pourquoi vous auriez envie de nous rejoindre et envoyez-nous votre LinkedIn / CV / GitHub, le tout à [aides-jeunes@beta.gouv.fr](mailto:aides-jeunes@beta.gouv.fr?subject=Recrutement%20dev%20JS) ou à partir de [l'annonce publiée sur Welcome to the jungle](https://www.welcometothejungle.com/fr/companies/communaute-beta-gouv/jobs/dev-javascript_paris).

À bientôt ! 😀
