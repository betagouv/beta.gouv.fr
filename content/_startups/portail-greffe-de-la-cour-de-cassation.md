---
analyse_risques: false
mon_service_securise: false
contact: metiers.dsi.courdecassation@justice.fr
thematiques:
  - Justice
usertypes:
  - etat
techno:
  - 'Nodejs, Typescript, React, Nextjs, mongoDB  '
title: Portail greffe de la Cour de cassation
mission: 'Permettre à la Cour de cassation de s''assurer que les dossiers qui vont être jugés sont correctement enregistrés, orientés, distribués, instruits et rendus par les magistrats et greffiers désignés. Permettre à la Cour de cassation de s''assurer que les audiences se tiennent conformément à la réglementation et que toutes les procédures sont respectées. '
incubator: justice
sponsors:
  - /organisations/cour-de-cassation
phases:
  - name: investigation
    comment: null
    start: 2025-03-03
    end: null
  - name: construction
    comment: null
    start: 2025-06-16
    end: null
events:
  - name: committee
    comment: ''
    date: 2025-06-12
---
## Contexte

La Cour de cassation, en tant que plus haute juridiction de l'ordre judiciaire français, doit rendre des décisions exemptes de tout défaut, respecter une procédure stricte, fixée par la loi et dans les délais impartis. 
Ce sont environ 20.000 pourvois en cassation qui sont traités chaque année. 
La Cour de cassation doit en réaliser l'enregistrement, l'instruction et le jugement. Elle s'assure de la clôture d’un dossier en matière civile et pénale. Elle est aussi responsable de produire les certificats de non-pourvoi dans les autres affaires qui n’ont pas fait l’objet d’un pourvoi.
La saisine de la Cour de cassation nécessite la constitution d’un dossier de procédure, dont l’alimentation, l’orientation et la distribution sont supervisées en temps réel. Ces dossiers sont instruits par plusieurs magistrats désignés. Des audiences sont préparées, au cours desquelles ces dossiers sont les supports des débats et des jugements. L’ensemble de la chaîne procédurale nécessite des diligences de mises en état, de notifications, de convocations, de productions documentaires qui respectent les impératifs légaux.
La Cour de cassation tient, en moyenne, une cinquantaine d’audiences par semaine. Ces audiences sont conduites par une des six chambres de la Cour de cassation, concernent des affaires de toutes natures et pour lesquelles les types de formation de jugement amenées à siéger varient. La gestion du calendrier des audiences, la temporalité complexe des dossiers prêts à être audiencés, et l’administration de la charge des audiences, par dossier, nécessitent une approche produit spécifique.



## Problème

LConcernant la gestion des dossiers :

Aucune erreur ne doit être possible dans le respect des diligences, des formalités et des délais (logique du zéro défaut), afin que les décisions puissent être rendues en qualité, au terme d’une procédure respectant les délais impartis.   
Les natures particulières et spécifiques des différentes procédures dont la Cour de cassation a la charge sont complexes et très spécifiques. Actuellement, les nombreuses vérifications d’intégrité et de cohérence alourdissent la charge des personnels de la Cour, à commencer par le greffe, avec pour effets d’allonger les délais de traitement et d’accroître les stocks d’affaires en cours, ce qui amplifie les problèmes rencontrés (i.e. la Cour a connu jusqu’à présent un accroissement tendanciel de la durée des affaires).

Les saisines de la Cour de cassation pour être jugées doivent : 
- Permettre la création/mise à jour d'une structure "Dossier" regroupant toutes les informations requises relatives à une affaire, en particulier un pourvoi (civil ou pénal), transmises par les intervenants externes à la Cour, pour permettre son traitement par celle-ci.
- Permettre l'affectation à un service/chambre puis à des magistrats (siège et parquet général) requis pour instruire le dossier en tenant compte de ses caractéristiques.
- Permettre au greffe d'accéder à l'ensemble des informations utiles du dossier et aux outils requis pour faciliter l’établissement des avis et des notifications (avis, notifications, convocations, transmissions) adressés aux justiciables et à leurs avocats. 
- Permettre aux magistrats d'accéder à l'ensemble des informations utiles du dossier pour son instruction et permettre l'accès aux outils requis pour faciliter la production documentaire des magistrats (rédaction des rapports, avis, projets d'arrêt…) et leur dépôt. 
À ce titre, pour éviter les erreurs, il faut mettre en œuvre des mécanismes d'alertes à destination des greffes et des magistrats pour leur fournir des informations ou pour indiquer qu'une tâche est à réaliser sur un dossier, une audience, un rôle d'audience ou une décision. Il faut également améliorer le système permettant de déclencher et calculer les délais procéduraux applicables à chaque dossier. Il faut enfin mettre en place des événements lorsque certaines actions sont effectuées ou certaines pièces sont ajoutées à l'inventaire numérique pour que les uns et les autres puissent être informés et mis en mesure d’accomplir une nouvelle action requise sur un dossier. 

Concernant la gestion des audiences :

