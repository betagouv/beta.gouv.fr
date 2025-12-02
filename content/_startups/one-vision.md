---
analyse_risques: false
mon_service_securise: false
contact: sebastien.guilminot@dgfip.finances.gouv.fr
thematiques:
  - Administratif
usertypes:
  - etat
title: One Vision
mission: Offrir une vision globale et unifiée des dettes et crédits des usagers
incubator: fabrique-dgfip
phases:
  - name: investigation
    start: 2023-09-19
  - name: construction
    start: 2025-04-11
  - name: acceleration
    start: 2025-11-26
events:
  - name: committee
    date: 2025-04-11
  - name: committee
    date: 2025-11-26
techno:
  - bash
  - git
  - python
  - sql
sponsors:
  - /organisations/dgfip
link: ''
---
## Contexte et problématique

Afin d'améliorer le recouvrement dans les services, de nombreux outils ont été développés en local, sans aucune sécurité tant au niveau des croisements de données que sur les solutions techniques utilisées.
Ce besoin d'outillage devient incontournable aussi bien au vu des attentes des agents que sur les probabilités de recouvrement qu'offrirait ce genre d'outil à grande échelle.

## Solution

La construction du socle national du service numérique One Vision prend appui sur une première version développée et utilisée au niveau local depuis 2016 mais qui en l’état reste fragile, confrontée à des contraintes et des limites techniques.

Cette seconde version doit démontrer la faisabilité technique d’un outil d’envergure nationale afin de mettre à la disposition des agents du recouvrement une vision synthétique et fiable du redevable professionnel, aidant ainsi à la décision.

Afin de limiter le coût de développement du POC One Vision, ce dernier sera développé dans la partie expérimentale du Datalake, un espace sécurisé visé par la CNIL sous le pilotage de l'équipe Data Solutions et de l'intrapreneur et la restitution auprès des agents se fera via de la Dataviz.

## Objectifs à 6 mois: lancer une expérimentation pour mesurer l'impact de l'outil

L'expérimentation se déroulera sur une période d'environ un mois sur les départements de Charente-Maritime, du Val d'Oise et de l'Essonne auprès des agents:
* des Services de Gestion Comptable (SGC),
* des Services des Impôts des Entreprises (SIE),
* des trésoreries Amendes,
* des services de recouvrements de produits divers en direction.
---
L'expérimentation couvrira le périmètre des personnes morales de droit privé en exploitant les données:

**au niveau des sources débitrices** (ce que l'entreprise doit à l’État):
* amendes,
* restes à recouvrer du Secteur Public Local (loyer, etc...) (SPL),
* restes à recouvrer côté Impôts des Professionnels (Cotisation Foncière des Entreprises, etc..),
* recettes non fiscales (Recette des activités industrielles et commerciales, etc...).

**au niveau des sources créditrices** (ce que l’État doit à l'entreprise):
* de Taxe sur la Valeur Ajoutée (TVA),
* des excédents de versements (trop perçu de CVAE, etc...),
* de l'Impôt sur les sociétés (IS).


