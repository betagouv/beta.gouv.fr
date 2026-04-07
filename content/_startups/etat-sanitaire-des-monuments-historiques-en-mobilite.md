---
analyse_risques: false
mon_service_securise: false
contact: contact@patrinotes.beta.gouv.fr
thematiques:
  - Patrimoine
usertypes:
  - etat
techno: []
title: Constats d'état sur les monuments historiques en mobilité
mission: 'Faciliter la rédaction, le stockage et le partage du rapport de visite d''un monument historique réalisé dans le cadre du contrôle scientifique et technique. '
incubator: culture
phases:
  - name: investigation
    start: 2025-01-01
  - name: construction
    start: 2025-11-25
events:
  - name: committee
    date: 2025-04-10
  - name: other
    date: 2025-05-14
    comment: 'Il a été décidé d''intégrer les besoins détectés lors de l''investigation dans un produit existant et en accélération : CR Vif'
  - name: committee
    date: 2025-12-05
    comment: validation du prototype et passage en construction de la version V0
sponsors:
  - /organisations/dgpat
budget_url: https://grist.numerique.gouv.fr/o/isn/mAQJQawVbFUA/Depenses-numeriques/p/4#a1.s29.r21.c2
link: https://patrinotes.beta.gouv.fr/
---
## Contexte

En 2026, La France compte environ 46 000 monuments historiques (MH) qui constituent le bien commun de la Nation. La protection au titre des monuments historiques (articles L621 du code du patrimoine) implique une responsabilité partagée entre les propriétaires et la collectivité nationale au regard de la conservation et de la transmission de ce patrimoine aux générations à venir. C'est l'État qui a, à ce titre, la responsabilité de veiller à la préservation des monuments historiques. Cette mission de contrôle scientifique et technique (CST) définie par le code du Patrimoine (article R621-18) et la circulaire du 1er décembre 2009, est assurée par les experts des services du ministère de la Culture chargés des monuments historiques qui doivent vérifier régulièrement l'état de ce patrimoine et les conditions de sa conservation de façon à assurer sa pérennité. 
Cette vérification périodique comporte la réalisation régulière de "constats d'état", qui sont des rapports de visite d'un MH accompagnés d'une couverture photographique. Il s'agit d’un constat visuel, qui ne rend compte que de l'état apparent du bien protégé, sans recours à aucune technologie. Outre l’établissement de l’état de conservation, la visite permet d’identifier et de prévenir les risques qui pèsent sur les MH. Les données sont enregistrées dans les applications du ministère de la Culture (logiciel AgrÉgée) afin de suivre l'évolution dans le temps de chaque monument historique, réaliser les synthèses territoriales ou typologiques, orienter les programmes de restauration, et mettre à jour les données existantes.

## Problème
Aujourd'hui, les remontées de données ne sont pas optimales :
*  Moins de 2% des monuments historiques ont fait l’objet d’une fiche de visite ou d’un état sanitaire dans AgrÉgée en 2024 (181 états sanitaires sur un objectif de 8 000/an)
*  La fiabilité des données renseignées lors des bilans périodiques (disponible sur le site du ministère de la Culture) peut en conséquence poser question, même si la connaissance approfondie du parc des MH permet aux agents de donner une évaluation synthétique
*  Les visites de monuments historiques ne sont pas assez nombreuses par rapport aux objectifs (dépriorisées par rapport aux autres tâches des ABF et des CRMH)
*  Les rapports, lorsqu'ils sont réalisés, sont très chronophages et fastidieux (multiples ressaisies -calepin + scan -> Word -> AgrÉgée) donc souvent reportés ou abandonnés
*  Ils restent souvent stockés sur le serveur local ou dans l'ordinateur/ les dossiers papier de l'agent, sans remontée d'information ni partage entre services


**Au final, une grande perte d'information sur l'état des monuments historiques en France est à déplorer. Cela ne permet pas de prioriser les visites, d'assurer un suivi efficace et de mieux orienter les programmes de restauration. Cela fait aussi perdre beaucoup de temps aux agents qui pourrait être mieux mis à profit sur des tâches à plus grande valeur ajoutée (Voir mission d’information sénatoriale : « ABF : périmètres et compétences »)**


## Solution

L'investigation sur le sujet a montré que les agents pourraient être en mesure de mieux réaliser la mission de CST s'ils étaient équipés d'un outil numérique d'aide à la saisie sur le terrain. Lors de l'investigation, une première estimation d'impact a été faite :
*  L'estimation de temps consacré à la tâche divisé par 3 pour réaliser un compte-rendu
*  2 fois plus de comptes-rendus réalisés par rapport à une moitié d'année type (référence 2024)
Le projet est ensuite passé en phase de construction pour réaliser une première solution numérique.

Un prototype été livré en novembre 2025, qui permet un service disponible aussi hors ligne pour couvrir les zones blanches, permet d'éditer, de stocker et de partager ces informations. Il est à l'usage des agents du ministère de la culture, en charge du CST en DRAC (UDAP, CRMH, SRA) et du CMN. Les premiers tests positifs en fin d'année 2025 ont motivé la poursuite de l'expérimentation et le déploiement de la solution sur le territoire national avec des testeurs volontaires.

Ce prototype a été rassemblé avec [l'outil Compte-rendu VIF](https://beta.gouv.fr/startups/compte.rendu.vif.html), en un unique outil:  [**Patrinotes**](https://patrinotes.beta.gouv.fr/), dont l'objectif est de permettre d’établir rapidement des documents en mobilité facilitant la bonne compréhension de l’expertise et permettant la fiabilité et la ré-utilisation des informations, sans ressaisie.

## Objectifs pour 2026

**Objectifs de déploiement**
*  expérimentations in situ par l'équipe-projet
*  Plus de 50 constats d'état réalisés avec l'outil
*  élargissement du panel de testeurs à plus de 50 agents représentant différents métiers et d'un service déconcentré
* poursuite de la campagne d'informations (DCAT, séminaires CRMH et ABF) et mise en place et animation d'une communauté (webinaire, infolettre, etc.) en collaboration avec la Direction Générale du Patrimoine et de l'Architecture


**Objectifs de développement**

* à court terme (avril 2026) : finalisation du prototype V0, adaptation du formulaire aux constats d'état complexes, envoi sous couvert hiérarchique, alertes autres métiers
* à moyen terme (rentrée 2026) : livraison de la version 1 (intégrant les fonctions de géolocalisation et un formulaire dédié aux constats d'état sur "objets mobiliers MH" )
* à long terme (hiver 2026) : livraison de la version 2 (élargissement des besoins métiers selon les retours de tests sur V0 et V1 et ouverture aux personnes qui pourraient en disposer comme des conservateurs des monuments historiques et des conservateurs des antiquités et objets d'art (CAOA) pour les objets mobiliers, des architectes urbanistes de l'Etat affectés au sein du centre des monuments nationaux (CMN) et de l'Opérateur du patrimoine et des projets immobiliers de la culture (OPPIC) ou d'établissements publics gérant un Domaine national (L621-34 du code du patrimoine) ou auquel le monument historique a été remis en dotation.)


**Objectifs d'impact**
* 2 fois plus de constats d'états réalisés en 6 mois par rapport à une moitié d'année type (référence 2024 dans AgrÉgée)
*  Temps divisé par 3 pour réaliser un constat d'état
