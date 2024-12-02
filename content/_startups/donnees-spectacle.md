---
mission: Faciliter l'extraction des données renseignées dans SIBIL pour les déclarants.
incubator: culture
title: Assistant données spectacle vivant
contact: ateliernumerique.snum@culture.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2024-01-15
  - name: construction
    start: 2024-04-09
usertypes:
  - particulier
thematiques:
  - Patrimoine
repository: https://github.com/betagouv/assistant-declaration
link: https://assistant-declaration.beta.gouv.fr
dashlord_url: https://dashlord.incubateur.net/url/assistant-declaration-beta-gouv-fr/
techno: []
---
## Contexte

Le ministère collecte des données du spectacle vivant auprès des entrepreneurs du secteur. Ces entrepreneurs du spectacle remplissent une grand nombre de formulaires administratifs : les déclarations pour gérer les droits d'auteur, les taxes spécifiques au secteur, SIBIL l’outil du ministère pour l’observation des données de billetteries du spectacle, les licence de spectacle, les formalités spécifiques aux départements, villes, syndicats professionnels, etc.

## Problème

La collecte des données du spectacle est considérée comme une contrainte, redondante et sans bénéfice pour les entreprises du spectacle vivant. 

La difficulité principale pour les gestionnaires de données réside dans le fait que les procédures déclaratives sont proches mais jamais exactement les mêmes. Cette hétérogéneité nécessite de rassembler, comparer et vérifier les données pour chaque déclarations, ce qui est fastidieux. 

De plus, les changements perpétuels des champs des procédures ne permettent pas de stabiliser les outils de gestion. 

Enfin, il y a autant d’obligations pour les petites structures que pour les grosses et, par conséquent, pour les structures sont moins bien dotées en personnel cela représente une charge supplémentaire pour les administrateurs.

## Solution

**La solution à l’étude est un assistant pour les déclarations des entreprises du spectacle.** Il permet à ceux qui déclarent des données du spectacle vivant dans SIBIL de ré-utiliser leurs propres données dans un format adapté à une nouvelle formalité. 

**Usagers initiaux :** labels et structures subventionnées

**Usagers secondaires** :  tous les entrepreneurs de spectacle qui déclarent des données de billetteries

## Vision

La vision du ministère sur les données du spectacle est une transformation progressivement de la fragmentation des données du spectacle en **un modèle de donnée unifié, ouvert et d’intérêt général**, simple à fournir pour les usagers,  permettant de **nouveaux usages pour les acteurs de l'écosystème**.

Les travaux de construction de l’assistant permettront de contribuer à cette vision :

- Le travail de mise en correspondance entre les données des différents formulaires permettra d’avancer sur l’alignement et la standardisation des données du spectacle
- L’assistant sera le premier outil à utiliser l’API de récupération des données de SIBIL
- Cela enclenchera une boucle d’amélioration de la qualité des données SIBIL

## Stratégie

Une premier prototype sera réalisé manuellement pour comparer les données dont dispose le ministère avec celles des autre procédures administratives.

Puis un premier outil numérique sans développement spécifique sera testé à parti de logiciels existants. 

Enfin un premier bilan et proposition de service numérique dédié le cas échéant.
