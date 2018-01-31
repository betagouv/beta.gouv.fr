---
title: Ce qui se passe dans la tête d'un développeur
authors: philippe.blayo
---

Un soir, Hela, qui accompagne le nouvel incubateur des affaire sociales,
poste un message d'erreur sur Slack :

> Le site est cassé, je peux plus rentrer mes cas types :/

Hela a passé l'après-midi avec le groupe de travail pour la
simplification du calcul des minima sociaux.
Elle simulait les conséquences de cette
réforme.

C'est important de simuler les conséquences d'une réforme avant de la voter.
Parce-que se rendre compte des conséquences après sa mise en oeuvre ça veut
dire des dégats sur les personnes et du temps pour la corriger, refaire des 
erreurs potentiellement donc mieux vaut savoir le plus tôt possible ce qui
va changer.

Moi je suis sur ce slack un peu par hasard.
Je comprends vaguement qu'elle a des projections à rendre pour le lendemain.
C'est important de garder un bon rythme dans un groupe de travail,
sinon il s'essouffle.

Et puis le site "cassé" est visité dix mille fois par jour, davantage
quand un article de presse ou une emission le mentionne donc
ça mérite mon attention.

Il vient d'y avoir une mise en production, alors ça doit venir de là…

<!--more-->

## Sur la piste

Trois messages d'erreur attirent mon attention :
- "`Célibataire` is not a valid enum value for path `statut_marital`."
- "`{VALUE}` is not a valid enum value for path `{PATH}`."
- "`Célibataire` is not a valid enum value for path `statut_marital`."

Oui la troisième erreur est bien la même que la première.
Je ne comprend pas le VALUE entre crochets. Le signe d'une valeur mal remplacée ?
Ce VALUE m'intrigue. Il m'arrête un moment,
Il me fait partir sur d'autres activités, dans d'autres fenêtres de mon ordinateur.

Mais Hela a ses simulation à rendre demain et je connais le développeur du site
de simulation. Il est tout seul pour maintenir un site qui fait dix mille visites par jour,
il va avoir un réveil difficile demain. S
Comme il y a deux fois le même message d'erreur, je me concentre dessus :

- "`Célibataire` is not a valid enum value for path `statut_marital`."

J'imagine que `Célibataire` n'est pas une valeur correcte,
mais quelles sont les valeurs possibles pour `statut_marital` ?
Je me force à déchiffrer le reste du message d'erreur et oh joie je trouve un indice :

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
dans openFisca, un moteur que le site utilise.
Comment je sais ça ? Parce-que j'ai assisté à une démo.

Je poste cette hypothèse sur slack. Un pouce vers le
haut me confirme que je suis sur la bonne voie.

Sandra, une développeuse qui passe sur slack, me le confirme mais s'interroge sur la possibilité
de corriger rapidement le problème. Sandra elle travaille sur la question depuis plus d'un an, elle a été
lauréate de l'Open Government Partnership sur la question, autant dire qu'elle s'y connait mieux que moi.
Mais elle ne va pas regarder davantage d'ici demain alors que moi je suis disponible tout de suite.


# Le grand plongeon

Je n'ai jamais regardé ce code. Je n'y connais rien. Mais je le trouve sur
github.

Je le clone et je fait un grep à la racine pour voir si des Célibataires ancienne version
n'auraient pas été oubliés dans un coin reculé du code.

    grep -r Célibataire *

Je trouve effectivement un bon candidat :

    situationsFamiliales.js:    value: 'Célibataire',  // Enum value 2 in OpenFisca

C'est prometteur. Je pousse une correction sous forme de pull request.

## Le jour d'après

Le lendemain matin, je viens très tôt au cas où il faudrait binômer sur la résolution du problème.
Je lit que le développeur du site a intégré ma pull request depuis chez lui à 8h30.
Il me remercie chaleureusement. Ca me fait plaisir. Le site n'est pas resté cassé pendant les heures de bureaux.

Et moi j'ai envi de remercier les gens qui ont écrit ce code. Notamment j'ai envi de dire merci
pour la clarté de l'erreur. Donner du contexte ça a fait la différence.

Le midi, Sandra, la fameuse développeuse lauréate de l'Open Governement Partenership me dit avec un grand sourire : hier soir tu m'as appris quelque-chose sur l'agilité. Je ne vois pas de quoi elle parle. Mais oui cette nuit comme la correction était petite, c'était bien
de la pousser pour qu'elle soit intégrée au réveil. Je me suis trop fait des films en imaginant tous
les cas tordus qui auraient pu provoquer l'erreur.

