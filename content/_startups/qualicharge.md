---
title: QualiCharge
mission: ' La plateforme des données de recharge et des certificats TIRUERT électrique'
sponsors:
  - /organisations/mtes
incubator: mtes
contact: contact@qualicharge.beta.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2022-03-29
    end: 2022-09-01
  - name: construction
    start: 2022-09-01
thematiques:
  - Écologie
  - Transports
repository: https://github.com/MTES-MCT/qualicharge/
usertypes:
  - particulier
  - etat
  - association
  - entreprise
  - collectivite-territoriale
techno:
  - python
  - api
  - data
  - django
  - fastapi
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view
dashlord_url: https://dashlord.incubateur.net/url/api-qualicharge-beta-gouv-fr-api-v1-docs/
link: https://www.qualicharge.beta.gouv.fr/
---
## Contexte

L'électrification du parc de véhicules légers est une des conditions nécessaires à la réduction des émissions de gaz à effet de serre dans les transports. Cette politique doit s'accompagner de la mise en place *ex nihilo* d'une infrastructure de recharge couvrant l'ensemble du territoire.

## Problème

Même si la France est déjà équipée de près de 70 000 points de recharge, la qualité de service proposé aux automobilistes laisse clairement à désirer. La prise en main d’un véhicule électrique est fréquemment décrite comme un parcours du combattant par les nouveaux utilisateurs. Les inquiétudes qui en découlent dissuadent de nombreux Français de passer à l’électrique et la politique publique d’électrification totale du parc de véhicules légers.

## Solution

L'exploitation d'un réseau de recharge est génératrice de données, qui sont traitées, croisées et échangées entre opérateurs. Le ministère de la transition énergétique a la possibilité de recueillir et d'analyser ces données pour mesurer la consommation énergétique des réseaux et doter l’administration d’indicateurs sur la qualité du service proposé aux utilisateurs de véhicules électriques.

La principale mission de la startup d’État QualiCharge est donc d’analyser le fonctionnement des réseaux pour outiller la direction de l’énergie en indicateurs concernant la qualité du service de recharge proposé sur les réseaux subventionnés. Les opérateurs de recharge volontaires pour transmettre leurs données de supervision pourront bénéficier d’un avantage fiscal.

## Stratégie

La conception du système doit permettre de recevoir, de lire et de stocker ces données suivant un protocole défini par l’écosystème. Elles devront ensuite être analysées, pour produire des indicateurs sur la qualité du service proposé (taux de disponibilité, remise en service suite à un dysfonctionnement, etc…). Le système permettra un archivage de ces indicateurs par opérateur. À termes, le système permettra une visualisation cartographique des performances des opérateurs et une visualisation des indicateurs historisés par opérateurs.