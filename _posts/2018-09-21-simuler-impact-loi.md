---
title: Simuler l'impact de la loi, c'est possible !
authors:
  - sandra.chakroun
  - anna-livia.gomart
  - hela.ghariani
---

Vos revenus actuels décideront-ils de vos aides sociales dans deux ans ?  
Ou, est-il possible de simuler l'impact d'une loi pour que les prestations sociales interviennent au moment où vous en avez besoin ?

## Contexte

Le Groupe de Travail (GT) [Accès aux droits et aux services, lutte contre le non-recours](https://fncp-france.fr/wp-content/uploads/2018/03/rapp-4.pdf) s’applique à proposer des solutions pour permettre à tou.te.s, et surtout aux plus vulnérables, de connaître les moyens d'accompagnement mis à leur disposition.

Dans ce cadre, il a été proposé d’utiliser le logiciel [OpenFisca](https://fr.openfisca.org) en atelier avec une hypothèse : simplifier l'accès au droit passerait par la réduction de la complexité des règles de calcul des prestations sociales. 

<!--more-->

Porté par la [Délégation interministérielle à la prévention et à la lutte contre la pauvreté des enfants et des jeunes](https://twitter.com/delegpauvrete) ce GT a été l'opportunité de réunir des experts des prestations sociales, les équipes du simulateur [Mes Aides](https://mes-aides.gouv.fr) et du moteur de calcul [OpenFisca](https://fr.openfisca.org).

> [OpenFisca](https://fr.openfisca.org) est un modèle informatique du système socio-fiscal qui permet de simuler, non seulement la législation actuelle, mais aussi l‘impact de réformes en discussion au Parlement sur des individus ou des foyers.

> [Mes Aides](https://mes-aides.gouv.fr) se base lui-même sur [OpenFisca-France](https://fr.openfisca.org) pour la simulation du droit aux prestations sociales des particuliers et de ceux qui les accompagnent.

Nous démarrons donc ces ateliers avec un groupe réduit de personnes et l'idée de simuler une simplification des règles de calcul des prestations sociales. 

Les prestations dépendant pour beaucoup des revenus, la première question qui se pose peut paraître simple : comment évalue-t-on combien gagne une famille lorsque l’on calcule son éligibilité à une prestation sociale ?

Aujourd’hui, il y a une dizaine de méthodes de calcul des revenus d’un foyer. Ceux-ci peuvent être calculés sur des périodes de temps différentes. Certaines prestations sociales prennent en compte les revenus des 3 derniers mois, d’autres se basent sur le revenu fiscal de référence, calculé sur les revenus N-2 (année - 2). Or, avec le passage au prélèvement à la source de l'impôt sur le revenu, le calcul des prestations sociales pourrait se rapprocher de la situation actuelle des personnes.

Nous avons alors pris le parti d'étudier cela sur des foyers recevant le [RSA](https://fr.openfisca.org/legislation/rsa), la [PPA](https://fr.openfisca.org/legislation/ppa) ou les aides au logement.

Notre hypothèse était qu’en collant plus aux situations des personnes les aides s’appliqueraient au plus près de leur besoin et cela simplifierait la compréhension de la façon dont elles sont calculées.

En tant que contributeurs à [OpenFisca](https://fr.openfisca.org), nous voulions alors savoir :
* dans quelle mesure pouvions-nous utiliser [OpenFisca](https://fr.openfisca.org) pour accompagner la conception d’une réforme ?
* quelle était l'expérience des utilisateurs d'[OpenFisca](https://fr.openfisca.org) qui voulaient simuler l'impact d'une reforme ?

Notre intention était de simuler concrètement une simplification des bases de calcul des prestations sociales, et de définir son impact sur différents types de ménages. Et nous nous sommes lancé dans l'exercice sans vision claire ni du résultat attendu ni du chemin pour y arriver.

## La rencontre des experts de la loi et des experts du code

L'objectif devenait alors de définir quels types de réformes tester et, sur quelles typologies de foyers simuler et évaluer leurs impacts. 

Nous avons commencé par définir 7 scenarios de réformes avec les experts métiers. Nous avons lancé cette initiative sans filet, en nous laissant la possibilité d’adapter notre travail à ce que nous allions découvrir au fur et à mesure. Ceci nous a appris comment faire dialoguer ces deux domaines que sont l'expertise de la loi et le développement informatique : la maïeutique pour partir d'une idée et aller à une réforme calculable.

En bref : temps réduit, environnements techniques très variables, compétences diversifiées. 

Nous nous sommes vite rendu compte que pour accompagner au mieux les travaux du GT, nous devions en priorité créer des outils de communication et de visualisation. Pour nous permettre de faire cela, nous avons réduit au fur et à mesure le périmètre des réformes pour retenir 2 scenarios.

### Simplifier, c'est d'abord comprendre la complexité du droit.

Avant de le coder ou de définir les contours d'une réforme, le premier apprentissage est de comprendre l'esprit de la loi.

Les raisons de chaque subtilité (par exemple, l’effet figé qui consiste à verser un montant identique entre les deux dates d’évaluation d’une aide) doivent être considérées pour savoir quelle typologie de situation sera affectée par un changement.

Il est facile de se perdre dans la nébuleuse du droit social, même accompagné par des experts.

On se rend compte en discutant avec les participants aux ateliers que la loi a cette mission particulière de considérer toutes les situations de personnes. Et, déterminer combien une personne (ou une famille) gagne aujourd’hui est loin d'être évident :
* Que se passe-t-il si la personne a des revenus qui fluctuent tous les mois ?
* Que se passe-t-il si elle n'est pas salariée ?
* Que se passe-t-il si la personne vient de partir à la retraite ?

### Simplifier les formules ou masquer la complexité ?

Devant la complexité législative inhérente à la diversité des situations familiales, nous nous sommes demandés si l’enjeu au final de facilitation d'accès au droit ne serait pas de masquer la complexité à l'usager en travaillant l'expérience utilisateur.

C’est le pari du service [Mes Aides](https://mes-aides.gouv.fr), une interface qui structure et simplifie la demande d’information à l’utilisateur, puis qui utilise [OpenFisca](https://fr.openfisca.org) pour calculer les droits sociaux auxquels cet utilisateur peut prétendre.
Une partie de la solution peut se trouver dans l’ordonnancement des informations et la pédagogie.

Les micro-simulateurs comme [OpenFisca](https://fr.openfisca.org) dont la précision de calcul va jusqu'à l'individu ont un rôle à jouer car ils permettent de "Mieux comprendre comment fonctionne le droit adapté à ma situation."

## Comment les réformes affectent les foyers : un exercice de communication politique

En parallèle des scénarios de réforme, nous avons créé un jeu de situations familiales pour lesquelles l'impact de ces réformes allait être évalué. Cela permet de tester les réformes sur des cas concrets et voir comment des changements dans la loi affectent les foyers.
Ces situations (célibataire avec enfant/sans enfants, sénior touchant une retraite…) étaient issues des situations du [livret du pouvoir d'achat du Ministère du Budget](https://www.economie.gouv.fr/files/files/PLF2018/bro-pouvoir-achat-bat-web-10h.pdf) et rejointes par des situations de personnes aux revenus plus fluctuants. 

Et, nous nous sommes finalement concentrés sur une réforme qui considère les revenus des 12 derniers mois comme base de ressources. Cela nous a en particulier permis de générer les graphiques suivants :

![Graphes de comparaison de différentes bases ressources par cas types](/img/posts/2018-09-21_openfisca_comparaison_bases_ressources.png)  
**Comparaison de différentes bases ressources par cas types.**

> Où :  
`Base` est le mode de calcul actuel des aides au logement sur les revenus N-2 récupérés auprès des impôts.  
`AL_MM01` correspond au calcul des aides au logement basé sur les revenus d’activité du mois M-1.  
`AL_MM03` correspond au calcul des aides au logement basé sur les revenus d’activité du dernier trimestre.  
`AL_MM12` correspond au calcul des aides au logement basé sur les revenus d’activité des 12 derniers mois.  


Pour communiquer nos résultats, nous avons voulu générer des graphiques sur la rapidité de prise en compte d’un changement de situation (chômage, augmentation, retraite…) en fonction de la base de ressource prise en compte :  

![Graphes des modes de calcul des aides au logement selon la période des revenus d’activité](/img/posts/2018-09-21_openfisca_3_modes.png)  
**3 modes de calcul des aides au logement selon la période des revenus d’activité.**

![Graphes sur la temporalité de l’augmentation de l’aide au logement en cas de baisse de ressources (12 mois)](/img/posts/2018-09-21_openfisca_temporalite_al.png)  
**Temporalité de l’augmentation de l’aide au logement en cas de baisse de ressources (12 mois).**

![Graphes de prise en compte des données fiscales, hors revenus d’activité](/img/posts/2018-09-21_openfisca_donnees_fiscales.png)  
**Prise en compte des données fiscales, hors revenus d’activité.**


La création de ces graphiques a été chronophage, car nous n’avions pas prévu la communication des résultats au début de l’exercice. Alors que rendre les résultats lisibles aux yeux des lecteurs est la fin de l’exercice.

Il y avait un enjeu politique fort dans nos travaux. Nous savions que le délégué n'aurait pas pu annexer nos travaux au rapport du groupe de travail s’il était dit des choses trop loin de la vision du gouvernement. Le fait que 100% des acteurs présents étaient de l'administration (CAF) a donné une caution à nos travaux.

Notre apprentissage principal est qu’[OpenFisca](https://fr.openfisca.org) permet d’ouvrir un espace de dialogue entre les experts de la loi en outillant le calcul et en le rendant plus aisément communicable à d'autres personnes. Le calculateur [OpenFisca](https://fr.openfisca.org) peut objectiver les échanges autour de la rédaction des réformes autour de cas concrets et améliorer la communication autour des réformes sans en enlever la complexité.

## Si nous refaisions l'exercice, qu'est ce que nous ferions différemment ?

Cette expérience était complètement nouvelle et ancrée dans le besoin bien réel d’un groupe de travail. Nous en sommes sortis avec une analyse intéressante de ce qu'un tel travail implique.
Tout ne s’est pas passé exactement comme nous l’aurions souhaité et c’est là que se trouvent généralement les meilleurs apprentissages.

Si les situations se représentaient, voici ce que nous ferions différemment :
* Réduire le périmètre législatif : les modifications de la législation sont complexes, et demandent de connaître le métier et [OpenFisca-France](https://fr.openfisca.org/legislation) pour bien comprendre les implications des changements. Chaque modification est très chronophage, il faut donc expliciter le périmètre de la réforme très en amont.
* Prioriser une version simplifiée de bout en bout : de la réforme à la visualisation d’impact, avant d’ajouter des cas tests supplémentaires. Ceci pour tester le plus vite possible la réforme sur une situation.
* Identifier les visualisations qui mettront en valeur les résultats.
* Faire des workshops plutôt que des réunions : écrire les réformes et les cas test en séance en binômant métier/tech.

En sortant de cet exercice, nous avons enrichi notre outillage pour accompagner un nouveau type d'utilisateurs :
* des [cas de tests](https://github.com/openfisca/tutorial/tree/077ed7e49696bcb3150dcd46c2795bc22b0bf733/exemples/gt_non_recours/situations) réutilisables ;
* un [logiciel simplifié](https://repl.it/@openfisca/framework-openfisca-france) qui permet d’automatiser les calculs sur les réformes et extraire les résultats dans un tableur.

## Conclusion

Le logiciel de mico-simulation socio-fiscale [OpenFisca](https://fr.openfisca.org) peut être utilisé pour créer des simulations de réformes dans le cadre de la création de nouvelles lois.
Son code source ouvert à tous et la forme mathématique des formules de calcul permet à différents experts d’échanger sur les méthodes de calculs.
La possibilité de simuler l’impact de réformes au niveau des individus et des familles donne des clefs pour mitiger les effets de bords potentiels.
Et, la mise à disposition de cas types et d’exemples de visualisation permet de donner une base de travail qui parle aussi bien aux experts qu’au grand public.

Ainsi, pendant quelque temps, vos revenus actuels décideront peut-être encore de vos aides sociales dans deux ans mais vous saurez plus aisément pourquoi et les personnes souhaitant simplifier ces règles sont plus en capacité d'évaluer leurs propositions de réformes sur votre situation particulière et de vous les communiquer.

## Pour aller plus loin

* [Rapport final](https://www.caissedesdepotsdesterritoires.fr/cs/BlobServer?blobkey=id&blobnocache=true&blobwhere=1250171076233&blobheader=application%2Fpdf&blobcol=urldata&blobtable=MungoBlobs)
* [Code source des travaux](https://github.com/openfisca/tutorial/tree/dea8d8fe13e7708af36d7ebfc3496dfb02485ad4/exemples/gt_non_recours)
* Pour contribuer à OpenFisca, le [code source OpenFisca-France](https://github.com/openfisca/openfisca-france)
* [Explorateur de la législation française](https://fr.openfisca.org/legislation) modélisée
* [Documentation officielle OpenFisca](https://openfisca.org/doc/)
