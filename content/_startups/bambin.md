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
stats_url: https://diagbruit.fr/stats
impact_url: https://docs.numerique.gouv.fr/docs/c370925a-d67a-4177-a698-f017332dbc95/
budget_url: https://docs.numerique.gouv.fr/docs/2ba84885-8e90-4043-b614-0d5c67a8186f/
---
## Contexte

L’exposition à un niveau sonore trop élevé est un enjeu sanitaire majeur (effets sur l’audition, le comportement, et le sommeil). La règlementation permet de traiter et éviter les cas les plus extrêmes, mais les seuils de prise en compte ([article 7](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006053526/)) sont très éloignés des [préconisations de l’Organisation Mondiale de la Santé](https://iris.who.int/server/api/core/bitstreams/71c1d252-463d-40a9-842e-5126d7fdbdec/content).   
| Source | Seuil critique reglementaire| Seuil d'impact sanitaire|
| --- | --- | --- |
| Route | 68 dB (Lden)| 53 dB (Lden)|
| Voie ferrée (hors LGV)| 73 dB (Lden)| 54 dB (Lden)|
| Aéroport| 55 dB (Lden)| 45 dB (Lden)|

Par ailleurs, il existe un grand nombre d’indicateurs et documents techniques différents (réglementation Française ou Européenne ; concernant les transports, les activités, le voisinage, etc).

## Problème

En tant que chargé de mission bruit, je constate que les recommandations des documents d'urbanismes ne sont pas toujours appliquées.  

En tant qu’instructeur droit des sols, je ne dispose pas de suffisamment de temps et de connaissances technique pour intégrer le bruit dans mes recommandations.  

En tant qu'élu, sans soutien pédagogique, je peine à m’approprier les diagnostics, dont les résultats sont parfois contradictoires avec les plaintes formulées par les habitants.

En tant que porteur de projet, je ne dispose pas d'un accès facile pour connaitre les obligation règlementaires liées au bruit sur une parcelle.  

## Solution

diagBruit permet aux **porteurs de projets** de concevoir des projets **viables** qui protègent la santé des habitants

diagBruit permet aux **instructeurs permis de construire** **d'alerter** les porteurs de projet sur les risques acoustiques sur une parcelle

**Nos bénéfices :**

- Une **alerte** simple sur le risque sonore pour la santé des habitants
- Un accès fiable et simple à la **réglementation**
- Des **conseils** concrets, illustrés, applicables

## Stratégie

La phase d’investigation a été menée auprès d’un panel de Métropoles, de gestionnaires, de porteur de politiques publiques, d’associations, d’agences ou organismes de recherche et de producteurs de données.  
Elle a mis en lumière la trop grande technicité de la thématique et la complexité de la règlementation associée.

En 2025, l'équipe a capitalisé sur le travail d'investigation pour tester l'impact direct du terrain par les services d'application droit des sols (ADS). Il en ressort que la thématique bruit ne peut être réglementairement opposable par le biais du PLU (hormis l'inconstructibilité liée aux aérodromes).  
En 2026, le projet vise donc à conserver l'appui des services ADS pour mieux sensibiliser les porteurs de projet.

## Impacts recherchés

L’impact terrain recherché est l’ajustement d’un projet par son porteur. Cet ajustement peut intervenir à la suite d'une recommandation d'un instructeur ADS, d'un élu ou par une action volontariste.


La modification d’un projet d’aménagement ou de construction pour minimiser le bruit des riverains, et / ou la prise en compte de l’acoustique au delà de la règlementation dans un projet d’aménagement ou de construction.