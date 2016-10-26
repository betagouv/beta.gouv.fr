---
title: Métriques pirates et tunnels de conversion au service de l'intérêt général
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Voici quelques-unes des métriques que nous suivons, et quelques conseils pour reproduire cette approche dans vos propres produits.


## Source des données

Nous utilisons [Piwik](https://piwik.org), un outil libre de suivi d'audience du même type que Google Analytics. Ces outils permettent de déterminer entre autres le nombre de visites et les contenus les plus populaires. Les données fournies peuvent aider à déterminer la clarté des messages envoyés aux utilisateurs, à travers notamment des [métriques pirates](http://www.expectedbehavior.com/experiments/pirate_metrics/).

[Suivons l'audience](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday&popover=RowAction$3ARowEvolution$3AActions.getPageUrls$3A$257B$2522action$2522$253A$2522getMultiRowEvolutionPopover$2522$252C$2522column$2522$253A$2522nb_visits$2522$257D$3Afoyer$20$3E$20$40$252Fdemandeur$2C$40$252Findex$2Cfoyer$20$3E$20$40$252Fresultat) de trois pages spécifiques : la page d'accueil, la page de début de simulation, et la page de résultats, et voyons comment interpréter ces données.

![Fréquentation des pages d'accueil, simulation et résultats de Mes Aides.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-pirates-tunnel-conversion-public/audience-pages.png)

En prenant un jour particulier dans le suivi d'audience ci-dessus, voilà comment lire graphiquement deux valeurs chargées de sens.

![Acquisition = ratio arrivée/démarrage, activation = ratio arrivée/fin]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-pirates-tunnel-conversion-public/acquisition-activation.png)


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

La représentation de ces données est comme toujours cruciale pour que son interprétation soit facilitée.

Ici, je propose une visualisation sous la forme de bulles qui permet de représenter trois dimensions à la fois, avec une clé de lecture simple : plus une page est en haut, plus elle fait fuir les utilisateurs ; plus elle est à droite, plus elle est longue à remplir ; plus sa bulle est grande, plus elle est fréquemment rencontrée.

![La saisie des montants prend 1 minute 27 secondes et a un taux de sortie de 12%. La saisie des revenus N moins 2 prend 40 secondes et a un taux de sortie de 12%.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-pirates-tunnel-conversion-public/tunnel-conversion.png)

> Les déclarations de ressources des individus après le second n'ont pas été inclues par souci de lisibilité et de représentativité, car très peu de situations en comprennent.

Dans l'état actuel, pas de surprise : les pages qui font le plus fuir les usagers sont celles où ils doivent remplir des montants précis qu'ils n'ont peut-être pas en tête, la pire étant la première rencontre avec la saisie des montants des ressources perçues sur l'année passée.

**Une analyse quantitative de ce type ne permet pas de suggérer des solutions**, mais elle peut aider l'équipe à valider (ou invalider) ses intuitions, et à focaliser ses efforts là où ils auront le plus d'impact. Maximiser le taux d'activation revient à ramener les bulles les plus grandes vers le quadrant inférieur gauche.

Dans notre cas, les marges de progression sont les plus grandes sur la page d'entrée des montants de ressources. Nous nous en doutions, bien évidemment, mais nous avons maintenant une performance de référence par rapport à laquelle mesurer l'efficacité des interfaces alternatives que nous pourrons concevoir.

Le compte du nombre de vues est également utile dans cette priorisation. Il serait ainsi plus pertinent de se focaliser sur l'amélioration de la première page de simulation (« Demandeur ») que sur la page Patrimoine, même si ses taux de sortie et temps passé sont plus faibles : avec 16 fois plus de passage, l'impact sera bien plus fort.


## Temps passé total

Si vous êtes familier·e avec les métriques pirates, vous avez certainement remarqué que je n'ai pas parlé de _rétention_, par exemple. C'est là la limite de ces modèles : contrairement à un site commercial qui serait rémunéré par l'affichage de publicités, nous ne valorisons pas le temps passé par nos usagers sur nos produits. Au contraire, plus l'interaction est rapide et indolore, mieux c'est !

Nous aussi, nous suivons le [temps total](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25#?module=VisitFrequency&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25) passé sur Mes Aides… mais en espérant le minimiser !

Pour cela, il faut définir le segment (le sous-ensemble) des visiteurs qui ne font qu'une seule simulation. Nous approximons cette définition en ne considérant que les visiteurs qui ont vu la page de début de simulation et la page de résultats, et qui ont visité au moins 5 pages et au plus 25 (pour ne pas prendre en compte la durée des simulations effectuées en faisant varier les paramètres d'une situation initiale).

![31% des visites prennent 4 à 7 minutes, 58% moins de 7 minutes]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-metriques-pirates-tunnel-conversion-public/repartition-temps-total.png)

Pour caractériser correctement cette durée, nous suivons la médiane et le 95ème percentile des simulations terminées. Cela signifie donc qu'aujourd'hui (et de manière stable depuis plusieurs mois), **la moitié des usagers évaluent leurs droits à plus d'une vingtaine de prestations sociales en moins de 7 minutes**, et 95%, ce qui recouvre l'immense majorité des situations, même complexes, en moins de 30 minutes.


## De la transférabilité des pratiques

Les métriques pirates et la notion de tunnel de conversion sont des pratiques habituelles de e-commerce. J'espère avoir pu vous montrer comment ces concepts peuvent être tout aussi utiles dans des services non commerciaux. Au sein des Startups d'État, nous pensons que les pratiques du numérique peuvent tout aussi bien être appliquées dans l'action publique, au bénéfice de tous: usagers, contribuables, agents publics. Cela vous parle ? [Rejoignez-nous !]({{ site.baseurl }}contact).

Cet article est le premier d'une série sur l'application des pratiques des startups du numérique au sein de l'action publique. La semaine prochaine, nous parlerons de [_10x product launch_]({{ site.baseurl }}2016/10/17/mes-aides-10x-product-launch-public), puis de [_datascience_]({{ site.baseurl }}2016/10/17/mes-aides-datascience-public).
