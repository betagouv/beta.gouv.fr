---
title: Reuni
mission: Permettre aux agents publics d'accéder simplement aux documents qu'ils recherchent
sponsors:
  - /organisations/dge
incubator: dinum
events:
  - name: end
    date: 2019-12-01
phases:
  - name: investigation
    start: 2018-12-01
    end: 2019-03-01
  - name: alumni
    start: 2019-03-01
usertypes:
  - etat
stats: false
contact: gaelle.rousseau@finances.gouv.fr
---
## Le problème

La DGE utilise un fonds documentaire de plus d’un million de documents constitué de notes, d’études, d’email et de pièces jointes… Ces données sont stockées sur une multitude de répertoires partagés accessibles à une partie seulement des agents. Résultat : les agents n’ont pas accès à l’ensemble de l’information pertinente, créent des contenus redondants ou passent des heures à trouver les bons documents.

L’approche traditionnelle pour résoudre ce problème, auquel sont confrontées la plupart des administrations, consiste à recourrir à des logiciels gestion documentaire ou de gestion des connaissances. Mais ces logiciels sont lourds à mettre en œuvre et nécessitent un travail de mise à jour de bases documentaires couteux.

## La solution

Un dispositif léger, simple à déployer, permettant de collecter les documents finalisés et de trouver les bons documents à travers un moteur de recherche simple et efficace.

Un algorithme entrainé identifie des récurrences d’entité pour améliorer la recherche. Il est basé sur 2 méthodes :

- Le TF-IDF (de l'anglais term frequency-inverse document frequency) est une méthode de pondération qui permet d'évaluer l'importance d'un terme contenu dans un document, relativement à un corpus. 
- Le Word2vec est un groupe de modèles utilisé pour le plongement lexical. Ces modèles sont des réseaux neuronaux à deux couches, peu profonds, formés pour reconstruire les contextes linguistiques des mots. 

La solution se base sur un développement Open Source : ALEPH (https://github.com/alephdata/aleph/wiki ) 

Les résultats sont ensuite présentés avec titre, date, résumé et source et la possibilité d’accéder à une prévisualisation avant de télécharger le document.

## Le déploiement

Un POC sera réalisé pour un échantillon de documents de la DGE. Si l’intérêt est validé, un service accessible à l’ensemble des agents et permettant l’accès à la totalité du fonds documentaire sera développé. Il pourra aussi être proposé aux autres directions de Bercy intéressées pour utiliser le service.
