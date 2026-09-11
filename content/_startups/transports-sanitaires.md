---
contact: julien.honnart@numerique.gouv.fr
thematiques:
  - Santé
  - Transports
usertypes: []
title: Transports sanitaires
mission: Pérenniser le système de transports sanitaires en apportant des gains d'efficience, au bénéfice de toutes les parties prenantes. Le bon transport, à un coût soutenable et qui garantit l'accès aux soins.
incubator: dinum
phases:
  - name: investigation
    start: 2025-12-15
  - name: construction
    start: 2026-05-28
events:
  - name: product_launch
    date: 2026-02-24
techno: []
contact_dinum: julien.honnart
sponsors:
  - /organisations/cnam
  - /organisations/dns
link: ''
---
## Contexte

Le transport sanitaire non urgent :

🚐 65 millions de trajets en taxi conventionné, VSL ou ambulance

👥 6,5 millions de Français bénéficiaires

💶 7 milliards d’euros pris en charge quasi intégralement par l’Assurance Maladie

Mais aussi :

🚫 15% des patients ne trouvent pas de transport

👥 20% des transports sont partagés (plusieurs patients à bord)

🛣️ 45% des transports sont réalisés à vide (sans patient à bord)

Sources : [Rapport charges et produits](https://www.assurance-maladie.ameli.fr/sites/default/files/2025-07_rapport-propositions-pour-2026_assurance-maladie.pdf) - Propositions de l’Assurance Maladie pour 2026, Assurance Maladie 07/2025 ; [Les dépenses de santé en 2024](https://drees.solidarites-sante.gouv.fr/sites/default/files/2025-12/Les%20d%C3%A9penses%20de%20sant%C3%A9%20en%202024_v17%20complet.pdf), DREES 09/2025 ; transporteurs)


## Problème

Aujourd’hui, le système de transports sanitaires ne permet pas d’allouer efficacement les ressources disponibles, ce qui génère une trajectoire budgétaire non pérenne, des tensions organisationnelles et des difficultés d’accès aux soins.

Le vieillissement de la population, le développement des maladies chroniques et l’organisation des soins (regroupement d’établissements et développement de l’ambulatoire) nécessitent davantage de transports, en grande partie récurrents. Ces trois grands facteurs de long terme mettent le système de transport sanitaire en tension, financièrement et logistiquement.

La capacité de transport de la flotte de près de 70 000 véhicules (40 000 taxis conventionnés, 14 000 VSL et 15 000 ambulances) semble sous-utilisée, avec 20% des transports partagés avec plusieurs patients à bord et près de la moitié des trajets réalisés à vide, sans patient à bord (source : Assurance Maladie et transporteurs).

Dans trois rapports successifs ([2012](https://www.ccomptes.fr/sites/default/files/EzPublish/rapport_securite_sociale_2012_transports_patients.pdf), [2019](https://www.ccomptes.fr/system/files/2019-10/RALFSS-2019-06-transports-programmes-secteurs-sanitaire-medicosocial.pdf) et [2026](https://www.ccomptes.fr/sites/default/files/2026-05/20260527-RALFSS-2026-7-Transports-patients-a-la-charge-de-l-assurance-maladie.pdf)), la Cour des Comptes alerte sur une croissance rapide des dépenses de transport, supérieure à celle des soins, alors même que toutes les demandes de transport ne sont pas satisfaites, s’interrogant sur l’effectivité et l’efficacité de sa régulation. Le transport sanitaire est identifié par l’Assurance Maladie comme un poste d’économies prioritaire afin de pouvoir équilibrer ses comptes, dont la branche maladie accuse un déficit de 17,2 milliards d’euros en 2025 ([LFSS 2026](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053226389)).

Au-delà des enjeux financiers, les patients comme les soignants ont parfois des difficultés à trouver un transport disponible et adapté. Un transport non disponible ou mal coordonné, ce sont des temps d’attente importants, des retours tardifs à domicile, des rendez-vous manqués, des journées d’hospitalisation qui se prolongent, voire dans certains cas un renoncement aux soins pouvant mettre les patients en danger.

Les soignants connaissent mal et ont des difficultés à faire appliquer les règles d’éligibilité au transport sanitaire. Ils subissent parfois des pressions de la part des patients et des transporteurs pour prescrire des transports dans des cas non éligibles au remboursement de l’Assurance Maladie. La Prescription Médicale de Transport (PMT) est par ailleurs très souvent déléguée aux secrétaires médicales. 

Dans les établissements, le transport impacte l’organisation des soins et est vu comme un irritant majeur. Appels aux transporteurs, gestion des imprévus, consultations ou opérations retardées font perdre du temps médical, génèrent de la charge mentale et désorganisent les services. Un lit ou une chambre occupés par un patient en attente de transport, c’est un lit en moins pour un patient qui en a besoin.

Les transporteurs dénoncent de leur côté les baisses de tarifs de l’Assurance Maladie et pour certains une baisse d’activité, notamment suite au [protocole d’accord de maîtrise des dépenses](https://www.ameli.fr/tarn-et-garonne/transporteur-sanitaire/actualites/transports-sanitaires-signature-d-un-nouveau-protocole-d-accord) pour les transporteurs sanitaires (septembre 2025) et la [convention-cadre nationale](https://www.ameli.fr/paris/taxi-conventionne/actualites/nouvelle-convention-cadre-meilleur-acces-aux-soins-et-tarification-plus-equitable-et-plus-simple-0) pour les taxis (novembre 2025).

## Investigation

La phase d’investigation a donné lieu à plus de 100 entretiens réalisés avec l’ensemble des parties prenantes du transport sanitaire :

- les patients et leurs représentants
- les prescripteurs, soignants et personnels administratifs (en ville et en établissement)
- les établissements de santé (publics et privés)
- les administrations en charge : Assurance Maladie, Direction de la Sécurité Sociale (DSS), Direction Générale de l’Offre de Soins (DGOS), Délégation au Numérique en Santé (DNS)
- les transporteurs et leurs représentants (transporteurs sanitaires et taxis conventionnés)
- les éditeurs de logiciels (plateformes de commandes et ERP transporteurs)
- les experts et consultants spécialistes des transports sanitaires

Cette phase d’investigation menée à la Délégation au Numérique en Santé (DNS) a permis d’identifier et valider 2 enjeux majeurs pour le projet, qui se poursuit à la Caisse Nationale d’Assurance Maladie (CNAM), en lien avec la Direction de la Sécurité Sociale (DSS).

## Enjeu 1 : Sécuriser la chaîne du transport

### Simulateur d’éligibilité

En réponse à la complexité et à la méconnaissance des règles, sources de tensions récurrentes entre prescripteurs et patients, un simulateur d’éligibilité aux transports sanitaires est en cours de développement. Il sera mis à disposition des prescripteurs, soignants et personnels administratifs, en ville et à l’hôpital. 

Le simulateur permettra d’évaluer rapidement l’éligibilité d’un patient et d’identifier, le cas échéant, le moyen de transport le plus adapté à sa situation, dans le strict respect de la réglementation de l’Assurance Maladie.

Pour tout patient éligible, une prescription électronique pré-remplie sera émise. Dans le cas contraire, une fiche explicative personnalisée pourra être délivrée au patient afin d’objectiver l’application des règles d’éligibilité.

### Prescription électronique

Aujourd’hui, 90% des prescriptions médicales de transport demeurent au format papier, ce qui favorise les risques d’abus et de fraude, tout en nuisant à l’efficacité des soignants et à la productivité des transporteurs.

La généralisation d’une nouvelle prescription électronique de transport visera à simplifier la saisie et l’exploitation des données, garantir l’inaltérabilité du contenu, automatiser les contrôles de facturation et assurer une traçabilité de bout en bout, depuis la prescription médicale jusqu’au paiement.

## Enjeu 2 : Optimiser les flux patients

Aujourd’hui, 90% des commandes de transport s’effectuent en dehors des plateformes de commandes des établissements hospitaliers. Ces commandes sont pour la plupart réalisées par les patients ou leurs aidants, directement auprès des transporteurs. La forte fragmentation de l’offre (5 000 transporteurs sanitaires et 27 000 sociétés de taxis conventionnés) atomise les commandes et limite les opportunités de transport partagé.

Une centralisation accrue de ces commandes permettrait d’atteindre la masse critique nécessaire à une optimisation à plus grande échelle.

Des travaux sont en cours pour mieux quantifier le potentiel d’optimisation, déterminer l’échelle territoriale la plus adaptée pour centraliser les flux, et définir la stratégie la plus pertinente en prenant en compte l’écosystème existant.

## Méthode de travail

L’ensemble des travaux est mené au sein de l’Assurance Maladie afin de garantir leur adéquation aux besoins métiers et la pérennité des développements dans les systèmes d’information.

Les outils développés sont co-construits et testés directement avec les utilisateurs finaux afin de s’assurer qu’ils correspondent aux réalités du terrain en vue de leur déploiement à plus large échelle.

La stratégie est quant à elle construite à partir de données fiables et en échanges constants avec l’ensemble des parties prenantes qui œuvrent tous les jours aux transports sanitaires.