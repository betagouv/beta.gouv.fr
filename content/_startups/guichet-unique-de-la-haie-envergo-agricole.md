---
analyse_risques: false
mon_service_securise: false
contact: contact@haie.beta.gouv.fr
link: haie.beta.gouv.fr
thematiques:
  - Agriculture
  - Écologie
  - Administratif
usertypes:
  - collectivite-territoriale
  - etat
  - entreprise
  - particulier
techno:
  - django
  - python
  - docker
  - sql
title: Guichet unique de la haie (Envergo agricole)
mission: Simplifier la prise en compte de la réglementation sur les haies pour mieux les préserver
incubator: mtes
sponsors:
  - /organisations/dgaln
  - /organisations/dgpe
phases:
  - name: investigation
    comment: null
    start: 2024-05-01
    end: null
  - name: construction
    comment: null
    start: 2024-09-01
    end: null
events:
  - name: product_launch
    comment: ''
    date: 2024-11-01
---


## Contexte

Les haies bocagères jouent un rôle essentiel dans la préservation de la biodiversité, la protection des sols et la régulation des cycles de l’eau. Leur valeur est de plus en plus reconnue dans les politiques agricoles et environnementales. Pourtant, 20 000 km de haies disparaissent chaque année en France.
Face à cette situation, les ministères en charge de l’agriculture et de l’environnement ont annoncé en septembre 2023 le [« Pacte en faveur de la haie »](https://agriculture.gouv.fr/presentation-du-pacte-en-faveur-de-la-haie-dote-dun-budget-de-110-meu-des-2024), visant à restaurer 50 000 km de haies d’ici à 2030, (soit un gain d’environ 6% par rapport au linéaire total aujourd’hui).

## Problème

Tout projet entraînant la destruction de haies est soumis à une ou plusieurs autorisations,  concernant des réglementations multiples :
- réglementation sur les espèces protégées,
- pour les haies situées sur des parcelles agricoles, conditionnalité aux aides de la politique agricole commune (PAC)
- autres règles environnementales : Natura 2000, Loi sur l’eau, réserves naturelles…
- règles d’urbanisme, de la compétence des communes
- protection des captages d’eau, relevant du code de la santé publique
- et d’autres dispositions, par exemple du code rural ou du droit de la propriété

Les démarches administratives sont complexes, peu lisibles, et impliquent de multiples interlocuteurs et services instructeurs, qui peuvent difficilement se coordonner.

Deux conséquences : 
- **les atteintes à l’environnement** : faute de clarté sur les règles et les attentes administratives, certaines destructions de haies se font sans les autorisations nécessaires, et donc sans l’accompagnement qui permettrait de réduire les impacts ou l’application de mesures de compensation
- **le risque juridique pour les porteurs de projet** : lorsqu’ils sollicitent et obtiennent une autorisation, les porteurs de projets n’ont pas conscience qu’elle n’est pas suffisante, et s’exposent ainsi à des poursuites en cas de contrôle


## Une piste de solution déjà expérimentée

En réponse à cette situation, des dispositifs dits de « guichet unique de la haie » existent déjà dans certains départements. Ils offrent aux usagers un **point d’entrée unique** pour :
- s’informer sur les obligations réglementaires et les démarches à suivre ;
- faire instruire leur demande : l’administration prend en charge la complexité, coordonne les services concernés et délivre une réponse unique, alignée sur toutes les prescriptions applicables. Dans la majorité des cas, cela implique une instruction conjointe des réglementations PAC, espèces protégées, eau et nature.

Ces guichets uniques sont parfois associés à une **simplification de l’application de la réglementation sur les espèces protégées**, qui permet :
- d’éviter au porteur de projet, pour les projets les moins impactants, d’avoir à réaliser un inventaire écologique sur quatre saisons ;
- de connaître les attentes de l’administration en termes de replantation dès l’amont du projet, plutôt qu’à la fin de l’instruction de plusieurs mois.

Bien mis en avant et accompagnés d’une communication efficace, ces dispositifs ont conduit à une augmentation du nombre de demandes d’arrachage. Toutefois, les effets sur l’augmentation effective du linéaire restent encore difficiles à mesurer.

## Le service numérique de guichet unique de la haie

La présente startup d’État vise à prolonger et généraliser ces dispositifs à l’échelle nationale, tout en surmontant leurs limites actuelles.

Elle s’appuie sur le simulateur réglementaire [Envergo](https://envergo.beta.gouv.fr), [une autre startup d'État beta.gouv.fr](https://beta.gouv.fr/startups/envergo.html) initialement dédié aux projets d’aménagement.

Les résultats attendus : 
- augmentation du taux de destructions de haie déclarées, et donc instruites
- réduction des délais d’instruction
- succès des services instructeurs à se coordonner pour accorder une autorisation aux prescriptions alignées
- temps d'instruction concentré sur les projets les plus impactants
- réduction du contentieux sur des projets autorisés à au moins un titre
- amélioration de la satisfaction des usagers

