---
link: https://aigle.beta.gouv.fr/
mission: Lutter contre les constructions illégales et les détournements d’usages d’espaces naturels, agricoles et forestiers.
incubator: mtes
title: 'AIGLE '
contact: magali.migeon@herault.gouv.fr
accessibility_status: partiellement conforme
sponsors:
  - /organisations/ddtm34
  - /organisations/dgaln
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
Les constructions et installations illégales, appelé aussi "cabanisation" ou "détournement d'usage" s'étendent sur le territoire français non urbain, dégradent les espaces naturels et agricoles et exposent les personnes aux risques naturels inondation et feux de forêt. 
On estime à 30 000,  le nombre de parcelles occupées illégalement dans le seul département de l'Hérault, soit environ 3 fois la surface de Paris, par des ma

## Problème

### Pourquoi est-ce un problème
Outre le fait qu’elle constitue un délit, la cabanisation a de nombreuses conséquences néfastes : 
- Elle **expose les personnes aux risques** d’inondation et de feux de forêts, sans possibilité d’intervention des secours (accès difficile, habitation non légale et par conséquent non connue).
- Elle **dégrade les espaces naturels**, agricoles ou forestiers ainsi que les paysages et favorise la pollution des sols et de l’eau (déversement d’eaux usées, absence de collecte de déchets…).
- Elle entraîne le **gaspillage des terres agricoles** (pollution, pression foncière, mitage…) et réduit les capacités de production.
- Elle peut engendrer des **départs de feux** et entraîner des dégâts considérables. 
- Elle contribue au **sentiment d’impunité** et d’iniquité entre citoyens, face à la loi et provoque des tensions entre agents de collectivités ou élus et administrés 
- Elle **coûte très cher**, en mobilisant de nombreux acteurs (la DDTM, la DDFIP, les forces de l’ordre, les parquets, les collectivités). Les procédures judiciaires sont longues de plusieurs années, complexes avec une issue incertaine. Des moyens humains et financiers considérables sont ainsi engagés pour une seule affaire.


## Solution
Aigle, c’est un outil de détection automatique de parcelles détournées, qui fonctionne grâce à de l'intelligence artificielle appliquée à des images aériennes (et satellite en test. Il repère des constructions en dur (maison, chalet, mazet…) , des mobils-home, des caravanes, des piscines, des bateaux. Muni d’une interface cartographique, il est pleinement intégré dans le process de lutte contre  ces constructions ou occupations illégales” et peut être utilisé sur le terrain sur tablette.  

Aigle permet aux collectivités et aux services de l’Etat de :
- **Connaître l’ampleur du problème** sur l’ensemble d’un territoire, le localiser, le quantifier, et **suivre son évolution** dans le temps, grâce à la détection automatique des parcelles détournées.
- **Cibler et prioriser les contrôles** en croisant les détections avec des et des zones à enjeux (zones inondables, zones à risque d'incendie, zone naturelle remarquable, périmètre de captage d’eau potable, etc.).
- D’envoyer des courriers aux contrevenants afin de **régler le problème le plus en amont possible**, grâce à l’impression de fiches de détection.
-  **D'être plus efficace sur le terrain et de mobiliser les acteurs** 
- **Suivre le travail sur le terrain**, grâce à un système de statut de contrôle/verbalisation/astreintes administratives...
- ** de prévenir** (communication / dissuasion / gestion du foncier)



## Stratégie

### Historique
AIGLE a été développé depuis 2019 et est utilisé dans une version opérationnelle depuis 2022 par les agents de la DDTM de l’Hérault. Il est utilisé dans le Gard depuis 2023.  Le projet a intégré le programme start'up d'Etat de beta.gouv en 2023 via la Fabrique numérique du ministère de l'Environnement.

### 2024
Les hypothèses suivantes ont été validées :

**AIGLE permet de quantifier, qualifier et localiser le problème**

Indicateurs : 30 000 parcelles détectées dans l’Hérault, dont 8500 pour lesquelles le délai de prescription n’est pas dépassé, et 5700 dans des zones à risque. (La prescription des constructions en dur est de 6 ans an pénal et de 10 ans au civil)

**Connaître et mesurer le problème permet de déclencher la prise de conscience et la mobilisation des communes**	

Indicateurs : 13 agents formés, 102 courriers envoyés et 110 visites sur le terrain sur les 12 communes de test.

**Détecter au plus tôt permet d’intervenir au plus tôt et de favoriser la simple remise en état plutôt que les longues procédures**

Indicateurs : 37% de remise en état après simple courrier ou visite, sur les 12 communes de test.

**Détecter automatiquement les parcelles détournées et les prioriser permet d’être plus efficace sur le terrain**

Indicateurs : efficacité des visites multiplié par 2

AIGLE c'est aussi au sein de l'équipe  **la maitrise en régie d'une ingénierie d'IA** en terme de détection sur images

### 2025
Élargir notre impact sur le cas d'usage “cabanisation” en déployant sur plusieurs  nouveaux départements (DDT(M)) et donner accès directement à l’outil à 50 collectivités

Élargir notre impact en testant l’outil sur d’autres usages comme les dépôts de déchets/inertes, les retenues d'eau illégales...