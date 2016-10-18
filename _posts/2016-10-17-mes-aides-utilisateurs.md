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

![La densité de population détermine la fréquence d'usage.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/repartition-usage-villes.jpg)

Contrairement à ce qui est souvent imaginé, on n'observe [pas de corrélation](https://github.com/sgmap/mes-aides-analytics/blob/dev/python/plot_CP.ipynb) significative entre pauvreté et usage de Mes Aides, du moins pour un indicateur habituel de pauvreté (médiane du revenu disponible par unité de consommation).

Une exception à ce constat : la région Île-de-France.

![La richesse semble influer sur l'usage en Île-de-France, à l'exception de Versailles.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/repartition-usage-idf.jpg)

Nous faisons l'hypothèse que cette répartition spécifique de l'usage est liée à nos partenariats avec notamment le <abbr title="Centre d'Action Sociale de la Ville de Paris">CASVP</abbr> et le département du 93. Cela est également cohérent avec l'usage volontariste que fait le <abbr title="Centre Communal d'Action Sociale">CCAS</abbr> de Versailles du simulateur, alors même que cette zone n'est pas connue pour avoir une population précaire comparable aux autres communes dont la fréquence d'usage est comparable.

L'usage du simulateur reflète ainsi aujourd'hui plus certainement l'activité des médiateurs de l'action sociale que directement des besoins de la population générale. Nous sommes heureux et fiers de voir que cet outil remplit sa promesse de servir aussi bien le grand public que les professionnel·le·s.


### Types de logement

![Types de logements simulés : 55% de locataires, 30% de propriétaires, 12% de personnes hébergées, 3% sans domicile.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/repartition-logement.png)

On peut comparer les types de logements simulés dans Mes Aides à la [répartition](http://www.insee.fr/fr/themes/document.asp?ref_id=T13F072#tableaux) de l'INSEE en 2012. Cette répartition concerne le parc des _résidences principales_, et ne comprend donc pas les personnes sans domicile stable.

On voit bien la différence de répartition entre locataires et propriétaires. Nous ordonnons dans l'application les options de type de logement pour refléter la répartition de nos utilisateurs plutôt que celle de la population générale, afin d'accélérer leur navigation.

![Sélection du logement : locataire, propriétaire, hébergé (incluant gratuit), sans domicile.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/selection-type-logement.png)


### Ressources

La grande majorité des demandeurs perçoit des salaires, ou un revenu de remplacement du salaire : chômage ou retraite. Ensuite seulement apparaissent les allocations (logement, familiales…), puis d'[autres ressources]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/ressources-sans-top-2.png).

![Les cinq ressources les plus souvent déclarées : salaire, chômage, retraite, allocation logement, allocations familiales.]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/top-5-ressources.png)

L'application propose actuellement de sélectionner les ressources d'après leur catégorie. Ces données nous orientent à penser une prochaine évolution avec une suggestion « hors catégorie » des ressources les plus fréquemment renseignées.

Les revenus totaux sont en grande majorité nuls dans les situations simulées. On observe un second pic aux alentours du SMIC annuel, puis une décroissance exponentielle vers les hauts revenus.

![Répartition des sommes des revenus]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/ressources.png)

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

![Répartition temporelle des simulations]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/frequentation-backend.png)
![Répartition temporelle des visites]({{ site.baseurl }}img/posts/2016-10-17-mes-aides-utilisateurs/frequentation-piwik.png)

Les données sont bien cohérentes temporellement.


### Limites de l'étude

Il est important de garder à l'esprit que les données enregistrées par le simulateur sont purement déclaratives, et que les usagers sont encouragés à s'en emparer comme d'un outil de prospective, en simulant des situations futures probables. De même, de nombreux professionnels confrontés pour la première fois à cet outil font des simulations fictives.

Aucune situation individuelle ne peut donc être considérée comme reflétant une situation réelle. En revanche, nous considérons que les tendances qui se dégagent de l'analyse statistique sont représentatives des usages et des usagers des Mes Aides.


### Pour aller plus loin

Une [étude précise](https://mes-droits.fr) de l'impact de Mes Aides sur le non-recours est en cours, sous l'égide du Poverty Action Lab, un laboratoire de recherche indépendant, en partenariat avec Pôle Emploi et la <abbr title="Direction Générale de la Cohésion Sociale">DGCS</abbr>.

Cette étude sera basée sur une cohorte de plusieurs dizaines de milliers de demandeurs d'emploi identifiés individuellement par Pôle Emploi. Un email les informant de leur participation à une étude et leur présentant Mes Aides leur sera transmis. S'ils acceptent la participation et suivent le lien, leur parcours sur le site sera suivi individuellement, dans une base de données séparée des autres bases présentées plus haut.

> Cette base est opérée par le Poverty Action Lab, n'est accessible qu'à ses agents, et sera détruite après 36 mois.
> Vous pouvez auditer le [code de suivi](https://github.com/sgmap/mes-aides-ui/pull/288) qui transmet les données des situations à cette base.

Une demande sera ensuite faite par Pôle Emploi au Registre National des Prestations Sociales, pour chacune des personnes ayant participé à l'étude, afin de déterminer si les populations ayant utilisé Mes Aides ont statistiquement obtenu plus de prestations sociales que celles ne l'ayant pas fait.

Nous nous appuierons alors sur ces résultats pour [extrapoler une mesure d'impact globale](https://github.com/sgmap/beta.gouv.fr/wiki/Piloter-par-l'impact).