La Cour de cassation est composée de plusieurs chambres qui organisent chacune la gestion des audiences. Cela consiste à réaliser l’enregistrement de la composition des audiences et à prévoir les personnes adéquates pour la formation qui rendra le jugement. La diffusion et la publicité d’une audience, notamment aux parties concernées, sont synchronisées à leur saisie dans l’applicatif, ce qui ne permet pas d’administrer sereinement le planning, et contraint les magistrats des chambres et les greffes à gérer préalablement son élaboration hors outil.
Il importe d’améliorer le système actuel, qui ne permet pas de modifier la liste des dossiers d’une audience, imposant des solutions de contournement chronophages et sources de confusions.

De nombreux contrôles sont, aujourd’hui, réalisés sans aide ni outil, qui sont pourtant à portée de réalisation. La complexité des procédures nécessite que l’outil d’audiencement soit capable de proposer des audiences et des compositions spécifiques, qui répondent aux besoins de fond du litige. Le système actuel n’a pas totalement réussi à suivre l’évolution de l’activité juridictionnelle de la Cour, dans son contenu, dans sa réorganisation, et dans son évolutivité. Les caractéristiques des audiences ne sont plus totalement compatibles avec la souplesse que l’on doit accorder à l’outil, afin de permettre à la Cour de réagir aux difficultés du nombre, de la complexité, de la collégialité nécessaire et grandissante, afin de répondre, notamment, aux défis des litiges nouveaux et pluridisciplinaires.


## Solution

Concernant la gestion des dossiers :

Le portail doit permettre au personnel du greffe de pouvoir accomplir les diligences prévues par la loi dans chaque affaire et s'assurer que le dossier est exempt de tout défaut qui empêcherait la décision d'être rendue conformément aux exigences légales
Elle permet également de rendre compte, en temps réel, de l’état actuel du stock des dossiers, et de l’état d’avancement de chaque dossier, dans son détail. 

Concernant la gestion des audiences :

Le portail doit permettre aux magistrats de la Cour d’administrer chaque audience, d’apprécier la cohérence et la complétion du planning d’audience, tout en proposant au greffe le moyen d’exécuter toutes les diligences procédurales impératives, toujours en apportant, à l’ensemble des utilisateurs, une souplesse dans l’organisation, l’évolution et la définition des audiences planifiées. Pour ce faire, l’outil qui permet l’audiencement doit offrir un moyen de programmer à l’avance un planning non définitif, qui, une fois alimenté, analysé et évalué, permet sa déclaration, sa communication et son adaptabilité aux événements procéduraux qui interviennent avant l’audience. Cette adaptabilité doit déclencher les alertes et des automatisations prévisibles de diligences procédurales à effectuer par le greffe.
De plus, l’outil doit être capable d’identifier les éléments essentiels du dossier et des travaux qui y ont été versés, afin de suggérer aux magistrats décisionnaires de l’audiencement le type d’audience, la formation de jugement qui est pertinent au litige.

## Stratégie

Le portail vise à améliorer la gestion des dossiers par les personnels de la Cour de cassation. Les indicateurs de succès seront réellement connus à l’issue de l’investigation. Néanmoins, nous estimons qu’ils pourraient inclure : 
●	Une nette accélération des temps de traitements des dossiers par le greffe.
●	Une ouverture à la réorganisation de l’activité du greffe sur son cœur d’exercice.
●	Une amélioration de la fiabilité de l’état du stock et des circuits procéduraux exécutés (procédures au fond, procédures particulières, audiencement, gestion des pièces, gestion des décisions).

Ce portail permet également la création des audiences (infos, compositions, dossiers affectés) et la consultation des données nécessaires à leur préparation.
Outre la gestion du planning d’audiences, l’outil permet d’adapter les compositions de la formation qui juge, prenant en compte tous les cas procéduraux particuliers, et les changements de composition des formations de jugement. L’outil analyse les informations essentielles du dossier pour suggérer des dossiers à des types d’audiences et des types de formation qui répondent au mieux à la problématique juridique instruite.
Enfin, les fonctionnalités du produit permettant de gérer le rôle d’audience devront directement être interfacées à celles permettant d’éditer et de signer les décisions des affaires concernées. La corrélation étroite offerte par cet interfaçage permettra de fiabiliser le processus de prise de décision.

## Indicateurs d'impact
Le portail vise à améliorer la gestion des dossiers par les personnels de la Cour de cassation. Les indicateurs de succès seront précisément connus à l’issue de l’investigation.
Néanmoins, nous estimons qu’ils pourraient inclure :
●	Le temps gagné sur la vérification des données et la saisie informatique par le personnel de la Cour de cassation. Pour un dossier de pourvoi, cet impact pourra être évalué à différents moments clés de son traitement, retenus en raison du rôle majeur de l’usage du produit numérique dans le travail réalisé (mesure du temps actuel comparée à celle réalisée post mise en production).
●	Le temps gagné pour le traitement de demandes telles que la demande de certificat de non-pourvoi (objectif d’une division par un facteur moyen de 3 du temps actuel comparé à celui post mise en production). 
●	Le temps gagné via de nouveaux mécanismes de recherche et d’assistance à l’analyse juridique ou via une aide à la décision pour des cas similaires (+ déploiement dans les tribunaux de grande instance et cours d’appel).
●	Un accès plus rapide et facile aux dossiers : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel comparée à la mesure du temps post mise en production ; nombre de clics par diligence).
●	La réduction de la sollicitation du service informatique par le greffe (nombre d’interventions du service informatique pour débloquer des situations avant et après mise en production).

