---
title: SEVES
mission: Une gestion mutualisée de tous les événements sanitaires entre la DGAL et les services déconcentrés
sponsors:
  - /organisations/dgal
incubator: agriculture
phases:
  - name: investigation
    start: 2023-06-02
  - name: construction
    start: 2023-11-14
stats: false
contact: thomas.glatt@beta.gouv.fr
thematiques: []
usertypes: []
techno: []
link: https://github.com/betagouv/seves
---
## Le contexte
Aujourd'hui, lorsqu'un évènement sanitaire survient, ce sont les directions départementales (DDecPP) , les directions régionales (SRAL) et l'administration centrale (MUS) qui sont en charge de décrire, suivre, diffuser l'information et d'accompagner les acteurs vers une maitrise des risques. Ces évènements peuvent survenir dans 3 domaines :  la sécurité sanitaire des aliments, la santé des végétaux et la santé des animaux. 

Il n'y a pas de solution numérique nationale unifiant le suivi pour l'ensemble des agents publics concernés. On compte néanmoins le logiciel SORA Alertes, développé historiquement par la DGCCRF, qui permet à ce jour aux agents en charge de la sécurité sanitaires des aliments de qualifier et gérer certains évènements (Alertes nationales, alertes locales, notifications sanitaires, autres non conformités produits). L'usage de SORA a permis de confirmer le besoin urgent d'un outil partagé. Néanmoins, ce logiciel sera décommissionné en 2025.

L'investigation a donc portée sur la l'importance d'étendre les fonctionnalités de SORA a l'ensemble des agents concernés (santé des végétaux et santé des animaux), sur les améliorations fonctionnelles nécessaires à une meilleure performance, aux adaptations nécessaires pour couvrir l'ensemble des évènements.

## Le problème

Le problème générer par l'absence de moyens de description et de suivi mutualisés sont multiples et touches l'ensemble des services concernés.

*Une source de dysfonctionnement*
- chaque acteur ne dispose que d’une information partielle (boucles de mail incomplètes et évolutives) pour fonder ses prises de décision
- chaque acteur reçoit des informations dont il n’a pas l’utilité (boucles de mail par excès)
- la vision d’ensemble n’est pas partagée, sauf -pour le temps court, lors de conférences téléphoniques qui doivent par nature rester rares pour pouvoir s’imposer dans les agendas, et -pour le temps longs, dans le cadre de retex ou de bilans que nous n’avons pas les moyens de multiplier
- les données ne sont pas consolidées collectivement et en temps réel, ce qui nuit à leur qualité 

*Une perte de chance en matière d’anticipation et d’apprentissage*
- les non-acteurs d’aujourd’hui, qui peuvent être les acteurs de demain sur cet évènement ou sur une autre similaire, n’ont pas accès à l’information 

*Un défaut de valorisation des données par les services déconcentrés*
- chacun ne peut valoriser que les données qu’il collecte lui-même, par exemple, une structure locale ne peut pas caractériser son activité par rapport à un référentiel national ou régional.
- aucun service, comme les DDecPP du siège d’une entreprise, n’est en mesure d’analyser la typologie des alertes et autres évènements suivis par les DdecPP des établissements secondaires de cette entreprise, et de détecter des convergences (ex. un même comportement traduisant une politique d’entreprise problématique) ou des discordances (ex. un défaut d’harmonisation).  
 
*Des coûts humains et matériels dispendieux*
- chaque acteur enregistre ses propres échanges sur ses propres serveurs
- chaque acteur construit ses propres outils de suivi qui ne bénéficient qu’à lui-même : tableaux, chrono …

*Une traçabilité fragile*
- l’archivage étant manuel, il est sujet à oubli. 

## La solution 

SÈVES est un outil à destination de l’ensemble de la DGAL et de ses services déconcentrés, il permet la gestion partagée des événement sanitaires : sécurité sanitaires des aliments, santé des végétaux et santé des animaux. 
SÈVES permet à la fois de décrire les évènements sanitaires, de partager les informations nécessaires à leur gestion, et de tracer les décisions prises et les actions engagées. 
SÈVES permet aussi la valorisation de ces actions (analyse de risque, bilan annuel des services, inducteurs d’activité, etc.). 

Il contribue à l’harmonisation des mesures de gestions sur les territoires et à la capitalisation des savoirs. 

## La stratégie 

Pour déployer l'usage de SÈVES à l'ensemble des agents concernés, nous débuterons par la branche santé des végétaux. 
Car cette branche est aujourd'hui : 
- non-outillée
- compte moins d'agents sur le territoire que les autres branches
- a consolider l'ensemble des descripteurs pour les rendre compatible avec une traçabilité européenne
- demande moins d'interfaçage avec des bases de données existantes.
Une fois le MVP testé et approuvé par les agents de la santé des végétaux, l'outil sera adapté et déployé auprès de la branche sécurité des aliments puis enfin auprès de la branche santé animale. 

## Construction
Depuis la fin d'année 2023, la construction du produit a permis la production du MVP santé des végétaux (déploiement T4 2024).

## Budget

| Poste | 2023 | 2024 (jan-sept)| 
| --- | --- | --- | 
| Coaching | 16 000 | 45 000 | 
| Développement | 6 000 | 110 000 | 
| Design | 6 000 | 75 000 | 
| TOTAL TTC | 28 000|230 000 | 

