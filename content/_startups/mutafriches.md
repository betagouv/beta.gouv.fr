---
analyse_risques: false
mon_service_securise: false
contact: anna.lefoulon@ademe.fr
thematiques:
  - Territoires
  - Écologie
  - Administratif
usertypes:
  - collectivite-territoriale
  - entreprise
  - etat
techno:
  - typescript
title: Mutafriches
mission: Définir la mutabilité d'un site pour accélérer sa reconversion
incubator: ademe
sponsors:
  - /organisations/dgaln
phases:
  - name: investigation
    start: 2025-01-06
  - name: construction
    start: 2025-05-07
events:
  - name: committee
    date: 2025-05-07
  - name: committee
    date: 2025-11-21
redirect_from:
  - /startups/friche-reboost
repository: https://github.com/incubateur-ademe/mutafriches
link: https://mutafriches.beta.gouv.fr/
---
## Constats
En France, ce sont en moyenne **23 000 hectares** de terres agricoles ou naturelles qui sont urbanisés annuellement, l’équivalent de **15 000 stades de France**. Et c’est encore plus important si on considère le phénomène dans le temps, en **10 ans,** c'est l’équivalent de la superficie de **l’ile de la Réunion** qui a été urbanisée.

En parallèle, on estime le stock de friche en France à environ **150 000 hectares,** soit l’équivalent de **100 000 stades de France**. Le stock de friches est variable et alimenté en permanence par un flux (estimé en moyenne à **1 500 ha/an**). 

Dans un contexte général de raréfaction des ressources et d'évolution des exigences réglementaires (ZAN), le sol/foncier devient une **ressource stratégique**. Les friches, souvent délaissées de par leur "complexité de réhabilitation", apparaissent comme de **réelles opportunités.**

## Problème
Malgré une tension croissante sur la ressource foncière et un stock important de friches à réhabiliter, il existe actuellement une **décorrélation** entre la capacité de remobilisation des sites en friches et leur réhabilitation effective. 

Les accompagnements publics mis en œuvre (financements, outils, méthodes …) ne semblent pas suffire à impulser une dynamique de reconversion suffisante en quantité mais aussi en qualité : **le bon usage au bon endroit**. 


## Principaux enseignements de l'investigation

L’investigation a permis de confirmer que les facteurs les plus déterminants pour la reconversion sont :

- l’accès à un **financement**,  
- l’**attractivité** du territoire,  
- la présence ou non de **pollution** sur le site,  
- la **volonté politique** portée par les élus.

D’autres facteurs importants ont été identifiés :

- la **maîtrise foncière**,  
- l’accès à l’**ingénierie** au sein des collectivités et via des partenaires externes (EPF, bureaux d’études, etc.).

Enfin, des facteurs moins déterminants mais à prendre en compte complètent le tableau :

- l’accès aux **outils d’ingénierie** mis à disposition par l’État,  
- la **connaissance du foncier** en lien avec la stratégie foncière du territoire,  
- la **démographie**.

Ces enseignements guident aujourd’hui la **conception** de la nouvelle brique Mutafriches.


## Solution

 **Mutafriches** est une **brique fonctionnelle intégrable** (API et iframe) qui calcule un **indice de mutabilité** unique et partagé.  

Cette brique a vocation à :

- s’implémenter dans les outils « friches » existants (à commencer par [Bénéfriches](https://benefriches.ademe.fr/)),  
- évaluer la capacité d’un site à accueillir différents usages, au regard de ses caractéristiques (surface, niveau de pollution, raccordements, etc.) et de son environnement local.

L’**indice de mutabilité** que nous concevons doit permettre aux collectivités de considérer des usages émergents (renaturation, photovoltaïque, etc.) en plus des usages plus classiques (logements et commerces, équipements culturels et touristiques, industrie, etc.)

Par ailleurs, Mutrafriches offre un module de qualification de parcelle avancé (informations de parcelles, données d'environnement et de risques), intégrable séparément. 

## Devenir intégrateur
Nous sommes en continuelle recherche d'intégrateurs. Pour intégrer Mutafriches dans votre service, contactez un membre de l'équipe.  


## Feuille de route construction

| Mois | Objectif clé |
|------|--------------|
| Janvier-février | Fiabilisation de l'algorithme |
| Mars-avril |Intégrations outils friches |
| Avril-Mai | Fonctionnalité de sélection multi-sites| 
| Mai-juin| Tests d'intégrations auprès outils locaux (observatoires)  |

