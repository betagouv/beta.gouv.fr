---
title: Qui utilise Mes Aides ?
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Nous avons travaillé avec Florian Gauthier, _data scientist_ de l'[Administrateur Général des Données](https://agd.data.gouv.fr) (une autre mission du <abbr title="Secrétariat Général pour la Modernisation de l'Action Publique">SGMAP</abbr>), pour mieux comprendre les situations les plus simulées sur Mes Aides.


## Données de simulation

L'objectif était triple :

- Comprendre la diffusion territoriale de Mes Aides.
- Déterminer l'usage réel de certains choix de conception pour lesquels nous ne disposions pas de données a priori (catégorie « sans domicile stable », par exemple).

> Pour rappel, ces situations ne contiennent aucune donnée personnellement identifiable.
> L'intégralité des manipulations effectuées est disponible dans un [notebook iPython](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/stats_descr.ipynb).

### Nettoyage des données

On retire de l'échantillon :

- Les individus de plus de 120 ans, car la probabilité qu'il s'agisse de tests est très élevée.
- Les individus nés le 12/12/2012, car nous utilisons systématiquement cette valeur pour effectuer des tests.

On vérifie la cohérence des données grâce à la répartition temporelle. On suppose que, même si tous les visiteurs arrivant sur la page d'accueil ne vont pas nécessairement faire une simulation, la fréquentation devrait être similaire entre Piwik et les simulations.

![Répartition temporelle des simulations](/img/posts/2016-06-09-mes-aides-analytics/frequentation-backend.png)
![Répartition temporelle des visites](/img/posts/2016-06-09-mes-aides-analytics/frequentation-piwik.png)

Les données sont bien cohérentes temporellement.

On vérifie ensuite la cohérence des situations avec la répartition socio-démographique française :

![Répartition des situations professionnelle par âge](/img/posts/2016-06-09-mes-aides-analytics/repartition-age-situationpro.png)

Les étudiants sont majoritairement jeunes, les retraités majoritairement vieux, l'invalidité augmente avec l'âge, les données semblent cohérentes.

### Le public de Mes Aides

#### Âge

![Répartition de l'âge des individus](/img/posts/2016-06-09-mes-aides-analytics/repartition-age.png)

On observe deux pics : l'un à la naissance, l'autre autour de la vingtaine.
On peut supposer que le pic à la naissance est lié à l'âge des enfants déclarés par les demandeurs, et le pic en début de vingtaine d'années est attribuable aux demandeurs eux-mêmes. Cet âge pour les demandeurs est d'ailleurs cohérent avec l'âge de leurs enfants.

On teste cette hypothèse en ne représentant la répartition de l'âge que pour les demandeurs.

![Répartition de l'âge des demandeurs](/img/posts/2016-06-09-mes-aides-analytics/repartition-age-demandeurs.png)

On obtient bien le résultat attendu, et on apprend donc que Mes Aides est largement utilisé par les personnes entre 20 et 40 ans, avec une baisse d'usage avec l'âge.

#### Lieu de vie

Sans grande surprise, les communes où Mes Aides est le plus utilisé sont les communes les plus peuplées.

Contrairement à des préjugés que l'on pourrait avoir, on n'observe [pas de corrélation](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/plot_CP.ipynb) significative entre un indicateur habituel de pauvreté (médiane du revenu disponible par unité de consommation) et l'usage de Mes Aides.

Néanmoins, on peut tout de même observer dans les arrondissements de Paris une répartition d'usage inversement proportionnelle à la richesse de la population. Il est donc probable que le choix d'un autre indicateur de pauvreté puisse montrer une corrélation.

#### Ressources

On voit que la grande majorité des demandeurs perçoit des salaires, ou un revenu de remplacement du salaire : chômage ou retraite. Ensuite seulement apparaissent les allocations (logement, familiales…), puis d'[autres ressources](/img/posts/2016-06-09-mes-aides-analytics/ressources-sans-top-2.png).

![Cinq ressources les plus souvent renseignées](/img/posts/2016-06-09-mes-aides-analytics/top-5-ressources.png)

En valeur, les revenus totaux des individus sont en grande majorité nuls. On observe un second pic aux alentours du SMIC annuel, puis une décroissance exponentielle vers les hauts revenus.

![Répartition des sommes des revenus](/img/posts/2016-06-09-mes-aides-analytics/ressources.png)

#### Logement

![Répartition des types de logements](/img/posts/2016-06-09-mes-aides-analytics/repartition-logement.png)

En France, l'INSEE indique une [répartition](http://www.insee.fr/fr/themes/document.asp?ref_id=T13F072#tableaux) en 2012 de 58,2% de propriétaires, 39,1% de locataires, et 2,7% d'autres statuts. Cette répartition concerne le parc des résidences principales, et n'inclut donc pas les personnes sans domicile stable.

### Limites de l'étude

Il est important de garder à l'esprit que les données enregistrées par le simulateur sont purement déclaratives, et que les usagers sont encouragés à s'en emparer comme d'un outil de prospective, en simulant des situations futures probables. De même, de nombreux professionnels confrontés pour la première fois à cet outil font des simulations fictives. Aucune situation individuelle ne peut donc être considérée comme reflétant une situation réelle. En revanche, nous considérons que les tendances qui se dégagent de l'analyse statistique sont représentatives des usages et des usagers des Mes Aides.

