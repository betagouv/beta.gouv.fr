---
mission: Outiller les agents publics pour les aider à faire vivre et circuler leurs données de manière efficace, flexible, pérenne et souveraine
incubator: dinum_produits_interministeriels
title: grist.numerique.gouv.fr
contact: grist@numerique.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2024-03-15
  - name: construction
    start: 2024-09-01
fast:
  promotion: 16
  montant: 200000
thematiques:
  - Administratif
  - Outil technique
usertypes:
  - etat
  - collectivite-territoriale
techno:
  - python
  - typescript
mon_service_securise: true
repository: https://github.com/gristlabs/grist-core
link: https://lasuite.numerique.gouv.fr/produits/grist
sponsors:
  - /organisations/anct
  - /organisations/dinum
analyse_risques: true
events:
  - name: product_launch
    date: 2022-07-01
    comment: Première instance et premiers commits par l'équipe Données et Territoires de l'ANCT.
  - name: other
    date: 2024-12-18
    comment: Homologation de sécurité de l'instance DINUM.
stats_url: https://stats.beta.numerique.gouv.fr/indicators/grist
dashlord_url: https://dashlord.incubateur.anct.gouv.fr/url/grist-incubateur-anct-gouv-fr-o-docs/best-practices/
impact_url: https://stats.moncomptepro.beta.gouv.fr/public/dashboard/0b9964c6-754c-48b1-b1ac-2ed1a226d28a
---
## Le drame

Aujourd'hui, pour gérer le cycle de vie de leurs données, les agents publics
doivent souvent choisir entre deux options insatisfaisantes :

- les enregistrer sans structure dans un tableur, échanger leur tableau par mail, et réconcilier les données récupérées à la main ;

- ou bien les enfermer dans des logiciels métiers spécialisés coûteux et rigides.

Les outils à leur disposition rendent pénible l'exploitation et la
réutilisation de ces données.

## Une piste de solution

Un outil tel que [Grist](https://www.getgrist.com/) permet de facilement
structurer, manipuler, visualiser, diffuser et faire réutiliser ses données.

Aujourd'hui, les agents qui utilisent déjà Grist se constituent en communautés
de pratiques enthousiastes.

Certains usages émergent sur Grist, tels que modéliser ses propres
processus de gestion de l'information, ou encore partager des modèles de
documents et les partager sur [le forum communautaire](https://forum.grist.libre.sh).

Si ces pratiques vertueuses se diffusent, alors l'usage de Grist permettra aux
agents de faire vivre et circuler leurs données de manière efficace, flexible,
pérenne et souveraine.

## Notre stratégie


Notre stratégie consiste à **déployer** (et faire déployer) des instances souveraines, à **contribuer** au code de grist-core pour assurer la pérénité et la sécurité de l'outil, et à **structurer des communatés** d'utilisateurs et de contributeurs autour du produit.

### Déployer

Des premières instances de Grist sont déjà déployées et opérées depuis 3 ans -- au sein de la Suite Numérique pour les agents publics et via l'incubateur de l'ANCT pour les collectivités de moins de 3500 habitants. Plusieurs dizaines d'instances auto-hébergées existent également au sein de l'administration et dans des collectivités de toutes tailles.

 ### Contribuer

Nous contribuons du code à Grist sans forker depuis 3 ans, [plusieurs centaines de PR](https://github.com/gristlabs/grist-core/pulls?q=is%3Apr++label%3Agouv.fr+) ont déjà été mergées et l'administration française est aujourd'hui la première contributrice du projet avec l'éditeur historique. La DINUM finance également le programme de bug bounty qui bénéficie à l'ensemble de la communauté d'utilisateurs de Grist et participe activement à la traduction de l'outil et de sa documentation en français.

### Structurer des communautés

L'équipe Grist.Gouv tient à disposition des utilisateurs francophones de Grist une variété de [ressources](https://lasuite.numerique.gouv.fr/services/grist) (forum, webinaires, documentation, modèles...).

Nous organisons également des clubs utilisateurs et des évènements comme le [Grist Paris Summit](https://lasuite.numerique.gouv.fr/grist-paris-summit-2024).

Enfin, nous travaillons à enourager l'utilisation et la contribution à Grist au delà de nos frontières et notamment auprès de nos partenaires européens.

## Objectifs à 6 mois

### Objectif d’usage à 6 mois : 
20,000 utilisateurs actifs mensuels (+33%) et 5 nouvelles instances souveraines (dans l'administration, les collectivités, ou hébergées en UE pour le privé) (~+10% ?).
