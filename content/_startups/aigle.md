---
link: https://aigle.beta.gouv.fr/
mission: Lutter contre les constructions illégales et les détournements d’usages d’espaces naturels, agricoles et forestiers afin de mieux les protéger
incubator: mtes
title: 'AIGLE '
contact: magali.migeon@herault.gouv.fr
accessibility_status: partiellement conforme
sponsors:
  - /organisations/ddtm34
  - /organisations/dgaln
  - /organisations/dhup
phases:
  - name: investigation
    start: 2023-05-01
  - name: construction
    start: 2024-01-15
  - name: acceleration
    start: 2025-02-01
thematiques:
  - Écologie
  - Agriculture
  - Collectivités
  - Territoires
stats_url: https://metabase.aigle.beta.gouv.fr/public/dashboard/b35fe033-9bb4-4f10-a0a8-bf5809383fba
usertypes:
  - collectivite-territoriale
  - etat
techno:
  - python
  - typescript
  - css
budget_url: https://docs.google.com/spreadsheets/d/1oIHQ84QFqsGV8r0iqoZhQCcQIi4TGKJYIRNHtw4mLdU/edit?usp=sharing
repository: https://github.com/MTES-MCT/aigle-api
dashlord_url: https://dashlord.incubateur.net/url/aigle-beta-gouv-fr/
---
## Contexte
Les constructions et installations illégales, appelé aussi "cabanisation" ou "détournement d'usage" s'étendent sur le territoire français non urbain. Elles dégradent les espaces naturels et agricoles et exposent les personnes aux risques naturels inondation et feux de forêt. 
On estime à 30 000,  le nombre de parcelles occupées illégalement dans le seul département de l'Hérault, soit environ 3 fois la surface de Paris, par des ma

## Problème

### Pourquoi est-ce un problème
Outre le fait qu’elle constitue un délit, la "cabanisation" a de nombreuses conséquences sur les territoires: 
- Elle **expose les personnes aux risques** d’inondation et de feux de forêts, sans possibilité d’intervention des secours (accès difficile, habitation non légale et par conséquent non connue).
- Elle **dégrade les espaces naturels**, agricoles ou forestiers ainsi que les paysages et favorise la pollution des sols et de l’eau (déversement d’eaux usées, absence de collecte de déchets…).
- Elle entraîne le **gaspillage des terres agricoles** (pollution, pression foncière, mitage…) et réduit les capacités de production.
- Elle peut engendrer des **départs de feux** et entraîner des dégâts considérables. 
- Elle contribue au **sentiment d’impunité** et d’iniquité entre citoyens, face à la loi et provoque des tensions entre agents de collectivités ou élus et administrés 
- Elle **coûte très cher**, en mobilisant de nombreux acteurs (la DDTM, la DDFIP, les forces de l’ordre, les parquets, les collectivités). Les procédures judiciaires sont longues de plusieurs années, complexes avec une issue incertaine. Des moyens humains et financiers considérables sont ainsi engagés pour une seule affaire.


## Solution
AIGLE, est un outil numérique de détection automatisée de parcelles détournées et de pilotage de l'action opérationnelle. 

Ils fonctionne grâce à de l'intelligence artificielle appliquée à des images aériennes (et bientôt satellite) et ainsi repère, sur un territoire donné, les constructions en dur (maison, chalet, mazets…) , les  mobils-home, les caravanes, les piscines, les bateaux.... suspectés d'être illégaux. 

Muni d’une interface cartographique et d'un module de pilotage,  il est pleinement intégré dans le process de lutte contre  ces constructions ou occupations illégales” et peut être utilisé sur le terrain sur tablette.  

**Aigle permet aux collectivités et aux services de l’Etat de :**
- **Connaître l’ampleur du problème** sur l’ensemble d’un territoire, le localiser, le quantifier, et **suivre son évolution** dans le temps, grâce à la détection automatique des parcelles détournées.
- **Cibler et prioriser les contrôles** en croisant les détections avec des et des zones à enjeux (zones inondables, zones à risque d'incendie, zone naturelle remarquable, périmètre de captage d’eau potable, etc.).
- envoyer des courriers aux contrevenants afin de **régler le problème le plus en amont possible**, grâce à l’impression de fiches de détection.
-  **être plus efficace sur le terrain et de mobiliser les acteurs** 
- **suivre le travail sur le terrain**, grâce à un système de statut de contrôle/verbalisation/astreintes administratives...
- **prévenir** (communication / dissuasion / gestion du foncier)



## Déploiement
AIGLE est présent sur des territoires ciblés dans une dizaine de départements (Gard, Hérault, Somme, Manche, Pyrénées-Atlantiques, Aveyron, Bouches-du-Rhône, Vaucluse, Gironde..., et bientôt  Martinique, Seine-et-Marne,  Haute-Garonne, ....). Une soixantaine de collectivités utilisent l'outils directement. 



## 2026
**Élargir notre impact sur le cas d'usage "lutte contre les constructions illégales** 
-  directement en déployant sur de nouveaux territoires : DDT(M) et collectivités et en augmentant l'adhérence
- indirectement en mettant à disposition la donnée à d'autres acteurs positionnés sur le volet préventif dans le cadre des par exemple des stratégies foncières ou préemptions foncières 
- en en connectant l'outil à LUCCA (https://beta.gouv.fr/startups/lucca.html) l'outil numérique qui facilite et sécurise la rédaction des PV d'urbanisme et qui historise les procédures. 

**Élargir notre impact en testant l’outil sur d’autres usages** comme les dépôts de déchets/inertes, les retenues d'eau illégales, la prévention des feux de forêt...

### IMPACT
- AIGLE permet de quantifier, qualifier et localiser le problème : exemple dans le département de l'Hérault : 30 000 parcelles ont été détectées par l'outil  comme faisant l'objet de constructions ou d'installations suspectées d'être illégales. Près de 6000 sont en zone à risques fort inondation ou feu de forêt. 
- Connaître et mesurer le problème permet de déclencher la prise de conscience et la mobilisation des communes :  13 agents formés, 102 courriers envoyés et 110 visites sur le terrain sur 12 communes de test.
- Détecter au plus tôt permet d’intervenir au plus tôt et de favoriser la simple remise en état plutôt que les longues procédures : 20% de remise en état après simple courrier ou visite sur 20 communes de test.

- Détecter automatiquement les parcelles détournées et les prioriser permet d’être plus efficace sur le terrain : efficacité des visites multiplié par 2

AIGLE c'est aussi au sein de l'équipe  **la maitrise en régie d'une ingénierie d'IA** en terme de détection sur images