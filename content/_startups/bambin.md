---
mission: Intégrer le bruit dans les risques impactant les projets d'aménagement
incubator: accelerema
title: diagBruit
contact: martin.schoreisz@cerema.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2024-04-03
  - name: construction
    start: 2025-01-01
thematiques:
  - Collectivités
  - Territoires
  - Bruit
  - Santé
usertypes:
  - collectivite-territoriale
techno:
  - postgresSQL / postgis
  - dbt
  - react
  - python
  - strapi
sponsors:
  - /organisations/anct
  - /organisations/cerema
events:
  - name: committee
    date: 2024-07-03
    comment: Comité de fin d'investigation. Validé pour poursuite / construction MVP
  - name: product_launch
    date: 2025-05-12
    comment: Lancement du MVP
  - name: committee
    date: 2025-06-10
    comment: Financements complémentaires pour continuer la construction jusqu'en Janvier 2026
  - name: committee
    date: 2025-11-20
    comment: Comité d'investigation FINDPE. Le guichet va contribuer au financement du produit
link: https://diagbruit.beta.gouv.fr/
repository: https://github.com/betagouv/diagbruit.beta.gouv.fr
stats_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=212&period=day&date=yesterday#?period=day&date=yesterday&category=Dashboard_Dashboard&subcategory=1
impact_url: https://diagbruit.fr/stats
---
## Contexte

L’exposition à un niveau sonore trop élevé est un enjeu sanitaire majeur (effets sur l’audition, le comportement, et le sommeil). La règlementation permet de traiter et éviter les cas les plus extrêmes, mais les seuils de prise en compte sont très éloignés des préconisations de l’Organisation Mondiale de la Santé.   

Par ailleurs, il existe un grand nombre d’indicateurs et documents techniques différents (réglementation Française ou Européenne ; concernant les transports, les activités, le voisinage, etc).

## Problème

En tant que chargé de mission bruit, je constate que les recommandations des documents d'urbanismes ne sont pas toujours appliquées.  
En tant qu’instructeur droit des sols, je ne dispose pas de suffisamment de temps et de connaissances technique pour intégrer le bruit dans mes recommandations.  
En tant qu'élu, sans soutien pédagogique, je peine à m’approprier les diagnostics, dont les résultats sont parfois contradictoires avec les plaintes formulées par les habitants.  

## Solution

Sur les territoires couverts par une carte de bruit, les instructeurs bénéficient d’un diagnostic flash qui leur indique le niveau de risque sonore (faible, moyen, fort) sur la parcelle considérée. ils peuvent copier-coller ce diagnostic dans les documents qu’ils émettent à destination des collectivités ou des porteurs de projet.  

Ce diagnostic est basé sur un ensemble de données en cours de réflexions. À date (liste non exhaustive) : cartes de bruit grandes infrastructures et agglomération, classements sonores, plan d'exposition au bruit.

## Stratégie

La phase d’investigation a été menée auprès d’un panel de Métropoles, de gestionnaires, de porteur de politiques publiques, d’associations, d’agences ou organismes de recherche et de producteurs de données.  
Elle vise les organismes qui répondent “non” à la question “*Selon vous, actuellement sur votre territoire, prenez vous suffisamment en compte le bruit lors de l'analyse d'un projet d'aménagement ou de construction ?”*.  

La construction de la solution va être phasée selon les sources d'informations à prendre en compte : 
1. Cartes de bruit stratégiques et classement sonore des voies
2. Mesures et retour d'expérience
3. Études et recherche en santé et acoustique.  
Les retours utilisateurs pourront amener à faire évoluer cette liste.

## Impacts recherchés

L’impact terrain recherché est l’ajustement d’un projet par son porteur. Cet ajustement peut intervenir à la suite d'une recommandation d'un instructeur ADS, d'un élu ou par une action volontariste.


Les impacts intermédiaires sont le nombre de diagnostics créés ainsi que le nombre de diagnostics transmis aux porteurs de projets. Le nombre d’études acoustiques complémentaires demandées suite à consultation du diagnostic serait également un très bon indicateur.