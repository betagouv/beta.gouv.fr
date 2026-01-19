---
accessibility_status: non conforme
analyse_risques: false
mon_service_securise: true
contact: peate@dxo-design.fr
link: https://www.parapheur-peate.fr/
stats_url: https://www.parapheur-peate.fr/
thematiques:
  - Administratif
  - Outil technique
usertypes:
  - etat
techno:
  - ixbus
  - postgresql
  - websocket
  - 'SGDB '
  - conteneur
  - OIDIC
  - ProConnect
title: PeATE
mission: Parapheur Electronique de l'Administration Territoriale de l'Etat
incubator: dinum
sponsors:
  - /organisations/ditp
  - /organisations/ministere-de-l-interieur-et-des-outre-mer-direction-des-ressources-humaines
  - /organisations/secretariat-general-aux-affaires-regionales-sgar-bretagne
phases:
  - name: investigation
    start: 2022-05-01
  - name: construction
    start: 2023-03-01
  - name: alumni
    start: 2026-01-19
events:
  - name: end
    date: 2025-01-19
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view#PeATE
---
Post-mortem

Cette fiche ne décrit pas un projet ayant réellement été conduit en mode startup d’État.
Le produit présenté est issu d’un partenariat ponctuel entre une administration et un acteur privé, sans qu’une transformation en startup d’État n’ait jamais abouti.

Si une réflexion a existé à un moment pour envisager une inscription dans le cadre Beta.gouv.fr , celle-ci n’a pas été mise en œuvre :

aucun comité d’investissement n’a été organisé,

aucun objectif d’impact n’a été formalisé,

aucune équipe produit dédiée n’a été constituée pour opérer le service,

aucune dépense n’a été engagée dans le cadre des marchés BETA.gouv.

Le projet n’a donc jamais été incubé ni opéré selon la méthodologie des startups d’État.
La fiche a été créée de manière prématurée et n’est plus d’actualité en tant que projet actif.

Elle est conservée en partenariat terminé à des fins d’historique et de transparence, mais ne reflète pas un produit développé ou financé dans le cadre de Beta.gouv.fr

## Contexte

Une initiative du SGAR Bretagne pour trouver une méthode et une solution numérique ENFIN adaptée aux usages concret dont interministériels de l'Administration Territoriales de l’État (ATE). Grâce au méthodologie et au cadre du laboratoire d'innovation TI Lab, une expérimentation d'usage avec des designers en immersion dans les services a pu être lancée durant l'été 2022. Suite aux résultats, "un livre de recette des conditions de réussite du déploiement du parapheur électronique" a été réalisé et une solution a pu être adaptée et évoluée au vu des besoins. 

## Problème

"Mais il est où mon parapheur ? " Il y en a des centaines de millier de parapheurs papier/ carton qui circulent dans les administrations territoriales de l’État... 
Beaucoup se perde, d'autres mettent des semaines à atteindre leur signataire final... et impossible de gérer ces circuits de validation quant on est en télétravail ou à distance...
PIRE ... c'est une tragédie écologique le parapheur papier/ carton CAR tous coûts confondus il dégage, en moyenne, 6 fois plus de CO2 qu'un parapheur électronique (sans compter les forêts abattues pour nos ramettes de papier, l'encre de nos imprimantes qui polluent et le fait que ce parapheur avant d'être papier est préparé sur un ordinateur et qu'après signature les documents sont scannés pour notification ou diffusion...).
"Pourquoi on a pas de solution de parapheur électronique adaptée aux usages interministérielles de l'administration territoriale de l'Etat?" 
En Bd ça donne quoi tous ces problèmes (lire "BD Service Oméga') : https://www.parapheur-peate.fr/documents-cles 

## Solution

Un Parapheur Électronique est un outil numérique qui permet la gestion électronique des documents administratifs au sein d'une organisation. Il remplace les méthodes traditionnelles de gestion de documents papier, telles que l'impression, la signature manuelle et l'acheminement physique des dossiers.Concrètement, le Parapheur Électronique offre une plateforme sécurisée où les utilisateurs.rices peuvent consulter, annoter, signer et valider électroniquement les documents de manière collaborative. Il permet également de suivre et d'archiver les différentes étapes de traitement des documents, assurant ainsi une traçabilité et une transparence accrue.
Il contribue à l'objectif zéro papier et à réduire la production de CO2 de nos administrations...

## Stratégie

La démarche PeATE a commencée en 2022, initialement appelée EPE pour Expérimentation du Parapheur Électronique en Bretagne. Elle s'inspire des méthodologies du design pour tester la mise en place du parapheur électronique dans des services déconcentrés de l'État, en Bretagne. En observant les utilisateur.ice.s et en cherchant à identifier leurs besoins nous identifions les usages qui vont évoluer et ainsi proposer une conduite du changement appropriée.

Nous avons choisi de développer une solution PeATE (Parapheur Électronique de l'Administration Territoriale de l’État)  à partir de la solution iXParapheur et sa plateforme IXBUS, éditée par SRCI (opérateur basé à Tours), car elle répond aux divers besoins de flexibilité et de paramétrage identifiés chez les utilisateurs et des services de l'ATE et permet l'utilisation des fonctionnalités d'usage à l'état de l'art attendues pour un parapheur électronique. Les services expérimentateurs sont accompagnés d’une équipe de designers appliquant différentes méthodes permettant une conduite du changement sur-mesure pour transformer les organisations et continuer l'amélioration de l'outil. Ainsi, ils documentent et observent les agents pour capitaliser les retours d’expérience et concevoir des conditions de réussites pour les futurs déploiements. 
Nous avons ainsi réalisé un livre de recette (méthode) sur les conditions de réussite du parapheur électronique : https://www.parapheur-peate.fr/documents-cles 

En 2024, la dimension pleinement interministérielle de PeATE a été confirmée et donc le projet a basculé pleinement dans une trajectoire BetAGOUV OPI de l'Etat. Elle se déploie au niveau de l'ATE dont pour les directions régionales et dans les rectorats.