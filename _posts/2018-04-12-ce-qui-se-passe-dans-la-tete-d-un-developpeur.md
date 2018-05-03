---
title: Ce qui se passe dans la tête d'un développeur
authors: philippe.blayo
---

Une nuit, Hela poste un message d'erreur sur Slack :

> Le site est cassé, je peux plus rentrer mes cas types :/

Hela, en ce moment, elle fait naître des incubateurs, dont celui des affaires
sociales qu'elle accompagne personnellement. Elle a passé l'après-midi avec le
groupe de travail de lutte contre le non-recours aux droits sociaux.
Elle simulait les conséquences de cette réforme quand l'erreur
s'est produite.

C'est important de simuler les conséquences d'une réforme avant de la voter.
Parce qu'après c'est beaucoup plus compliqué à changer, et des gens en
subissent les conséquences. C'est un peu l'équivalent en programmation d'écrire
des tests avant d'écrire le code.

Je comprends qu'elle a une analyse à rendre le lendemain.

Je ne travaille pas sur ce sujet, mais j'interprète son message comme
une demande d'aide et une des heuristiques de l'incubateur suit le principe
"You see it, you own it" : si je vois un problème et que je suis le seul
disponible, même si d'autres étaient plus légitimes ou plus compétents, je
tente de le corriger.

<!--more-->

Et puis le site "cassé" est visité dix mille fois par jour, davantage
quand un article de presse ou une émission le mentionne donc
ça mérite mon attention.

Il vient d'y avoir une mise en production, alors ça doit venir de là…

## Sur la piste

![Une erreur est survenue](/img/posts/2018-04-12-ce-qui-se-passe-dans-la-tete-d-un-developpeur/la_fameuse_erreur.png)

Parmi des dizaines et des dizaines de lignes de message d'erreur, trois d'entre
elles attirent mon attention :

*   "`Célibataire` is not a valid enum value for path `statut_marital`."
*   "`{VALUE}` is not a valid enum value for path `{PATH}`."
*   "`Célibataire` is not a valid enum value for path `statut_marital`."
Oui, la troisième erreur est bien la même que la première.
Je ne comprends pas le VALUE entre accolades de la deuxième erreur. Le signe
d'une valeur mal remplacée ? Comme je ne vois pas comment creuser, je laisse
tomber l'investigation.

Mais Hela a ses simulations à rendre demain et je connais le développeur de ce
site très visité. Il est tout seul pour le maintenir.
Il va avoir un réveil difficile demain. Alors je m'y remets.

Comme il y a deux fois le même message d'erreur, je me concentre dessus :

*   "`Célibataire` is not a valid enum value for path `statut_marital`."

J'imagine que `Célibataire` n'est pas une valeur correcte,
mais quelles sont les valeurs possibles pour `statut_marital` ?
Je me force à déchiffrer le reste du message d'erreur et, oh joie, je trouve un indice :

```
"enumValues": [
  "marie",
  "pacse",
  "celibataire"
]
```

Donc `celibataire` est bien une valeur possible, mais sans la majuscule au début,
ni l'accent. C'est peut-être ça l'erreur. D'autant que ces enum sont un ajout
récent dans [OpenFisca](https://fr.openfisca.org/), un moteur que le site
utilise. Comment je sais ça ?
Parce que j'ai assisté à une [démo](https://github.com/betagouv/beta.gouv.fr/wiki/D%C3%A9mo).

Je poste cette hypothèse sur
[Slack](https://github.com/betagouv/beta.gouv.fr/wiki/Bienvenue#slack).
Un pouce vers le haut me conforte dans l'idée que je suis sur la bonne voie.

Sandra, une autre développeuse qui passe sur Slack, me le confirme, mais doute qu'on puisse
corriger rapidement le problème. Sandra travaille sur la question depuis plus d'un an, elle a
participé à l'Open Government Partnership en 2016 autour de ce sujet, autant dire qu'elle s'y connaît mieux que moi.
Mais elle dit qu'elle n'aura pas le temps de regarder davantage d'ici demain
alors que moi je suis disponible tout de suite.

## Le grand plongeon

Je n'ai jamais regardé ce code. Je n'y connais rien. Mais je le trouve sur
[Github](https://github.com/betagouv/mes-aides-ui).

Je le clone et je cherche si des `Célibataires` ancienne version, avec
majuscule et accent, ne traineraient pas encore dans un coin reculé du code.

    grep -r Célibataire *

Je trouve effectivement un bon candidat :

    situationsFamiliales.js:    value: 'Célibataire',  // Enum value 2 in OpenFisca

C'est prometteur. Dans une
[pull request](https://github.com/betagouv/mes-aides-ui/pull/782)
je pousse une correction qui retire majuscule et accent.

## Le jour d'après

Le lendemain matin, j'arrive très tôt pour aider à finir de résoudre le problème.
Je découvre que le développeur du site a intégré ma pull request depuis chez lui.
Il me remercie chaleureusement. Ça me fait plaisir. Le site n'est pas resté cassé pendant les heures de bureau.

Et moi j'ai envie de remercier les gens qui ont écrit ce code. Notamment j'ai envie de dire merci
pour la clarté de l'erreur. Ce qui a fait la différence c'est d'avoir donné du contexte,
dans ce cas précis, les valeurs valides de l'`enum`.

## Un apprentissage sur l'agilité ?

Le midi, Sandra, la fameuse développeuse de l'Open Government Partnership me
dit avec un grand sourire : hier soir tu m'as appris quelque chose sur l'agilité,
cette nuit comme la correction était petite, c'était bien de la pousser pour
qu'elle soit intégrée au saut du lit.

Elle s'était imaginé des cas compliqués qui auraient pu expliquer l'erreur.
Ca l'a empêché de regarder si il n'y avait pas une erreur simple à corriger.


## Ce que j'en retire

Deux choses me paraissent avoir permis cette correction en un temps aussi
court :

- ralentir : en l'occurence, me forcer à lire les messages d'erreurs, même si la
plupart me semblaient incompréhensibles.
- la force du collectif : le climat de confiance et de bienveillance qui règne
à l'incubateur m'a permis de faire abstraction de l'heure tardive, de la
fatigue et de la complexité métier.


## Des accents dans l'`enum` ?

Un développeur m'a demandé pourquoi les clefs de l'`enum` ne contenaient pas de
caractère accentué. C'est parce qu'OpenFisca, le moteur de simulation utilisé
par le site est écrit en Python 2, qui ne l'autorise pas. En Python 3, la
dernière version majeure du langage, il est possible de mettre de tels accents.
Une migration vers cette version 3 a d'ailleurs été évoquée lors de la dernière
amicale OpenFisca.
