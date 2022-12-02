---
roles: Développeuse Principale - Développeur Principal pour le service Notifications
open: false
startup: notifications
date: 2022-08-18T14:34:06.361Z
techno:
  - Python
  - Flask
  - Celery
---

### Qui sommes-nous ?

L’équipe Notifications souhaite outiller tous les produits au sein de l'administration pour l'envoi de notification automatique via email ou SMS.

Notre équipe s'appuie sur les précédents travaux [du Royaume-Uni](https://www.notifications.service.gov.uk) et [du gouvernement fédéral du Canada](https://notification.canada.ca) en prenant en compte les enjeux du numérique propres à l'administration  française :

- hébergeurs respectueux du RGPD ;
- utilisation du [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/) dans l'interface et par défaut dans toutes les notifications ;
- fournisseurs d'envoi email/SMS basés en Europe, respectueux du RGPD ;
- accessibilité numérique des notifications envoyées.

L'équipe de développement a déjà avancé sur ces objectifs mais l'ampleur potentielle de Notifications nécessite une développeuse principale ou un développeur principal qui puisse porter ce produit et maximiser l'impact qu'il peut avoir.

L'équipe actuelle s'attelle a mettre en production une première version et à trouver son premier utilisateur.

Plus d'infos sur [la fiche produit](https://beta.gouv.fr/startups/notifications.html).

Notre équipe est actuellement constituée de
- Béatrice Mercier, intrapreuneuse (intervient 2 jours/semaine). Béatrice est responsable de :
  - sécuriser un financement pour la startup ;
  - d'identifier des premiers utilisateurs du service ;
  - clarifier la proposition de valeur du produit ;
  - et de définir des mesures d'impact.

 Elle s'occupe également de l'ingénierie d'achat et des relations avec les fournisseurs (services de mailing, envoi de SMS...). Béatrice cumule le rôle d'intrapreuneuse de Notifications avec un rôle de "responsable de portefeuille" pour les startups d'état du Ministère de l'Économie et des Finances, du Ministère de l'Europe et des Affaires Étrangères et de l'Agence Nationale de la Sécurité des Systèmes d'Information.
