---
title: Métriques de performance
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Voici quelques-unes des métriques que nous suivons, et quelques conseils pour reproduire cette approche dans vos propres produits.


## Source des données

Nous utilisons [Piwik](https://piwik.org), un outil libre de suivi d'audience du même type que Google Analytics. Ces outils permettent de déterminer entre autres le nombre de visites et les contenus les plus populaires. Les données fournies peuvent aider à déterminer la clarté des messages envoyés aux utilisateurs, à travers notamment des [métriques pirates](http://www.expectedbehavior.com/experiments/pirate_metrics/).

[Suivons l'audience](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday&popover=RowAction$3ARowEvolution$3AActions.getPageUrls$3A$257B$2522action$2522$253A$2522getMultiRowEvolutionPopover$2522$252C$2522column$2522$253A$2522nb_visits$2522$257D$3Afoyer$20$3E$20$40$252Fdemandeur$2C$40$252Findex$2Cfoyer$20$3E$20$40$252Fresultat) de trois pages spécifiques : la page d'accueil, la page de début de simulation, et la page de résultats, et voyons comment interpréter ces données.

![Fréquentation des pages d'accueil, simulation et résultats de Mes Aides.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-performance/audience-pages.png)

En prenant un jour particulier dans le suivi d'audience ci-dessus, voilà comment lire graphiquement deux valeurs chargées de sens.

![Acquisition = ratio arrivée/démarrage, activation = ratio arrivée/fin]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-performance/acquisition-activation.png)


## Taux d'acquisition

Le [taux d'acquisition](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'évaluer si votre message engage bien les visiteurs, et si le flux entrant est bien qualifié. Plus il est élevé et mieux le message est calibré à son public.

Pour Mes Aides, il s'agit du ratio de simulations débutées par rapport au nombre d'arrivées sur la page d'accueil.

> Attention, cette métrique ne permet pas de déterminer si votre proposition de valeur est claire. Une proposition de valeur claire peut justement éviter à des personnes qui ne se sentent pas concernées de commencer une interaction qui ne leur apportera pas de valeur. Ce taux ne doit pas être simplement maximisé : si on dit « cliquez ici pour gagner 1 000 € », on aura peut-être un fort taux d'acquisition, mais beaucoup de déception. Ou sinon, envoyez-nous l'adresse de votre produit  ;)


## Taux d'activation

Le [taux d'activation](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'estimer la qualité de l'interaction avec le système, et l'adéquation de l'interaction proposée avec la proposition de valeur initiale.

Pour Mes Aides, il s'agit du ratio de simulations terminées par rapport aux simulations démarrées.

> Attention, cette métrique ne permet pas d'identifier précisément les défauts. Il s'agit simplement d'un _smell_, pas d'un outil de diagnostic. Pour comprendre les difficultés, il faut déterminer les pages qui sont les plus source d'abandon, puis mener des tests utilisateurs pour en identifier les causes et proposer des correctifs.

Un taux d'activation de 57 % est excellent pour un produit web. En fluidifiant encore plus l'entrée des données dans la simulation, nous pourrions probablement encore améliorer ce taux. Mais comment déterminer où focaliser notre attention ?


## Tunnel de conversion

La conjonction de deux métriques est pertinente pour évaluer la difficulté que les usagers rencontrent face à une interaction spécifique : le temps passé et le taux de sortie. Plus un usager passe de temps sur une étape plus elle est complexe, et cela devrait se retrouver sur le pourcentage d'usagers qui abandonnent l'interaction en cours de route.

Si nous générons un [rapport](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday) sur ces métriques et nous focalisons uniquement sur les pages du parcours de simulation (par opposition aux pages de contenu telles qu'à propos, FAQ…), nous pouvons analyser les marges d'amélioration de notre [tunnel de conversion](https://en.wikipedia.org/wiki/Conversion_funnel).

> Bien que Mes Aides soit une application « en une seule page » (<abbr title="Single page application">SPA</abbr>), nous [modifions l'adresse du navigateur](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur) à chaque étape d'une simuation. L'outil de suivi d'audience s'adapte tout aussi bien à ce fonctionnement.


Page | Temps passé | Taux de sortie | Vues | Étape
----|-------------|----------------|------|------
Ressources : Demandeur : Montants | 1min 27s | 12 % | 623 | 6
Revenus n-2 | 40s | 12 % | 229 | 11
Patrimoine | 41s | 10 % | 52 | 13
Demandeur | 36s | 8 % | 833 | 1
Ressources : Individu 2 : Montants | 40s | 7 % | 157 | 8
Ressources : Demandeur : Types | 35s | 5 % | 688 | 5
Pensions alimentaires | 6s | 5 % | 593 | 10
Ressources : Individu 2 : Types | 12s | 4 % | 247 | 7
Enfants | 18s | 3 % | 735 | 2
Ressources : Question enfants | 5s | 2 % | 175 | 9
Logement | 39s | 2 % | 699 | 4
Conjoint | 15s | 2 % | 709 | 3
RFR | 37s | 0 % | 22 | 12

> Note : les déclarations de ressource des individus après le second n'ont pas été inclues par souci de lisibilité et de représentativité, car très peu de situations en comprennent.

Pas de surprise : les pages qui font le plus fuir les usagers sont celles où ils doivent remplir des montants précis, données qui ne sont peut-être pas immédiatement accessibles. La pire étant, au vu du temps passé, la première rencontre avec le remplissage des montants des ressources perçues.

**Une analyse quantitative de ce type ne permet pas de suggérer des solutions**, mais elle peut aider l'équipe à valider (ou invalider) ses intuitions, et à focaliser ses efforts là où ils auront le plus d'impact.

Dans notre cas, les marges de progression sont les plus grandes sur la page d'entrée des montants de ressources. Nous nous en doutions, bien évidemment, mais nous avons maintenant une performance de référence par rapport à laquelle mesurer l'efficacité des interfaces alternatives que nous pourrons concevoir.

Le compte du nombre de vues est également utile dans cette priorisation. Il serait ainsi plus pertinent de se focaliser sur l'amélioration de la première page de simulation (« Demandeur ») que sur la page Patrimoine, même si ses taux de sortie et temps passé sont plus faibles : avec 16 fois plus de passage, l'impact sera bien plus fort.


## Temps passé total

Les métriques pirates et la notion de tunnel de conversion sont des pratiques habituelles de e-commerce. J'espère avoir pu vous montrer comment ces concepts peuvent être appliqués dans des services non commerciaux.

Pourtant, si vous êtes familier·e avec les métriques pirates, vous avez certainement remarqué que je n'ai pas parlé de _rétention_, par exemple. C'est là la limite de ces modèles : contrairement à un site commercial qui serait rémunéré par l'affichage de publicités, nous ne valorisons pas le temps passé par nos usagers sur nos produits. Au contraire, plus l'interaction est rapide et indolore, mieux c'est !

Nous aussi, nous suivons le [temps total](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25#?module=VisitFrequency&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25) passé sur Mes Aides… mais en espérant le minimiser !

Pour cela, il faut définir le segment (le sous-ensemble) des visiteurs qui ne font qu'une seule simulation. Nous approximons cette définition en ne considérant que les visiteurs qui ont vu la page de début de simulation et la page de résultats, et qui ont visité au moins 5 pages et au plus 25 (pour ne pas prendre en compte la durée des simulations effectuées en faisant varier les paramètres d'une situation initiale).

![31% des visites prennent 4 à 7 minutes, 58% moins de 7 minutes]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-performance/repartition-temps-total.png)

Pour caractériser correctement cette durée, nous suivons la médiane et le 95ème percentile des simulations terminées. Cela signifie donc qu'aujourd'hui (et de manière stable depuis plusieurs mois), **la moitié des usagers évaluent leurs droits à plus d'une vingtaine de prestations sociales en moins de 7 minutes**, et 95%, ce qui recouvre l'immense majorité des situations, même complexes, en moins de 30 minutes.


## Données de contact

### Taux de demande d'assistance

Le taux de demande d'assistance permet d'évaluer la clarté de l'interface et la fréquence de défauts techniques. Il s'agit du ratio de contacts email au support par rapport au nombre de visiteurs uniques.

Cette métrique permet de déterminer si un passage à l'échelle supérieure est envisageable, en répondant à la question suivante : si 1 000 utilisateurs génèrent 2 emails par jour, sommes-nous équipés faire face à 20 emails par jour en passant à 10 000 utilisateurs ? Il s'agit de l'un des aspects du « [lancement facteur 10](https://leanstack.com/the-10x-product-launch/) ».
