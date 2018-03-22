---
title: Ce qui se passe dans la tête d'un développeur
authors: philippe.blayo
---

Un soir, Hela poste un message d'erreur sur Slack :

> Le site est cassé, je peux plus rentrer mes cas types :/

![Une erreur est survenue](/img/posts/2018-04-02-ce-qui-se-passe-dans-la-tete-d-un-developpeur/erreur.png)

Hela en ce moment elle fait naître des incubateurs, dont
celui des affaires sociales qu'elle accompagne personnellement.
Elle a passé l'après-midi avec le groupe de travail
de lutte contre le non recours aux droits.
Elle simulait les conséquences de cette réforme quand l'erreur
s'est produite.

C'est important de simuler les conséquences d'une réforme avant de la voter.
Parce qu'après c'est beaucoup plus compliqué à changer, et pendant
ce temps des gens en subissent les conséquences.
C'est un peu l'équivalent en programmation d'écrire des tests avant
d'écrire le code.

Je comprends qu'elle a des projections à rendre pour le lendemain.

Et puis le site "cassé" est visité dix mille fois par jour, davantage
quand un article de presse ou une émission le mentionne donc
ça mérite mon attention.

Il vient d'y avoir une mise en production, alors ça doit venir de là…

<!--more-->

## Sur la piste

Trois messages d'erreur attirent mon attention :

*   "`Célibataire` is not a valid enum value for path `statut_marital`."
*   "`{VALUE}` is not a valid enum value for path `{PATH}`."
*   "`Célibataire` is not a valid enum value for path `statut_marital`."

Oui la troisième erreur est bien la même que la première.
Je ne comprend pas le VALUE entre accolades. Le signe d'une valeur mal remplacée ?
Ce VALUE m'intrigue. Il m'arrête un moment,
Il me fait partir sur d'autres activités, dans d'autres fenêtres de mon ordinateur.

Mais Hela a ses projections à rendre demain et je connais le développeur du site
de simulation. Il est tout seul pour maintenir un site qui fait dix mille visites par jour.
Il va avoir un réveil difficile demain. Alors je m'y remet.

Comme il y a deux fois le même message d'erreur, je me concentre dessus :

*   "`Célibataire` is not a valid enum value for path `statut_marital`."

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

Donc celibataire est bien une valeur possible mais sans la majuscule au début ni
l'accent.
C'est peut-être ça l'erreur. D'autant que ces enum sont un ajout récent
dans openFisca, un moteur que le site utilise.
Comment je sais ça ? Parce-que j'ai assisté à une démo.

Je poste cette hypothèse sur slack. Un pouce vers le
haut me confirme que je suis sur la bonne voie.

Sandra, une développeuse qui passe sur slack, me le confirme mais s'interroge sur la possibilité
de corriger rapidement le problème. Sandra elle travaille sur la question depuis plus d'un an, elle a
participé à l'Open Government Partnership en 2016 autour de ce sujet, autant dire qu'elle s'y connait mieux que moi.
Mais elle dit qu'elle n'aura pas le temps de regarder davantage d'ici demain
alors que moi je suis disponible tout de suite.

## Le grand plongeon

Je n'ai jamais regardé ce code. Je n'y connais rien. Mais je le trouve sur
github.

Je le clone et je fait un grep à la racine pour voir si des Célibataires ancienne version
n'auraient pas été oubliés dans un coin reculé du code.

    grep -r Célibataire *

Je trouve effectivement un bon candidat :

    situationsFamiliales.js:    value: 'Célibataire',  // Enum value 2 in OpenFisca

C'est prometteur. Je pousse une correction sous forme de pull request.

## Le jour d'après

Le lendemain matin, je viens très tôt pour aider à finir de résoudre le problème.
En arrivant, je lis que le développeur du site a intégré ma pull request depuis chez lui.
Il me remercie chaleureusement. Ca me fait plaisir. Le site n'est pas resté cassé pendant les heures de bureaux.

Et moi j'ai envie de remercier les gens qui ont écrit ce code. Notamment j'ai envie de dire merci
pour la clarté de l'erreur. Ce qui a fait la différence c'est de donner du contexte,
dans ce cas précis, les valeurs de l'enum.

### Un apprentissage sur l'agilité ?

Le midi, Sandra, la fameuse développeuse de l'Open Governement Partenership me dit avec un grand sourire : hier soir tu m'as appris quelque-chose sur l'agilité. Je ne vois pas de quoi elle parle.
Elle précise sa pensée : cette nuit comme la correction était petite, c'était bien
de la pousser pour qu'elle soit intégrée au saut du lit.

Elle s'était imaginé des cas compliqués qui auraient pu expliquer l'erreur.
Ca l'a empêché de regarder si il n'y avait pas une erreur simple à corriger.

### Une erreur qui donne des hypothèses

Je la remercie pour la clarté de l'erreur.
Sandra me répond que l'erreur en aurait peut-être caché une autre.
Ça la gène que seule la cause la plus simple soit listée comme
cause potentielle du problème.
Moi je trouve que c'est beaucoup mieux que rien.

Je lui donne l'exemple de Mockito, une bibliothèque populaire pour les tests automatisés en Java.
Son erreur la plus courrante peut avoir deux causes :

*   La première est un faux pas comit quand on débute.
*   La seconde provient d'une fonctionnalité avancée qu'on apprends que
    bien plus tard.
    Depuis le code Mockito, il est impossible de savoir laquelle des deux erreurs
    est commise à l'exécution. Alors Mockito affiche les deux causes potentielles.
    C'est beaucoup mieux que de n'en afficher aucune.

## Ralentir pour aller plus vite

Ce que j'ai fait d'un point de vu théorique, c'est du slow motion.
M'arrêter. Ralentir. M'obliger à lire en détail des messages d'erreurs même si
c'est rébarbatif. De loin ça a l'air incompréhensible, même pour un développeur.
Pourtant souvent, si je prends le temps de lire en détail ce que le message dit,
je trouve une partie destinée à un humain et cette partie me
permet d'élaborer des hypothèses.

Pour la résolution, le slow motion a fonctionné aussi : j'ai pu faire abstraction
de l'heure tardive, de la fatigue et d'une thématique métier complexe.
Je ne me suis pas précipité
sur la partie la plus cryptique des messages d'erreurs (le deuxième message).
J'ai fait une pause. Tout en gardant dans un coin de ma tête la possibilité de
continuer, je ne me suis pas acharné. J'ai accepté que l'obstacle puisse être plus
fort que moi.

Mais comme je connais les personnes qui travaillent autour de ce site, j'ai pensé
à eux et ça m'a donné l'énergie de m'y remettre plutôt que de regarder la série que
j'ai prévu à la télé. Mais je me suis donné du temps. Et quand je suis revenu,
j'avais un autre regard. J'ai cherché le chemin le plus facile plutôt que de comprendre
la partie qui me semblait la plus mystérieuse.

En allant à mon rythme j'ai pu me faire confiance.

J'écris cet article en espérant que d'autres s'autorisent à en faire autant.