- Antoine Augusti, conseiller (intervient une demi-journée/semaine). Antoine assiste Béatrice durant le lancement du projet, en définissant les acteurs, fonctionnalités du produit et en recrutant une équipe produit. En tant qu'ancien responsable technique de [notification.canada.ca](https://notification.canada.ca), il conseille l'équipe sur les opportunités de réutilisation, les points de vigilance et les opportunités d'une initiative similaire. Antoine intervient en tant qu'ingénieur à [transport.data.gouv.fr](https://transport.data.gouv.fr).
- Benoit Serrano et Stéphane Maniaci, développeurs et membres de la [Brigade d'Intervention du Numérique](https://beta.gouv.fr/brigade/) qui accompagne beta.gouv.fr dans la réalisation de ses produits. Ils laisseront donc progressivement leur place à l'équipe dont vous serez la première ou le premier membre.

### Compétences techniques

Nous recherchons une personne ayant de solides compétences techniques, en mesure de négocier avec des partenaires et à terme de constituer une équipe technique.

- Vous êtes capable de superviser un service numérique en faisant évoluer toutes les applications qui le constituent – API, base de donnés, interface administrative, workers – de manière linéaire.
- Vous comprenez l'enjeu d'un service qui doit fonctionner en temps réel : monitoring, indicateurs, dégradation partielle.
- Vous savez que votre alliée principale dans la mise en place d'un système à fort impact est une batterie de tests extensive sur tous les niveaux (unitaires, intégration, E2E).
- Vous saurez recruter et former les bons profils pour constituer une équipe capable d'amener le produit à l'échelle nationale.
- Vous prenez la sécurité à cœur : Notifications a vocation à transmettre un grand nombre de messages entre l'administration et ses usagers. Il doit donc bénéficier d'une sécurité maximale (2FA/3FA, politique de rétention des données, etc).
- Vous avec une forte appétence pour l'IaC (Infrastructure as Code), le SRE (Site-Reliability Engineering) et les outils de CI/CD – l'ensemble de processus que vous orchestrerez vous le demandera.

À l'heure actuelle, Notifications s'appuie essentiellement sur ces technologies :

- Python (Flask, SQLAlchemy, Werkzeug, Gunicorn, Pytest) ;
- Redis ;
- Celery/Beat ;
- PostgresQL.

Nous recherchons quelqu'un maîtrisant Python, et idéalement familier avec les bibliothèques et applications dans la liste ci-dessus.

### État d'esprit recherché et savoir-être

- Vous êtes à l'aise pour dialoguer avec des équipes produit dans l'administration et des usagers sur le terrain, pour comprendre leurs difficultés et leur proposer des solutions actionnables.
- Vous vous épanouirez dans cette mission si vous possédez un esprit entrepreneurial : nous testons activement l'hypothèse que Notify peut être repris pour répondre à des besoins réels au sein de l'administration. Vous devrez contribuer à créer une vision du produit et prioriser les efforts de l'équipe pour avoir un maximum d'impact tout en assurant la qualité du produit.
- Une sensibilité pour la gestion de produit (savoir faire des arbitrages sur le contour du produit, rationaliser le coût de développement par rapport à l'impact espéré) et aimer parler aux usagers seront de gros avantages dans la mission.
- Savoir communiquer des enjeux techniques complexes dans un langage simple, facilement compréhensible par des non-techs, et mettre en avant les points saillants de votre argument seront autant d'atouts pour réussir la mission.
- Idéalement, vous êtes à l'aise avec l'ambiguïté des premiers mois de développement d'un produit : lorsque quelque chose n'est pas clair, vous vous sentez suffisamment à l'aise pour le dire et pour aller chercher des réponses à vos questions.
- Vous vous sentez également à l'aise pour challenger les autres membres de l'équipe, ou pour faire des demandes d'aide.

## Ce que la communauté beta.gouv.fr peut vous apporter
- Découverte du monde de l'administration, des enjeux autour du design et de l'implémentation des politiques publiques nativement numériques.
- Une offre de formation continue : participez aux formations mensuelles organisées par et pour la communauté beta.gouv.fr pour monter en compétences sur une diversité de sujets (growth hacking, initiation au no-code, culture produit, définition d'OKRs, RGPD, donner du feedback en équipe…).
- Une collaboration avec une communauté d'experts dans le domaine du développement et du design, regroupant une diversité d'expertises. Nous encourageons les membres de la communauté beta.gouv.fr à solliciter de l'aide pour monter en compétences sur des sujets de pointe (accessibilité, normes RGAA…).
- La liberté de vous investir sur des sujets « transverses » à la communauté beta.gouv.fr, en participant à des groupes de travail existants (REX, partage d'apprentissages, réflexion sur le fonctionnement de la communauté par exemple l'intégration de nouveaux membres, relations entre incubateurs…) ou en proposant de nouvelles initiatives (mettre en place des nouveaux processus ou des outils pour les startups d'Etat, faire venir une connaissance pour présenter un sujet…).
- Participation aux séminaires bi-annuels de la communauté (sous forme de "forum ouvert").

## Modalités
- Environnement et communauté beta.gouv : https://beta.gouv.fr ([découvrir la culture](https://doc.incubateur.net/communaute/travailler-a-beta-gouv/culture))
- Poste ouvert pour des indépendant·e·s pour une durée de 3 mois renouvelable
- 4 à 5 jours par semaine
- Rémunération envisagée entre 600 et 700 € HT par jour
- Démarrage en septembre ou octobre 2022
- Télétravail à temps complet

Pour candidater, envoyez-nous un e-mail à beatrice.mercier@beta.gouv.fr et antoine.augusti@beta.gouv.fr.

N’hésitez pas à nous partager :

- Vos motivations pour rejoindre l’équipe
- Votre CV ou un lien vers votre profil LinkedIn
- Un lien vers votre profil GitHub / Gitlab ou certaines de vos réalisations qui vous semblent pertinentes

Nous avons hâte de vous lire et d'échanger avec vous !
