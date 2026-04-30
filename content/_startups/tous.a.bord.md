---
title: Tous à bord !
mission: Automatiser l'octroi de la tarification sociale et solidaire des transports partout en France
sponsors:
  - /organisations/dgitm
  - /organisations/mtfp
incubator: DINUM
repository: https://github.com/betagouv/tous-a-bord
contact: tousabord@beta.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2022-08-23
  - name: construction
    start: 2022-11-01
  - name: alumni
    start: 2025-03-27
link: https://tous-a-bord.beta.gouv.fr/
thematiques:
  - Social
  - Transports
usertypes: []
techno: []
events:
  - name: end
    date: 2025-03-23
---
## Contexte

Pour lutter contre le non-recours aux aides, la Direction Interministérielle du Numérique (DINUM) et la Direction Générale des Infrastructures, des Transports et des Mobilités (DGITM) proposent d’accompagner les Autorités Organisatrices de la Mobilité (AOM) volontaires dans l’automatisation de l'octroi des tarifs sociaux et solidaires des transports partout en France et dans la notification des citoyens éligibles de leur droit au tarif préférentiel. Ce projet s’inscrit dans la continuité des travaux portant sur le développement de l’API Tarification sociale et solidaire des transports, pilotés par ETALAB et le GART.

## Problème

Dans le monde du transport, la pro-activité représente une opportunité de promotion des transports en commun ; contribuant ainsi indirectement à la transition énergétique et à la lutte contre les inégalités d’accès à la mobilité. 

Dans le cadre du chantier « administration proactive », la DINUM engage actuellement un recensement des besoins en termes d'administration proactive et des travaux d’expérimentation auprès d’AOM volontaires afin de lutter contre le non-recours aux droits, simplifier l’accès aux droits et les démarches, aller vers les bénéficiaires en informant de l’éligibilité ou en attribuant automatiquement les droits.

## Solution

Dans ce contexte, Tous à bord ! propose d’engager un travail avec les AOM volontaires pour déployer un processus de notification automatique des droits et poursuivre la dynamique engagée en matière de récupération automatique des justificatifs d’éligibilité aux droits. 

Ce travail, dont la finalité sera d’identifier les opportunités de proactivité ainsi que les besoins des AOM pour y parvenir, s’articulera autour de deux chantiers menés en parallèle : 

- Chantier n°1 : compréhension de l’existant et de définition du besoin en matière de proactivité / notification, s’inscrivant dans la poursuite du chantier engagé depuis plusieurs mois avec Etalab sur les API.  Ce chantier sera mené avec toutes les AOM volontaires sur la base de questionnaires et d’entretiens n’engageant pas la mise en œuvre de chantiers proactifs.      
- Chantier n°2 : expérimentation de la proactivité avec des AOM souhaitant d’ores et déjà s’engager dans une phase de test. L'expérimentation se déroulera dans un ou deux territoire(s) choisi(s) par la DINUM et le GART selon la liste des AOM ayant exprimé leur souhait de participer à l’expérimentation. 

Ces deux chantiers permettront de produire un rapport qui alimentera la réflexion sur la généralisation de la proactivité pour la tarification sociale et solidaire des transports. Il définira les contours d’un éventuel produit destiné à l’ensemble des AOM. La conduite en parallèle des deux chantiers permettra en outre d’alimenter la ou les expérimentation(s) d’idées ou d’opportunités identifiées dans le cadre du chantier n°1.


## 🧪 Résumé des expérimentations Tous à bord (Avril 2023) :

**💼 Expérimentation avec Artois Mobilité pour les demandeurs d’emploi (_encore en cours_)**

L'expérimentation avec Artois Mobilité vise à simplifier le parcours des demandeurs d'emploi dans l'accès aux tarifications sociales pour les transports publics.


- **Objectif** : réduction des démarches administratives pour les demandeurs d'emploi visant l'accès à des tarifs réduits dans les transports, grâce au principe "Dites-le-nous une fois".
- **Mise en œuvre** : utilisation de l'API Particulier pour vérifier en temps réel l'éligibilité des demandeurs d'emploi, simplifiant le processus de demande de tarification sociale.
- **Résultats et impact** :
    - Diminution des délais de traitement des demandes par 3
    - Réduction des démarches administratives répétitives : passage de 7 à 1 document administratif à fournir de la part du demandeur d’emploi

