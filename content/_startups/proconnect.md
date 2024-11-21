---
title: ProConnect
mission: La solution qui vous identifie en tant que professionnel.
sponsors:
  - /organisations/dinum
incubator: dinum_produits_interministeriels
phases:
  - name: investigation
    start: 2020-06-23
    end: 2020-09-15
  - name: construction
    start: 2022-06-01
  - name: acceleration
    start: 2022-12-01
stats: false
contact: support.partenaires@agentconnect.gouv.fr
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
analyse_risques: true
repository: https://github.com/france-connect/sources
link: https://www.proconnect.gouv.fr
stats_url: https://www.proconnect.gouv.fr/stats
---
*Le projet ProConnect est issu de la fusion de plusieurs services: AgentConnect, MonComptePro, InclusionConnect*

## Problème

La gestion des identités numériques dans l’écosystème professionnel présente des défis majeurs pour les agents publics, les entreprises et autres organisations. Avec la multiplication des portails et services numériques, plusieurs enjeux se posent :

 * **Pour les agents publics** : jongler entre plusieurs identifiants et mots de passe ralentit leur travail et complique leur quotidien.
 * **Pour les entreprises et organisations privées** : la création et la gestion de comptes sur les portails publics sont souvent lourdes et inefficaces.
    * Assurer que les collaborateurs accèdent aux bons services tout en limitant les risques d’usurpation d’identité.
    * Simplifier la gestion des départs (résiliation de comptes) ou des changements internes.
    * Réduire les risques liés au partage des identifiants entre collaborateurs ou avec des tiers comme des experts-comptables.
 * **Pour l’État** : chaque nouveau portail nécessite une gestion des authentifications souvent développée de manière ad hoc, ce qui alourdit les coûts et les risques de failles.

Face à ces problématiques, ProConnect se positionne comme une solution d’authentification unique et unifiée, simplifiant l’accès et renforçant la sécurité des utilisateurs dans la sphère publique.

## Solution proposée

ProConnect est une solution d’authentification basée sur le protocole OpenID Connect. Son fonctionnement est le suivant :

1. **Accès à un service via ProConnect**  
   Lorsqu’un utilisateur souhaite se connecter à un service intégré à ProConnect, il clique sur le bouton ProConnect présent sur la plateforme.

2. **Identification via un fournisseur d’identité (FI)**  

   - **Pour les agents publics** :  
     ProConnect s’appuie sur les systèmes d’identités des administrations (ex. Passage2, Cerbère). Si aucun fournisseur d’identité n’est disponible, ProConnect crée une identité professionnelle dédiée.  
   - **Pour les professionnels du privé** :  
     ProConnect vérifie l’identité en se basant sur des données fiables, comme le courriel professionel et le SIRET de l'organisation. Une certification à partir du référentiel national des entreprises est actuellement en développement.

3. **Validation et retour au service**  
   Une fois l’utilisateur identifié, ProConnect valide son identité et transmet les informations nécessaires au service numérique concerné. L’utilisateur est ensuite redirigé vers la plateforme où il peut accéder à ses outils ou démarches.

## **Cas d’usage**

1. **Pour un agent public** :  
   Marie, chargée de mission dans une administration, utilise ProConnect pour accéder à tous ses outils : Tchap pour communiquer, Résana pour partager ses fichiers, et d’autres portails interministériels. Avec ProConnect, elle n’a besoin que d’un identifiant unique.

2. **Pour une entreprise** :  
   Pierre, dirigeant d’une PME, utilise ProConnect pour accéder aux portails publics de déclaration (URSSAF, téléprocédures, etc.). Ses collaborateurs, habilités par ses soins, disposent d’un accès sécurisé aux mêmes services sans avoir à créer de nouveaux comptes.

3. **Pour une administration** :  
   Le ministère X intègre ProConnect dans son nouvel outil numérique pour les collectivités territoriales. Cela évite de développer un système d’authentification complexe et garantit une conformité aux standards de sécurité de l’État.

## En cours et perspectives

La roadmap de ProConnect peut-être trouvée sur [cette page dédiée](https://www.proconnect.gouv.fr/feuille-de-route). Les enjeux principaux sont:

 - Authentification multi-facteurs.
 - Certification des dirigeants.
 - Support de la carte agent.

---
ProConnect incarne l’ambition de l’État de construire un écosystème numérique simplifié, sécurisé et collaboratif, au service des agents publics et des professionnels.