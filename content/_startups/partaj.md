---
title: Partaj
mission: L'outil unique de gestion, de pilotage et de valorisation de l'activité conseil des affaires juridiques
owner: Ministère de la Transition écologique et solidaire
sponsors:
    - name: Secretariat général - Ministere de la Transition ecologique et solidaire
      acronym: 
      domaine_ministeriel: environnement
      type: administration-centrale
incubator: mtes
phases:
  - name: investigation
    start: 2019-11-01
  - name: construction
    start: 2019-11-01
link:
repository: https://github.com/MTES-MCT/partaj
stats: false
contact: mehdi.benadda@beta.gouv.fr
---

Traditionnellement, les services juridiques assurent trois missions principales :

- La défense des intérêts de l’Etat par le traitement des contentieux ;
- L’amélioration de la qualité de la norme par la légistique ;
- La sécurisation juridique des procédures en cours ou à venir par le conseil juridique.

La direction des affaires juridiques des ministères de la transition écologique et solidaire (MTES) et de la cohésion des territoires et des relations avec les collectivités territoriales (MCTRCT) n’échappe pas à cette trinité. Si elle dispose actuellement d’un progiciel pour assurer le suivi de son activité, l’évolution des métiers du droit et des outils mis à la disposition des juristes fait émerger des problématiques nouvelles qui n’ont pas été prises en compte par ce progiciel lors de sa conception et qui nécessitent d’être traitées, en particulier s’agissant des fonctions consultatives.

## Le problème

Le MTES et le MCTRCT assurent la mise en œuvre de politiques publiques techniques par nature, réglementées par des procédures longues et complexes (exemples divers : Installations classées pour la protection de l’environnement ; création d’un parc national ; réglementation de la chasse ; prévention des risques naturels ; construction d’infrastructures de transports ; accessibilité des ERP…). Les services chargés de la mise en œuvre de ces politiques, tant en administration centrale qu’en services déconcentrés (DREAL, DDT(M)), ont besoin de sécuriser au maximum leurs procédures et sollicitent, à cette fin, les services des bureaux chargés de missions juridiques qu’ils saisissent soit par mail, soit par courrier.

Plusieurs difficultés se posent à eux pour saisir la DAJ :

- Comment identifier le bureau compétent ?
- Ma demande a-t-elle bien été réceptionnée ? Est-elle prise en charge ?
- Quel est le délai prévisible de traitement de ma demande ?
- Comment assurer le suivi de mes différentes demandes ?
- Ma demande est urgente : comment m’assurer que l’avis de la DAJ sera rendu dans un délai utile ?


Pour les services juridiques, plusieurs difficultés existent également :

- Comment gérer le flux de demandes reçues via des formats et vecteurs variés ?
- Comment assurer le suivi, en temps réel, du nombre de demandes réceptionnées et des échéances prévisibles ?
- Comment contrôler la complétude des demandes et le bien-fondé des délais de réponse attendus ?
- Par quel vecteur informer les demandeurs de l’état d’avancement de la prise en charge de leur demande ? Avec quelle régularité ?
- Comment quantifier précisément l’activité de conseil, les délais moyens de réponse, l’efficience de cette activité ?

A l’heure actuelle, le progiciel employé par la DAJ est renseigné une fois l’avis rendu, à des fins statistiques. Il ne constitue pas un outil de pilotage. Or, cette pratique ne permet pas un suivi en direct de l’activité, impose le développement d’outils de compensation (type excel) et accroit le risque d’oublis ou d’erreurs.

## Le produit : l’application PARTAJ

PARTAJ a pour ambition de répondre tant aux besoins des demandeurs que des agents chargés de traiter ces demandes.

Pour cadrer les demandes, PARTAJ intègre un formulaire de saisine comprenant les éléments structurants d’une demande d’avis juridique : la question posée, le contexte, les documents utiles à la compréhension du problème, les analyses déjà réalisées ou à expertiser, l’appréciation de l’urgence de la demande.

