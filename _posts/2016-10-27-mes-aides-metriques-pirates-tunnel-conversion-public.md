---
title: Métriques pirates et tunnels de conversion au service de l'intérêt général
startup: mes-aides
authors: mattisg
---

Métriques pirates et tunnel de conversion sont des notions habituelles du e-commerce. Les Startups d'État les utilisent dans l'action publique, au bénéfice de toutes et tous. Je vais vous montrer comment l'équipe Mes Aides utilise ces concepts pour maximiser son impact.


## Source des données

Nous utilisons [Piwik](https://piwik.org), un outil libre de suivi d'audience (comme Google Analytics, mais [sans horrible bannière]({{ site.baseurl }}suivi)). Ces outils permettent de suivre les visites et la popularité du contenu. Au travers des [métriques pirates](http://www.expectedbehavior.com/experiments/pirate_metrics/), ces données permettent d'estimer la clarté des messages envoyés aux utilisateurs et les zones d'amélioration.

[Suivons la fréquentation](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday&popover=RowAction$3ARowEvolution$3AActions.getPageUrls$3A$257B$2522action$2522$253A$2522getMultiRowEvolutionPopover$2522$252C$2522column$2522$253A$2522nb_visits$2522$257D$3Afoyer$20$3E$20$40$252Fdemandeur$2C$40$252Findex$2Cfoyer$20$3E$20$40$252Fresultat) des pages accueil, début de simulation et résultats, et voyons comment interpréter ces données.

![1300 visites de l'accueil, 1000 de la simulation et 700 du résultat.]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/audience-pages.png)

Pour chaque point dans ce suivi d'audience, deux valeurs sont chargées de sens.


## Taux d'acquisition

Le _taux d'acquisition_ est le rapport entre nombre d'arrivées sur le service et démarrage d'une interaction. Il permet d'évaluer si votre message engage bien les visiteurs, et si le flux entrant est bien qualifié. Plus il est élevé et mieux le message est calibré au public qui visite votre site.

Pour Mes Aides, nous le définissions comme le ratio de simulations débutées par rapport aux arrivées sur la page d'accueil. Ce taux vaut environ 79 % sur les 2 derniers mois.

![Acquisition = ratio arrivée/démarrage]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/acquisition.png)

> Attention, cette métrique ne permet pas de déterminer si votre proposition de valeur est claire. Une proposition de valeur claire peut justement éviter à des personnes qui ne se sentent pas concernées de commencer une interaction qui ne leur apportera pas de valeur. Ce taux ne doit pas être simplement maximisé : si on dit « cliquez ici pour gagner 1 000 € », on aura peut-être un fort taux d'acquisition, mais beaucoup de déception. Ou sinon, envoyez-nous l'adresse de votre produit  ;)


## Taux d'activation

Le _taux d'activation_ est le rapport entre nombre d'arrivées sur le service et une utilisation « réussie ». Il permet d'estimer la qualité de l'interaction avec le système, et l'adéquation de l'interaction proposée avec la proposition de valeur initiale.

Pour Mes Aides, nous le définissions comme le ratio de simulations terminées par rapport aux arrivées sur la page d'accueil. Ce taux vaut environ 57 % sur les 2 derniers mois.

![Acquisition = ratio arrivée/démarrage, activation = ratio arrivée/résultats]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/acquisition-activation.png)

> Attention, cette métrique ne permet pas d'identifier précisément les défauts. Il s'agit simplement d'un indicateur de qualité globale, pas d'un outil de diagnostic. Pour comprendre les difficultés, il faut déterminer les pages les plus source d'abandons, puis mener des tests utilisateurs pour en identifier les causes et proposer des correctifs.

Un taux d'activation de 57 % est excellent pour un produit web. En fluidifiant encore plus l'entrée des données dans la simulation, nous pourrions probablement encore améliorer ce taux. Mais comment déterminer où focaliser notre attention ?


## Tunnel de conversion

Deux métriques sont pertinentes pour évaluer la difficulté que les usagers rencontrent face à une interaction spécifique : le _temps passé_ et le _taux de sortie_, c'est-à-dire le pourcentage d'usagers qui abandonnent l'interaction en cours de route.

