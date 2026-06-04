---
title: Astrée
mission: Assistant IA d'aide au traitement des requêtes contentieuses
sponsors:
  - /organisations/direction-des-libertes-publiques-et-des-affaires-juridiques
  - /organisations/interieur
incubator: FabNum-MI
contact: arnaud.deloit@interieur.gouv.fr
accessibility_status: non conforme
events:
  - name: product_launch
    date: 2025-12-04
    comment: Mise à disposition d'un produit minimum viable aux utilisateurs
phases:
  - name: investigation
    start: 2023-01-16
    end: 2023-06-20
  - name: construction
    start: 2024-05-02
  - name: acceleration
    start: 2025-12-04
thematiques:
  - Administratif
usertypes:
  - etat
techno:
  - python
  - templating
  - LLM
  - RAG
  - IA Generative
budget_url: https://fichiers.numerique.gouv.fr/explorer/items/files/248571ad-3fc6-4406-a8f2-4db60813af22
stats_url: https://fichiers.numerique.gouv.fr/explorer/items/files/1d052a23-a51d-4d88-bedf-d5a0f99c9f2c
impact_url: https://fichiers.numerique.gouv.fr/explorer/items/files/6594c7df-1096-4d55-90d6-5e996c973762
link: ''
---
## Contexte
Les services déconcentrés ou d’administration centrale du Ministère de l’Intérieur (MI) instruisent les réponses à apporter aux recours juridictionnels ou non juridictionnels dirigés contre les décisions adoptées dans l’exercice des missions du Ministère.

Le MI est confronté à une augmentation continue et significative des contentieux juridictionnels. Entre 2024 et 2025, le nombre de requêtes nouvelles enregistrées a cru de +18%. L'activité contentieuse relative au droit de l'entrée et du séjour des étrangers en France, qui représente plus de 90% du contentieux ministériel, alimente cette tendance avec une augmentation de 18,8% du nombre des requêtes nouvelles enregistrées entre 2024 et 2025 et de 55% entre 2021 et 2025, pour atteindre le nombre de 165 018 requêtes.
 
Cette croissance soutenue exerce une pression croissante sur les services juridiques, confrontés à des volumes de dossiers toujours plus importants à moyens constants. Dans ce contexte, leurs capacités d’instruction atteignent leurs limites, au risque de ne pas pouvoir tenir les délais de réponse prescrits voire de ne pas pouvoir répondre à tous les recours, rendant indispensable la mise en place de dispositifs de soutien afin d’optimiser la gestion de ces dossiers contentieux.

Le projet d’intelligence artificielle ASTRÉE (Assistance au Traitement des Requêtes), porté par Direction des libertés publiques et des affaires juridiques (DLPAJ), a été engagé fin 2022 en remportant l’Innovathon TechnMIUp, rampe de lancement d’initiatives numériques, et s’est vu attribuer le statut de start-up d’État.

La DLPAJ et la Direction de la transformation numérique (DTNUM) du ministère de l’Intérieur développent l'outil ASTRÉE, conformément aux orientations fixées par le premier ministre en la matière. 

## Problématique
L’instruction d’un dossier contentieux exige des agents beaucoup de tâches manuelles qui s’ajoutent à l’instruction à proprement parler : saisie des informations du dossier d’une part (numéro de saisine, tribunal compétent, nom du requérant, etc.) et recherche des pièces indispensables pour assurer la défense de l’État dans différents systèmes d'informations voire encore de dossiers papiers d’autre part. 
Ces actions manuelles et chronophages sont indispensables pour que le dossier soit prêt à être instruit et défendu. 

Face au volume de dossiers, la charge opérationnelle que représente l’ensemble de ces actions mises bout à bout fragilise les services, qui peinent à absorber le volume croissant de dossiers dans des délais maîtrisés. Les services ne disposent plus du temps nécessaire à l’analyse du recours préalable, à la mise au point de la réponse dans le cas du recours non juridictionnel ou du mémoire en réponse à transmettre à la juridiction, voire même de ne pas pouvoir assurer systématiquement la défense de l’État devant les juridictions pour tous les recours.

## Solution
ASTRÉE est un outil d’intelligence artificielle (IA) d’aide à la gestion des contentieux du MI. Il s’agit d’une brique IA, conçue pour automatiser, fiabiliser et optimiser les tâches répétitives de l’activité des services contentieux. Astrée réalisera par exemple un premier travail d'analyse des requêtes pour en extraire des données nécessaires à une synthèse technique du dossier. Cette synthèse permettra à l’encadrement d'orienter plus facilement le dossier puis, au rédacteur, de bénéficier des éléments clefs pour entreprendre les recherches nécessaires à l’instruction, avant d’examiner la situation administrative des requérants, les décisions contestées et leurs fondements et de procéder à l’analyse juridique préalable à la rédaction du mémoire en réponse.

