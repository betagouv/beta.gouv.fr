---
title: Carnet de bord
mission: Partager le parcours d’insertion pour faciliter les avancées des personnes.
sponsors:
  - /organisations/pole-emploi
  - /organisations/mtei
incubator: gip-inclusion
link: https://carnetdebord.inclusion.beta.gouv.fr/
repository: https://github.com/gip-inclusion/carnet-de-bord
contact: contact@carnetdebord.inclusion.beta.gouv.fr
stats: true
dashlord_url: https://dashlord.incubateur.net/url/carnet-de-bord-fabrique-social-gouv-fr/
analyse_risques: true
analyse_risques_url: https://pad.incubateur.net/s/e1H5QYiQ9
accessibility_status: non conforme
usertypes:
  - particulier
  - collectivite-territoriale
  - association
stats_url: https://matomo-metabase-carnetdebord.fabrique.social.gouv.fr/public/dashboard/81a749aa-6c29-46b2-9ca5-df9d90fd3257
phases:
  - name: investigation
    start: 2021-01-25
    end: 2021-05-06
  - name: construction
    start: 2021-05-06
    end: 2021-10-31
  - name: acceleration
    start: 2021-11-01
    end: 2022-04-30
  - name: alumni
    start: 2023-12-01
---
# 2024 - Pause dans le développement du service numérique 

**Le développement du produit numérique dans sa forme actuelle est arrêté.** L’équipe continuera d’assurer dans les prochains mois l’accompagnement et le support des utilisateurs actuels, sans évolutions techniques ou fonctionnelles.

