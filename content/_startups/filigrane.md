---
title: FiligraneFacile
mission: Protéger les personnes de l'usurpation d'identité via leurs documents
sponsors:
  - /organisations/dgaln
  - /organisations/dhup
incubator: mtes
link: https://filigrane.beta.gouv.fr/
repository: https://github.com/mtes-mct/locatio
contact: contact@filigrane.beta.gouv.fr
stats: true
stats_url: >-
  http://51.210.250.115:3000/public/dashboard/199a72cf-6a75-4e28-bc07-103e4409ea07
accessibility_status: non conforme
usertypes:
  - particulier
phases:
  - name: investigation
    start: 2022-05-01
  - name: construction
    start: 2022-07-01
  - name: acceleration
    start: 2023-07-01
thematiques:
  - Sécurité informatique
  - Outil technique
---
## DossierFacile lance FiligraneFacile !

Logement, travail, assurance... Nous envoyons tous les jours des documents personnels dans la nature, sans les protéger. Tombés entre de mauvaises mains, ces documents peuvent servir à usurper notre identité, et on a vite fait de se retrouver avec des crédits dans tous les sens qu'on n’a jamais contractés.

## Un service plébiscité depuis juillet 2023

Chez DossierFacile, cela fait longtemps que l'on met des filigranes « destinés à la location immobilière exclusivement » sur tous les documents déposés sur la plateforme. Vous avez été très nombreux à nous demander de bénéficier de la fonctionnalité de filigrane en-dehors du service, pour l’utiliser sur n’importe quelle démarche.
C'est pourquoi nous avons créé filigrane.beta.gouv.fr, un service qui permet de mettre un filigrane sur n'importe quel document.
Le service a été lancé en septembre 2022. Le nom de domaine en beta.gouv.fr a été validé par la Direction interministérielle du numérique.
Grâce à plusieurs posts viraux sur les réseaux sociaux, le service a connu en juillet 2023 une popularité sans précédent, passant d’une dizaine à 3000 documents déposés par jour.

## Comment fonctionne FiligraneFacile ?
Le fonctionnement est simple : l’usager dépose un document sur la plateforme, choisit le texte qu’il souhaite apposer par-dessus, clique sur le bouton Ajouter le filigrane, puis Télécharger le document filigrané et il récupère une copie de son document recouvert de filigranes. Une fois le service utilisé, les documents sont immédiatement supprimés. Aucune autre utilisation n’en est faite.
Pour générer les documents, nous utilisons Apache PDFBox, une librairie open source, que nous exécutons sur nos serveurs sécurisés Scalingo certifiés SecNum pour convertir les fichiers source et les fusionner avec le texte du filigrane. Le filigrane est donc incrusté dans l'image ce qui rend l'effacement plus complexe.
Les administrations sont théoriquement censées accepter ces documents à condition que le filigrane ne rende pas illisible le document ou le dispositif de sécurité (QR code ou 2D-Doc).
Attention : FiligraneFacile ne garantit pas l'authenticité du document présenté.

## Pourquoi faut-il absolument le faire lorsque vous transmettez des documents ?
Premièrement, cela permet de faire prendre conscience à la personne à qui vous transmettez votre document de sa sensibilité. Elle sera sensibilisée à le traiter avec prudence.
Deuxièmement, cela permettra d’empêcher ou du moins de limiter l’usurpation de votre identité si ce document tombe entre de mauvaises mains. Nous en parlions dans un précédent article, rien n’est plus facile qu’une fausse annonce sur un site d’annonces immobilières pour qu’une personne mal intentionnée profite de votre dossier de location pour vous soutirer des documents personnels.
Troisièmement, cela permettra de remonter à la source en cas d’usurpation. Si votre document fuite, le filigrane permettra d’identifier le fautif.
L’usurpation d’identité touche plusieurs centaines de milliers de Français chaque année pour un total de 474 millions d’euros extorqués.

Conseil : de manière plus générale, n’envoyez jamais vos justificatifs à des personnes dont vous n’êtes pas certain de l’identité.

## Un service en bêta
FiligraneFacile est un service en « bêta », cela signifie que ce service n’est pas parfait et qu’il nécessite encore de nombreuses améliorations pour être à l’état de l’art.
Nous sommes conscients que les filigranes ne sont pas une sécurité infaillible et qu’il est possible de les retirer via des logiciels de traitement d’image ou de l’intelligence artificielle. Néanmoins, cette première étape peut servir à écarter une partie des escrocs qui ne perdront pas de temps à retirer les filigranes. Un antivol de vélo peut être coupé, est-ce une raison pour ne pas en mettre ?

Une remarque, une suggestion ?
Vous avez été très nombreux à nous écrire pour nous faire part de vos suggestions, et nous vous en remercions. Nous prendrons en compte vos remarques afin de prioriser les prochaines évolutions du service.

Actuellement, le service est géré par l’équipe [DossierFacile](https://beta.gouv.fr/startups/dossierfacile.html), aussi vous pouvez utiliser le même [formulaire de contact](https://www.dossierfacile.fr/contact) pour nous faire part de vos remarques.

(mis à jour le 14/08/2023)