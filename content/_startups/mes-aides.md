---
title: Mes Aides
mission: Évaluer ses droits à 28 aides sociales. En moins de 7 minutes.
owner: DINUM
incubator: dinum
link: https://mes-aides.gouv.fr
repository: https://github.com/betagouv/mes-aides-ui
contact: contact@mes-aides.gouv.fr
events:
  - name: product_launch
    date: 2014-10-01
  - name: national_impact
    date: 2019-01-01
  - name: death
    date: 2020-03-03
phases:
  - name: construction
    start: 2014-05-01
    end: 2017-03-10
  - name: success
    start: 2017-03-10
    end: 2020-03-03
  - name: alumni
    start: 2020-03-03
---

**[L'approche Startup d'État](https://github.com/betagouv/beta.gouv.fr/wiki/Comment-pr%C3%A9senter-beta.gouv.fr#approche) a été abandonnée par ce service publique numérique. Pour aller directement au post-mortem, c'est [ici](#quelques-éléments-de-contexte).**

Simulez vos droits à plus d’une trentaine de prestations sociales en quelques minutes. Mes Aides compare votre situation personnelle aux critères des [principales aides nationales](https://github.com/betagouv/mes-aides-ui/wiki#les-aides-calculées), comme le RSA, la CMU-C ou les allocations familiales, ainsi que de certaines aides locales.

Grâce aux informations que vous nous transmettez, nous estimons à quelles aides vous avez droit ainsi que leurs montants et conditions d'attribution. Vous pouvez ensuite engager les démarches auprès des organismes ciblés.

Un de nos buts est de toujours augmenter le nombre d’aides simulées en une seule fois. En tant que collectivité proposant une prestation sociale, n'hésitez pas à [nous contacter](mailto:contribuer@mes-aides.gouv.fr?Ajouter+une+aide+via+beta.gouv.fr).

Mes Aides se base sur [OpenFisca](https://fr.openfisca.org/), un moteur de calcul libre et ouvert utilisé par des chercheurs en économie et d’autres services publics.


## Quelques éléments de contexte

- 03/2014 Premiers développements sur mes-aides.gouv.fr
  - Des comités de pilotage sont organisés pour échanger avec les acteurs de la sphère sociale
- 10/2014 Ouverture et communication
  - Lors des comités de pilotage, les organismes tiennent à ralentir le déploiement tant que les calculs ne sont pas totalement fiables. Les tentatives d'échanges pour la fiabilisation n'abouttissant pas, les personnes voient de moins en moins d'intérêt à participer aux comités de pilotage. Ces comités ne rassemblent plus et ne sont pas renouvelés.
- 19/10/2015 Annonce de François Hollande d'un « portail des droits » [source](https://www.capital.fr/economie-politique/hollande-souhaite-une-position-commune-sur-le-compte-d-activite-1079072)
  - Il n'y a pas eu de demande pour la passation de la partie visible du simulateur (du _front_).
  - En revanche, seul OpenFisa (le moteur de calculs _sous_ mes-aides.gouv.fr) permet de créer un simulateur multi-prestations. Il est donc utilisé pour le portail national des droits sociaux.
- 07/03/2017 Lancement officiel de mes-aides.gouv.fr [source](https://www.banquedesterritoires.fr/un-simulateur-pour-evaluer-ses-droits-24-aides-sociales-en-moins-de-7-minutes)
- 20/03/2017 Lancement officiel de mesdroissociaux.gouv.fr [source](https://www.banquedesterritoires.fr/le-portail-numerique-des-droits-sociaux-commence-voir-le-jour)
- 08/2017 Déplacement à Montauban de l'équipe mes-aides.gouv.fr pour échanger avec les équipes du Groupement d'Intérêt Économique (GIE) Agora et de Sopra-Steria
  - L'objectif est de clarifier des pratiques de développement et de contribution à OpenFisca via [GitHub](https://github.com/openfisca/openfisca-france/)
- 03/2019 Ajout du simulateur non connecté dans mesdroissociaux.gouv.fr
- 07/2019 Demande de rapprochement entre le mesdroissociaux.gouv.fr et mes-aides.gouv.fr
- 13/11/2019 Arbitrage en faveur de l'absorption de mes-aides.gouv.fr
  - La condition pour cette absorption est l'intégration des aides locales de mes-aides.gouv.fr dans mesdroissociaux.gouv.fr
- 14/01/2020 Ajout des autres aides de mes-aides.gouv.fr dans mesdroissociaux.gouv.fr
- 01/03/2020 Annonce de la fermeture de mes-aides.gouv.fr sur la page d'accueil
- 01/03/2020 Fermeture définitive de mes-aides.gouv.fr
  - Les usagers sont directement redirigés vers mesdroissociaux.gouv.fr


## Pourquoi parler d'abandon&nbsp;?

La direction de la sécurité sociale et la direction du numérique se sont données comme objectif mi-2019 d'absorber le simulateur [mes-aides.gouv.fr](https://mes-aides.gouv.fr/) dans le portail national des droits sociaux (PNDS / [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr/)).

La condition pour rediriger les usagers de Mes Aides est l'ajout des aides locales dans mesdroitssociaux.gouv.fr. Cet ajout a été fait le 14 janvier 2020. Nous avons commencé à rediriger le trafic de Mes Aides vers [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr/) le 3 mars 2020.

Nous aurions pu considérer le regroupement des deux outils comme un succès, mais nous avons choisi de placer cette fiche parmi les services abandonnés sur le site beta.gouv.fr. Voici quelques éléments qui expliquent ce choix.


### Vers quelle organisation&nbsp;?

Le simulateur Mes Aides est réalisé par une équipe autonome de 2 personnes en moyenne.

Le PNDS est piloté par la Direction de la Sécurité Sociale, en accompagnement à la maîtrise d'ouvrage (AMOA) à la Caisse Centrale de la Mutualité Sociale Agricole qui délègue au GIE Agora qui sous-traite à la société privée Sopra-Steria.

Il aurait pu être fait le choix de poursuivre une démarche centrée sur les utilisateurs animée par une petite équipe intégrée et autonome, capable de s'adapter très rapidement aux besoins et demandes des utilisatrices et utilisateurs, d'assurer des corrections textuelles rapides et d'intégrer des nouvelles aides ou des améliorations de manière réactive.

L'équipe de l'incubateur de services numérique de la DINUM a proposé de constituer une équipe plus proche de l'[incubateur des ministères sociaux](https://incubateur.social.gouv.fr/) mais cela n'a pas eu de suite positive.


### Vers quel impact&nbsp;?

Dans un article précédent, nous avons résumé l'[impact du simulateur Mes Aides](https://blog.beta.gouv.fr/general/2019/11/18/mes-aides-metriques/) et les statistiques sont publiques et mises à jour en temps réel sur [mes-aides.gouv.fr/stats](https://mes-aides.gouv.fr/stats).

En ce qui concerne le portail national, aucune statistique n'est publique.

Au delà de la fréquentation, les statistiques de performance du service ne sont pas connues :
- Combien de personnes qui commencent leur simulation vont jusqu'au bout&nbsp;?
- Combien de personnes qui arrivent au bout se lancent dans les démarches&nbsp;?


### Vers quelle souveraineté&nbsp;?

Le simulateur Mes Aides est en [open source](https://github.com/betagouv/mes-aides-ui/) c'est à dire qu'il est accessible à tous et qu'il peut être réutilisé. Les modifications apportées doivent être publiées conformément à [la licence AGPL-3.0](https://choosealicense.com/licenses/agpl-3.0/).

Le code source de mesdroitssociaux.gouv.fr est quant à lui fermé, sans projet d'ouverture à court ou moyen-terme à notre connaissance.


### Vers quel coût&nbsp;?

Le coût total du simulateur Mes Aides sur ses 5 années et demi d'existence représenté de 1,25 millions d'euros. La détail du budget est accessible à la [page suivante](https://docs.google.com/spreadsheets/d/1QlbBGNerYT1GuVnXRp8vJoQnz-U6e0qqQ636oHNN70g/edit#gid=8773656).

Le budget annuel du portail national représente environ 2 à 3 millions d'euros. Le périmètre est différent mais l'écart reste significatif au vu des similitudes entre les deux propositions de valeur.


### Dépassé par le privé&nbsp;?

De nombreux acteurs du privé se positionnent sur l'intermédiation aux prestations sociales et sur la simplification (par l'extérieur) de la relation entre le public et l'administration.


Pour toutes ces raisons (au moment de la rédaction de ce texte [mars 2020]), nous faisons le constat de l'abandon de l'approche Startup d'État.
