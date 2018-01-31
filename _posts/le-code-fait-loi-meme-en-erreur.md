---
title: Le code fait loi, même en erreur
authors: philippe.blayo
---

Un soir, je lis sur slack un message d'erreur postée par une utilisatrice interne.

> Le site est cassé, je peux plus rentrer mes cas types :/

Comme ça doit concerner la dernière réunion de son groupe de travail, je jette un oeil.

Il vient d'y avoir une mise en production, alors ça doit venir de là…

<!--more-->

## Sur la piste

Mon regard est immédiatemment attiré par le code. C'est un biais que j'ai : quand je lis
une doc je commence toujours par scanner les bouts de codes.
Le code ne ment pas.

Ce code du message d'erreur, que dit-il ?
Je zoom sur la capture d'écran pour mieux voir.

Il y a trois messages qui attirent mon attention :
- "`Célibataire` is not a valid enum value for path `statut_marital`."
- "`{VALUE}` is not a valid enum value for path `{PATH}`."
- "`Célibataire` is not a valid enum value for path `statut_marital`."

Oui la troisième erreur est bien la même que la première.
Je ne comprend pas le VALUE entre crochets. Le signe d'une valeur mal remplacée ?
Ce VALUE m'intrigue. Il m'arrête un moment,
me fait partir sur d'autres activités, dans d'autres fenêtres de mon ordinateur.

Mais l'utilisatrice a un truc à rendre demain et je connais un développeur qui 
va avoir un réveil difficile demain matin alors je m'y remets.
Comme il y a deux fois le même message d'erreur, je me concentre dessus :

- "`Célibataire` is not a valid enum value for path `statut_marital`."

J'imagine que `Célibataire` n'est pas une valeur correcte pour
`statut_marital`.

Mais quelles sont les valeurs possibles pour `statut_marital` ?
Je lis le reste du message d'erreur et oh joie je trouve un indice :

```
"enumValues": [
  "marie",
  "pacse",
  "celibataire"
]
```

Ah donc celibataire est bien une valeur possible mais sans la majuscule au début ni
l'accent.
C'est peut-être ça l'erreur. D'autant que ces enum sont un ajout récent
dans openFisca.
Comment je sais ça ? Parce-que j'ai assisté à une démo.

Je poste cette hypothèse sur slack. Un pouce vers le
haut me confirme que je suis sur la bonne voie.

Une développeuse d'openFisca me le confirme mais s'interroge sur la possibilité
de corriger rapidement le problème.


# Le grand plongeon dans mes-aides

Je n'ai jamais regardé le code de mes-aides. Je n'y connais rien. Mais je le trouve sur
[github](https://github.com/betagouv/mes-aides-ui).

Je le clone et je fait un grep à la racine pour voir si des Célibataires ancienne version
n'auraient pas été oubliés dans un coin reculé du code.

    grep -r Célibataire *

Je trouve effectivement un bon candidat :

    situationsFamiliales.js:    value: 'Célibataire',  // Enum value 2 in OpenFisca

C'est prometteur. Je pousse une correction sous forme de pull request.
Le lendemain matin, je viens très tôt pour binômer sur la résolution du problème,
mais je lit en arrivant que ma correction a déjà été intégrée, en télétravail.
Finalement ça valait le coup.

Le midi, une développeuse d'openfisca me dit avec un grand sourire : hier soir tu m'as appris quelque-chose sur l'agilité. Alors j'ai écrit cet article.

## Un peu de théorie

Je rapprocherais les étapes que j'ai suivies de deux courrants de pratiques :
- Le slow motion qui consiste à ralentir au maximum en présence d'une
erreur pour se forcer à la lire et en tirer le maximum de valeur (une approche présentée
à la conférence Agile France 2017).
- D'autre part de reconnaître les points de blocages et les déclics lors d'un apprentissage, pour comprendre
ce qui se passe dans la tête d'un développeur.
Cette approche est utilisée pour écrire un livre sur [nodejs](https://github.com/oncletom/nodebook).

## Merci OpenFisca !

Mais surtout j'ai envie de dire merci aux gens qui ont écrit openFisca pour
la clarté de l'erreur. Donner du contexte dans un message d'erreur, ça change tout !
