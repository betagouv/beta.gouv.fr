---
mission: Évaluez vos aides à la rénovation en 3 minutes en fonction de votre situation et de votre projet
incubator: dinum
title: Mes Aides Réno
contact: louis.laroche@beta.gouv.fr
accessibility_status: non conforme
link: https://mesaidesreno.beta.gouv.fr
repository: https://github.com/betagouv/reno
techno:
  - Next.js
  - React
  - publi.codes
sponsors:
  - /organisations/anah
  - /organisations/dinum
  - /organisations/sgpe
phases:
  - name: investigation
    start: 2023-12-15
  - name: construction
    start: 2024-02-15
  - name: transfer
    start: 2025-10-07
  - name: alumni
    start: 2025-12-18
thematiques:
  - Écologie
  - Logement
fast:
  promotion: 16
  montant: 200000
usertypes:
  - particulier
  - entreprise
stats_url: https://mesaidesreno.beta.gouv.fr/stats
dashlord_url: https://dashlord.incubateur.net/url/mesaidesreno-beta-gouv-fr/
budget_url: https://beta.gouv.fr/startups/mesaidesreno.html#notre-budget
impact_url: https://mesaidesreno.beta.gouv.fr/stats
events:
  - name: committee
    date: 2025-10-07
    comment: Décision de transfert total à l'Anah
---
# État du service numérique

> ⚡️ Produit transféré en Décembre 2025 : L'ANAH est aujourd'hui responsable de l'évolution de MesAidesRéno : [mesaides.france-renov.gouv.fr](http://mesaides.france-renov.gouv.fr). Code bientôt disponible sur  [github.com/anahgouv](https://github.com/anahgouv).

# Contexte

**Le logement représente 11 % de nos émissions de gaz à effet de serre (GES).** Il s’agit du deuxième plus gros poste d’émission après les transports. Le gouvernement s’est dès lors fixé des ambitions importantes en matière de rénovation énergétique des bâtiments.

* “*En finir avec les passoires thermiques et renforcer la performance énergétique des bâtiments*.”

* “*Accélérer la rénovation et améliorer le niveau de performance énergétique des bâtiments publics et des logements, en tenant l’objectif de 700 000 rénovations par an (MaPrimeRénov’).*” Feuille de route du MTE

Avec un objectif de **700 000 rénovations par an**, les moyens accordés par l’État pour la rénovation du parc privé sont inédits en 2024 : **4 milliards d’euros sont dédiés à l’aide au financement des ménages** dans le cadre de MaPrimeRénov’ (ANAH), auxquels s’ajoutent des aides locales et d’autres dispositifs.

La plupart des ménages propriétaires (occupants ou bailleurs) sont désormais éligibles à une aide substentiel de l’état. Pourtant, l’incitation financière ne semble pas jouer pleinement son rôle. La barrière financière reste encore l’un des principaux freins à la construction d’un projet de rénovation énergétique.

**Dans ce contexte, l’ANAH, le SGPE et la DINUM** ont décidé d’associer leurs efforts pour simplifier et diffuser plus largement l’information sur les aides à la rénovation énergétique.

# Problème

En décembre 2023, l’Agence nationale pour l’information sur le logement (ANIL) a réalisé une enquête auprès d’un panel de 3000 ménages. Si plus de la moitié d’entre-eux a réalisé ou envisage de réaliser à court terme des travaux de rénovation énergétiques, **69 % des participants à l’enquête jugent l’accès à l’information sur les aides à la rénovation trop compliqué.**

Parmi les principaux griefs remontés lors de nos échanges avec des usagers:

* Des évolutions régulières des critères d’éligibilité et des barèmes;

* Une superposition de dispositifs à l’échelle locale et nationale;

* Une éligibilité aux aides basée sur de multiples critères, qui compliquent la lisibilité des dispositifs, notamment à travers les notions de performance de la rénovation;

* La crainte des “arnaques” et la défiance vis-à-vis de nombreuses démarches frauduleuses;

* La nécessité avec la réforme de 2024 de faire un choix entre deux parcours d’accompagnement;

* Une abondance d’informations génériques et une difficulté à trouver les informations pertinentes par rapport à ma propre situation et celle de mon logement;

* La difficulté à évaluer le reste à charge, une fois les aides déduites;

