---
title: Analyse des usages de Mes Aides
startup: mes-aides
---

Mes Aides est en production depuis le mois d'octobre 2014. Il s'agit du plus ancien produit grand public de l'Incubateur. Nous avons donc pu accumuler des données statistiques intéressantes, à la fois sur l'usage qui est fait de ce simulateur, et des simulations qui y sont faites.


## Données d'usage

La quasi-totalité des produits de l'Incubateur utilisent [Piwik](https://piwik.org), un outil libre de suivi de fréquentation, pour déterminer notamment le nombre de visites et les contenus les plus populaires. [Ces données](http://stats.data.gouv.fr/index.php?module=MultiSites&action=index&idSite=1&period=range&date=previous30#?module=MultiSites&action=index&idSite=1&period=range&date=previous30&idDashboard=1) sont d'ailleurs librement accessibles.

Dans l'équipe Mes Aides, nous utilisons notamment cet outil pour suivre le taux d'activation (ratio nombre de simulations démarrées / nombre de visites sur la page d'accueil), le taux de conversion (ratio nombre de simulations terminées / nombre de simulations démarrées), et les caractéristiques des durées nécessaires pour effectuer une simulation (médiane et 95ème percentile).


## Données de simulation

Au-delà des données de fréquentation analysées par Piwik, les situations décrites par les usagers sont également enregistrées lors du calcul des prestations éligibles. Rappelons au passage que ces situations ne contiennent aucune donnée personnellement identifiable.

Nous avons travaillé avec Florian Gauthier, analyste de l'[Administrateur Général des Données](http://agd.data.gouv.fr) (une autre mission du SGMAP), pour décrire et analyser les situations simulées sur Mes Aides. L'objectif était triple : d'une part, déterminer si les

- Déterminer la diffusion territoriale de Mes Aides.
- Déterminer l'usage réel de certains choix de conception que nous avions basés sur des considérations éthiques plutôt que sur des données (catégorie « sans domicile stable »).

L'intégralité des manipulations effectuées est disponible dans un [notebook iPython](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/stats_descr.ipynb).

### Nettoyage des données

On filtre :

- Les individus de plus de 120 ans, car la probabilité qu'il s'agisse de tests est très élevée.
- Les individus nés le 12/12/2012, car nous utilisons systématiquement cette valeur pour effectuer des tests.

On vérifie la cohérence des données grâce à la répartition temporelle. On suppose que, même si tous les visiteurs arrivant sur la page d'accueil ne vont pas nécessairement faire une simulation, la fréquentation devrait être similaire entre Piwik et les simulations.

![](/img/posts/2016-06-09-mes-aides-analytics/frequentation-backend.png)
![](/img/posts/2016-06-09-mes-aides-analytics/frequentation-piwik.png)

Les données sont bien cohérentes temporellement.

On vérifie ensuite la cohérence des situations avec la répartition socio-démographique française :

![](/img/posts/2016-06-09-mes-aides-analytics/repartition-age-situationpro.png)

Les étudiants sont majoritairement jeunes, les retraités majoritairement vieux, l'invalidité augmente avec l'âge, tout semble correct.

### Le public de Mes Aides

#### Âge

![](/img/posts/2016-06-09-mes-aides-analytics/repartition-age.png)

On observe deux pics : l'un à la naissance, l'autre autour de la vingtaine.
On peut supposer que le pic à la naissance est lié à l'âge des enfants déclarés par les demandeurs, et le pic en début de vingtaine d'années est attribuable aux demandeurs eux-mêmes. Cet âge pour les demandeurs est d'ailleurs cohérent avec l'âge de leurs enfants.

On teste cette hypothèse en ne représentant la répartition de l'âge que pour les demandeurs.

![](/img/posts/2016-06-09-mes-aides-analytics/repartition-age-demandeurs.png)

#### Lieu de vie

Sans grande surprise, les communes où Mes Aides est le plus utilisé sont les communes les plus peuplées.

Contrairement à des préjugés que l'on pourrait avoir, on n'observe [pas de corrélation](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/plot_CP.ipynb) significative entre un indicateur habituel de pauvreté (médiane du revenu disponible par unité de consommation) et l'usage de Mes Aides.

Néanmoins, on peut tout de même observer dans les arrondissements de Paris une répartition d'usage inversement proportionnelle à la richesse de la population. Il est donc probable que le choix d'un autre indicateur de pauvreté puisse montrer une corrélation.

#### Ressources

On voit que la grande majorité des demandeurs perçoit des salaires, ou un revenu de remplacement du salaire : chômage ou retraite. Ensuite seulement apparaissent les allocations (logement, familiales…), puis d'[autres ressources](/img/posts/2016-06-09-mes-aides-analytics/ressources-sans-top-2.png).

![](/img/posts/2016-06-09-mes-aides-analytics/top-5-ressources.png)

**Histogramme des sommes des revenus**.

#### Logement

![](/img/posts/2016-06-09-mes-aides-analytics/repartition-logement.png)

**À comparer à la répartition en France.**

### Limites de l'étude

Il est important de garder à l'esprit que les données enregistrées par le simulateur sont purement déclaratives, et que les usagers sont encouragés à s'en emparer comme d'un outil de prospective, en simulant des situations futures probables. De même, de nombreux professionnels confrontés pour la première fois à cet outil font des simulations fictives. Aucune situation individuelle ne peut donc être considérée comme reflétant une situation réelle. En revanche, nous considérons que les tendances qui se dégagent de l'analyse statistique sont représentatives des usages et des usagers des Mes Aides.

### Étude d'impact

Nous menons également une [étude précise](https://mes-droits.fr) de l'impact de Mes Aides sur le non-recours, sous l'égide du Poverty Action Lab, un laboratoire de recherche indépendant, et en partenariat avec Pôle Emploi et la <abbr title="Direction Générale de la Cohésion Sociale">DGCS</abbr>. Cette étude sera basée sur une cohorte de plusieurs dizaines de milliers de demandeurs d'emploi identifiés individuellement par Pôle Emploi. Un email les informant de leur participation à une étude et leur présentant Mes Aides leur sera transmis. S'ils acceptent la participation et suivent le lien, leur parcours sur le site sera suivi individuellement, dans une base de données séparée des autres bases présentées plus haut (vous pouvez d'ailleurs auditer ce [code de suivi](https://github.com/sgmap/mes-aides-ui/pull/288)). Cette base est opérée par le Poverty Action Lab, n'est accessible qu'à ses agents, et sera détruite après 36 mois.
Une demande sera ensuite faite, après 6 mois, au Registre National des Prestations Sociales, pour chacune des personnes ayant participé à l'étude, afin de déterminer si les population ayant utilisé Mes Aides ont statistiquement obtenu plus de prestations sociales que celles ne l'ayant pas fait.
