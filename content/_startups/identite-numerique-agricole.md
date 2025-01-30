---
mission: Faciliter les démarches des agriculteurs
incubator: agriculture
title: Identité numérique agricole
contact: adrien.laville@beta.gouv.fr
thematiques:
  - Agriculture
  - Entreprises
  - Outil technique
usertypes:
  - entreprise
  - particulier
sponsors:
  - /organisations/service-du-numerique-du-ministere-de-l-agriculture-et-de-la-souverainete-alimentaire
phases:
  - name: alumni
    start: 2024-06-18
techno: []
link: ''
---
## Contexte
Le déploiement de l'identité numérique agricole était une des mesures proposées par la Feuille de route "numérique et données pour la planification écologique" publiée en décembre 2023 par le Secrétariat général à la planification écologique (SGPE). 

## Le problème

Les agriculteurs ont un nombre conséquent de démarches administratives à réaliser auprès de différents organismes (DRAAF, DDT, DDPP, France Agrimer, MSA, ASP, chambres d’agriculture, collectivités…) pour leur installation, les autorisations d’exploitation et de vente, les certificats, les contrôles, les demandes d’aides ou les obligations liées aux aides…

En l’absence de référentiels partagés, les porteurs de démarches demandent des informations différentes pour identifier les agriculteurs. Et, en l’absence de numérisation et de circulation des données entre organismes, des informations similaires sont demandées pour différentes démarches.

Cela créé un manque de visibilité, de l’incertitude et du stress pour les agriculteurs qui doivent recourir à des mandataires et/ou consacrer un temps important aux démarches. Ils s’exposent aussi à des risques d’erreurs et, in fine, à des sanctions ou au non-paiement de certaines aides.

## Périmètre de l'investigation

L’investigation visait à étudier l’intérêt et la faisabilité de la création d’une identité numérique agricole pour simplifier les démarches des agriculteurs et de leurs mandataires. 

Le concept d’identifiant unique ou commun recouvre deux logiques selon qu’on le considère du point de vue de l’utilisateur ou des responsables d’applications :
* Pour l’utilisateur : pouvoir se connecter avec les mêmes identifiants sur un ensemble d’applications,
* Pour les applications : pouvoir s’appuyer sur un moyen d'identification commun et ainsi ne pas redemander de créer un compte ou de renseigner des informations d’identification. 

La mise en place d’un tel identifiant peut ainsi permettre de :
* Diminuer le nombre de comptes à retenir par l’usager et réduire les démarches d’identification ou de création de compte,
* Renforcer la sécurisation de la connexion, le fournisseur de service commun pouvant apporter un niveau de sécurité plus élevé (mot de passe complexe, authentification double facteur),
* Favoriser la circulation des données en utilisant les données d’identification comme données pivots entre différentes applications et ainsi participer au déploiement du Dites-le-nous-une-fois. 

## Conclusion de l’investigation 
La première observation est que les agriculteurs et leurs mandataires sont inclus dans la population plus large des professionnels du privé et effectuent, à ce titre, des démarches auprès d’autres administrations et qui ne sont pas propre à leur métier. 


Plutôt que de déployer un identifiant ou une fédération d’identité propre au secteur agricole, nous conseillons donc de s’appuyer sur une solution interministérielle pour l’ensemble des portails et démarches professionnelles avec pour objectif que les agriculteurs, au même titre que les autres responsables d’entreprises, n’aient qu’un seul identifiant pour gérer leurs relations avec les acteurs publics. 
 

Le produit ProConnect, développé par la DINUM, rassemblera des fonctionnalités d’**identification, authentification, certification d’identité, et délégation de représentation** pour les professionnels du privé. Si la solution intégrant ces 4 briques est en cours de construction pour une mise en production courant 2025, les briques d’identification et d’authentification peuvent déjà être déployées. 

## Bénéfices attendus 
Pour être un facteur de simplification, le travail sur le déploiement de ProConnect doit être associé aux travaux sur la numérisation des démarches et la circulation des données entre administrations (Dites-le-nous-une-fois). 

Ainsi, le déploiement de ProConnect au secteur agricole peut être envisagé à 3 niveaux : 
- L’intégration de ProConnect aux différents portails numériques utilisés pour réaliser les démarches permettrait, a minima, de réduire le nombre de comptes à retenir pour les agriculteurs.
- Numériser les démarches en intégrant ProConnect permettrait de simplifier les démarches pour les usagers et les instructeurs en supprimant le travail d’identification (demande d’informations d’identification d’un côté et vérification de l’identité de l’autre). 
- Le déploiement de ProConnect doit enfin contribuer à réduire le nombre d’informations demandées pour chaque démarche via 2 leviers : 
    - La réconciliation d’identité entre différents SI. Dès lors que les SI porteurs de démarches utilisent le même moyen d'identification, ils peuvent partager certaines données sans prendre le risque de se tromper de personne.
    - La consommation d’API dont l’accès est restreint. Certaines API nécessitent en effet d’être certifié comme dirigeant d’entreprise pour pouvoir être appelées. La brique de certification qu’intégrera ProConnect pourrait permettre de ne plus demander ou de pré-remplir un certain nombre de données de formulaire. 

## Plan d’expérimentation 
Afin de valider la pertinence et la faisabilité de cette orientation, nous proposons de mener une première expérimentation avec 3 niveaux d’objectifs à 6 mois : 
- Vis-à-vis des fournisseurs de services : réussir l’intégration auprès d’au moins un fournisseur de services et être en discussion avancée avec 3 fournisseurs de services du secteur agricole. 
* Vis-à-vis de la numérisation des démarches : intégrer ProConnect à Démarches Simplifiées et numériser de nouvelles démarches et réduisant le nombre d’informations demandées (10 démarches numérisées au niveau local déployées au niveau national, 10 démarches papier ou statique numérisées dans au moins un territoire, réduction de 20% des données demandées sur ces démarches). 
* Vis-à-vis des agriculteurs : ProConnect est utilisé par 30% des déclarants des démarches ciblées et au moins 1000 comptes auront été créés dans le secteur agricole. 