* Et parfois, la difficulté à identifier les bons interlocuteurs susceptibles de les accompagner (…)

# Solution

## Proposition de valeur

1. MesAidesRéno **accompagne les usagers à construire** le projet de rénovation énergétique de leur logement en les informant sur les aides auxquelles ils et elles ont droit, et le montant (en euros) associé à celles-ci.

2. MesAidesRéno est **ancré dans l'écosystème de la rénovation énergétique**, présent directement dans le parcours des usagers (stratégie **d'aller vers**) :

   1. intégré en iframe sur des sites d'annonces immobilières (exemple : leboncoin, ouest france immo), des sites de pros de la rénovation et des sites publics

   2. utilisé en API par des professionnels qui utilisent le seul moteur de calcul officiel, gratuit, mis à jour et avec un code ouvert.

3. MesAidesRéno **va au delà des aides à la rénovation** **énergétique** (MaPrimeRénov' gestes et parcours accompagné, Certificats d'économie d'énergie, prêts à taux zéro...). Le simulateur inclut aussi les autres aides nationales de l'ANAH : MaPrimeAdapt' et Ma Prime Logement Décent. A noter que tous nos parcours sont disponibles pour l'hexagone et les territoires d'Outre-Mer, ainsi que pour les individus et les copropriétés.

En octobre 2025, sur les **159 000 simulations** qui ont été effectuées :

* 38% ont eu lieu sur le site [mesaidesreno.beta.gouv.fr](http://mesaidesreno.beta.gouv.fr),

* pour 28% en iframe chez nos partenaires,

* et 35% en API par des tiers.

## De quoi est composé MesAidesRéno ?

* **Un simulateur principal** : accessible depuis le site, les iframes, et en API. C'est un moteur de calcul robuste avec et sans interface.

* **Des calculettes** : mini simulations, en amont du parcours d’information dont le but est de donner de la valeur et orienter vers le simulateur (ex : liste des aides, plus value verte, réduction facture)

* Une page **partenaires** : pour leur permettre d'intégrer les simulateurs et les calculettes en iframe, et api, ou en bibliothèque en téléchargeant le code source.

* De la **transparence** : des statistiques publiques, et un code ouvert et réutilisable.

* Des canaux pour écouter **les voix des usagers** : des recherches utilisateur·ices régulières, des formulaires de contact impactant l'évolution du produit, et des articles de blogs expliquant nos choix.

# Startup d'État

## Chronologie

* Décembre 2023 - Mars 2024 : Création de la preuve de concept de MesAidesRéno.

* Mai à Septembre 2024 : Obtention du FINDPE, accélération du développement grâce à 3 recrutements.

* Octobre 2024 : Accélération du déploiement (1er partenaire majeur)

* Novembre 2024 : Comité d'investissement, accord d'intégration et de reprise par l'ANAH. Accord de financement pour 2025.

* Janvier 2025 : Arrivée de l'intrapreneur (entrepreneur d'intérêt général)

* Mars 2025 : Obtention du FAST pour accélérer le déploiement et améliorer l'impact.

* Juin 2025 : Fermeture des guichets MaPrimeRénov' parcours accompagné. En parallèle, accompagnement de la DINUM pour trouver un modèle d'organisation produit pour l'ANAH.

* Juillet 2025 : Comité d'investissement, vers un transfert du logiciel et développement des autres aides nationales de l'ANAH (hors rénovation).

* Octobre 2025 : Présentation de la réalisation de tous les prérequis. Transfert acté sans l'équipe ni reprise de l'organisation produit.

* Décembre 2025 : Après un transfert de compétences de plus d'un mois, sont réalisés le déploiement et redirection de MesAidesRéno à iso périmètre sur un sous-domaine ANAH [mesaides.france-renov.gouv.fr](http://mesaides.france-renov.gouv.fr). Départ de l'équipe MesAidesRéno.

A venir en 2026 :

* réouverture et transparence du code publié sur [github.com/anahgouv](https://github.com/anahgouv).

* Remplacement du simulateur FranceRénov' par MesAidesRéno.

* Réurbanisation et sécurisation de l'outil.

## Mesure de l'impact

### Contexte

Les indicateurs d'impact étaient initialement portés sur le nombre de simulations terminées car c'était le meilleur indicateur proxy de l'intérêt des gens pour le simulateur et donc pour un potentiel passage à l'acte vers la rénovation énergétique de leur logement. En mai 2025, avec la fermeture des guichets et plus généralement tout au long de l'année 2025 avec la consommation totale des aides, augmenter le flux des rénovations n'était plus l'enjeu principal.

Après des ateliers entre la DINUM et l'ANAH de nouveaux indicateurs ont été établis.

### Indicateurs d'impact suivis depuis Juin 2025 :

1. **Améliorer la qualité des rendez-vous ECFR et fluidifier le parcours usager**\
   🧮 mesure : 150 000 leads qualifiés apportés aux ECFR après une simulation\
   ▶️ à date : 18 000 générés entre juillet et novembre

2. **Préparer les cas d’usage pour les comptes France Rénov’ et contribuer à leur adoption**\
   🧮 mesure : 25 000 comptes usagers créés sur France Rénov’ via MesAidesRéno\
   ⏸️ travaux non commencés

## Budget

### Bons de commande

|               |           |
| ------------- | --------- |
| DINUM 24      | 82 000 €  |
| FINDPE 24     | 300 000 € |
| FAST DINUM 25 | 200 000 € |
| ANAH 25       | 250 000 € |

### Répartition du budget

|                                          |               |          |
| ---------------------------------------- | ------------- | -------- |
| Poste                                    | Coût          | Part     |
| Développement                            | 435 515 €     | 51 %     |
| Commercial                               | 139 406 €     | 16 %     |
| Design                                   | 111 055 €     | 13 %     |
| **Total engagé&#x20;**(hors RH)          | **685 976 €** | **81 %** |
| Produit & intrapreneuriat (agents DINUM) | 160 000 €     | 19 %     |
| **Total global**                         | **845 976 €** | 100 %    |

# Apprentissages

* **La diffusion “là où sont les usagers” fonctionne.** L’intégration en iframe et en API, chez des partenaires publics et privés, a été déterminante pour atteindre des volumes de simulations élevés sans multiplier les campagnes de communication propres.

* **Un seul moteur de calcul officiel, avec un code ouvert et maintenu, crée de la confiance.** Le fait de proposer un calcul transparent, documenté et mis à jour régulièrement a facilité les réutilisations, réduit les divergences d’estimation et renforcé la légitimité du simulateur.

* **Le lien avec l’accompagnement humain est indispensable.** MesAidesRéno ne remplace pas les conseillers France Rénov’, il prépare les rendez-vous en qualifiant les situations et en donnant des ordres de grandeur, ce qui, on l'espère, améliore la qualité des échanges. Néanmoins, il a été très difficile de conduire les usagers de MesAidesRéno à contacter les ECFR après qu'iels aient parcouru leur éligibilité.

* **Les indicateurs doivent évoluer avec le contexte.** Passer d’un objectif de volume de simulations à des objectifs de “leads qualifiés” et de création de comptes France Rénov’ a permis de rester aligné avec la stratégie de l’ANAH et les contraintes budgétaires sur les aides.

* **L'approche produit a démontré son efficacité**. Avec 0,8 ETP au déploiement (partenariats et communication) et sans budget supplémentaire, MesAidesRéno a des volumes de simulation comparables à France Rénov'. La marque étant inconnue du grand public il y a 1 an, et le simulateur pas encore intégré sur la plateforme principale, cela démontre que les usagers y ont trouvé une valeur importante. Nous ne pouvons que souhaiter que cette approche soit conservée dans la suite de la vie du produit.

# Contacts

Vous pouvez contactez les responsables actuelles et passés du produit. En cas de doute, contactez l'équipe de reprise FranceRénov'.

| Équipe de reprise FranceRénov' | Contact                         |
| ------------------------------ | ------------------------------- |
| Produit                        | <melanie.martinet@anah.gouv.fr> |
| Communication                  | <sophie.maouche@anah.gouv.fr>   |

| Ancienne équipe MesAidesRéno' | Contact                      |
| ----------------------------- | ---------------------------- |
| Produit                       | <louis.laroche@beta.gouv.fr> |
| Incubateur                    | <mael.inizan@beta.gouv.fr>   |
