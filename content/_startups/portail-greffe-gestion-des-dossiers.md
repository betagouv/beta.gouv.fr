---
analyse_risques: false
mon_service_securise: false
contact: info.nomos2@justice.fr
thematiques:
  - Justice
usertypes:
  - Greffiers
techno:
  - ansible
  - terraform
  - jenkins
  - redhat
  - debian
  - docker
  - kubernetes
  - php
  - timescript
  - nodeJS
  - react
  - github actions
title: 'Portail greffe : gestion des dossiers'
mission: Permettre à la Cour de Cassation de s'assurer que les dossiers ouverts et qui vont être jugés sont correctement initiés, orientés, distribués, instruits et rendus par les magistrats et greffiers désignés
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
---
## Contexte

La Cour de cassation, en tant que plus haute juridiction de l'ordre judiciaire français, doit rendre des décisions exemptes de tout défaut, respecter une procédure stricte, fixée par la loi et dans les délais impartis. 
Ce sont environ 21.000 pourvois en cassation qui sont traités chaque année. 
La Cour de cassation doit en réaliser l'enregistrement, l'instruction et le jugement. Elle s'assure de la clôture d’un dossier en matière civile et pénale. Elle est aussi responsable de produire les certificats de non-pourvoi dans les autres affaires qui n’ont pas fait l’objet d’un pourvoi.
La saisine de la Cour de cassation nécessite la constitution d’un dossier de procédure, dont l’alimentation, l’orientation et la distribution est supervisée en temps réel. Ces dossiers sont instruits par plusieurs magistrats désignés. Des audiences sont préparées, au cours desquelles ces dossiers sont les supports des débats et des jugements. L’ensemble de la chaîne procédurale nécessite des diligences de mises en état, de notifications, de convocations, de productions documentaires qui respectent les impératifs légaux.


## Problème

Aucune erreur ne doit être possible dans le respect des diligences, des formalités et des délais (logique du zéro défaut), afin que les décisions puissent être rendues en qualité, au terme d’une procédure respectant les délais impartis.   
Les natures particulières et spécifiques des différentes procédures dont la Cour de cassation a la charge sont complexes et très spécifiques. Actuellement les personnes en charge du dossier (magistrats, greffiers, parties, avocats aux Conseils) produisent de trop nombreuses vérifications d’intégrité et de cohérence, alourdissant la charge du greffe, avec pour effets d’allonger les délais de traitement et d’accroître les stocks d’affaires en cours, ce qui amplifie les problèmes rencontrés (i.e. la Cour connaît un accroissement tendanciel de la durée des affaires).

Les saisines de la Cour de Cassation pour être jugés doivent : 
- Permettre la création/mise à jour d'une structure "Dossier" regroupant toutes les informations requises relatives à un pourvoi (civil ou pénal), transmises par les intervenants externes à la Cour, pour permettre son traitement par celle-ci.
- Permettre l'affectation à un service/chambre puis à des magistrats (siège et parquet) requis pour instruire le dossier en tenant compte de ses caractéristiques.
- Permettre au greffe d'accéder à l'ensemble des informations utiles du dossier et aux outils requis pour faciliter l’établissement des avis et des notifications (avis, notifications, convocations, transmissions) adressés aux justiciables et à leurs avocats. 
- Permettre aux magistrats d'accéder à l'ensemble des informations utiles du dossier pour son instruction et permettre l'accès aux outils requis pour faciliter la production documentaire des magistrats (rédaction des rapports, avis, projets d'arrêt…) et leur dépôt. 
À ce titre, pour éviter les erreurs, il faut mettre en œuvre des mécanismes d'alertes à destination des greffes et des magistrats pour leur fournir des informations ou pour indiquer qu'une tâche est à réaliser sur un dossier, une audience, un rôle d'audience ou une décision. Il faut également améliorer le système permettant de déclencher et calculer les délais procéduraux applicables à chaque dossier. Il faut enfin mettre en place des événements lorsque certaines actions sont effectuées ou certaines pièces sont ajoutées à l'inventaire numérique pour que les uns et les autres puissent être informés et mis en mesure d’accomplir une nouvelle action requise sur un dossier. 


## Solution

La plateforme numérique de gestion des dossiers doit permettre au personnel du greffe de pouvoir accomplir les diligences prévues par la loi dans chaque affaire et s'assurer que le dossier est exempt de tout défaut qui empêcherait la décision d'être rendue conformément aux exigences légales
Elle permet également de rendre compte, en temps réel, de l’état actuel du stock des dossiers, et de l’état d’avancement de chaque dossier, dans son détail. 

## Stratégie

L’application « greffe gestion des dossiers » vise à améliorer la gestion des dossiers par les personnels de la Cour de Cassation. Les indicateurs de succès seront réellement connus à l’issue de l’investigation. Néanmoins, nous estimons qu’ils pourraient inclure : 
- Une nette accélération des temps de traitements des dossiers par le greffe.
- Une ouverture à la réorganisation de l’activité du greffe sur son cœur d’exercice.
- Une amélioration de la fiabilité de l’état du stock et des circuits procéduraux exécutés (procédures au fond, procédures particulières, audiencement, gestion des pièces, gestion des décisions).

**Indicateurs d'impact**

L’application « greffe gestion des dossiers » vise à améliorer la gestion des dossiers par les personnels de la Cour de Cassation. Les indicateurs de succès seront précisément connus à l’issue de l’investigation.
Néanmoins, nous estimons qu’ils pourraient inclure :
- la mesure de l'accélération des délais de traitement des procédures => réduction des temps de procédure (mesure du délai moyen d’une procédure vs mesure du délai moyen post MeP – estimation de combien de procédure peuvent être gérées à iso effectif)
- le temps gagné via de nouveaux mécanismes de recherche et d’assistance à l’analyse juridique ou via une aide à la décision pour des cas similaires (+ déploiement dans les TGI et CA) ;
- un accès plus rapide et facile aux dossiers : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel vs mesure du temps post MeP ; nombre de clics par diligence)
- la réduction de la sollicitation du service informatique par le greffe (nombre d’interventions du service informatique pour débloquer des situations avant et après MeP)
