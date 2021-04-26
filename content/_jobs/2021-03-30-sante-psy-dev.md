---
roles: Développeur ou développeuse fullstack
title: Santé Psy Etudiant recrute deux devs fullstack
contrat: indépendant
startup: sante-psy-etudiant
open: false
techno:
 - NodeJs
 - Express
 - EJS
 - PostgreSQL
 - JavaScript
 - Scalingo
---

## Contexte : beta.gouv.fr

beta.gouv.fr aide les ministères et autres partenaires publics à construire des services numériques simples, faciles à utiliser, à l’impact maximal. À travers notre approche – parfois appelée “approche Startup d’État” – nous remettons les usagers au cœur de l’action publique et cherchons à apporter des solutions concrètes à leurs problèmes pour améliorer leur vie quotidienne.

Nous formons des équipes pluridisciplinaires constituées de personnes engagées au service de l’intérêt général, qu’elles viennent du secteur privé ou du secteur public. Nous intégrons des agents publics appelés “intrapreneurs” au sein de ces équipes, et nous favorisons leur passage à l’action pour améliorer le service public de l’intérieur.

beta.gouv.fr a déjà contribué à la création de [dizaines de services numériques](https://beta.gouv.fr/startups/)
 déjà disponibles ou à venir. Nous animons une [communauté en croissance](https://beta.gouv.fr/communaute/) qui construit les services publics numériques de demain au sein d’un [réseau d’incubateurs publics](https://beta.gouv.fr/incubateurs/) partageant les mêmes valeurs.

## Le projet : Santé Psy Etudiant
Face à la détresse des étudiants, le gouvernement a décidé de mettre en place un dispositif visant à donner droit à l’ensemble des étudiants en ayant besoin, 3 à 6 consultations auprès d’un psychologue, sans avance de frais et entièrement prises en charge par l’Etat. En l’espace d’un mois, beta.gouv.fr a aidé à la mise en place d’une équipe de crise afin de créer ce nouveau service public  - accessible [ici](http://santepsy.etudiant.gouv.fr).

Ce dispositif est mis en place au sein du Ministère de l’Enseignement Supérieur et de la Recherche (MESRI), en partenariat avec les Services de Santé Universitaire  (SSU) et la Fédération Française des Psychologues et de Psychologie (FFPP).

Nous cherchons à présent à recruter une équipe permanente composée de deux développeurs / développeuses, une UX, deux chargé.e.s de déploiements, un.e responsable de mission et un.e coach.  L'enjeu sur ces prochains mois sera d’améliorer de façon continue le service et de tout mettre en œuvre pour obtenir un impact réel et aider au mieux les étudiants en difficulté.

## La mission : dev fullstack

Santé Psy est déjà en prod, mais c’est plutôt une trottinette qu’une Ferrari pour le moment ! L’équipe dev transverse de beta.gouv.fr a développé le MVP, et maintenant on a besoin de recruter pour pouvoir passer à un vrai produit complet et de qualité. Il y aura une période de coopération et de passation jusqu'à fin juin (les devs transverses sont appelés sur d’autres projets pour la communauté beta).

### Les chantiers qu’on voit venir (entre autres) :
 - Sécurité, accessibilité, RGDP : on assure la base, mais un petit audit pourrait faire du bien pour monter le niveau. Un sujet duquel s’emparer !
 - Interface : on va avoir une personne UX dans l’équipe ! Notre annuaire de psys est un peu pourri sur mobile, les infos sont un peu dispersées sur le site, une infographie “Comment ca marche” serait bienvenue, …
 - Problèmes d'authentification : notre authentification se fait par envoi de lien par mail. Les utilisateurs d’Office Pro ont une feature de sécurité qui casse nos liens. A améliorer !
 - Automatisation des process : nos bizdev mettent les bouchées doubles pour passer l’info entre tous les acteurs (psys, Services de Santé Universitaires, services administratifs, étudiants), on pourrait les soulager en automatisant. Vérification automatique du numéro d’immatriculation des psys, passage d’info aux SSU, templates de docs pour le conventionnement et les factures, envoi de mails automatiques intégrés à Démarches Simplifiées, …

### Stack technique :
 - Backend NodeJS, avec templates EJS (server-side templates)
 - Front : JS vanilla, sans framework. On pourrait penser à passer à un framework si le front se complexifie, pour le moment ça parait suffisant.
 - Base de données Postgres. On a knex comme ORM pour manipuler les données avec du code JS.
 - On déploie sur Scalingo (similaire à heroku).
 - Docker pour les tests en local et sur la CI github

Pas besoin d'expertise en tout : on a deux postes ouverts, donc on peut trouver des compétences complémentaires aux tiennes au besoin.

### Standards techniques :
 - Revue de code pour toutes les PR : la lisibilité et la simplicité sont importantes.
 - Tests unitaires et end-to-end pour le backend (on a moins de fonctionnalités dans le front, pas de tests pour le moment mais on aimerait mettre en place des tests automatisés avec cypress par exemple).
 - On prend garde à l’accessibilité, la sécurité, la gestion des données (RGPD) du mieux qu’on peut, et on trouve des ressources pour nous soutenir quand on ne sait pas tout

### On aime bien entendre nos collègues dev dire :
 - « Tu m’as l’air stressé.e et fatigué.e, prends ton vendredi, pas de souci »
 - « Je galère un peu, j’y connais pas grand chose à SQL, on peut regarder ensemble stp ? »
 - « Ah mais oui t’as raison ! Faisons ta solution plutôt »
 - « Ya pas un problème d’injection ici ? Je sais pas tout sur le sujet mais j’ai un soupçon, on a qu’à en parler à la communauté dev »
 - « On pourrait faire venir un cochon au standup, en visio »
 - « Une utilisatrice n’arrive pas à se login, elle a mailé le support. Je vais l’appeler pour comprendre et régler son problème »

### On aime pas trop entendre nos collègues dev dire :
 - « Le vélo c’est nul »/« C’est pas sérieux les cheveux roses »/« La Normandie c’est pourri »
 - « Tester c’est douter »
 - « Je réponds pas au support, c’est le travail des bizdev/UX/chef de projet/mon cochon d’inde »
 - « Quoi, tu connais pas Elixir ?? » (personne ne connaît tout sur tout, passe-nous tes tuyaux plutôt !)

### Organisation du travail
 - Investissement proactif des devs dans les problèmes d’UX et de bizdev. On n’est pas juste assis à attendre des specs :)
 - Gestion du code avec git et PR avec github (t’es pas un pro des branches git ? On t’apprendra !)
 - Organisation flexible avec des objectifs de sprint, en collaboration avec l’équipe étendue (bizdev et chefs de projets, DINUM et MESRI). Pour que toute l’équipe puisse donner son point de vue sur ce qui est prioritaire, et qu’ensuite chacun prenne son autonomie.

## Details pratiques :
 - Environnement et communauté beta.gouv : https://beta.gouv.fr/ (plus de détails ici également : https://github.com/betagouv/beta.gouv.fr/wiki/Bienvenue)
 - Poste ouvert pour des indépendant·e·s sur une durée de 6 mois renouvelable
 - Temps de travail : 3 à 5 jours / semaine
 - Démarrage en avril 2021
 - Télétravail et/ou possibilité de travailler à la DINUM et/ ou MESRI (hors période confinement)

## Contactez-nous pour postuler !
contact-santepsyetudiants@beta.gouv.fr


