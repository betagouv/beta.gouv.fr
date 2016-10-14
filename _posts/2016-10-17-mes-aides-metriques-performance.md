---
title: Métriques de performance
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Voici quelques-unes des métriques que nous suivons, et quelques conseils pour reproduire cette approche dans vos propres produits.


## Données d'usage

Nous utilisons [Piwik](https://piwik.org), un outil libre de suivi d'audience du même type que Google Analytics. Ces outils permettent de déterminer entre autres le nombre de visites et les contenus les plus populaires. Les données fournies peuvent aider à déterminer la clarté des messages envoyés aux utilisateurs, à travers notamment des [métriques pirates](http://www.expectedbehavior.com/experiments/pirate_metrics/).

### Taux d'acquisition

Le [taux d'acquisition](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'évaluer si votre message engage bien les visiteurs, et si le flux entrant est bien qualifié. Plus il est élevé et mieux le message est calibré à son public.

Il s'agit du ratio d'interactions débutées par rapport au nombre d'arrivées sur la page d'accueil.

> Attention, cette métrique ne permet pas de déterminer si votre proposition de valeur est claire. Une proposition de valeur claire peut justement éviter à des personnes qui ne se sentent pas concernées de commencer une interaction qui ne leur apportera pas de valeur. Ce taux ne doit pas être simplement maximisé : si on dit « cliquez ici pour gagner 1 000 € », on aura peut-être un fort taux d'acquisition, mais beaucoup de déception. Ou sinon, envoyez-nous l'adresse de votre produit  ;)


### Taux d'activation

Le [taux d'activation](http://www.expectedbehavior.com/experiments/pirate_metrics/) permet d'estimer la qualité de l'interaction avec le système, et l'adéquation de l'interaction proposée avec la proposition de valeur initiale.

Pour Mes Aides, il s'agit du ratio de simulations terminées par rapport aux simulations démarrées.

> Attention, cette métrique ne permet pas d'identifier précisément les défauts. Il s'agit simplement d'un _smell_, pas d'un outil de diagnostic. Pour comprendre les difficultés, il faut déterminer les pages qui sont les plus source d'abandon, puis mener des tests utilisateurs pour en identifier les causes et proposer des correctifs.


### Temps nécessaire pour effectuer une simulation

Contrairement à un site commercial qui serait rémunéré par un affichage de publicité, nous n'avons pas vocation à maximiser le temps passé par nos usagers sur nos produits. Au contraire, plus l'interaction peut être rapide et indolore, mieux c'est !

Cette métrique est particulièrement importante dans le cas de Mes Aides, car il s'agit de notre proposition de valeur de base : augmenter fortement le retour sur investissement d'une simulation de droits, pour augmenter leur découvrabilité et donc le recours. Nous maximisons donc le nombre de prestations calculées en une seule simulation, et nous minimisons le temps nécessaire pour réaliser cette simulation.

Pour caractériser correctement cette durée, nous suivons la médiane et le 95ème percentile des simulations terminées.


## Données de contact

### Taux de demande d'assistance

Le taux de demande d'assistance permet d'évaluer la clarté de l'interface et la fréquence de défauts techniques. Il s'agit du ratio de contacts email au support par rapport au nombre de visiteurs uniques.

Cette métrique permet de déterminer si un passage à l'échelle supérieure est envisageable, en répondant à la question suivante : si 1 000 utilisateurs génèrent 2 emails par jour, sommes-nous équipés faire face à 20 emails par jour en passant à 10 000 utilisateurs ? Il s'agit de l'un des aspects du « [lancement facteur 10](https://leanstack.com/the-10x-product-launch/) ».


## Étude d'impact

Nous menons également une [étude précise](https://mes-droits.fr) de l'impact de Mes Aides sur le non-recours, sous l'égide du Poverty Action Lab, un laboratoire de recherche indépendant, et en partenariat avec Pôle Emploi et la <abbr title="Direction Générale de la Cohésion Sociale">DGCS</abbr>. Cette étude sera basée sur une cohorte de plusieurs dizaines de milliers de demandeurs d'emploi identifiés individuellement par Pôle Emploi. Un email les informant de leur participation à une étude et leur présentant Mes Aides leur sera transmis. S'ils acceptent la participation et suivent le lien, leur parcours sur le site sera suivi individuellement, dans une base de données séparée des autres bases présentées plus haut (vous pouvez d'ailleurs auditer ce [code de suivi](https://github.com/sgmap/mes-aides-ui/pull/288)). Cette base est opérée par le Poverty Action Lab, n'est accessible qu'à ses agents, et sera détruite après 36 mois.
Une demande sera ensuite faite, après 6 mois, au Registre National des Prestations Sociales, pour chacune des personnes ayant participé à l'étude, afin de déterminer si les population ayant utilisé Mes Aides ont statistiquement obtenu plus de prestations sociales que celles ne l'ayant pas fait.
