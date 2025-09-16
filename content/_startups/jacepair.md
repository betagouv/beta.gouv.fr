---
analyse_risques: false
mon_service_securise: false
contact: timothee.paris@conseil-etat.fr
thematiques: []
usertypes:
  - etat
title: JACEPAIR
mission: 'faciliter la recherche juridique '
incubator: alliance
phases:
  - name: investigation
    start: 2025-05-15
  - name: construction
    start: 2025-09-15
events:
  - name: product_launch
    date: 2025-09-12
link: ''
---
## Problème

Le système juridique français souffre d'une double contrainte technologique et méthodologique qui compromet la sécurité juridique de l'action publique. D'un côté, les modèles d'IA généralistes (GPT, Claude) sont inadaptés au raisonnement juridique français : ils hallucinent sur la jurisprudence, ignorent les spécificités du droit administratif et ne maîtrisent pas la méthodologie d'analyse propre au Conseil d'État. De l'autre côté, l'absence de corpus d'entraînement spécialisé en raisonnement juridique français constitue un verrou technologique majeur : les données publiques (codes, jurisprudence) ne contiennent que le résultat des décisions, pas la logique d'analyse qui y mène, tandis que les analyses expertes restent enfermées dans les rapports internes du CE, inaccessibles aux algorithmes d'apprentissage.

Cette impasse technologique génère trois risques critiques : (1) les magistrats administratifs et services juridiques passent 60-70% de leur temps à rechercher et analyser manuellement la jurisprudence applicable, sans garantie d'exhaustivité, (2) une inégalité territoriale dans l'accès à l'expertise juridique de haut niveau, et (3) une surcharge chronique des formations consultatives du Conseil d'État qui ne peuvent absorber la demande croissante de sécurisation juridique. Sans percée technologique permettant de reproduire artificiellement l'excellence du raisonnement juridique français, cette crise s'aggravera avec la complexification croissante du droit public.

## Solution

Développer JACEPAIR, le premier modèle d'IA spécialisé dans le raisonnement juridique français, entraîné par une approche originale combinant mid-training et apprentissage par renforcement sur la logique d'interprétation propre au Conseil d'État et extraite à partir de ses données.

JACEPAIR constituerait une brique technologique centrale mutualisable pour l'ensemble de l'écosystème juridique public français. Le modèle d'IA, une fois entraîné sur l'excellence du raisonnement du CE, pourra être déployé dans tous les services juridiques de l'État et collectivités publiques sans compromettre les exigences de secret et de cloisonnement. 

Chaque administration pourra effectuer du RAG sur cette brique centrale commune pour bénéficier de la fraîcheur des données et s'adapter à ses métiers ou domaines juridiques particuliers : une DAJ ministérielle y adjoindra ses circulaires sectorielles, une collectivité territoriale ses délibérations spécialisées, une juridiction administrative ses précédents locaux. 
Cette architecture garantit l'économie d'échelle (un seul modèle de référence) tout en préservant l'autonomie opérationnelle de chaque service.