**🧑‍🎓 Expérimentation avec Brest Métropole pour les étudiants boursiers**

L'expérimentation menée par Brest Métropole en collaboration avec le CROUS de Bretagne vise à simplifier le parcours des étudiants boursiers pour l'accès à des tarifs réduits dans les transports publics.


- **Objectif** : réduction des démarches administratives pour les étudiants boursiers dans les transports
- **Mise en œuvre** : modélisation des critères avec le CROUS Bretagne
- **Résultats et impact** :
    - +10% de la cible atteinte : sur 6000 étudiants boursiers, 600 ont fait une demande pour leurs droits suite à la campagne (demandes liées à l’api)
    - Diminution des délais de traitement des demandes de 95 %
    - Réduction des démarches administratives répétitives : passage de 9 à 1 (une attestation sur l’honneur) document administratif à fournir par l’étudiant boursier


## 🚧 Reprise du produit (Octobre 2024)
**🔍 Etat des lieux des points de friction**

*   **Difficulté à définir l’échantillon nécessaire pour un territoire (enjeu statistique)**\
    ⚠️ les FD sont souvent régionaux là où les AOM sont variables > comment avoir la population éligibles matchant avec le territoire exact de l’AOM

*   **Difficulté à convaincre un Fournisseur de donnée (France Travail, CNAF) de partager un fichier de la population éligible à la tarification sociale / solidaire**

    *   ⚠️ méconnaissance du cadre juridique de la proactivité (vs RGPD)
    *   ⚠️ différence dans la maturité des FD sur le partage de données 

*   **Lenteur dans la collaboration sur le partage de données entre FD et AOM**

    *   ⚠️ besoin de réassurance juridique par la signature d’une convention entre FD et AOM\
        ⇒ forte latence *(plusieurs mois pour finaliser une convention)*

*   **Dissensions sur la stratégie de centralisation de la donnée**

    *   ⚠️ Juridiquement, la DINUM peut centraliser les données et notifier, c’est la gouvernance avec les différents pôles qui bloquent et non le juridique

*   **Difficulté à faire remonter / centraliser la mesure d’impact de la notification**

    *   ⚠️ Lorsque les AOM notifient directement les usagers (cf Brest Métropole), forte dépendance à l’AOM pour obtenir la remontée de notifiés convertis

## **🔄 Arrêt de la startup d'état & pivot (Mars 2025)**
Suite au comité d'investissement mené le 27 mars 2025, le choix a été fait d'arrêter la startup d'état pour les raisons suivantes :
*   **Difficulté à embarquer les Autorités Organisatrices de la mobilité** compte tenu d'un besoin plus centrer sur la simplification des démarches administratives (Dites le Nous une Fois) plutôt que sur la notification proactive
* **Priorité moins importante sur la proactivité** : dans un contexte d’économie budgétaire, la proactivité est dépriorisée ; d’autant que le Dites-le-nous-une-fois n’est pas encore mis en oeuvre dans de nombreuses collectivités
* **Besoin de continuer à sensibiliser les Fournisseurs de données** sur le nouveau cadre juridique de la proactivité et **d'outiller le partage de données de manière sécurisée** en travaillant à la construction d'API proactives du côté du FD


L'équipe Tous à Bord a donc identifier comme pivot stratégique : 
*  **La construction d'une base de donnée qui catalogue l’ensemble des critères d’éligibilité des AOM pour la tarification sociale et solidaire dans les transports**
    *   Une base de données à jour des AOM a été construite et sera publiée sur Data.gouv.fr
    *   Un Scrapper pour récupérer automatiquement les données des critères d’éligibilité listée sur les sites internet de chaque plateforme de billettique des AOM et sur des fichiers pdf joints est en cours de construction et sera repris par l'équipe de la Startup d'état **Aides Simplifiées**