Si nous générons un [rapport](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday#?module=Actions&action=menuGetPageUrls&idSite=9&period=day&date=yesterday) sur les pages du parcours de simulation (par opposition aux pages de contenu telles que « À propos », « FAQ »…), nous pouvons analyser les marges d'amélioration de notre [tunnel de conversion](https://en.wikipedia.org/wiki/Conversion_funnel).

> Bien que Mes Aides soit une application « en une seule page » (<abbr title="Single page application">SPA</abbr>), il suffit de modifier l'adresse avec l'<abbr title="Application programming interface">API</abbr> [`history`](https://developer.mozilla.org/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur) à chaque étape pour enregistrer la visite d'une page dans l'outil de suivi. Il est également possible d'enregistrer des événements à la demande. Nous nous arrêtons ici à ce qui est déjà possible sans aucune configuration spécifique.

La représentation de ces données est comme toujours cruciale pour faciliter son interprétation.

### Répartition du temps passé

Une première représentation simple peut se contenter du temps passé à chaque étape.

![La saisie des montants prend 1 minute 27 secondes. La saisie des revenus N moins 2 prend 40 secondes. Le temps total moyen est de 6 minutes 55 secondes]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/repartition-temps-par-page.png)

Cela nous permet de voir que la saisie des ressources est l'interaction la plus longue. Mais comment prioriser nos efforts d'amélioration entre cette page et la saisie du revenu fiscal de référence, par exemple ?

### Analyse multidimensionnelle

Ici, je propose une visualisation qui permet de représenter trois dimensions à la fois, avec une clé de lecture simple : plus une page est en haut, plus elle fait fuir les utilisateurs ; plus elle est à droite, plus elle est longue à remplir ; plus sa bulle est grande, plus elle est fréquemment rencontrée. Les couleurs servent à distinguer les bulles et les regroupent par type d'information saisie.

![La saisie des montants prend 1 minute 27 secondes et a un taux de sortie de 12%. La saisie des revenus N moins 2 prend 40 secondes et a un taux de sortie de 12%.]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/tunnel-conversion.png)

> Les déclarations de ressources des individus après le second n'ont pas été inclues par souci de lisibilité et de représentativité, car très peu de situations en comprennent.

Dans l'état actuel, pas de surprise : les pages qui font le plus fuir les usagers sont celles où ils doivent remplir des montants précis qu'ils n'ont peut-être pas en tête, la pire étant la première rencontre avec la saisie des montants des ressources perçues sur l'année passée. Nous nous en doutions, bien évidemment, mais nous avons maintenant une référence à laquelle rapporter l'efficacité d'interfaces alternatives.

Le compte du nombre de vues est également utile dans cette priorisation. Il sera ainsi plus efficient d'améliorer la première page de simulation (« Demandeur ») que la page Patrimoine, même si ses taux de sortie et temps passé sont plus faibles : avec 16 fois plus de visites, l'impact sera bien plus fort.

**Une analyse quantitative de ce type ne permet pas de suggérer des solutions**, mais elle peut aider l'équipe à valider (ou invalider) ses intuitions, et à focaliser ses efforts là où ils auront le plus d'impact. Maximiser le taux d'activation revient à ramener les bulles les plus grandes vers le quadrant inférieur gauche.


## Temps passé total

Si vous êtes familier·e avec les métriques pirates, vous avez certainement remarqué que je n'ai pas parlé de _rétention_, par exemple. C'est là la limite de l'application de ces modèles à l'action publique : contrairement à un site commercial qui serait rémunéré par l'affichage de publicités, nous ne valorisons pas le temps passé par nos usagers sur nos produits. Au contraire, plus l'interaction est rapide et indolore, mieux c'est ! Donc, si nous suivons le [temps passé pour une simulation](https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25#?module=VisitFrequency&action=index&idSite=9&period=day&date=yesterday&segment=visitConvertedGoalId%3D%3D1%3Bactions%3E%3D5%3Bactions%3C%3D25) sur Mes Aides, c'est en espérant le minimiser.

![31% des visites prennent 4 à 7 minutes, 58% moins de 7 minutes]({{ site.baseurl }}img/posts/2016-10-27-mes-aides-metriques-pirates-tunnel-conversion-public/repartition-temps-total.png)

> Ces données concernent le _segment_ (le sous-ensemble) des visiteurs qui ne font qu'une seule simulation, défini comme les visiteurs qui ont vu les pages de démarrage et de résultats et qui ont visité entre 5 et 25 pages (pour ne pas prendre en compte la durée des simulations effectuées en faisant varier une situation initiale).

Pour caractériser correctement cette durée, nous suivons la médiane et le 95<sup>ème</sup> percentile des simulations terminées. Cela signifie donc qu'aujourd'hui, comme depuis plusieurs mois, **la moitié des usagers évaluent leurs droits à plus d'une vingtaine de prestations sociales en moins de 7 minutes**, et 95 %, ce qui recouvre l'immense majorité des situations, même complexes, en moins de 30 minutes.


## De la transférabilité des pratiques

Les métriques pirates et la notion de tunnel de conversion sont des pratiques habituelles de e-commerce. J'espère avoir pu vous montrer comment ces concepts peuvent être tout aussi utiles dans des services non commerciaux. Au sein des Startups d'État, nous pensons que les pratiques du numérique peuvent tout aussi bien être appliquées dans l'action publique, au bénéfice de tous: usagers, contribuables, agents publics. **Cela vous parle ? [Rejoignez-nous]({{ site.baseurl }}contact) !**
