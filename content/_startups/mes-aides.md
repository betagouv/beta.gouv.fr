---
title: Mes Aides
mission: Évaluer ses droits à 28 aides sociales. En moins de 7 minutes.
owner: DINSIC
incubator: dinsic
status: death
start: 2014-05-01
end: 2020-03-03
link: https://mes-aides.gouv.fr
repository: https://github.com/betagouv/mes-aides-ui
stats: true
contact: contact@mes-aides.gouv.fr
---

**Cette Startup d'État a été abandonnée. Pour aller directement au post-mortem, c'est [ici](#pourquoi-cette-startup-détat-est-elle-considérée-comme-abandonnée).**

Simulez vos droits à plus d’une vingtaine de prestations sociales en quelques minutes. Mes Aides compare votre situation personnelle aux critères des [principales aides nationales](https://github.com/betagouv/mes-aides-ui/wiki#les-aides-calculées), comme le RSA, la CMU-C ou les allocations familiales, ainsi que de certaines aides locales.

Grâce aux informations que vous nous transmettez, nous estimons à quelles aides vous avez droit ainsi que leurs montants et conditions d'attribution. Vous pouvez ensuite engager les démarches auprès des organismes ciblés.

Un de nos buts est de toujours augmenter le nombre d’aides simulées en une seule fois. En tant que collectivité proposant une prestation sociale, n'hésitez pas à [nous contacter](mailto:contribuer@mes-aides.gouv.fr?Ajouter+une+aide+via+beta.gouv.fr).

Mes Aides se base sur [OpenFisca](https://fr.openfisca.org/), un moteur de calcul libre et ouvert utilisé par des chercheurs en économie et d’autres services publics.


## Pourquoi cette Startup d'État est-elle considérée comme abandonnée&nbsp;?

Un objectif donné en 2019 a été « d'absorber » le simulateur [mes-aides.gouv.fr](https://mes-aides.gouv.fr/) dans le portail national des droits sociaux (PNDS / [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr/)). 

Le critère qui a été choisi pour rediriger les usagers de Mes Aides est l'ajout des aides locales dans le portail national. Cet ajout a été fait le 14 janvier 2020. Nous avons commencé à rediriger le trafic de Mes Aides vers [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr/) le XX février 2020.


Le regroupement des deux outils aurait pu apparaître comme une consolidation de la Startup d'État Mes Aides mais voici quelques éléments qui nous amènent à plutôt considérer cette Startup d'État comme abandonnée.


### Vers quelle organisation&nbsp;?

Le simulateur Mes Aides est réalisé par une équipe autonome de 2 personnes en moyenne.

Le PNDS est piloté par la Direction de la Sécurité Sociale, en accompagnement à la maîtrise d'ouvrage (AMOA) à la Caisse Centrale de la Mutualité Sociale Agricole qui délègue à son Groupement d'Întérêt Économique Agora qui sous-traite à Sopra-Steria.

Il ne s'agit pas de remettre en question les qualités et les compétences des personnes mais les structures des équipes mise en place. En effet, cette structure peut libérer les énergies ou bien contraindre les individus dont les initiatives personnelles pourraient bénéficier aux usagers du service. Un service public numérique de qualité qui doit s'adapter très rapidement aux besoins et demandes des usagers à besoin d'une équipe dont les membres partagent l'envie vicérale de résoudre le problème de politique publique sous-jacent.


D'un point de vue plus opérationnel, cela pose des questions sur&nbsp;:
- les délais de mise en ligne d'une correction textuelle ou encore
- le délai d'intégration d'une nouvelle aide ou d'une amélioration du moteur de calculs.

Nous avons proposé de constituer une équipe plus proche de l'[incubateur des ministères sociaux](https://incubateur.social.gouv.fr/) mais cela n'a pas eu de suite positive.


### Vers quel impact&nbsp;?

Dans un article précédent, nous avons résumé l'[impact du simulateur Mes Aides](https://blog.beta.gouv.fr/general/2019/11/18/mes-aides-metriques/) et les statistiques sont publiques et mises à jour en temps réel sur [mes-aides.gouv.fr/stats](https://mes-aides.gouv.fr/stats).

En ce qui concerne le portail national, aucune statistique n'est publique, des campagnes de communication ont été faites (via les opérateurs et en dernière page de la déclaration d'impôts) mais, selon les informations qui ont été partagées avec nous, l'impact semble avoir été limité sur le premier indicateur d'impact qu'est la fréquentation du site.

Au delà de la fréquentation, les statistiques de performance du service ne sont pas connues :
- Combien de personnes qui commencent leur simulation vont jusqu'au bout&nbsp;?
- Combien de personnes qui arrivent au bout se lancent dans les démarches&nbsp;?


### Vers quelle souveraineté&nbsp;?

Le simulateur Mes Aides est en [open source](https://github.com/betagouv/mes-aides-ui/) c'est à dire qu'il est accessible à tous et qu'il peut être réutilisé. Les modifications apportées doivent être publiées conformément à [la licence AGPL-3.0](https://choosealicense.com/licenses/agpl-3.0/).

Le code source du portail national est quant à lui fermée. Seulement disponible à la Mutualité Sociale Agricole et uniquement dans ses systèmes d'information. À l'annonce du rapprochement entre les deux simulateurs nous avons demandé l'accès au code source pour permettre une collaboration sur le code lui-même sans le publier. Aucune réponse n'a été apportée.


### Vers quel coût&nbsp;?

Le coût total du simulateur Mes Aides sur ses 5 années et demi d'existence représenté de 1,25 millions d'euros. La détail du budget est accessible à la [page suivante](https://docs.google.com/spreadsheets/d/1QlbBGNerYT1GuVnXRp8vJoQnz-U6e0qqQ636oHNN70g/edit#gid=8773656).

Selon nos informations, le budget **annuel** du portail national représente 2 à 3 millions d'euros. Le périmètre est différent mais l'écart reste significaf au vu des similitudes entre les deux propositions de valeur.

Il nous paraît possible de proposer un service public numérique de qualité de façon frugale et pérenne.


### Dépassé par le privé&nbsp;?

De nombreux acteurs du privé se positionnent sur l'intermédiation aux prestations sociales et sur la simplification (par l'extérieur) de la relation entre le public et l'administration.


En résumé, ces différents remarques peuvent être considérées comme des pistes d'amélioration continue que les équipes du portail national peuvent suivre ou intégrer à leur feuille de route si elles le souhaitent. Dans l'état actuel de la situation, il nous paraît raisonnable de considérer la Startup d'État Mes Aides comme abandonnée.