En lien avec l’incubateur de Pôle emploi et dans le cadre des expérimentations de la [réforme France Travail](https://travail-emploi.gouv.fr/emploi-et-insertion/france-travail/), la promesse de la co-construction d’un service numérique public de suivi de parcours des usagers n’est toutefois pas abandonnée. **C’est donc d’avantage une deuxième mouture de « Carnet de bord » qui se profile avec des discussions et des chantiers d’ores et déjà engagés par l’État. Nous vous communiquerons prochainement sur cette page les contacts des équipes en charge de ce travail.**

## Contexte et constat

**En octobre 2023, un « comité produit » s’est réuni**. Il s’agit d’un événement classique dans l’écosystème [beta.gouv](https://beta.gouv.fr) ayant lieu tous les 6 mois pour tous les produits numériques publics développés en mode « agile » qui, pour rappel, sont engagés dans des cycles de développement fonctionnel courts, dans une itération régulière avec leurs utilisateurs et dans l'évaluation par l’impact.

Ce comité s’inscrivait notamment dans le cadre de la **mise en place d’une nouvelle comitologie produit dans le cadre de France Travail**, réunissant ainsi dans ce cadre des membres de la direction générale de Pôle emploi ou du Haut Commissariat à l’Emploi et à l’Engagement des entreprises.

L’équipe a dressé un constat de l’usage de Carnet de bord et a établi que **l’[impact attendu](https://metabase.carnetdebord.inclusion.beta.gouv.fr/public/dashboard/81a749aa-6c29-46b2-9ca5-df9d90fd3257) (nombre de consultations, nombre de modification de carnets, etc.) n’était peut-être pas à la hauteur de l’investissement consenti par l’Etat dans son développement.** Il a donc été décidé - non pas d’arrêter le produit - mais de temporiser son activité actuelle en laissant - comme évoqué ci-dessus - uniquement de la ressource sur le seul support courant utilisateur, d’une part, et sur la résolution de bugs le cas échéant, d’autre part.

## Quels apprentissages ?

Techniquement, le produit dans sa configuration actuelle atteignait ses limites : de **nombreux bugs rythmaient la vie de l’outil**, dégradant fortement l’expérience utilisateur, et le **temps d’implémentation de nouvelles fonctionnalités était élevé**. À cet égard, il s’agit de relever que le développement de l’application et l’exercice de priorisation dans la feuille de route étaient souvent perturbés par une tension intrinsèque au produit entre ceux qui voyaient dans Carnet de bord **un espace privilégié de partage de données automatisées** et provenant de logiciels tiers (logiciels éditeurs, autres SI publics) et ceux qui espéraient faire de Carnet de bord **un logiciel de parcours complet** utilisé au quotidien par les professionnels.

Par ailleurs, sur le cas d’usage majoritaire au sein des expérimentations (l’accompagnement de bénéficiaires du RSA : du téléchargement des flux à la saisie du contrat d’engagement réciproque), **certaines fonctionnalités étaient fortement attendues par les professionnels.**

- L’absence de celles-ci empêchait une bascule intégrale sur Carnet de bord : interconnexion complète avec le SI Pôle emploi, notamment sur le périmètre du diagnostic socio-professionnel ; réalisation d’exports et possibilité de requêtage ; tableaux de pilotage ; gestion complète du CER dans l’outil (édition, validation, téléchargement) ; réalisation de bilans d’accompagnement, possibilités accrues d’échanges entre professionnels ; interconnexion entre les logiciels de gestion et Carnet de bord.
- En conséquence, ces manques fonctionnels entrainaient bien souvent pour les professionnels des **double-saisies**, voire triple-saisies, expérience très préjudiciable à la rétention des utilisateurs.

Enfin, le **faible nombre d’accompagnateurs** embarqués sur Carnet de bord, notamment en dehors des conseils départementaux, **diminuait fortement la valeur du partage d’informations et la plus-value de Carnet de bord** pour conseillers en insertion et travailleurs sociaux des départements : la promesse d’un gain d’informations sur les usagers obtenu grâce à Carnet de bord n’était pas tenue.

## Quelle suite pour Carnet de bord et l’idée d’un outil de suivi de parcours ?

Le Haut Commissariat à l’Emploi et à l’Engagement des Entreprises (HC3E) s’est entretenu à l’automne 2023 avec de nombreux départements utilisateurs de Carnet de bord et, dans le cadre de France Travail notamment, est toutefois ressortie **une forte volonté des conseils départementaux de poursuivre la co-construction d’un outil numérique public de parcours des usagers en insertion** (en sus de l’offre déjà proposée par des éditeurs de logiciel ou se matérialisant dans les logiciels « maison »). Un Carnet de bord « V2 » a donc vocation à voir le jour, mobilisant des équipes et technologies différentes. Dans ce cadre, **de premiers chantiers exploratoires sont en cours au sein de Pôle emploi pour reprendre le flambeau du Groupement d’intérêt public (GIP) Plateforme de l’inclusion**. Les équipes concernées peuvent capitaliser sur certains acquis solides de Carnet de bord :

- **Une sécurisation juridique poussée** : un [décret](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047318824) a été publié pour encadrer les échanges de données entre tous les acteurs de l’insertion ;
- **Référentiel de données** : une nomenclature nationale des données de diagnostic socio-professionnel et des éléments de parcours (objectifs et actions) a été co-construite avec les professionnels et peut grandement faciliter les échanges de données (les interconnections techniques entre SI reposant en effet avant tout sur une interopérabilité sémantique) ;
- **Un mode d’habilitation simple** : une matrice d’habilitation permet la création rapide et autonome de nouvelles structures et professionnels (l’outil est géré au niveau local) ;
- **Une méthode itérative qui a fait ses preuves** : des échanges réguliers ont permis de bien comprendre ce qui était attendu par les professionnels de l’insertion. Plus particulièrement, l’idée est notamment que les aspects de l’outil qui ne suscitaient pas beaucoup d’engagement de la part des utilisateurs et qui n’étaient pas vraiment plébiscités disparaissent tandis que les fonctionnalités qui suscitaient le plus d’intérêt métier (et celles qui n’existaient pas encore mais qui étaient très attendues) soient améliorées / développées.

# 2021 à 2023 - Archives

## Le problème

Le champ de l’insertion sociale et professionnelle, et en particulier le domaine de l’accompagnement des usagers, se caractérise par une multiplicité et une grande diversité d’acteurs. La mauvaise connaissance et l'absence de partage de certaines données ne permettent pas aux professionnels de procéder à une bonne évaluation des situations des usagers et un suivi optimal des parcours. Le déficit de connaissance des éléments de parcours d’insertion d’un usager rend ainsi complexe l’analyse de sa situation et la mise en œuvre d’un parcours efficient entre partenaires. 

## Notre service

Développé dans le cadre du volet numérique du projet de Service Public de l'Insertion et de l'Emploi, l'outil Carnet de bord est un service public qui centralise les données essentielles (éléments de diagnostic socio-professionnel, identité et contact des accompagnateurs, contrats de parcours, objectifs à atteindre et actions initiées, historique de parcours) en une seule page. Il regroupe l’information dans un espace sécurisé permettant un échange accru des données essentielles, entre les accompagnateurs et le bénéficiaire afin d’amplifier la coordination et fluidifier le parcours d’un usager !

## Nos publics

**Qui sont les usagers en insertion concernés par l'outil ?** Carnet de bord propose la création de "carnets" d'usagers relevant de différents publics en insertion à l'instar des bénéficiaires du RSA, des demandeurs d'emploi (notamment longue durée, accompagnement global ou concernés par la modalité d'accompagnement "expert handicap"), des jeunes NEET, etc. 

**Qui sont les professionnels concernés par l'outil ?** Tous les accompagnateurs des personnes en insertion sont en mesure de bénéficier d'un accès aux carnets des usagers qu'ils accompagnent. Cela concerne tant les accompagnateurs publics (Pôle emploi, Conseils départementaux, CCAS/CIAS, missions locales, Cap emploi, etc.) que les acteurs privés de l'insertion comme, par exemple, les structures associatives déléguées pour l'accompagnement de bénéficiaires du RSA. L'accès de tous ces acteurs à l'outil a été rendu possible par un travail juridique, notamment concrétisé par l'entrée en vigueur de l'[article 168](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000045197621#:~:text=%C2%AB%20La%20personne%20dont%20les%20informations,%C3%A0%20la%20poursuite%20du%20traitement) de la loi du 21 février 2022 relative à la différenciation, la décentralisation, la déconcentration et portant diverses mesures de simplification de l'action publique locale dont le [décret d'application n° 2023-188](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047318824) est paru 17 mars 2023. 
