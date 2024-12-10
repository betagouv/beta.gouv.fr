---
link: https://preprod.aigle.din.developpement-durable.gouv.fr/
mission: Un outil pour lutter contre la cabanisation et les détournements d’usages d’espaces naturels, agricoles et forestiers.
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
---
## Contexte
30 000, c’est le nombre de parcelles “cabanisées” dans le seul département de l'Hérault. Soit environ 30 000 hectares (trois fois la surface de Paris) concernés par ce fléau : des habitats permanents ou temporaires dans les espaces agricoles, naturels et forestiers inconstructibles et le plus souvent à risques inondation ou feux de forêt 

500 à 1000 nouvelles parcelles sont “cabanisées” chaque année dans ce département. Mais il n’est pas le seul concerné. La cabanisation s’étend en France. 


## Problème

### Pourquoi est-ce un problème

Outre le fait qu’elle constitue un délit, la cabanisation a de nombreuses conséquences néfastes : 
- Elle **expose les personnes aux risques** d’inondation et de feux de forêts, sans possibilité d’intervention des secours (accès difficile, habitation non légale et par conséquent non connue).
- Elle **dégrade les espaces naturels**, agricoles ou forestiers ainsi que les paysages et favorise la pollution des sols et de l’eau (déversement d’eaux usées, absence de collecte de déchets…).
- Elle entraîne le **gaspillage des terres agricoles** (pollution, pression foncière, mitage…) et réduit les capacités de production.
- Elle peut engendrer des** départs de feux** et entraîner des dégâts considérables. 
- Elle contribue au **sentiment d’impunité** et d’iniquité entre citoyens, face à la loi et provoque des tensions entre agents de collectivités ou élus et administrés 
- Elle **coûte très cher**, en mobilisant de nombreux acteurs (la DDTM, la DDFIP, les forces de l’ordre, les parquets, les collectivités). Les procédures judiciaires sont longues de plusieurs années, complexes avec une issue incertaine. Des moyens humains et financiers considérables sont ainsi engagés pour une seule affaire.

### Les freins à la lutte

- Un manque de sensibilisation et d’information des citoyens et des comportements pas toujours vertueux (pas vu, pas pris)
- Un laisser-faire des pouvoirs publics, du fait d’un manque de connaissance du problème, d’un manque de moyens, ou d’un manque de volonté
- Une réglementation et des procédures longues et complexes


## Solution
Aigle, c’est un outil de détection automatique de parcelles détournées, qui fonctionne grâce à de l'intelligence artificielle appliquée à des images aériennes. Il repère des constructions en dur (maison, chalet, mazet…) , des mobils-home, des caravanes, des piscines, des bateaux. Muni d’une interface cartographique, il est pleinement intégré dans le process de lutte contre “la cabanisation” et peut être utilisé sur le terrain sur tablette.  

Aigle permet aux collectivités et aux services de l’Etat de :
- **Connaître l’ampleur du problème** sur l’ensemble d’un territoire, et **suivre son évolution** dans le temps, grâce à la détection automatique des parcelles détournées.
- **Cibler et prioriser les contrôles** en croisant les détections avec des et des zones à enjeux (zones inondables, zones à risque d'incendie, zone naturelle remarquable, périmètre de captage d’eau potable, etc.).
- D’envoyer des courriers aux contrevenants afin de **régler le problème le plus en amont possible**, grâce à l’impression de fiches de détection.
- **Suivre le travail sur le terrain**, grâce à un système de statut de contrôle/verbalisation/astreintes administratives...


## Stratégie

### Historique
AIGLE a été développé depuis 2019 et est utilisé dans une version opérationnelle depuis 2022 par les agents de la DDTM de l’hérault. Il est utilisé dans le Gard depuis 2023. Le projet a été repris par la Fabrique numérique en 2023.

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

### 2025
Élargir notre impact sur le cas d'usage “cabanisation” en déployant sur 3 nouveaux départements (DDT(M)) et donner accès directement à l’outil à 80 collectivités (S1 2025).

Élargir notre impact en testant l’outil sur d’autres usages comme les dépôts de déchets/inertes.