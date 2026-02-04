---
analyse_risques: false
mon_service_securise: false
contact: contact@patrimoine-embarque.beta.gouv.fr
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
link: ''
---
## Contexte

En 2026, La France compte environ 46 000 monuments historiques (MH) qui constituent le bien commun de la Nation. La protection au titre des monuments historiques (articles L621 du code du patrimoine) implique une responsabilité partagée entre les propriétaires et la collectivité nationale au regard de la conservation et de la transmission de ce patrimoine aux générations à venir. C'est l'État qui a, à ce titre, la responsabilité de veiller à la préservation des monuments historiques. Cette mission de contrôle scientifique et technique (CST) définie par le code du Patrimoine (article R621-18) et la circulaire du 1er décembre 2009, est assurée par les experts des services du ministère de la Culture chargés des monuments historiques qui doivent vérifier régulièrement l'état de ce patrimoine et les conditions de sa conservation de façon à assurer sa pérennité. 
Cette vérification périodique comporte la réalisation régulière de "constats d'état", qui sont des rapports de visite d'un MH accompagnés d'une couverture photographique. Il s'agit d’un constat visuel, qui ne rend compte que de l'état apparent du bien protégé, sans recours à aucune technologie. Outre l’établissement de l’état de conservation, la visite permet d’identifier et de prévenir les risques qui pèsent sur les MH. Les données sont enregistrées dans les applications du ministère de la Culture (logiciel AgrÉgée) afin de suivre l'évolution dans le temps de chaque monument historique, réaliser les synthèses territoriales ou typologiques, orienter les programmes de restauration, et mettre à jour les données existantes.

## Problème
Malheureusement, aujourd'hui, les remontées de données ne sont pas optimales :
•	Moins de 2% des monuments historiques ont fait l’objet d’une fiche de visite ou d’un état sanitaire dans AgrÉgée en 2024 (181 états sanitaires sur un objectif de 8 000/an)
•	La fiabilité des données renseignées lors des bilans périodiques (disponible sur le site du ministère de la Culture) peut en conséquence poser question, même si la connaissance approfondie du parc des MH permet aux agents de donner une évaluation synthétique
•	Les visites de monuments historiques ne sont pas assez nombreuses par rapport aux objectifs (dépriorisées par rapport aux autres tâches des ABF et des CRMH)
•	Les rapports, lorsqu'ils sont réalisés, sont très chronophages et fastidieux (multiples ressaisies -calepin + scan -> Word -> AgrÉgée) donc souvent reportés (risque de lacunes) ou abandonnés.
•	Ils restent souvent stockés sur le serveur local ou dans l'ordinateur/ les dossiers papier de l'agent, sans remontée d'information ni partage entre services.
Au final, une grande perte d'information sur l'état des monuments historiques en France est à déplorer. Cela ne permet pas de prioriser les visites, d'assurer un suivi efficace, de mieux orienter les programmes de restauration grâce à des synthèses statistiques (niveau départemental, régional et national). Cela fait aussi perdre beaucoup de temps aux agents qui pourrait être mieux mis à profit sur des tâches à plus grande valeur ajoutée (Voir mission d’information sénatoriale : « ABF : périmètres et compétences », par exemple )
L'investigation sur le sujet a montré que les agents pourraient être en mesure de mieux réaliser la mission de CST s'ils étaient équipés d'un outil numérique d'aide à la saisie sur le terrain, qui leur éviterait d'avoir à recopier leurs notes, une fois revenus au bureau. Lors de l'investigation, une première estimation d'impact a été faite :
•	L'estimation de temps consacré à la tâche divisé par 3 pour réaliser un compte-rendu et avec 
•	2 fois plus de comptes-rendus réalisés par rapport à une moitié d'année type (référence 2024)
Le projet est ensuite passé en phase de construction pour réaliser une première solution numérique.

## Solution

Une solution numérique de saisie des constats d'état en mobilité est proposée. Ce service, disponible aussi hors ligne pour couvrir les zones blanches, permet d'éditer, de stocker et de partager ces informations. A l'usage des agents du ministère de la culture, en charge du CST en DRAC (UDAP, CRMH, SRA) et du CMN. A terme, il pourrait éventuellement aussi être mis à disposition des conservateurs des monuments historiques et des conservateurs des antiquités et objets d'art (CAOA) pour les objets mobiliers, des architectes urbanistes de l'Etat affectés au sein du centre des monuments nationaux (CMN) et de l'Opérateur du patrimoine et des projets immobiliers de la culture (OPPIC) ou d'établissements publics gérant un Domaine national (L621-34 du code du patrimoine) ou auquel le monument historique a été remis en dotation.
Le prototype a été livré en novembre 2025 avec des premiers tests positifs en fin d'année 2025. Ces résultats encourageant ont motivé la poursuite de l'expérimentation et le déploiement de la solution sur le territoire national avec des testeurs volontaires.

## Objectifs pour 2026

Objectifs immédiats :

•	expérimentation in situ par l'équipe-projet
•	arrêt d'un nom pour l'outil en février 2026
•	objectifs d'usage : 25 comptes-rendus réalisés avec le prototype
•	élargissement du panel de testeurs à 30 agents représentant différentes métiers + un service déconcentré
•	mise en place du processus d'embarquement
•	lancement de la campagne d'information via infolettre (DCAT, CRVif), site vitrine, séminaires CRMH et ABF
++Objectif de déploiement :++
•	campagne de test sur le panel élargi
•	poursuite de la campagne d'information et mise en place et animation d'une communauté (webinaire, etc.)

Objectif de développement (amélioration continue) :

•	à court terme (avril 2026) : finalisation du prototype V0, adaptation du formulaire aux constats d'état complexes, envoi sous couvert hiérarchique, alertes autres métiers)
•	à moyen terme (été 2026) : livraison de la version 1 (intégrant les fonctions de géolocalisation et un formulaire dédié aux constats d'état sur "objets mobiliers MH" )
•	à long terme (automne 2026) : livraison de la version 2 (élargissement des besoins métiers selon les retours de tests sur V0 et V1 + besoins autres métiers et autres missions de CST)


Objectif d'impact :

•	Temps divisé par 3 pour réaliser un compte-rendu.

•	2 fois plus de comptes-rendus réalisés en 6 mois par rapport à une moitié d'année type (référence 2024)

