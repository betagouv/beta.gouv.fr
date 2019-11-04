# Améliorer le site public de l'Incubateur BetaGouv

## Ajouter une Startup

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=startups&where=content/_startups/nom-startup.md)

Les illustrations doivent être en 16:9, au format 1280 ⨉ 720 pixels, optimisées au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

> Sinon, offline : dupliquer un fichier de description dans le dossier [`/content/_startups`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_startups) et suivre les instructions ci-dessous sur l'édition.

Pour le titre de la startup, s'en tenir aux [règles usuelles](https://fr.wikipedia.org/wiki/Usage_des_majuscules_en_fran%C3%A7ais#R.C3.A8gles_traditionnelles), c'est-à-dire sauf cas particuliers : le premier mot prend une majuscule, les autres non. (Ce n'est pas grave de se tromper, mais il faut s'attendre à ce que ça soit corrigé plus tard.)

Pour l'énoncé de mission, utiliser une phrase à l'infinitif, qui complète « En investissant dans ce produit, l'État cherche à… » ou « l'État cherche à rendre plus facile de… ».

## Éditer la description d'une Startup existante

Modifier le fichier `$id_startup.md` de description de la Startup dans le dossier [`content/_startups`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_startups).

La documentation des différentes propriétés à renseigner est accessible en cliquant sur le lien de création d'une nouvelle Startup dans la section précédente.

## Ajouter ou modifier l'image d'illustration d'un Startup existante

Ajouter un image `$id_startup.jpg`ou .png dans le dossier [img/startups](https://github.com/betagouv/beta.gouv.fr/tree/master/img/startups)

## Ajouter ou modifier un membre à la communauté BetaGouv

### [À travers l'interface web Netlify CMS (pour ne pas avoir à écrire de code)](https://beta.gouv.fr/admin/)

Cette interface permet à toutes les personnes de la communauté d'ajouter de nouveaux membres ou de modifier des fiches. Si c'est pour créer ta fiche, demande à ton marrain de t'aider !

**Attention** : en cas d'ajout de fiche, toi ou ton marrain doit vérifier que le nom du fichier se conforme aux indications ci-dessous.

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=authors&where=content/_authors/prenom.nom.md) :smiley:

Le nom du fichier est important : il doit correspondre au nom de la personne, selon le schéma `prenom.nom.md`. Les parties `prenom` et `nom` sont en minuscules et sans accents. Les espaces des noms propres sont remplacés par `_` et les tirets restent. Il faut garder .md à la fin du nom du fichier. **Il est important que cet identifiant et celui du mail `@beta.gouv.fr` correspondent**. Cela nous permet de traiter [automatiquement](https://github.com/betagouv/betaGouvBot) divers sujets liés à la gestion RH tels que abonnement et désabonnement des listes de diffusion, anticipation des fins de contrat, etc.

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`content/_authors`](https://github.com/betagouv/beta.gouv.fr/tree/master/content/_authors) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.

Tu peux fournir un fichier avec ta photo si tu n'as pas de compte Github, ou si tu es à l'aise avec la manip (qui est un peu plus pénible que juste modifier un fichier Markdown). Attention, l'image doit être carrée et de préférence à une résolution supérieure à 512 ⨉ 512 pixels, optimisée au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

## Ajouter une offre d'emploi

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=jobs&where=content/_jobs/AAAA-MM-DD-nom_offre.md) :smiley:

> Une fois l'offre pourvue, bien penser à changer la valeur du flag `open` et de la mettre à `false`.

> S'il s'agit d'une offre dev, merci d'ajouter le flag `techno`.

> Pour un premier recrutement (le CTO de la Startup), la valeur conseillée de ce champ est "Choix technologiques ouverts parmi les solutions libres du marché."

> Pour les recrutements ultérieurs, vous pouvez préciser s'ils sont ouverts aux juniors. Le recrutement de ces profils "juniors" est un élément important pour augmenter la diversité au sein de notre collectif ; prenez le temps de réfléchir à vos besoins pour ce recrutement avant d'écarter cette possibilité.

## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/betagouv/beta.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.

## Modifier la présentation du site en Local

