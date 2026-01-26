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

La France compte environ 45 000 monuments historiques (MH ; articles L621 du code du patrimoine) qui constituent le bien commun de la Nation et c'est l'État qui a, à ce titre, la responsabilité de veiller à leur préservation. Cette mission de contrôle scientifique et technique (CST) définie par la circulaire du 1er décembre 2009, est opérée par des experts du ministère de la culture. Elle comporte la réalisation régulière de "constats d'état", qui sont des rapports de visite d'un MH accompagnés d'une couverture photographique. Il s'agit de constat visuel, qui ne rend compte que de l'état apparent du bien protégé, sans recours à aucune technologie. Outre l’établissement de l’état de conservation, la visite permet d’identifier et de prévenir les risques. Les données sont enregistrées dans les applications du ministère de la Culture (logiciel Agrégée) afin de suivre l'évolution dans le temps de chaque monument historique, réaliser les synthèses territoriales ou typologiques, orienter les programmes de restauration, et mettre à jour les données existantes. 

## Problème
Malheureusement, aujourd'hui, les remontées de données ne sont pas optimales :
-  Moins de 2% des monuments historiques ont été renseignés dans Agrégée en 2024 (181 états sanitaires sur un objectif de 8 000/an)
- La fiabilité des données renseignées lors des bilans quinquennaux est imparfaite.
- Les visites de monuments historiques ne sont pas assez nombreuses par rapport aux objectifs (dépriorisées par rapport aux autres tâches des ABF et des CRMH)
- Les rapports, lorsqu'ils sont réalisés, sont très chronophages et fastidieux (multiples ressaisies -calepin + scan -> Word -> Agrégée) et donc souvent reportés (risque de lacunes) ou abandonnés.
- Ils restent souvent stockés sur le serveur local ou dans l'ordinateur/ les dossiers papier de l'agent, sans remontée d'information ni partage entre services.

Au final, une grande perte d'information sur l'état des monuments historiques en France est à déplorer. Cela ne permet pas de prioriser les visites, d'assurer un suivi efficace, de mieux orienter les programmes de restauration grâce à des synthèses statistiques (niveau départemental, régional et national). Cela fait aussi perdre beaucoup de temps aux agents qui pourrait être mieux mis à profit (Voir mission d’information sénatoriale : « ABF : périmètres et compétences » )

## Solution

Une solution numérique de saisie des constats d'état en mobilité est proposée. Ce service, disponible aussi hors ligne pour couvrir les zones blanches, permettrait d'éditer, de stocker et de partager ces informations. A l'usage des agents du ministère de la culture, en charge du CST en DRAC (UDAP, CRMH, SRA) et du CMN. A terme, il pourrait éventuellement aussi être mis à disposition des Conservateurs des antiquités et objets d'art (CAOA) , des Architectes urbanistes de l'Etat affectés au sein de l'Opérateur du patrimoine et des projets immobiliers de la culture (OPPIC), d'un établissement public gérant un Domaine national (L621-34 du code du patrimoine) ou auquel le monument historique a été remis en dotation. 
Le prototype est livré en novembre 2025.

## Objectifs pour fin décembre 2025
Expérimentation sur une zone géographique délimitée.
Objectifs d'usage : 25 comptes-rendus réalisés avec le prototype

Objectif à 6 mois (juin 2025) :

Objectif d'impact :
- Temps divisé par 3 pour réaliser un compte-rendu.
- 2 fois plus de comptes-rendus réalisés par rapport à une moitié d'année type (référence 2024)

Objectif de test :
élargissement du panel de testeurs à 30 agents et un service déconcentré

Objectif de déploiement :
- Temps divisé par 3 pour réaliser un compte-rendu.
- 2 fois plus de comptes-rendus réalisés par rapport à une moitié d'année type (référence 2024)

Objectif de développement 2026 (amélioration continue) : 
- à court terme (avril 2026) : purge des scories de la version V0, adaptation du formulaire aux constats d'état complexes, envoi sous couvert hiérarchique, alertes autres métiers)
- à moyen terme (été 2026) : livraison de la version 1 (intégrant les fonctions de géolocalisation et un formulaire dédié aux constats d'état sur "objets mobiliers MH" )
- à long terme (automne 2026) : livraison de la version 2 (élargissement des besoins métiers selon les retours de tests sur V0 et V1 + besoins autres métiers et autres missions de CST)
