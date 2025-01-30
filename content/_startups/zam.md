---
title: Zam
mission: Alléger la charge de préparation par le gouvernement du débat parlementaire.
sponsors:
  - /organisations/dinum
incubator: dinum
phases:
  - name: investigation
    start: 2018-03-28
  - name: construction
    start: 2018-03-28
  - name: transfer
    start: 2020-01-01
  - name: alumni
    start: 2020-07-01
repository: https://github.com/betagouv/zam
stats: false
contact: contact@beta.gouv.fr
techno:
  - Python
  - PostgreSQL
usertypes:
  - parlement
  - etat
link: ''
---
## Le contexte

Pour tout projet ou proposition de loi, l’examen parlementaire est une phase cruciale. Le texte est discuté, retravaillé et voté afin d’aboutir à une version conforme aux attentes des représentants des citoyens.

Pour le Gouvernement, cette phase est celle qui est la plus dense. Les agents doivent répondre aux amendements, parfois très nombreux, déposés par les parlementaires, dans le délai, parfois très court, qui leur est imparti. Le fruit de ce travail est matérialisé par le dossier qui sera fourni au(x) ministre(s) et conseillers ministériels pour défendre la position du Gouvernement “au banc”, c’est-à-dire lors du débat dans l'hémicycle. C’est la raison pour laquelle cette phase de gestion des amendements est à fort enjeu : en dépend la constitution d'un dossier solide et propre pour le ministre.

Concrètement, le travail des services du Gouvernement consiste à :
- récupérer les amendements déposés par les parlementaires, et ce le plus tôt possible après l'expiration du délai de dépôt ;
- rester en veille permanente sur les sites Internet du Parlement pour repérer toute nouveauté (nouvel (sous-)amendement ou rectification d’amendement) pouvant intervenir jusqu'à la dernière minute ;
- analyser le contenu de chaque amendement et le mettre entre les mains de l’agent compétent pour y répondre (le nombre d’agents potentiellement concernés peut parfois monter jusqu’à plusieurs centaines) ;
- rédiger une réponse qui doit ensuite être revue par l’ensemble des valideurs compétents au sein du ministère concerné ;
- identifier et soumettre à l’arbitrage interministériel les éventuels points de difficulté ;
- constituer un dossier de banc contenant l’ensemble des amendements et réponses, en s’assurant que le dossier est standardisé dans son format, qu'il est à jour et qu'il est dans le bon ordre (en fonction de l’ordre de discussion établi pour la séance et qui change jusqu'à la dernière minute) ;
- être réactifs pendant les débats afin de répondre aux urgences.

Pour chaque projet de loi, le processus se répète au minimum 4 fois : lors de la première lecture à l’Assemblée, pour la première lecture au Sénat, puis aux nouvelles lectures à l’Assemblée et au Sénat. Le volume des amendements à traiter peut considérablement jouer sur la complexité et le stress que ce travail implique : s’agissant par exemple du projet de loi de financement de la sécurité sociale pour 2018 (PLFSS), il a fallu traiter 1300 amendements en 3 jours, entre le vendredi soir et le mardi suivant, début de la séance à l’Assemblée nationale.

## La solution numérique

L'outil développé depuis l'été 2018 permet :
- de récupérer et mettre à jour automatiquement les données transmises par le Parlement à savoir les amendements et sous-amendements, ainsi que l'ordre de discussion ;
- de placer les amendements entre les mains des agents compétents qui pourront ensuite les transmettre pour validation ou contribution ;
- de centraliser l'ensemble des réponses apportées ;
- de générer automatiquement un dossier de banc en ligne (limitant les impressions papier) et un dossier PDF dont le format standardisé est garanti ;
- de réaliser certaines opérations de vérification (pour les coordinateurs du travail notamment) à travers un index qui permet de localiser les amendements à tout moment et à travers des fonctionnalités d'export des données sous différents formats.

L’outil peut ainsi être utilisé pour tous les projets ou propositions de loi examinés par le Parlement et facilite la vie de l’ensemble des agents qui l'ont testé (rédacteurs, valideurs internes et instances interministérielles, coordinateurs, cabinets ministériels).

La réussite de Zam pourra être mesurée par :
- la satisfaction et la fidélité des utilisateurs ;
- le temps gagné par les agents ;
- la réduction de leur stress perçu ;
- l’amélioration de la qualité au fond des réponses aux amendements.

## La stratégie de mise sur le marché

La solution numérique est expérimentée depuis le dernier trimestre 2018 sur différents projets ou propositions de loi. Ces utilisations ont permis de tester le prototype sur des projets de loi annuels, et/ou au nombre de contributeurs élevé et/ou dont la volumétrie d’amendements est importante. Le bilan est positif : les utilisateurs ont gagné en confort de travail et les utilisateurs PLFSS et projet de loi de finances souhaitent renouveler l’utilisation de Zam fin 2019.

Sur l’année 2019, les expérimentations se poursuivent de même que les développements, guidés par les retours des testeurs ainsi que par les expertises métier des membres du groupe d’utilisateurs (passés, futurs et potentiels) qui a été formé.

L'enjeu est désormais d'organiser la transition, souhaitée pour le début de l'année 2020, vers un fonctionnement en routine dans lequel Zam est l'outil gouvernemental de gestion des amendements, disponible pour toutes les administrations.

## Le transfert

Zam a été transféré par l'équipe startup d'Etat aux services du Premier ministre afin d'être généralisé au début de l'année 2020. Le Secrétariat général du Gouvernement et la DILA mettent désormais à la disposition de l'ensemble des ministères l'outil sous le nom de Signale. Pour plus d'information, contacter David Sarthou, reponsable de pôle au SGG à l'adresse david.sarthou@sgg.pm.gouv.fr
