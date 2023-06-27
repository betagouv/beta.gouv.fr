---
title: Basegun
mission: Identifier et classer instantanément une arme sur le terrain
sponsors:
  - /organisations/interieur
incubator: lab-mi
link: https://basegun.fr/
repository: https://github.com/datalab-mi/Basegun
contact: basegun@interieur.gouv.fr
accessibility_status: non conforme
events: []
phases:
  - name: construction
    start: 2022-05-02
    end: 2023-06-27
---
## Contexte

Aujourd’hui, les forces de l’ordre (gendarmes, policiers et policières) saisissent 6 à 7 000 armes par an. Pour chaque catégorie d’armes identifiées, les agents mettent en place la procédure et envisagent les poursuites légales adaptées.

## Problème

Cependant, la méthode actuelle d’identification des armes sur le terrain est chronophage, soumise à interprétation et génératrice d’erreurs. En effet, les agents procèdent de trois façons souvent combinées :

* Ils et elles tentent des rapprochements visuels à partir de recherches internet/intranet autonomes
* Ils et elles interrogent leurs collègues ou un armurier privé
* Ils et elles consultent des experts au sein du Ministère de l’Intérieur (SCAE)

La police judiciaire estime que 15 à 20% des armes saisies sont mal ou non identifiées, ce qui conduit à des absences de poursuites ou des poursuites pénales injustifiées.

## Le terrain de jeu

Le défi consiste en la création d’une application terrain qui permettra aux forces de l’ordre d’identifier instantanément une arme à partir de photos. Elle indiquera également la conduite à tenir adaptée. Au-delà de ce cas d’usage identifié, d’autres utilisations connexes d’une telle application (usage de particuliers, armuriers privés, forces de l’ordre européennes) sont à explorer avec l’aide de l’équipe projet.

#### Les défis techniques

La solution doit :

* fournir une réponse instantanée, avec un taux de confiance sur la classification obtenue
* reposer sur une démarche UX, guidée par le Lead UX du laboratoire d’innovation
* reposer sur un modèle d’intelligence artificielle entraîné
* être accessible en mode service (API)

## Impact

L’application libèrera les forces de l’ordre d’une tâche laborieuse et leur permettra de se concentrer sur des actions métier à plus forte valeur ajoutée (enquêtes, poursuites, …), tout en réduisant le risque d’erreur.

Les citoyens seront préservés des poursuites injustifiées liées aux erreurs de classification. Ils seront également mieux informés sur les armes qu’ils détiennent, à travers une mise à disposition du service.