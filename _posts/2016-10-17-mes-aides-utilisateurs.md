---
title: Qui utilise Mes Aides ?
startup: mes-aides
---

Mes Aides est le plus ancien produit grand public de l'Incubateur, en production depuis le mois d'octobre 2014. Nous avons donc pu accumuler suffisamment de données statistiques sur l'usage de ce simulateur pour mener des analyses approfondies. Nous avons travaillé avec Florian Gauthier, _data scientist_ de l'[Administrateur Général des Données](https://agd.data.gouv.fr) (une autre mission du <abbr title="Secrétariat Général pour la Modernisation de l'Action Publique">SGMAP</abbr>), pour mieux comprendre les situations les plus simulées sur Mes Aides.


## Objectifs

- Comprendre la diffusion territoriale de Mes Aides.
- Déterminer l'usage réel de certains choix de conception pour lesquels nous ne disposions pas de données a priori (catégorie « sans domicile stable », par exemple).
- Orienter des décisions de pré-remplissage pour accélérer encore la saisie pour les cas les plus habituels.

> Pour rappel, ces situations ne contiennent aucune information nominative.
> L'intégralité des manipulations effectuées est disponible dans un [notebook iPython](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/stats_descr.ipynb).


## Résultats

### Répartition géographique

Sans grande surprise, les communes où Mes Aides est le plus utilisé sont les communes les plus peuplées (en nuances de violet sur la carte ci-dessous, plus foncé signifie plus d'usage).

![La densité de population détermine la fréquence d'usage.](/img/posts/2016-06-09-mes-aides-analytics/repartition-usage-villes.jpg)

Contrairement à ce qui est souvent imaginé, on n'observe [pas de corrélation](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/plot_CP.ipynb) significative entre pauvreté et usage de Mes Aides, du moins valable pour un indicateur habituel de pauvreté (médiane du revenu disponible par unité de consommation).

Une exception à cette règle : la région Île-de-France.

![La richesse semble influer sur l'usage en Île-de-France, à l'exception de Versailles.](/img/posts/2016-06-09-mes-aides-analytics/repartition-usage-idf.jpg)

Nous faisons l'hypothèse que cette répartition spécifique de l'usage est liée à nos partenariats avec le <abbr title="Centre d'Action Sociale de la Ville de Paris">CASVP</abbr>, le département du 93, et à l'usage volontariste que fait le <abbr title="Centre Communal d'Action Sociale">CCAS</abbr> de Versailles du simulateur.

L'usage du simulateur et ainsi plus certainement un reflet de l'activité des médiateurs de l'action sociale dans les zones qui s'en sont largement emparé.


### Types de logement

![Types de logements simulés : 55% de locataires, 30% de propriétaires, 12% de personnes hébergées, 3% sans domicile.](/img/posts/2016-06-09-mes-aides-analytics/repartition-logement.png)

En France, l'INSEE indique une [répartition](http://www.insee.fr/fr/themes/document.asp?ref_id=T13F072#tableaux) en 2012 de 58,2% de propriétaires, 39,1% de locataires, et 2,7% d'autres statuts. Cette répartition concerne le parc des _résidences principales_, et ne comprend donc pas les personnes sans domicile stable.

Nous ordonnons bien dans l'application les options de type de logement pour refléter cette répartition.

![Sélection du logement : locataire, propriétaire, hébergé (incluant gratuit), sans domicile.](/img/posts/2016-06-09-mes-aides-analytics/selection-type-logement.png)


### Ressources

La grande majorité des demandeurs perçoit des salaires, ou un revenu de remplacement du salaire : chômage ou retraite. Ensuite seulement apparaissent les allocations (logement, familiales…), puis d'[autres ressources](/img/posts/2016-06-09-mes-aides-analytics/ressources-sans-top-2.png).

![Les cinq ressources les plus souvent déclarées : salaire, chômage, retraite, allocation logement, allocations familiales.](/img/posts/2016-06-09-mes-aides-analytics/top-5-ressources.png)

L'application propose actuellement de sélectionner les ressources d'après leur catégorie. Ces données nous orientent à penser une prochaine évolution avec une suggestion « hors catégorie » des ressources les plus fréquemment renseignées.

Les revenus totaux sont en grande majorité nuls dans les situations simulées. On observe un second pic aux alentours du SMIC annuel, puis une décroissance exponentielle vers les hauts revenus.

![Répartition des sommes des revenus](/img/posts/2016-06-09-mes-aides-analytics/ressources.png)

Bien évidemment, plus une personne est en situation de précarité, et plus elle a intérêt à faire un point sur les aides sociales dont elle peut bénéficier.

Cependant, toutes les aides ne sont pas conditionnées par les ressources. Les allocations familiales, par exemple, sont modulées depuis 2016, mais non conditionnées. Une des origines du non-recours est justement de croire à tort qu'on n'est pas concerné par la solidarité nationale.

**Alors, vous aussi, [calculez vos droits](https://mes-aides.gouv.fr) dès maintenant !**


## Notes méthodologiques

Nous avons retiré de l'échantillon :

- Les individus de plus de 120 ans, car la probabilité qu'il s'agisse de tests est très élevée.
- Les individus ayant des caractéristiques utilisées systématiquement comme valeurs de test.


### Tests de cohérence

Nous avons également vérifié que les données enregistrées semblaient cohérentes avec les usages observés.

#### Répartition temporelle

On suppose que, même si tous les visiteurs arrivant sur la page d'accueil ne vont pas nécessairement faire une simulation, la fréquentation devrait être similaire entre les affichages de pages mesurés avec Piwik et les simulations enregistrées.

![Répartition temporelle des simulations](/img/posts/2016-06-09-mes-aides-analytics/frequentation-backend.png)
![Répartition temporelle des visites](/img/posts/2016-06-09-mes-aides-analytics/frequentation-piwik.png)

Les données sont bien cohérentes temporellement.


### Limites de l'étude

Il est important de garder à l'esprit que les données enregistrées par le simulateur sont purement déclaratives, et que les usagers sont encouragés à s'en emparer comme d'un outil de prospective, en simulant des situations futures probables. De même, de nombreux professionnels confrontés pour la première fois à cet outil font des simulations fictives.

Aucune situation individuelle ne peut donc être considérée comme reflétant une situation réelle. En revanche, nous considérons que les tendances qui se dégagent de l'analyse statistique sont représentatives des usages et des usagers des Mes Aides.