### Utilisation de Jekyll pour le développement en local

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques. La version utilisée est celle [actuellement en production](https://github.com/jekyll/jekyll/releases/tag/v3.8.5/).

Pour initialiser votre environnement de développement, commencez par installer [Ruby](https://www.ruby-lang.org/fr/) dans la version spécifiée par le fichier `.ruby-version`.
Si vous utilisez RVM pour isoler votre environnement, vous pouvez le faire avec la commande suivante:

```sh
rvm install `cat .ruby-version`
```

Toujours avec RVM, vous pouvez créer un fichier `.ruby-gemset` contenant un nom de gemset à utiliser en local.
Il vous suffit alors de sortir puis revenir du répertoire pour que le gemset soit créé correctement si votre shell est bien configuré.

Ensuite, exécutez les commandes suivantes :

```sh
git clone https://github.com/betagouv/beta.gouv.fr.git
cd beta.gouv.fr
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

Les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `assets\additional` et `layout`. Le fichier `_sass\hacks.css` permet d'effectuer des modifications de style globale sans toucher aux feuilles de style de base.

### Dépendances : un `Gemfile` particulier

Afin de minimiser les écarts entre les versions de développement et les versions de production, ce dépôt contient un fichier `Gemfile` (spécification des versions minimum des dépendances), comme beaucoup de dépôts Ruby.

## Relire les changements

Pour encourager les contributions, éviter les erreurs d'inattention, et se mettre d'accord collectivement sur le contenu publié au nom de l'incubateur, chaque modification doit être relue et approuvée par une autre personne que l'auteur avant d’être intégrée.

### Conseils pour demander une relecture

Pour les relectures de code, il vaut mieux choisir une personne ayant un peu l'habitude de Jekyll, de Ruby ou du développement web. En revanche, en cas d'urgence sur une relecture éditoriale, toute personne de l'incubateur est légitime à approuver les modifications.

**L'auteur d'une modification est responsable de pousser pour obtenir une relecture**, en relançant les gens périodiquement. Pour demander une relecture :

1. **Ouvrir une <abbr title="Demande de modification sur GitHub">pull request</abbr>**, sans mentionner de relecteur explicitement. Les relecteurs potentiels vont recevoir une notification, et peuvent s'auto-assigner la relecture.
2. **Si plusieurs jours s'écoulent sans relecture** (entre 2 et 5 jours, à la louche), ajouter un commentaire à la pull request, en demandant explicitement une relecture à un relecteur potentiel.
3. **Si plusieurs jours s'écoulent à nouveau**, contacter directement un relecteur potentiel (par exemple par message privé sur le [Slack de l'incubateur](https://github.com/betagouv/beta.gouv.fr/wiki/Slack), ou en présentiel dans les locaux de _beta.gouv.fr_).

### Conseils pour les relecteurs

- **Commentez le code ou le texte – pas l'auteur** : on ne cherche pas à assigner de responsabilités ou à critiquer l'auteur ; mais juste à voir comment un bout de code ou de texte pourrait être plus pertinent.
- **Si vous critiquez, proposez** : si quelque chose ne vous plait pas, expliquez comment vous proposeriez de l'améliorer.
- **Soyez souple** : si vous avez une remarque mineure, ne bloquez pas la pull request avec une revue négative. Il vaut mieux approuver la pull request, en laissant l'auteur responsable de prendre en compte (ou pas) vos remarques.

## Déploiement

### Prévisualisation (staging)

Chaque pull request est déployée dans Netlify, une fois le [build passé](https://circleci.com/gh/betagouv/beta.gouv.fr). Vous pouvez la retrouver dans la partie des "Checks" au nom de *deploy/netlify*. Vous pouvez suivre le lien associé pour accéder à la version de l'application correspondant à la pull request.

### Production

Ce site est déployé en continu avec [Netlify](https://www.netlify.com/). La branche qui reflète la production est `master`.

Pousser sur `master`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

C'est pourquoi la branche `master` est [protégée](https://help.github.com/articles/about-protected-branches/) : il est impossible de mettre en production sans que les [tests automatisés](https://circleci.com/gh/betagouv/beta.gouv.fr) n'aient validé que le site pouvait être généré correctement et qu'au moins un pair humain ait revu les modifications proposées.
