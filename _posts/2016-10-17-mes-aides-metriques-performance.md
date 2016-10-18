---
title: Métriques de performance
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Voici quelques-unes des métriques que nous suivons, et quelques conseils pour reproduire cette approche dans vos propres produits.


## Données d'usage

Nous utilisons [Piwik](https://piwik.org), un outil libre de suivi d'audience du même type que Google Analytics. Ces outils permettent de déterminer entre autres le nombre de visites et les contenus les plus populaires. Les données fournies peuvent aider à déterminer la clarté des messages envoyés aux utilisateurs, à travers notamment des [métriques pirates](http://www.expectedbehavior.com/experiments/pirate_metrics/).

[Suivons l'audience](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday&popover=RowAction$3ARowEvolution$3AActions.getPageUrls$3A$257B$2522action$2522$253A$2522getMultiRowEvolutionPopover$2522$252C$2522column$2522$253A$2522nb_visits$2522$257D$3Afoyer$20$3E$20$40$252Fdemandeur$2C$40$252Findex$2Cfoyer$20$3E$20$40$252Fresultat) de trois pages spécifiques : la page d'accueil, la page de début de simulation, et la page de résultats, et voyons comment interpréter ces données.

![Fréquentation des pages d'accueil, simulation et résultats de Mes Aides.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-performance/aa-30j.png)

### Taux d'acquisition

Le [taux d'acquisition](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'évaluer si votre message engage bien les visiteurs, et si le flux entrant est bien qualifié. Plus il est élevé et mieux le message est calibré à son public.

Pour Mes Aides, il s'agit du ratio de simulations débutées par rapport au nombre d'arrivées sur la page d'accueil.

> Attention, cette métrique ne permet pas de déterminer si votre proposition de valeur est claire. Une proposition de valeur claire peut justement éviter à des personnes qui ne se sentent pas concernées de commencer une interaction qui ne leur apportera pas de valeur. Ce taux ne doit pas être simplement maximisé : si on dit « cliquez ici pour gagner 1 000 € », on aura peut-être un fort taux d'acquisition, mais beaucoup de déception. Ou sinon, envoyez-nous l'adresse de votre produit  ;)


### Taux d'activation

Le [taux d'activation](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'estimer la qualité de l'interaction avec le système, et l'adéquation de l'interaction proposée avec la proposition de valeur initiale.

Pour Mes Aides, il s'agit du ratio de simulations terminées par rapport aux simulations démarrées.

> Attention, cette métrique ne permet pas d'identifier précisément les défauts. Il s'agit simplement d'un _smell_, pas d'un outil de diagnostic. Pour comprendre les difficultés, il faut déterminer les pages qui sont les plus source d'abandon, puis mener des tests utilisateurs pour en identifier les causes et proposer des correctifs.

### Représentation graphique

En prenant un jour particulier dans le suivi d'audience présenté plus haut, voilà comment lire graphiquement ces deux taux.

![Acquisition = ratio arrivée/démarrage, activation = ratio arrivée/fin]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-performance/aa-illustration.png)

Un taux d'activation de 57 % est excellent pour un produit web. En fluidifiant encore plus l'entrée des données dans la simulation, nous pourrions probablement encore améliorer ce taux. Mais comment déterminer où focaliser notre attention ?


### Temps nécessaire pour effectuer une simulation

Contrairement à un site commercial qui serait rémunéré par un affichage de publicité, nous n'avons pas vocation à maximiser le temps passé par nos usagers sur nos produits. Au contraire, plus l'interaction peut être rapide et indolore, mieux c'est !

Cette métrique est particulièrement importante dans le cas de Mes Aides, car il s'agit de notre proposition de valeur de base : augmenter fortement le retour sur investissement d'une simulation de droits, pour augmenter leur découvrabilité et donc le recours. Nous maximisons donc le nombre de prestations calculées en une seule simulation, et nous minimisons le temps nécessaire pour réaliser cette simulation.

Pour caractériser correctement cette durée, nous suivons la médiane et le 95ème percentile des simulations terminées.


## Données de contact

### Taux de demande d'assistance

Le taux de demande d'assistance permet d'évaluer la clarté de l'interface et la fréquence de défauts techniques. Il s'agit du ratio de contacts email au support par rapport au nombre de visiteurs uniques.

Cette métrique permet de déterminer si un passage à l'échelle supérieure est envisageable, en répondant à la question suivante : si 1 000 utilisateurs génèrent 2 emails par jour, sommes-nous équipés faire face à 20 emails par jour en passant à 10 000 utilisateurs ? Il s'agit de l'un des aspects du « [lancement facteur 10](https://leanstack.com/the-10x-product-launch/) ».
