---
title: Data.Subvention
mission: Rassembler les informations sur les associations et leurs subventions pour simplifier la vie des associations et des agents publics
sponsors:
  - /organisations/djepva
incubator: dinum
link: https://datasubvention.beta.gouv.fr
repository: https://github.com/betagouv/api-subventions-asso
contact: contact@datasubvention.beta.gouv.fr
usertypes:
  - association
  - etat
stats: true
stats_url: https://blog.datasubvention.beta.gouv.fr/statistiques/
dashlord_url: https://dashlord.incubateur.net/tag/data-subvention/
phases:
  - name: construction
    start: 2022-01-03
    end: 2023-07-15
---
## Contexte

En France, près d’1,5 million d’associations mobilisent 12,5 millions de bénévoles - dont 5 millions s’engagent chaque semaine - et font vivre la solidarité, le lien social, le développement et l’animation des territoires. En termes d’emploi, près de 160 000 associations salarient plus d’1,8 millions de personnes ce qui représente 9,3% des effectifs salariés de l’ensemble du secteur privé.

Convaincu de longue date de la contribution majeure des associations à la construction et au développement de la société française, l’État a engagé depuis plusieurs années un processus législatif et réglementaire visant à mieux reconnaître l’apport des associations à l’intérêt général et à sécuriser le fait associatif, notamment, en donnant un socle juridique à la subvention publique.

La subvention publique reconnaît le concours des associations bénéficiaires aux politiques publiques portées par l’État mais également leur capacité d’initiative et leur autonomie d’actions. Dans ce cadre, elle crée des engagements réciproques entre les pouvoirs publics et les associations. 

En 2020, l’État a attribué 7,3 milliards d’euros aux associations sous forme de subventions, représentant plus de 66 000 versements. Chaque année, de nombreuses associations sollicitent une subvention auprès des différents services de l’État qui doivent, au cours de l’instruction de ces demandes, en vérifier l’éligibilité et la conformité et sollicitent à cette fin différentes pièces justificatives aux associations.

De plus, face à l’importance du nombre du subventions versées chaque année et face à la volonté d’accroître le niveau de transparence concernant l’usage de l’argent public, il est essentiel aujourd’hui d’appliquer une politique d’ouverture des données, rendant disponibles et publiques, l’ensemble des subventions publiques versées aux associations.

## Problème

D’un côté, les associations, notamment les plus petites ou les moins professionnalisées, peinent à accéder aux subventions publiques car elles manquent de lisibilité et de visibilité sur leur typologie, leurs critères d’éligibilité et les démarches nécessaires pour effectuer une demande. Quand elles parviennent à identifier un type d’aides, elles se heurtent bien souvent à des dossiers de demande qui peuvent leur sembler complexes à renseigner, à la difficulté de réunir les pièces justificatives demandées et à la nécessité de démultiplier leurs démarches. Cela est notamment lié à l’absence d’uniformisation des modalités entre les différents financeurs.  Ces difficultés créent du non-recours par manque d’information ou par renoncement mais génèrent aussi un sentiment d’incompréhension et de distance vis-à-vis des institutions.

De l’autre, chaque service public financeur déploie du temps et de l’énergie à communiquer et informer sur ses dispositifs de subvention, à accompagner les associations demandeuses, à opérer des vérifications administratives et réglementaires et à relancer les porteurs de projets quand les dossiers sont incomplets ou non conformes, provoquant de nombreux allers-retours. Pour autant, aucun service n’a aucune vision globale et partagée de la situation d’une association.

Bien que la dématérialisation de certaines démarches ait permis de réelles avancées, la faiblesse de leur interconnexion, en termes de partage de données et d’informations, n’a pas permis de réduire leur cloisonnement et leur complexité et d’atteindre un réel « dites-le-nous une fois ».

Enfin, bien que les services publics soutiennent les associations au travers de subventions numéraires, les données relatives à ces attributions, leurs bénéficiaires et les projets soutenus ne sont pas toujours rendus publics ou accessibles au public. Or, les citoyens doivent pouvoir savoir ce que finance l’argent public et cette contribution au champ associatif devrait pouvoir être plus valorisée.

## Enseignements de la phase d'investigation

*Pour les agents publics (de l'Etat, opérateurs et collectivités):*

* quand je dois instruire une demande de subvention d’une association, je ne sais pas si celle-ci a déposé des demandes auprès d’autres services et leur décision;
* je dois parfois effectuer de nombreux aller-retour avec l’association pour avoir un dossier complet et/ou conforme;
* j’ai du mal à mesurer l’impact du financement attribué.

*Pour les associations:*

* je perds beaucoup de temps en répétition des démarches, en suivi et en adaptation aux différents formats et outils de dépôt des demandes de subvention;
* je dois parfois prendre le risque de présenter un projet et de le mettre en œuvre sans avoir de vision certaine sur les financements;
* j’ai du mal à me projeter et à stabiliser les activités de mon association dans le temps.

## **Solution en construction**

Pour répondre à ces enjeux, l'équipe travaille sur la mise en commun, l’échange de données et l’interopérabilité entre les différents outils et les API pour favoriser une vision plus transversale et enrichie des associations et réduire la répétition des informations et leur mise  jour.

Pour cela, l'équipe collecte les données disponibles dans les différents outils de dématérialisation et les APIs existants, qu’elle croise et rend consultables via un outil interministériel. 

Elle développe également une API pour exposer ces données, favoriser l’interopérabilité entre les outils, la réutilisation des données et ainsi réduire les répétitions et les problèmes d’actualisation de ces informations.

## Stratégie de déploiement

La startup recrute ses premiers utilisateurs parmi les agents de l'Etat qui recourent déjà à des outils de dématérialisation existants permettant la gestion des demandes de subvention, pour lesquels la solution vient en complément de ces outils.

Elle déploie aussi la solution dans cinq régions pilotes - l'Occitanie, les Pays de la Loire, la Nouvelle-Aquitaine, la Bretagne et les Hauts-de-France - au sein desquelles elle propose à tous les agents qui sont concernés ou intéressés par l'attribution de subventions à des associations de tester l'outil et de participer à son amélioration.

Elle travaille aussi à la mise en place d'un schéma de données harmonisé concernant les demandes de subvention et les données d'information sur les associations.

Elle expérimente également des modalités de collecte de données relatives aux demandes de subvention provenant de services n'ayant pas encore dématérialisé leur instruction et leur gestion, dont les données peuvent être utiles à partager.