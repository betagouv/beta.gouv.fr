---
title: Pourquoi la sécurité des produits numériques n’est pas celle des projets informatiques
authors: laurent.bossavit
---

Si vous assistez un jour au « standup » hebdomadaire des Startups d’Etat, vous entendrez peut-être l’un d’entre nous commencer son pitch par une phrase comme « notre projet a comme ambition de… » avant d’être immédiatement repris quelqu’un d’autre: « tu veux dire votre produit ! » Cette distinction projet / produit est suffisamment importante dans notre culture pour justifier de nous couper la parole, ce que nous évitons par ailleurs.

Pourquoi ? Tout simplement parce que penser en termes de **produit**, plutôt qu’en termes de **projet**, mobilise un ensemble de croyances et de présupposés très différents, qui à leur tour conduisent à changer radicalement de comportement.

<!--more-->

## Courbes de diffusion

Voici par exemple, illustrées graphiquement, deux conceptions opposées de ce que devrait être la « courbe de diffusion » d’un outil informatique.

![Démarche projet ou démarche produit ?](/img/posts/projet-vs-produit.png)

Dans une démarche **projet**, on commence par une (plus ou moins) longue période de conception puis de construction de l’outil, en vue d’une date de déploiement ou de « mise en production » qui concernera la totalité des usagers concernés. Souvent cette longue période de conception se déroule sans avoir rencontré un seul utilisateur.

Dans une démarche **produit**, l’objectif est de soumettre ce qui a été réalisé immédiatement, ou presque immédiatement, à la validation d’usagers en situation réelle et à qui la première version apporte de la valeur (en principe, et on cherchera à le vérifier). On souhaite contrôler et limiter le nombre d’usagers qui ont accès au produit, ce qui exige parfois un investissement délibéré : l’exemple canonique en la matière est Google Mail, dont les premières version [« beta »](https://en.wikipedia.org/wiki/Perpetual_beta) n’étaient disponibles que sur invitation, les jetons d’invitation étant initialement distribués très graduellement aux premiers usagers qui pouvaient en faire profiter leur entourage. (Parmi les produits de l’incubateur, plusieurs ont eu recours à des tactiques similaires ; par exemple les premières versions de PIX exigaient la création d’un compte utilisateur, afin de pouvoir juguler l’usage au besoin.)

Cette démarche favorise une construction incrémentale : la première version ouverte à un petit nombre d’usagers est le fameux « minimal viable product » ou MVP, la version la plus restreinte du produit qui puisse se concevoir tout en apportant un réel bénéfice à ces usagers (la première manifestation d’une [proposition de valeur](https://beta.gouv.fr/2017/07/21/comment-choisir-vocabulaire-proposition-valeur.html) dont on a préalablement testé l’intérêt auprès de ce public cible).

La courbe de diffusion visée est une courbe en S, ou sigmoïde (si vous voulez briller en soirée) caractéristique des diffusions virales. La première partie de la courbe est dominée par une croissance exponentielle : celle-ci a la propriété de « décoller » très lentement mais d’atteindre un point d’inflexion où la croissance est très rapide. La seconde partie de la courbe marque un ralentissement qui correspond à la saturation de la population concernée.

## Une autre approche de la sécurité

Cette différence de présupposés induit une façon très différente de traiter la question de la sécurité numérique. Pour l’illustrer, la figure ci-dessous superpose à la courbe de diffusion une courbe hypothétique représentant le jugement qu’un expert en sécurité pourrait porter sur un produit numérique.

![Courbe de risque d'un produit](/img/posts/risque-produit.png)

Lorsqu’un MVP est ouvert à ses premiers usagers, et à plus forte raison lors des phases de prototypage, **l’équipe produit** a très peu de temps à consacrer à l’analyse des différents vecteurs d’attaque qui permettraient par exemple à une personne malveillante de corrompre ses bases de données, de rendre le service indisponible en saturant ses serveurs ou d’exfiltrer des données confidentielles.

Ces risques sont réels et importants ; mais ils ne concernent que des usagers pilotes volontaires et informés, conscients de la nature expérimentale du produit, dont la faible voilure conduit par ailleurs à ne pas représenter une cible très désirable pour d’éventuels attaquants. « Un pirate oblige à fermer le document partagé qui sert de prototype à la maire de Montreuil-en-Vercors pour expérimenter un service numérique de covoiturage des agents » a peu de chance de s’étaler en une des journaux, mêmes locaux.

Comme le suggère la plupart des textes théoriques sur l’analyse du risque, il convient de prendre en compte **et** le nombre d’usagers **et** le risque encouru par chaque usager, en multipliant les deux termes, pour déterminer une exposition totale réelle au risque d’attaques numériques. Lorsque l’un **ou** l’autre de ces termes est petit, les multiplier donne un résultat plus faible.

L’important est donc de s’assurer qu’on arrive au point d’inflexion en ayant couvert les risques numériques les plus importants, mais surtout pas de chercher à traiter « tous les risques » en amont… comme c’est la norme dans les cultures projet.

La courbe en S est un idéal : la diffusion virale d’un produit numérique n’est pas une qualité qui va de soi. En particulier, une autre raison pour laquelle la courbe est très plate au démarrage est que **l’équipe produit** va consacrer l’essentiel de son temps et de son énergie à comprendre les problèmes des usagers et itérer pour s’assurer qu’elle leur apporte une réponse pertinente. Ce travail n’étant pas toujours couronné de succès, certaines équipes produit doivent se réorienter (« pivoter » dans le jargon), voire abandonner — faute de moyens ou parce que leur action n’est pas pertinente.

Consentir un travail conséquent en sécurité numérique en amont de ce point est donc doublement improductif. On aura dépensé des ressources qui auraient pu être investies dans une meilleure compréhension du besoin, alors que le gain réel en termes de sécurité sera resté très marginal.

## Eviter les malentendus

Cette “culture produit” est un élément clé de la prise en compte efficace des enjeux de sécurité numérique par les Startups d’Etat. Elle fait partie des valeurs portées à la DINSIC et essaimées dans les nombreux incubateurs portés par diverses administrations qui leur ont déjà emboîté le pas ou qui s’apprêtent à le faire. Car faute d’expliquer le caractère raisonné de cette démarche aux RSSI, ces équipes pourraient se voir freinées dans une démarche qui exige de pouvoir aller vite - à la mesure du monde numérique en perpétuel renouvellement.

C’est en particulier dans ce sens que l’incubateur de la DINSIC a souhaité travailler avec l’ANSSI pour proposer un guide de la [« Sécurité Numérique Agile »](https://betagouv.gitbooks.io/securite-numerique-agile/). Au cours de sa rédaction et en nous mettant à l’écoute des retours collectés suite à la [consultation publique](https://democracyos.consultation.etalab.gouv.fr/secnumagile/topic/597064afdb768b751899e575) à ce sujet, nous avons constaté que la distinction « projet / produit » était l’un des sujets persistants de malentendus; cet article (et sans doute d’autres à venir) ont pour objet de les dissiper.

Si vous souhaitez apporter votre voix à cette conversation, c’est avec plaisir que nous accueillerons vos commentaires: [securite-agile@beta.gouv.fr](mailto:securite-agile@beta.gouv.fr).

<small>Illustration : <a title="On Belay" href="https://www.flickr.com/photos/justinjensen/5036776310/">On Belay</a> par <a href="https://www.flickr.com/photos/justinjensen/">Justin Jensen</a> sous license <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a></small>