Je la remercie pour la clarté de l'erreur, que c'est grâce à ça que j'ai pu corriger aussi vite
sans rien connaître. Sandra me répond que parfois dans des cas tordus certaines erreurs peuvent
venir de problèmes d'encodage comme en utf-8. Elle est toujours à essayer d'améliorer les choses,
je me dit que c'est bien.

## Un peu de théorie

Ce que j'ai fait d'un point de vu théorique, c'est du slow motion.
M'arrêter, ralentir et m'obliger à lire en détail des messages d'erreurs même si
c'est rébarbatif. De loin ça a l'air incompréhensible, même pour un développeur.
Pourtant souvent, si je prends le temps de lire en détail ce que le message dit,
il y a souvent une partie destinée à un être humain comme moi et cette partie me
permet d'élaborer des hypothèses.

Pour la résolution, le slow motion a fonctionné aussi. Je ne me suis pas précipité
sur la partie la plus cryptique des messages d'erreurs (le deuxième message).
J'ai fait une pose. Tout en gardant dans un coin de ma tête la possibilité de
continuer, je ne me suis pas acharné. J'ai accepté que l'obstacle puisse être plus
fort que moi.

Mais comme je connais les personnes qui travaillent sur ce site et autour, j'ai pensé
à eux et çà m'a donner l'énergie de m'y remettre plutôt que de regarder la série que
j'ai prévu à la télé. Mais je me suis donné du temps. Et quand je suis revenu,
j'ai un autre regard. J'ai cherche le chemin le plus facile plutôt que de comprendre
la partie qui me semblait la plus mystérieuse.

En allant à mon rythme j'ai pu me faire confiance. C'est aussi ça le slow motion.


========================================================================
Writer's workshop du 31/01/2018
========================================================================
De quoi ca parle :
- pas à pas comment on resoud un bug
- focus dans sa tête et sa façon de penser
- style tranche de vie avec un élément didactique

Développement :
- 2 parties dans le texte : réactions émotions sur la recherche du bug
- 2ème partie : intervention d'un nouveau protagoniste.
- Tu m'as appris l'agilité, j'ai pas rataché ça à quelque chose
- Une théorie sur la résolution de bug
- Interessant sur la façon de résoudre le problème sur un cas concret
- Premier abord ca fait peur car va-tu comprendre ce qui se passe dans la tête d'un développeur.
- Perdu dans les échanges

- 3 temps, 3 actes :
  - l'évènement innatendu, la crise, la survenue d'un bug introduit par une discussion sur slack
  - la chasse : explorer des pistes, revenir un peu en arriêre
  - le jour d'après, on debrief. Plus social. Valeur du debrief en groupe. Amène et valorise la conclusion
A travers cette histoire.
La fin est très abrupte.
Aspects techniques difficiles à suivre. 
Sensation de speed.

Interessant : ça fait un peu peur au départ. Ca va être très technique.
Même sans être technicien, on arrive à comprendre les éléments.
Bien aimé à passer du message obscur à une explication rationnelle.

Suggestion d'améliorations :
- ce qui manquerait au départ c'est les conséquences du bug. On ne sait pas vraiment ce que ça va générer ?
Tout es par terre ? L'impact ?
- le jour d'après. J'ai pas tout suivi. Détailler un peu plus le développeur et l'arrivée d'une autre personne.
Détailler un peu plus. Partie un peu brutale.
Partie policière je suis rentré dedant. J'attendait encore des choses. Personnage à davantage étoffer.
Dramatis personnel. Qui va intervenir, pourquoi ? A quel titre les différents personnages sont motivés
pour rentrer dans l'action.
Je m'inquiétais : si je me met à la place d'un lecteur lambda. Les points de détails d'un message d'erreur,
les mettre en gras.
Expliquer le sujet technique : ça donne quoi à l'écrit ?
La fin : plus développée.
Ce qui manque : une intro moins in media res pour que le lecteur sache dans quoi il rentre.
Effet voulue ? L'auteur cherche à mettre en avant une tranche de vie ?

-- 
Juste un titre. Voir le réseau social.
On a changé d'enjeux, 2ème enjeux : le développeur et son bug. Pourquoi ça me pose un problème.

Un truc à rendre demain : trop vague.
Va avoir un réveil difficile, on comprends mieux.
Implicitement, il y a une démo le lendemain.
Les aides est un des sites les plus visité, s'il tombe en rende, c'est difficile pour beaucoup
d'usager.

Développer les dernières partie "Un peu de théorie"

Merci plutôt comme lessons learned.
Ou au moment ou je cite les messages d'erreur.

Dans la ligne éditoriale.
On développe une méthode. On part d'un cas concret.
