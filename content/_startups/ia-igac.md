---
analyse_risques: false
mon_service_securise: false
contact: philippe.nicolas@culture.gouv.fr
thematiques:
  - Administratif
usertypes:
  - etat
title: IA IGAC
mission: Aider les inspecteurs de l’IGAC dans leurs missions de diagnostic et de conseil grâce à un assistant IA
incubator: culture
sponsors:
  - /organisations/mc
phases:
  - name: investigation
    start: 2025-01-15
  - name: construction
    start: 2025-04-08
  - name: alumni
    start: 2025-07-21
events:
  - name: committee
    date: 2025-04-08
    comment: 'Restitution de l''investigation : décision de tester plusieurs approches en lien avec la DINUM'
  - name: committee
    date: 2025-07-17
    comment: Attente de la mise à disposition Assistant IA sur SecNumCloud
techno: []
link: ''
---
## Contexte

L'Inspection générale des affaires culturelles (IGAC) assure des missions d’inspection, de contrôle ou d’évaluation, d’étude ou de médiation. Elle peut assurer des missions de conseil, d'appui, d'audit, d'enquête et d'expertise. Elle peut effectuer ces missions à la demande du Premier ministre ou du ministre chargé de la Culture.
 
L’IGAC contribue à :
l'évaluation des politiques publiques culturelles ;
l'appréciation du coût, du résultat et de l'efficacité des moyens mis en œuvre pour conduire les actions engagées par le ministère de la Culture.

## Problème

Les inspecteurs de l'IGAC rencontrent des “difficultés” à
appréhender en un temps court des secteurs complexes, et à
collecter, structurer et analyser un grand volume d'informations, ce
qui “contraint” leur capacité à produire des rapports complets et
des recommandations utiles, dans le temps imparti/idéal pour
une mission; et d’aller plus loin dans l’analyse. 
Quelques chiffres  concernant le volume d'informations :
* Un volume d'entretiens importants à réaliser (50 à 100) avec des activités de prise de notes, de transcription/compte -rendu, d'organisation et mémorisation de l'information utile;
* Une masse de documents et de données à collecter et à analyser (50 à 70 documents par dossier) dont des documents d'analyse financière.

Un 1er test sur des données C1 à l'aide de Chatgpt a permis à des inspecteurs beta-testeurs de valider la pertinence de l'usage d'une solution LLM comme un accélérateur d'analyse et de recherche documentaire. 

## Solution

Aider les inspecteurs de l’IGAC dans leurs missions de diagnostic et de conseil grâce à un assistant IA pertinent, rapide et sécurisé. “ le ChatGPT de l’IGAC, mais sécurisé”

* Un LLM pertinent pour la synthèse de documents, l'analyse et la catégorisation  (comme Mistral Medium à minima) , couplé idéalement avec un RAG pertinent pour la recherche documentaire. 
* Assistant IA comme interface d'interaction avec le LLM aidant à la relecture pour accroitre l'adoption et répondre au besoin de précision et de vérification des inspecteurs avec une "UI" couplée à un RAG pour mettre en avant les extraits documentaires utilisés pour la génération de la réponse LLM
* Un LLM/RAG s sur une infrastructure SecNumCloud pour accompagner les inspecteurs dans le traitement de documents C2



## Objectifs à 6 mois

Objectif **d'impact** à 6 mois : Efficacité de près de 20% dans les tâches amont de recherche documentaire, analyse.

