---
mission: Faciliter les démarches des agriculteurs
incubator: agriculture
title: Identité numérique agricole
contact: liste-equipe-transverse@agriculture.gouv.fr
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
  - name: investigation
    start: 2025-02-20
techno: []
events:
  - name: committee
    date: 2024-09-20
    comment: |-
      intrapreneur parti du MASA
      blocage des arbitrages budgets
  - name: product_launch
    date: 2025-02-20
    comment: la Ruche remet en priorité le sujet en complément des avancées de ProConnect agri pour avancer sur le « dites le nous une fois »
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

## Feuille de route envisagée

- demande d’un budget au projet loi finance 2025 par la Ruche porté par le SG/SNUM (sur le Programme 215) au titre des « chantiers simplification » : 500k
- lancement d’une équipe en mode startup d’État en relation avec les équipe de ProConnect et aides-agri : 
*  intrapreneuse/re au sein du SG à hauteur de 50-60% de son ETP
*  un/e coache produit
*  un/e développeuse/re spécialisée dans la circulation des données
*  un/e designeu/se
*  un/e chargé/e de déploiement

- premier atelier utilisateurs entre fournisseurs d’aides (ASP, FAM, MSA, DGPE, DGAl...) et représentants des usagers agriculteurs d’ici à début avril 2025 pour convenir des données concernées, des démarches sur le périmètre d’expérimentation 

### Objectifs d'ici à fin 2025
A l’issue de la phase d’investigation, l’orientation qui apparait la plus pertinente pour une expérimentation restreinte est :

- De déployer ProConnect (MoncomptePro pour sa version actuelle) sur Démarches simplifiées. AgentConnect y étant déjà déployé, et les solutions devant fusionner, le
portail de connexion devra de toute façon être mis à jour en 2025.

- Reprendre des démarches dématérialisées localement (exemple : demande de numéro pacage) dans des modèles diffusibles nationalement ou copiés localement,

- Dématérialiser des démarches déclaratives actuellement réalisées par envoi courriel.

Compte-tenu de la nature du sujet d’identification, les objectifs ci-dessus recoupent, pour partie, les sujets de dématérialisation, simplification et DLNUF sur les démarches qui seront ciblées lors de la phase d’expérimentation. De plus, la suite ProConnect étant en cours de finalisation, l’intégration au niveau des fournisseurs de services se fera initialement avec la brique MonComptePro Connexion, qui sera automatiquement basculé vers MonCompte Pro connexion à la mise en production du module.


### Objectifs d'ici à T1 2027
Sous réserve que le niveau d’atteinte des objectifs précdents soit jugé satisfaisant, et que l’expérimentation soit étendue voire généralisée, plusieurs pistes sont envisageables pour les objectifs à un an :
* La DINUM a terminé la réécriture de la brique certification et l’a déployé en production,
* La connexion portée par ProConnect est déployée et utilisée sur EAF/BACUS (portail et annuaire Usager.
* La documentation technique de Proconnect est diffusée à l’ASP et FranceAgriMer.pour
* étude préalables des impacts d’un raccordement sur Télépac, ISIS et Télésillages,
* Utilisation de ProConnect pour plus de 50% des demandes ciblées à 6 mois,
* Etude de l’impact d’une bascule des démarches portées par 6TZen vers Démarches simplifiées. La prise en main du produit étant plus simple et laissant plus d’autonomie aux porteurs de démarches