---
title: Carbure
mission: Gestion centralisée des flux de biocarburants
owner: Ministère de la Transition écologique et solidaire
incubator: mtes
status: construction
start: 2020-01-01
end: 
link: carbure.beta.gouv.fr
repository: https://github.com/MTES-MCT/carbure
stats: false
contact: guillaume.caillou@developpement-durable.gouv.fr
---

## Le problème

Aujourd’hui, les biocarburants doivent justifier leur durabilité pour être valables.
Ils doivent impérativement :
- Réduire les émissions de Gaz à effet de serre par rapports aux carburants fossiles
- Ne pas provenir de terres déforestées

Les biocarburants sont donc produits dans des bioraffineries à partir de matières premières dites « durables ». Lors de leur incorporation dans les carburants fossiles (dans les dépôts pétroliers), l’opérateur déclare les lots concernés à la DGEC (Direction générale de l’énergie et du climat) pour justifier leur durabilité. En tout, cela représente plus de 40 000 lots (XX milliards de litres) déclarés par an. En parallèle, en incorporant des biocarburants, l’opérateur bénéficie d’un certificat d’incorporation, qu’il peut vendre à d’autres opérateurs pour l’atteinte des objectifs d’incorporation de biocarburants : les flux physiques sont alors déconnectés des flux administratifs. Ce certificat est utilisé lors de la déclaration des opérateurs aux services des douanes pour s’acquitter de leur obligation d’incorporation en biocarburants. Cette déclaration s’effectue sur papier auprès des douanes régionales.
Cependant, le système de déclaration de durabilité de la DGEC et de déclaration aux douanes ne communiquent pas (directement). Cela signifie qu’il n’y a aucune visibilité et donc aucun contrôle sur le marché des certificats. Ce marché étant complètement détaché du marché physique, cela pose des questions sur la traçabilité.
De plus, il existe une forte pression sur les matières premières les plus durables, notamment les déchets et résidus, les gisements étant rares et les avantages fiscaux associés à leur utilisation étant particulièrement intéressants. À défaut de contrôles assez fiables, il peut donc y avoir de la fraude: des opérateurs utilisant des lots non durables pour remplir leurs objectifs d’incorporation de biocarburants en utilisant des matières premières non durables en les faisant passer pour durables. 
Nous avons donc un système archaïque et particulièrement lourd à gérer pour l’ensemble des opérateurs, complexifiant l’analyse des données et les contrôles.

## Le produit : CarbuRe

Nous proposons de créer une base de données pour suivre l’ensemble des flux de biocarburants et permettre de relier directement et simplement les flux physiques des flux administratifs. Cela permettra de fiabiliser les données, sécuriser les approvisionnements et éviter les risques de fraudes.


## Les premières étapes

Dans un premier temps, nous allons créer la base de donnée avec les fonctionnalités de base associées:
- Interface de saisie de l’information pour permettre aux producteurs de biocarburants d’intégrer leurs informations dans la base de donnée.
- Historique des informations saisies
- Affiliation à un opérateur pétrolier
- Extraction de données