L’usage de ce formulaire a trois intérêts principaux :

- Il intègre un champ « thématique », qui permet à un service ne connaissant pas l’organisation de la DAJ (direction métier, SD, autres ministères…) de saisir la DAJ via une thématique (transports / espèces / eau /énergie …) qui sera, elle-même, reliée à un bureau ;
- Il assure l’enregistrement des demandes d’avis en temps réel et permet d’en assurer le suivi et le traitement dans des délais pertinents, eux-mêmes renseignés automatiquement via le formulaire ;
- Il répond au besoin de la DAJ de disposer d’indicateurs d’activité qui sont renseignés automatiquement.

Outre le formulaire, l’application PARTAJ intègre un système d’accusé de réception des demandes et de suivi d’activité type « suivi de colis », qui informe le demandeur (par mail ou directement via l’application), des différentes étapes de prise en charge de sa demande.

Elle intègre également une interface utilisateur, dans laquelle les demandeurs retrouvent l’ensemble de leurs consultations avec leur statut (réceptionnée, prise en charge, demande de complément, traitée, cloturée) et les agents des bureaux juridiques retrouveront l’ensemble des demandes qui leur sont affectées, ainsi qu’un traitement statistique de l’ensemble des demandes reçues et traitées.

Cette interface permet à chaque agent (et à sa chaine hiérarchique) de connaitre, en temps réel, le nombre de consultations en cours et la charge de travail afférente.

Un système de confidentialité sera enfin intégré pour les consultations les plus sensibles et, à terme, l’application intégrera également un dispositif de parapheur numérique, pour la validation des avis rendus.

### Un exemple d'impact

A titre d’exemple, l’impact du produit PARTAJ sur la sous-direction des affaires juridiques de l’environnement, de l’urbanisme et de l’habitat :

En 2019, ce sont 769 avis formels qui ont été rendus par cette sous-direction. PARTAJ supprime les outils de suivi de ces consultations élaborés au sein des 5 bureaux et au niveau de la sous-directions (suivi parapheurs), ainsi que les interactions par mails avec les demandeurs. Elle permet un suivi un temps réel des demandes, sans création d’un nouvel outil, ainsi qu’un retour d’information efficace vers le demandeur qui peut, à tout moment et sans solliciter le service juridique, se renseigner sur l’état d’avancement de sa demande. Elle génère, en temps réel, les statistiques liées à la fonction de conseil, qui n’ont plus à être renseignées manuellement et a postériori dans un progiciel.

PARTAJ, en supprimant les tâches administratives accessoires, permet aux juristes des MTES MCTRCT de se recentrer sur leurs missions cœur de métier. Elle constitue un gain de temps et d’efficacité majeur.

## Les prochaines étapes de développement

Le formulaire de saisine, qui vient d’être finalisé, est déjà en ligne. Nous constituons actuellement la « brique » mail qui, en permettant les alertes en temps réel, nous ouvrira la phase de test. Plusieurs bureaux se sont déjà portés volontaires au sein de la DAJ pour mener ces phases de tests qui, dans un premier temps, seront limitées au formulaire et, à chaque ajout de brique, se poursuivront sur les nouvelles fonctionnalités intégrées à l’application.

Une fois le produit minimum viable achevé et corrigé en fonction des retours utilisateurs, nous étendrons ces phases de tests aux bureau juridiques situés en directions métiers qui, sollicités dans le cadre de la définition du projet, étaient particulièrement intéressés pour utiliser cette application qui répond également à leurs besoins.

S’ouvrira alors une seconde phase de développement, laquelle comprendra l’ajout des fonctionnalités qui amélioreront le produit (par exemple un parapheur numérique, un système de validation hiérarchique, qui permettront une dématérialisation complète de l’activité de conseil).

A terme, PARTAJ pourra équiper l’ensemble des bureaux juridiques qui gèrent une activité consultative importante et nécessitent un outil de suivi fiable et opérationnel.
