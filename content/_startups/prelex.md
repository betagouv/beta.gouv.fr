---
contact: benjamin.hardy@beta.gouv.fr
link: https://prelex.beta.gouv.fr/
thematiques:
  - Collectivités
  - Territoires
  - Outil technique
usertypes:
  - etat
techno:
  - next.js
  - react
  - typescript
title: Prélex
mission: Garantir un contrôle de légalité des actes d'urbanisme fiable, tracé et tenu dans les délais.
incubator: mtes
contact_dinum: samuel.goldszmidt
contact_incubator: samuel.goldszmidt
phases:
  - name: investigation
    start: 2026-06-23
events:
  - name: product_launch
    date: 2026-08-12
---
## Contexte

La DDT31 assure, pour le compte du préfet de la Haute-Garonne, le contrôle de légalité des actes d'urbanisme — permis de construire, d'aménager, de démolir et déclarations préalables — transmis par les communes du département, via @CTES ou au format papier.

Chaque acte reçu doit être compté, enregistré, qualifié (enjeux, stratégie de contrôle de la commune), puis contrôlé dans le délai réglementaire de deux mois. La circulaire interministérielle du 22 décembre 2025 rehausse l'exigence : au moins 5 % des actes « non prioritaires » doivent être contrôlés, contre environ 0,1 % aujourd'hui.

## Problème

Avant Prélex, toute la chaîne tenait sur une constellation de tableurs partagés : 5 fichiers Excel (enregistrement Préfecture, enregistrement Sous-préfecture, décompte mensuel, statistiques d'enjeux, suivi des dossiers ADS), dans lesquels le même acte était ressaisi 3 à 4 fois.

Aucun garde-fou : pas de détection de doublon, pas de validation des dates, numéro MAJCS incrémenté à la main. Un report oublié = un écart durable entre les fichiers.
La stratégie de contrôle de mémoire : pour chaque acte, il fallait re-consulter — ou se rappeler — quelle commune était sous contrôle ce trimestre.
Des délais tenus à la main : les deux mois réglementaires, les suspensions pour demande de pièces, les dossiers urgents, calculés dans un onglet par année.
@CTES ne comble pas ce manque : l'outil enregistre la transmission côté État, mais ne pilote ni les enjeux, ni la stratégie, ni les délais du contrôle.
Qui en souffre : les agents instructeurs, dont une part importante du temps part en ressaisie plutôt qu'en contrôle ; l'unité, qui n'a pas de vue fiable de sa charge ni de ses délais.

Conséquences : un contrôle qui risque d'être incomplet ou hors délai, des actes illégaux qui échappent au filtre, une insécurité juridique pour les communes et les pétitionnaires, et un coût contentieux réel (l'annulation d'un PLU représente jusqu'à plusieurs M€ d'indemnisations).

## Solution

Prélex est la plateforme unique du contrôle de légalité des actes d'urbanisme à la DDT31 : elle enregistre les actes, pilote les délais et trace chaque décision. Une seule saisie, guidée et contrôlée, alimente cinq modules :

* Décompte — décompte mensuel des actes par commune et par type, agrégé automatiquement, avec journal des modifications.
* Enregistrement — saisie individuelle de l'acte, qualification des enjeux, numéro MAJCS attribué automatiquement, décision de mise au contrôle, statistiques calculées en direct.
* Contrôle — suivi du contrôle de légalité : statuts, demandes de pièces qui suspendent le délai, alertes visuelles avant échéance, recours gracieux et déférés.
* Stratégie — stratégie de contrôle mémorisée commune par commune et trimestre par trimestre (Fixe, Rotation, Ciblée), rappelée à l'agent au moment de la saisie.
* Cartographie — visualisation des couches géographiques du territoire (module en bêta).

Socle 100 % souverain : Grist (instance de l'État, DNUM) pour la donnée métier, ProConnect pour l'identité des agents (aucun compte à créer), Scalingo pour l'hébergement. Trois rôles applicatifs (Lecteur, Agent, Superviseur), avec blocage des écritures côté serveur.

Bénéficiaires : les agents instructeurs et les référents contrôle de la DDT31, les superviseurs (visa hiérarchique), le coordinateur de la stratégie de contrôle, la préfecture ; et in fine les communes et les pétitionnaires, dont les actes gagnent en sécurité juridique.

Suite envisagée : PrélexIA : une chaîne PDF → OCR → extraction pour pré-remplir un dossier automatiquement à partir des actes transmis, et libérer du temps de contrôle (cible : −60 à −70 % de temps de lecture et de ressaisie par dossier).

