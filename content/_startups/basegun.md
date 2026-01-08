---
title: Basegun
mission: Identifier et classer instantanément la catégorie légale d'une arme, sur le terrain
sponsors:
  - /organisations/interieur
incubator: FabNum-MI
link: https://basegun.interieur.gouv.fr/
repository: https://github.com/datalab-mi/Basegun
contact: basegun@interieur.gouv.fr
accessibility_status: partiellement conforme
phases:
  - name: investigation
    start: 2022-03-02
    end: 2023-06-27
  - name: construction
    start: 2022-05-01
    end: 2023-06-27
  - name: acceleration
    start: 2023-10-01
  - name: alumni
    start: 2025-07-24
thematiques:
  - Administratif
  - Outil technique
usertypes:
  - etat
techno:
  - docker
  - kubernetes
  - python
  - vue
budget_url: https://pad.numerique.gouv.fr/rHMnemklQm6Sww5yVCI9ow?view
---
## Contexte

On estime à environ 20 000 le nombre d’armes saisies par les FSI chaque année, dont 15 à 20% sont mal ou non identifiées.
Cela engendre des erreurs de catégorisation légale des armes, ce qui influe sur niveau de permis du possesseur attendu par les forces de l'ordre, les conditions de transports, etc.
Elles ont pour conséquence :
- une absence de poursuites pénales pour des personnes détenant illégalement des armes dangereuses
- à l’inverse, des poursuites pénales, une dépossession d’armes ou une interdiction injustifiée de posséder des armes

*Source: SCAE 2022 (rassemblement statistiques DGPN, PP et DGGN)*



## Problème
La méthode actuelle d’identification des armes sur le terrain est complexe, chronophage, soumise à interprétation et génératrice d’erreurs. En effet, les agents procèdent de trois façons souvent combinées :

* Ils et elles tentent des rapprochements visuels à partir de recherches internet/intranet autonomes
* Ils et elles interrogent leurs collègues ou un armurier privé
* Ils et elles consultent des experts au sein du Ministère de l’Intérieur (SCAE)



## Solution

Basegun est un outil permettant de classifier automatiquement une arme à feu découverte lors d’une mission de police ou de gendarmerie via une technologie IA, en la photographiant avec l’outil de fonction NEO.

Elle permet de vérifier si une arme est factice.

Elle propose également des tutoriels permettant de guider la mise en sécurité des différents type d'armes rencontrés sur le terrain lors de saisies par les FSI.



## Impact

L’application libèrera les forces de l’ordre d’une tâche laborieuse et leur permettra de se concentrer sur des actions métier à plus forte valeur ajoutée (enquêtes, poursuites, …), tout en réduisant le risque d’erreur.

Les citoyens seront préservés des poursuites injustifiées liées aux erreurs de classification. Ils seront également mieux informés sur les armes qu’ils détiennent, à travers une mise à disposition du service.
