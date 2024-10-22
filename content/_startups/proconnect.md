---
title: ProConnect
mission: Simplifier la gestion de l'identité numérique des entreprises sur les portails publics
sponsors:
  - /organisations/mefr
incubator: dinum_produits_interministeriels
phases:
  - name: investigation
    start: 2020-06-23
    end: 2020-09-15
  - name: alumni
    start: 2020-09-15
stats: false
contact: contact@agentconnect.gouv.fr
usertypes:
  - entreprise
  - etat
thematiques:
  - Entreprises
  - Administratif
  - Collectivités
  - Sécurité informatique
techno:
  - typescript
---
*Le projet ProConnect est poursuivi en dehors de beta.gouv.fr et est aujourd’hui en production. Il est en cours de déploiement sur les portails de services publics.*

## Problème investigué

### Contexte

L'authentification des personnes morales (entreprises, associations, administrations...) sur les portails gouvernementaux présente plusieurs enjeux :
- Lors de la création du compte "personne morale", s'assurer que la personne physique qui crée ce compte y est légitime ;
- Dans la gestion du compte de la structure, prendre en compte que différentes personnes, qui ne sont pas nécessaires représentantes légales de la structures, peuvent y accéder légitimement ;
- Dans la gestion du compte de la structure, limiter le risque d'usurpation d'identité ou d'accès non-autorisé ;
- Pour la création et la gestion des comptes, viser la simplification pour les gestionnaires de personnes morales, qui actuellement doivent gérer autant d'identifiants que de portails qu'ils utilisent.

Une première brique logicielle est en cours de finalisation, permettant de répondre au premier point, en vérifiant que l'individu est un représentant légal de la structure.
L'investigation a pour but de connaître les problèmes tels que perçus par les entreprises, et d'en déduire la suite à donner à cette première brique logicielle.

### Les apprentissages issus des entretiens

- 76% des professionnels interrogés utilisent des comptes partagés entre plusieurs personnes (collaborateurs ou expert comptable) pour accéder aux portails publics. 
C'est-à-dire qu'ils utilisent un même identifiant et mot de passe. Différents moyens sont utilisés pour enregistrer et partager ces comptes partagés : document partagé en ligne, calepin, enregistrement dans le navigateur...
- Les 24% restant utilisent des comptes individuels, c'est-à-dire que chaque personne utilisatrice a son propre identifiant et mot de passe sur chaque portail, et est rattachée à l'entreprise avec des droits d'accès spécifiques.
- La pratique des comptes partagés est indépendante de la taille de l’entreprise et du recours ou non à un expert comptable.
- L’appel à un expert comptable concerne surtout les entreprises < 100 salariés mais il y a des exceptions. Les portails publics sont utilisés par les entreprises même lorsque la gestion est confiée à un expert comptable.

Une hypothèse pour expliquer le faible recours aux comptes individuels est que les entreprises manquent de visibilité sur les modalités de création de nouveaux comptes (voire ne savent pas que c'est possible). 
Par ailleurs, le délai de création de ces comptes n'est pas nécessairement précisé alors que les démarches que ces entreprises viennent réaliser en ligne sont en délais contraints.

Certains gestionnaires d'entreprises ou gestionnaires d'accès expriment une volonté d'avoir de la visibilité sur les actions réalisées en ligne par leurs collaborateurs. Dans ce cas, le fait d'utiliser des comptes partagés est jugé problématique. D'autres n'expriment pas ce besoin de contrôle et sont tout à fait satisfaits du partage de compte. Cette volonté ou absence de contrôle n'est pas corrélée à la taille de l'entreprise, elle semble ne dépendre que de la personne ou de la politique interne de chaque organisation.

**D'une manière générale, les modalités d’identification et d’accès aux téléprocédures ne présentent pas un enjeu majeur pour les entreprises.**
Quel que soit le problème évoqué en entretien, une solution de contournement a toujours été mise en place. 28% des personnes affirment même n'avoir aucun problème dans la gestion de leur(s) accès aux portails publics.

### Les problèmes issus des entretiens

#### Les deux problèmes suivants ont été les plus fréquemment remontés, bien qu'avec une gravité parfois modérée :
- Difficile de mémoriser les identifiants ;
- Pénible de gérer des comptes individuels (quand utilisés), et notamment de les résilier (lors d'un départ d'un collaborateur par exemple). 
Ce point est alourdi par le nombre de portails potentiellement concernés, et l'impossibilité à l'heure actuelle d'avoir une vision de tous les comptes existants sur l'ensemble des portails publics.

#### Autres problèmes remontés
Voir le document de synthèse de l'investigation plus bas

## Hypothèses de solution 
Voir le document de synthèse de l'investigation plus bas

## Suites à l'investigation
L'investigation est interrompue en septembre 2020 car elle apparaît moins prioritaire que le travail en cours sur la brique "socle" logicielle, mené en parallèle par les intrapreneur·se·s. Il est prévue de la reprendre en 2021, en focalisant sur les besoins des grandes entreprises. En effet, celles-ci ont d'une part été moins entendues que les plus petites au cours de l'investigation. D'autre part, celles interrogées ont fait part de problèmes spécifiques qui pourraient appeler résolution via ProConnect.

2 notes de synthèses ont été produites :
- [Synthèses des apprentissages de l'investigation](/content/docs/syntheses_investigations/ProConnect-BilanInvestigation-VF.pdf)
- [Note expliquant l'interruption de l'investigation](/content/docs/syntheses_investigations/Note_interruption_investigation_proconnect.pdf)

**Le projet ProConnect est poursuivi en dehors de beta.gouv.fr et est aujourd’hui en production. Il est en cours de déploiement sur les portails de services publics.**
