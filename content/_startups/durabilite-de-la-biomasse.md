---
analyse_risques: false
mon_service_securise: false
contact: luca.izzo@developpement-durable.gouv.fr
thematiques:
  - Écologie
  - Entreprises
  - Agriculture
  - Outil technique
  - Climat
usertypes:
  - entreprise
  - etat
title: Durabilité de la biomasse
mission: ' La solution pour assurer la durabilité et la fiabilité des chaînes de valeur de production d''électricité, chaleur et froid à partir de biomasse'
incubator: mtes
sponsors:
  - /organisations/mtes
phases:
  - name: investigation
    start: 2025-02-03
events:
  - name: product_launch
    date: 2025-02-27
techno: []
link: ''
---

## Contexte

Afin de garantir la durabilité de la production d'électricité, de chaleur et/ou de froid à partir de biomasse (qu'elle soit solide comme la biomasse forestière ou le bois-déchet, gazeuse sous la forme de biogaz dans une installation en cogénération ou bien liquide),  la directive relative à la promotion de l'utilisation de l'énergie produite à partir de sources renouvelables (directive RED) pose un certain nombre de critères que doit respecter tant la biomasse que l'installation de production d'énergie. Ces critères sont ainsi de trois types : 
* Des critères portant sur la durabilité de l'approvisionnement en biomasse, qu'elle soit agricole ou forestière : la mobilisation de biomasse à des fins énergétiques ne doit pas avoir un impact environnemental trop important (par exemple, la biomasse ne peut provenir de zones à fortes valeur en termes de biodiversité, sauf conditions strictes)
* Un critère de réduction des émissions de gaz à effet de serre de l'énergie produite à partir de biomasse par rapport à un équivalent fossile, calculée en analyse de cycle de vie (comprenant les émissions liés à la culture, au transport et à la transformation de la biomasse), mais hors émissions de combustion
* Un critère d'efficacité énergétique des installations de production d'électricité

Tous les ans, les opérateurs énergétiques consommant de la biomasse doivent ainsi recueillir les informations de durabilité normalement transmises par leurs fournisseurs directs et indirects pour justifier du respect de ces critères dans toute la chaîne de valeur menant à la production d'énergie. 

## Problème

Aujourd'hui, les opérateurs énergétiques déplorent que la transmission de ces informations est tardive et nécessite de nombreuses relances, ce qui se traduit par un coût en temps important et une forte charge administrative. Ces obligations se répercutent sur toute la chaîne amont et tous les acteurs dépensent beaucoup d'énergie à recueillir les informations. 

Cela se traduit aussi par une forte insécurité juridique (les informations devant être présentées à l'administration afin d'attester de la durabilité) et potentiellement économique, ces documents étant essentiels afin de ne pas payer de quotas CO2 sur la biomasse consommée dans le cadre du système européen d'échanges de quotas d'émissions (SEQE-ETS). Cela représente un surcoût de l'ordre de plusieurs centaines de millions d'euros pour la filière du bois énergie seule.

La fiabilité des informations transmises n'est de plus pas garantie, se traduisant là aussi par une insécurité juridique et économique : les opérateurs énergétiques en bout de chaîne n'ont que la vision sur leurs fournisseurs indirects. Ils sont placés devant l'impossibilité de savoir si un opérateur amont a livré une biomasse non-durable. En cas de contrôle, c'est bien l'opérateur énergétique qui serait sanctionné du paiement de quotas carbone, alors même qu'il dépend de ses fournisseurs directs pour mettre la pression sur toute sa chaîne.

D'un point de vue environnemental, l'absence de fiabilité des informations et l'impossibilité de réaliser des contrôles en bonne et due forme aujourd'hui empêche de savoir concrètement si la biomasse en France est bien durable, problème qui va se poser avec d'autant plus d'acuité que la directive RED III révisée va introduire des critères de gestion durable renforcés pour la biomasse forestière. De plus, les statistiques annuelles donnant le pourcentage d'énergie renouvelables du mix énergétique français est censé ne considérer que la biomasse durable au sens de la RED, distinction qui n'est pas faite aujourd'hui : davantage de fiabilité permettrait de savoir avec certitude que le % d'ENRs déclarés est le bon.


## Solution

Grâce à BiomasSecure, chaque entreprise de la chaîne de valeur de la production d'énergie à partir de biomasse pourra facilement déposer ses propres preuves de durabilité afin de les transmettre à ses clients sur une base mensuelle. Le client pourra ainsi être certain que la biomasse achetée est durable, et récupérer les preuves nécessaires pour qu'il puisse lui-même démontrer la durabilité de sa biomasse à ses clients et/ou à l'administration. 

BiomasSécure vise ainsi à réduire la lourdeur administrative de la collecte d'informations sur la chaîne amont et sécuriser la fiabilité des informations transmises tout au long de la chaîne. Un point d'attention particulier a été identifié pour éviter la double-saisie d'informations pour les acteurs de la filière qui sont déjà équipés de leur propres logiciels. 

Ce service numérique et les problématiques identifiées se rapprochent fortement des fonctionnalités et objectifs de l'outil CarbuRe, qui vise à garantir la durabilité des chaînes de valeur des biocarburants. C'est pourquoi BiomasSécure est pensé comme un module indépendant, mais intégré au sein du logiciel CarbuRe, permettant de réutiliser ses fonctionnalités clés communes aux biocarburants et à la production d'énergie à partir de biomasse, tout en nécessitant bien évidemment des adaptations à notre cas d'usage.


## Stratégie

La stratégie envisagée à horizon 6 mois (juin 2025 - janvier 2026), dans le cadre d'une phase de test/premier déploiement, consiste à cibler l'intégralité de la chaîne de valeur (excluant toutefois les propriétaires forestiers) de trois opérateurs énergétiques de taille moyenne, tous dans le domaine du bois-énergie. Ce secteur est en effet celui qui dispose du plus d'installations assujetties à la RED, et pour lequel les enjeux environnementaux de conformité à la réglementation sont les plus saillants (limitation des coupes rases, etc...). Le focus est fait sur des chaînes de taille intermédiaire, comprenant tout de même plusieurs maillons, afin de pouvoir vraiment tester l'ajout principal de BiomassSecure qui est la fiabilité des informations de durabilité de la biomasse sans avoir à remonter toute la chaîne amont pour les opérateurs. 

Ce premier déploiement est prévu en deux phases : 
* Une première phase de développement de maquettes permettant de concevoir concrètement à quoi ressemblera l'outil numérique
* Le développement d'un module indépendant au sein de CarbuRe sur la base des maquettes

Les trois chaînes test seront mobilisées lors des deux étapes, tant pour les opérateurs énergétiques que pour les fournisseurs. L'objectif est que les informations circulent lors de la deuxième phase de manière bottom-up sans relances de la chaîne aval sur les fournisseurs amont.


L'impact sera mesuré : 
- à 6 mois : par des verbatims des acteurs de la chaîne exprimant leur satisfaction et les améliorations constatées par rapport au système actuel de transmission/déclaration et la volonté des maillons intermédiaires de réutiliser l'outil pour fiabiliser leurs échanges avec d'autres clients
- et à terme : par la croissance du nombre d'attestations automatiquement générées par BiomasSécure par les fournisseurs intermédiaires (et non plus téléversées par les opérateurs énergétiques en bout de chaîne) permettant de mesurer les chaînes de valeurs effectivement sécurisées par l'outil
