---
analyse_risques: false
mon_service_securise: false
contact: info.nomos2@justice.fr
thematiques:
  - Justice
usertypes:
  - greffiers
techno:
  - ansible
  - terraform
  - jenkins
  - redhat
  - Debian
  - docker
  - kubernetes
  - php
  - timescript
  - NodeJS
  - react
  - github actions
title: 'Portail greffe : gestion des audiences'
mission: 'Permettre à la Cour de Cassation de s''assurer que les audiences se tiennent conformément à la réglementation et que toutes les procédures sont respectées. '
incubator: justice
sponsors:
  - /organisations/cour-de-cassation
  - /organisations/mj
phases:
  - name: investigation
    start: 2025-01-27
events:
  - name: other
    date: 2024-12-23
    comment: Création de la fiche produit
link: ''
---

## Contexte

La Cour de cassation, en tant que plus haute juridiction de l'ordre judiciaire français, doit rendre des décisions exemptes de tout défaut, respecter une procédure stricte, fixée par la loi et dans les délais impartis. 
Ce sont environ 21.000 pourvois en cassation qui sont traités chaque année. 
La Cour de cassation doit en réaliser l'enregistrement, l'instruction et le jugement. Elle s'assure de la clôture d’un dossier en matière civile et pénale. Elle est aussi responsable de produire les certificats de non-pourvoi dans les autres affaires qui n’ont pas fait l’objet d’un pourvoi.
La saisine de la Cour de cassation nécessite la constitution d’un dossier de procédure, dont l’alimentation, l’orientation et la distribution est supervisée en temps réel. Ces dossiers sont instruits par plusieurs magistrats désignés. Des audiences sont préparées, au cours desquelles ces dossiers sont les supports des débats et des jugements. L’ensemble de la chaîne procédurale nécessite des diligences de mises en état, de notifications, de convocations, de productions documentaires qui respectent les impératifs légaux.

La Cour de cassation tient, en moyenne, une cinquantaine d’audiences par semaine, dont la nature est différente, dont le type de formations de jugements sont spécifiques, et sur l’ensemble des 6 chambres qui la composent. La gestion du calendrier des audiences, la temporalité complexe des dossiers prêt à être débattu, et l’administration de la charge des audiences, par dossier, nécessitent une approche produit spécifique.


## Problème

La Cour de Cassation est composée de plusieurs chambres qui organisent chacune la gestion des audiences. Cela consiste à réaliser l’enregistrement de la composition des audiences et à prévoir les personnes adéquates pour la formation qui rendra le jugement. La diffusion et la publicité d’une audience, notamment aux parties concernées, sont synchronisées à leur saisie dans l’applicatif, ce qui ne permet pas d’administrer sereinement le planning, et contraint les magistrats des chambres et les greffes à gérer préalablement son élaboration hors outil. 
Le système actuel est en partie obsolète et n'est plus totalement conforme aux usages actuels des greffes dans les différentes chambres. Il ne permet ainsi pas de modifier la liste des dossiers d’une audience, imposant des solutions de contournement chronophages et sources de confusions.

De nombreux contrôles sont, aujourd’hui, réalisés sans aide ni outil, qui sont pourtant à portée de réalisation. La complexité des procédures nécessite que l’outil d’audiencement soit capable de proposer des audiences et des compositions spécifiques, qui répondent aux besoins de fond du litige. Le système actuel n’a pas totalement réussi à suivre l’évolution de l’activité juridictionnelle de la Cour, dans son contenu, dans sa réorganisation, et dans son évolutivité. Les caractéristiques des audiences ne sont plus totalement compatibles avec la souplesse que l’on doit accorder à l’outil, afin de permettre à la Cour de réagir aux difficultés du nombre, de la complexité, de la collégialité nécessaire et grandissante, afin de répondre, notamment, aux défis des litiges nouveaux et pluridisciplinaires.


## Solution

La plateforme numérique de gestion des audiences doit permettre aux magistrats de la Cour d’administrer chaque audience, d’apprécier la cohérence et la complétion du planning d’audience, tout en proposant au greffe le moyen d’exécuter toutes les diligences procédurales impératives, toujours en apportant, à l’ensemble des utilisateurs, une souplesse dans l’organisation, l’évolution et la définition des audiences planifiées. Pour ce faire, l’outil qui permet l’audiencement doit offrir un moyen de programmer à l’avance un planning non définitif, qui, une fois alimenté, analysé et évalué, permet sa déclaration, sa communication et son adaptabilité aux événements procéduraux qui interviennent avant l’audience. Cette adaptabilité doit déclencher les alertes et des automatisations prévisibles de diligences procédurales à effectuer par le greffe.
De plus, l’outil doit être capable d’identifier les éléments essentiels du dossier et des travaux qui y ont été versés, afin de suggérer aux magistrats décisionnaires de l’audiencement le type d’audience, la formation de jugement qui est pertinent au litige.


## Stratégie

Cette plateforme permet la création des audiences (infos, compositions, dossiers affectés) et la consultation des données nécessaires à leur préparation.
Outre la gestion du planning d’audiences, l’outil permet d’adapter les compositions de la formation qui juge, prenant en compte tous les cas procéduraux particuliers, et les substitutions de magistrats. L’outil analyse les informations essentielles du dossier pour suggérer des dossiers à des types d’audiences et des types de formation qui répondent au mieux à la problématique juridique instruite.
Enfin, le produit doit proposer, en son sein, l’outil permettant de renseigner le rôle d’audience, qui alimentera de façon synchronisée le système permettant de réaliser les décisions qui y sont prises, accordant la souplesse du produit à l’impératif de fiabilité du résultat des audiences.

**Indicateurs d'impact**

L’application « greffe gestion des audiences » vise à améliorer la gestion des audiences par les personnels de la Cour de Cassation. Les indicateurs de succès seront réellement connus à l’issue de l’investigation.
Néanmoins, nous estimons qu’ils pourraient inclure :
- la mesure de l'accélération des délais de traitement des procédures => réduction des temps de procédure (mesure du délai moyen d’une procédure vs mesure du délai moyen post MeP – estimation de combien de procédure peuvent être gérées à iso effectif)
- le temps gagné via de nouveaux mécanismes de recherche et d’assistance à l’analyse juridique ou via une aide à la décision pour des cas similaires (+ déploiement dans les TGI et CA) ;
- un accès plus rapide et facile aux dossiers : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel vs mesure du temps post MeP)
- la réduction de la sollicitation du service informatique par le greffe (nombre d’interventions du service informatique pour débloquer des situations avant et après MeP)