ASTRÉE est conçue avec les agents du MI, au plus près de leurs besoins, pour permettre son insertion la plus naturelle possible dans leurs habitudes de travail quotidien. ASTRÉE n’assure pas l’instruction d’un dossier mais est utilisée à certaines étapes de son traitement en optimisant les tâches répétitives et chronophages de l’activité des services contentieux. L’ambition d’ASTREE est de parvenir à aider les agents dès l’enregistrement des dossiers contentieux, à automatiser la lecture des certaines informations contenues dans les requêtes, à réaliser l’extraction de données spécifiques, à qualifier les contenus, à aider à la recherche de pièces nécessaires au traitement du contentieux et à générer une trame de mémoire en défense complétée des mentions et références propres à l’affaire ainsi que d’une première rédaction du rappel des faits de celle-ci, permettant à l’agent de se concentrer sur le traitement de la requête au fond. 

L’IA ne se substitue donc pas aux rédacteurs, y recourir vise à les soulager des tâches annexes qu'ils rencontrent tout au long de la procédure et qu'ils doivent prendre en charge au détriment de l'instruction de fond. 

En automatisant les tâches répétitives et chronophages, ASTRÉE permet de recentrer les agents sur l’analyse juridique à forte valeur ajoutée. Elle contribue ainsi à une amélioration des délais de traitement, de la qualité des productions et de la capacité des services à piloter leur activité de manière plus stratégique. Elle bénéficie à l’État mais également aux juridictions comme aux requérants en permettant qu’une réponse satisfaisante soit apportée à tous les recours contentieux dans de meilleurs délais.

## Déploiement
A ce jour, l’outil est pensé en deux axes.
 
**MODULE 1 : contentieux de la sécurité routière – permis à points**

Un prototype d’ASTREE dédié à la sécurité routière, et plus particulièrement aux contentieux du permis à points, a été mis à la disposition des agents du bureau du contentieux de la sécurité routière de la DLPAJ en décembre 2025.

Ce prototype sert à tester le concept afin de garantir son adéquation aux besoins et aux usages opérationnels.

ASTRÉE réalise un premier travail d'analyse des requêtes pour en extraire des données qui offrent une vision transversale du dossier. Cette brève synthèse permet à l'encadrement d'orienter plus facilement le recours au sein de l'équipe puis, au rédacteur, de bénéficier des éléments clefs pour entreprendre les recherches nécessaires à l’instruction du dossier. 

ASTRÉE permet alors de récupérer automatiquement des informations administratives d’un autre système d'information du MI. Enfin, ASTRÉE intègre à un brouillon de mémoire en défense les informations collectées, qui étaient jusqu’à présent systématiquement retapées manuellement par les agents.  

Ces fonctionnalités doivent encore être consolidées par une approche itérative, fondée sur l’évaluation de son impact auprès des utilisateurs, l’agilité et l’amélioration continue.


**MODULE 2 : contentieux de l’entrée et du séjour des étrangers en France****

Le module dédié à la sécurité routière n’est pas duplicable en l’état au droit de l’entrée et du séjour des étrangers. Il apparait nécessaire de construire un module répondant à des fonctionnalités adaptées à un éventail plus large de contentieux pour pouvoir imaginer un outil le plus utile possible à déployer dans les services. 

Afin de mener à bien les travaux de conception de ce module, 5 services volontaires ont été sélectionnés : les préfectures de la Seine-Saint-Denis, des Bouches-du-Rhône, des Hautes-Alpes, de l'Ille-et-Vilaine, ainsi que le bureau du contentieux de la sous-direction des visas au sein de la direction de l’immigration (Direction générale des étrangers en France).

L’animation de groupes de travail et des immersions en services instructeurs permettent de mieux cerner les besoins et d’explorer les fonctionnalités permettant d’y répondre. Les axes de recherche portent sur :
-	la manière d’automatiser la qualification des requêtes et de leurs pièces jointes en identifiant des données essentielles et communes au traitement des contentieux quel qu’en soit la nature: l’identité du requérant, la décision attaquée, les conclusions soumises au juge, les moyens soulevés, etc. 

-	la recherche et l’ordonnancement des pièces nécessaires à la défense (tri, numérotation, bordereau). Certaines pièces utiles sont des copies scannées de dossiers administratifs, qui sont aujourd’hui retapées manuellement par les agents lors de la rédaction des mémoires en défense. ASTRÉE vise à faciliter la recherche de ces pièces et à automatiser toutes les tâches de ressaisie.

-	la production d’une trame de mémoire en défense complétée des mentions, références et données extraites précédemment ainsi que d’une première rédaction du rappel des faits de l’affaire qui permettrait aux agents de se concentrer sur les développements des moyens, des arguments et des conclusions de la défense de l’État. 


L’outil ASTRÉE n’a pas vocation rédiger des décisions administratives relatives à l’éloignement et au séjour des étrangers en France ni de mémoires en défense du contentieux qui résulte de cette catégorie de décisions. Il vise à faciliter le travail des agents des services contentieux qui défendent les décisions administratives adoptées par les services compétents lorsqu’elles sont contestées par leurs destinataires. Par ailleurs, ASTRÉE n’a pas vocation à rédiger l’argumentation d’un mémoire en défense mais à en faciliter la rédaction par un agent public. C’est bien là toute la plus-value d’ASTREE, permettre aux agents de se recentrer sur l'instruction du dossier et la mise au point du mémoire en réponse par la prise en considération des situations individuelles, l’étude de moyens nouveaux, la recherches jurisprudentielles, l’attention particulière aux dossiers complexes.