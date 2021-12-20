---
title: DORA
mission: "Faciliter la vie des personnes en insertion et de celles et ceux qui
  les accompagnent "
owner: Ministère du Travail, de l'Emploi et de l'Insertion, ITOU
sponsors:
  - name: Délégation générale à l'emploi et à la formation professionnelle
    acronym: DGEFP
    type: administration-centrale
    domaine_ministeriel: travail
incubator: sgmas
link: https://dora.fabrique.social.gouv.fr/
repository: https://github.com/betagouv/dora/
contact: dora@beta.gouv.fr
events: []
phases:
  - name: investigation
    start: 2021-01-25
    end: 2021-05-06
  - name: construction
    start: 2021-05-09
    end: 2021-10-29
  - name: acceleration
    start: 2021-11-01
---
# Le problème 

Fin septembre 2020, le nombre de bénéficiaires du revenu de solidarité active (RSA), résidant en France entière, est estimé à 2,03 millions de foyers.


Réussir son insertion professionnelle par l’emploi nécessite en règle générale d’avoir levé tous les “freins périphériques” (ex. avoir une solution de logement, de garde d’enfant, parler le français). Or, aujourd’hui de très nombreux bénéficiaires engagés dans un parcours d’insertion peinent à trouver des solutions à ces problématiques. 



Pourquoi ? 

* Manque de collaboration opérationnelle entre les différents acteurs de l’inclusion, alors qu’ils sont complémentaires pour aider des bénéficiaires qui rencontrent souvent des freins multiples
* Des freins à l’insertion où l’offre d’accompagnement est inférieure à la demande



Ce manque de collaboration est notamment dû à différents facteurs : 

* La multiplicité et “mouvance” des structures et des interlocuteurs
* Les informations disponibles sont trop parcellaires et/ou obsolètes pour être efficaces
* Sentiment de compétition/ absence d’objectifs communs



Qui ont des conséquences fortes pour : 

* Les accompagnateurs : Une perte de temps significative et un défaut de prescription 
  = *45 mins du temps passé par jour à chercher des solutions d’accompagnement pour leurs bénéficiaires*
* Les bénéficiaires : Un délai de retour à l’emploi plus long et une aide qui n’est pas apportée au bon moment
* Les acteurs publics : Pas de visibilité réelle sur la tension offre / demande d’insertion sur les territoires. Difficulté à réajuster les financements.
  = *66% des accompagnants interrogés (250 réponses) estiment qu’ils n’arrivent pas à résoudre des problématiques des bénéficiaires car il y a trop peu de partenaires en capacité d’y répondre sur leur territoire*

# La solution 

La solution “DORA” est un service public numérique alimenté par les offreurs de solutions d’insertion locales, Nationales et numériques. Cette base de données centralisée **permet aux accompagnateurs de l’insertion de mobiliser rapidement l’offre d’insertion adaptée aux besoins des bénéficiaires** qu’ils accompagnent via :

* une recherche simple et personnalisée,
* des résultats qualifiés 
* et des fiches solutions claires et actionnables.

# Démarche de construction

## Les premières étapes

**A. Initialiser une version minimale du produit pour tester les enjeux de complétion et mise à jour de la donnée**

* Intégration de données des structures et solutions existantes en mode “conciergerie” par l’équipe de Dora sur les territoires et thématiques concernées 
* Mise à disposition d’une version minimale & dégradée du produit cible aux utilisateurs pour 1/ tester la capacité des offreurs à compléter les informations et mettre à jour et 2/ évaluer les besoins d’ajustement du parcours pour les accompagnateurs en quête de solution, etc. 



**B. Tester de manière frugale les usages complémentaires et leurs implications produit**

* Possibilité d‘orienter et de prescrire
* Possibilité de recommander une solution 
* imbrication éventuelle sur la plateforme de l’inclusion (d’un simple renvoi via URL au départ à une brique d’authentification commune et des actions communes)



**C. Initier les échanges sur le positionnement plateforme de Dora** 

* Échanger avec les services tiers clés qui pourraient alimenter / recevoir des données via Dora pour réfléchir en amont à la structure de l’API 

## Périmètre de test

Pour tester rapidement un maximum de leviers et itérer rapidement, l’équipe va se focaliser sur un périmètre d’expérimentation réduit en matière d’offre et de territoires concernés : 

* Territoires tests : **1 territoire urbain** (le département de la Loire-Atlantique, notamment la métropole de Nantes) **et 1 territoire rural** (le département des Ardennes). Ce sont des territoires très moteurs, avec une volonté forte des acteurs clés de la coordination de l’insertion et pour lesquels ces freins périphériques sont des enjeux importants pour favoriser l’insertion des bénéficiaires.
* Thématiques d'offres ciblées : **mobilité**, **garde d’enfant** et **hébergement / logement**.

Acteurs concernés par l’expérimentation

* en tant qu'offreurs de solutions (des acteurs locaux associatifs + institutionnels + nationaux) 
* en tant qu’accompagnateur cherchant 1 solution (= tous les acteurs de l'insertion sur le territoire qui le souhaitent: SPE, Social, Sociopro)

## Fonctionnalités clés de DORA qui seront testées

  **En tant qu’accompagnateur "chercheur de solution" :**

* J’ai accès à un site vitrine sur lequel il sera possible de rechercher sur votre territoire uniquement sur les problématiques concernées des solutions d'insertion
* Je réponds à des questions pour personnaliser ma recherche
* J’ai accès à une liste de solutions proposées selon mes critères
* Je peux consulter des fiches solutions de base
* Je peux déclarer que je n’ai pas trouvé de solution / en proposer une que je connais



**En tant qu’”offreur de solution" :**

* Je complète ma fiche structure (initialisation d'une base de données => de 0 ou sur la base de données existantes renseignées par l'équipe Dora)
* Je complète les fiches solutions (dispositifs, ateliers, accueil, aide, etc.)
* Je mets à jour les informations



**En tant que bénéficiaire :**

* Je peux prendre connaissance des fiches solutions éditées par l’accompagnateur

## Indicateurs d'impacts suivis :

**A. Proposer une offre d’insertion riche et mise à jour sur les thématiques priorisées**

* 70% structures ont créé au moins 1 fiche solution
* 30% structures réalisent une mise à jour de  leur(s) solution(s) tous les 15 jours



**B. Offrir un service utile aux prescripteurs du territoire cible**

* Au moins 50% des recherches aboutissent sur 1 fiche solution
* 30% des accompagnateurs déclarent gagner du temps dans l’identification des solutions de leur territoire
* 30% des des recherches de solution ont abouti à une orientation du bénéficiaire

## Et ensuite?

Nous nous sommes fixés des mesures que nous allons suivre régulièrement et qui nous aideront à faire des arbitrages. Le service sera ensuite ouvert en priorité aux départements volontaires pour participer à l’expérimentation.
