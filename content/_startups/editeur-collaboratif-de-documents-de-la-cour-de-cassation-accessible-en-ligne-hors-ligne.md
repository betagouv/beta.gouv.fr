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
title: Editeur collaboratif de documents de la Cour de cassation accessible en ligne / hors ligne
mission: Créer, partager et co-rédiger des documents partout et à tout moment. Réduire la charge de travail des greffiers et des magistrats de la Cour de cassation. Diversifier les possibilités d’interfaçage liées aux documents des procédures produits par la juridiction. Permettre l’élaboration collaborative d’un document, y compris en asynchrone. Enrichir les modèles de documents et faciliter leur travail d’administration.
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

La Cour de cassation, en tant que plus haute juridiction de l'ordre judiciaire français, traite et produit un volume considérable de documents juridiques, notamment :
●	Les arrêts rendus par la Cour (En 2023, la Cour de cassation a rendu 13 223 arrêts, et 8 498 ordonnances) ;
●	Les travaux préparatoires – rapports du conseiller rapporteur (un rapport dans les 2/3 des pourvois), avis des avocats généraux (un avis dans environ 6.000 pourvois par an en matière pénale et dans les principales affaires en matière civile), avis et projet d’arrêts du conseiller rapporteur (ces documents, couverts par le secret, sont en nombre identique aux rapports) ;
●	Les analyses et mémoires du Service de Documentation, des Études et du Rapport (SDER), qui comprennent à la fois les analyses juridiques proposées par la Cour pour son fonctionnement juridictionnel, mais également les études réalisées sur demandes des juridictions du fond et des divers partenaires.

Sont également concernés tous les documents associés aux procédures liées à la formation des pourvois : demandes d’aide juridictionnelle, demandes de certificats de non pourvoi, etc.
La Cour de cassation héberge également de nombreuses commissions juridictionnelles dont les données et documents de procédure sont également concernés.

Ces documents étant couverts par le secret, leur élaboration et leur gestion exige un niveau élevé de sécurité et de confidentialité. Un contrôle strict des accès et une protection renforcée des données sont essentiels.


## Problème

Les outils actuels d’édition de documents ne permettent pas une collaboration efficace et comportent des risques en termes d’intégrité des données. Plusieurs fonctionnalités sont actuellement obsolètes et/ou incomplètes ce qui se traduit par des traitements chronophages et des diffusions dans des conditions de sécurité qui pourraient être améliorées. 
L’importante technicité des problématiques juridiques rencontrées dans le cadre du traitement des affaires nécessite une collaboration de nombreux acteurs de la juridiction ce que le système actuellement en place ne permet pas.
Enfin, le cycle de vie des documents de la procédure n’est actuellement que partiellement géré par le système d’information de la Cour de cassation (existence d’étapes de rematérialisation, signature manuscrite, etc.).


## Solution

Tous les personnels de la Cour doivent pouvoir accéder rapidement et efficacement à l'ensemble de la documentation pertinente et pouvoir collaborer en toute sécurité sur les documents auxquels ils sont habilités à accéder.
Un système de recherche performant est également crucial en vue de faciliter et d'optimiser les résultats des recherches des documents de différents statuts (du besoin d’initialisation du document jusqu’à sa validation finale puis son archivage).
Des fonctionnalités avancées de collaboration simultanée sur les documents en cours de rédaction devront être proposées ainsi que la possibilité d’y travailler de manière asynchrone s’appuyant sur une mécanique de gestion des modifications réalisées en ligne et hors ligne. Les documents seront accessibles directement selon un système d’habilitations sécurisé.
Les modifications apportées à un documents seront tracées dans un historique ce qui permettra de restaurer une version antérieure mais aussi de disposer d’une vision exhaustive sur les modifications apportées en co-édition.
L’outil devra permettre de créer des documents (rapport du conseiller rapporteur ; avis de l’avocat général ; projets d’arrêts des magistrats délibérant...) à partir de modèles éditables reprenant les données du système. La donnée devra désormais générer le document et non l’inverse.


## Stratégie
Une première étape vise à migrer l'existant au sein d’un outil de nouvelle génération qui permettra d’assurer la continuité des activités de la Cour. 
Une revue des modèles existants va être réalisée afin d’harmoniser les pratiques et de faciliter la création de documents à partir de modèles éditables.


## Indicateurs d'impact
Les indicateurs de succès incluent :
●	Un accès plus rapide et facile aux dossiers, à la jurisprudence et aux travaux préparatoires de l’ensemble des affaires : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel comparée à celle du temps post mise en production).
●	Le temps gagné sur la vérification des données et la saisie informatique par le personnel de la Cour de cassation. Pour un dossier de pourvoi, cet impact pourra être évalué à différents moments clés de son traitement, retenus en raison du rôle majeur de l’usage du produit numérique dans le travail réalisé (mesure du temps actuel comparée à celle réalisée post mise en production).
●	Le temps gagné pour le traitement de demandes telles que la demande de certificat de non-pourvoi (objectif d’une division par un facteur moyen de 3 du temps actuel comparé à celui post mise en production). 
●	Le temps gagné via de nouveaux mécanismes de recherche et d’assistance à l’analyse juridique ou via une aide à la décision pour des cas similaires (+ déploiement dans les TGI et CA).
●	Un accès plus rapide et facile aux dossiers et à la jurisprudence : réduction du temps d’affichage des dossiers sur le portail greffe (mesure du temps actuel vs mesure du temps post mise en production).
●	La réduction de la sollicitation du service informatique par le greffe (mesure du nombre d’interventions du service informatique pour débloquer des situations, évaluée à 12% des demandes en comparaison d’un nombre d'interventions post mise en production ciblé à moins de 5%).

