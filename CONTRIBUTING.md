# Améliorer le site public de l'Incubateur BetaGouv

## Ajouter une Startup

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=startup&where=_startup/nom-startup.md)

Les illustrations doivent être en 16:9, au format 1280 ⨉ 720 pixels, optimisées au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

> Sinon, offline : dupliquer un fichier de description dans le dossier [`_startup`](https://github.com/betagouv/beta.gouv.fr/tree/master/_startup) et suivre les instruction ci-dessous sur l'édition.

Pour le titre de la startup, s'en tenir aux [règles usuelles](https://fr.wikipedia.org/wiki/Usage_des_majuscules_en_fran%C3%A7ais#R.C3.A8gles_traditionnelles), c'est-à-dire sauf cas particuliers : le premier mot prend une majsucule, les autres non. (Ce n'est pas grave de se tromper, mais il faut s'attendre à ce que ça soit corrigé plus tard.)

Pour l'énoncé de mission, utiliser une phrase à l'infinitif, qui complète « En investissant dans ce produit, l'État cherche à… » ou « l'État cherche à rendre plus facile de… ».

## Éditer la description d'une Startup existante

Modifier le fichier `$id_startup.md` de description de la Startup dans le dossier [`_startup`](https://github.com/betagouv/beta.gouv.fr/tree/master/_startup).

La documentation des différentes propriétés à renseigner est accessible en cliquant sur le lien de création d'une nouvelle Startup dans la section précédente.

## Publier un billet

### 1. Écrire le billet

[En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=post&where=_posts/AAAA-MM-DD-titre.md) :smiley:

Pour ajouter une image au billet, créer un fichier JPEG dans `img/posts` du même nom que le fichier contenant le post (donc par exemple `AAAA-MM-DD-titre.jpg`). À l'affichage, l'image sera redimensionnée : les dimensions exactes de l'image ont donc peu d'importance.

> Sinon, offline : créer un nouveau post dans le dossier [`_posts`](https://github.com/betagouv/beta.gouv.fr/tree/master/_posts).

### 2. Faire revoir le billet

Avant d'ouvrir une pull request, diffuser un lien privé de prévisualisation à `incubateur@beta.gouv.fr`.

> Par exemple, créer un [Gist](https://gist.github.com) privé.

Recueillez l'avis d'au moins 2 membres de l'incubateur. Après de potentielles itérations, si aucun des destinataires n'a posé de véto à la publication, l'auteur peut ouvrir une pull request pour dernières vérifications syntaxiques et fonctionnelles.


## Ajouter un événement

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=event&where=_posts/AAAA-MM-DD-nom_evenement.md) :smiley:

Un événement est un type de billet particulier. Il a donc quelques métadonnées supplémentaires (`start`, `end`…), mais est [équivalent](#publier-un-billet) pour le reste, dont l'ajout d'images et la création offline.

Notamment, attention, la date dans le nom du fichier au format `AAAA-MM-DD-nom_evenement.md` est la date à laquelle vous souhaitez que l'événement soit annoncé sur le site (et non la date de l'événement lui-même).


## Ajouter un membre à la communauté BetaGouv

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=author&where=_authors/prenom.nom.md) :smiley:

Attention, l'image doit être carrée et de préférence à une résolution supérieure à 512 ⨉ 512 pixels, optimisée au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

Le nom du fichier est important : il doit correspondre au nom de la personne, selon le schéma `prenom.nom`. Les parties `prenom` et `nom` sont en minuscules et sans accents. Les espaces des noms propres sont remplacés par `_` et les tirets restent. Rien de très important ne dépend du respect de ces conventions, par contre **il est important que cet identifiant et celui du mail `@beta.gouv.fr` correspondent**. Cela nous permet de traiter [automatiquement](https://github.com/betagouv/betaGouvBot) divers sujets liés à la gestion RH tels que abonnement et désabonnement des listes de diffusion, anticipation des fins de contrat, etc.

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_authors`](https://github.com/betagouv/beta.gouv.fr/tree/master/_authors) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Ajouter une offre d'emploi

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=job&where=_jobs/AAAA-MM-DD-nom_offre.md) :smiley:

> Une fois l'offre pourvue, bien penser à changer la valeur du flag `open` et de la mettre à `false`.

> S'il s'agit d'une offre dev, merci d'ajouter le flag `techno`.

> Pour un premier recrutement (le CTO de la Startup), la valeur conseillée de ce champ est "Choix technologiques ouverts parmi les solutions libres du marché."

> Pour les recrutements ultérieurs, vous pouvez préciser s'ils sont ouverts aux débutant·e·s. Le recrutement de ces profils "juniors" est un élément important pour augmenter la diversité au sein de notre collectif ; prenez le temps de réfléchir à vos besoins pour ce recrutement avant d'écarter cette possibilité.

## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/betagouv/beta.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


## Modifier les startups mises en avant sur la page d'accueil

Mettre à jour la propriété `featured` de la phase correspondante pour référencer le nom du fichier dans lequel la startup à mettre en avant est décrite dans [`index.html`](https://github.com/betagouv/beta.gouv.fr/tree/master/index.html).

## Ajouter une page

### [En un clic par l'interface web de GitHub](https://beta.gouv.fr/trampoline.html?what=page&where=_pages/page.html) :smiley:

Attention, toutes les pages doivent avoir, dans leur [front matter](https://jekyllrb.com/docs/frontmatter/), les variables `permalink`, `lang` et `ref` définies.

## Modifier la présentation du site

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques. La version utilisée est celle [actuellement en production](https://pages.github.com/versions/) sur GitHub Pages.

Pour l'améliorer, installer [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com) dans leurs [versions de production](https://pages.github.com/versions/) :

```sh
git clone https://github.com/betagouv/beta.gouv.fr.git
cd beta.gouv.fr
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

Les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `_layouts` et `css`.

### Dépendances : un `Gemfile` particulier

Afin de minimiser les écarts entre les versions de développement et les versions de production, ce dépôt contient un fichier `Gemfile` (spécification des versions minimum des dépendances), comme beaucoup de dépôts Ruby. Ce fichier `Gemfile` a par ailleurs un fonctionnement un peu particulier : lorsque c'est possible, il obtient sur le site de Github le numéro de version de Github Pages le plus récent, et tente de mettre à jour les dépendances.

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

Chaque pull request est déployée dans Heroku, une fois le [build passé](https://circleci.com/gh/betagouv/beta.gouv.fr). Une notification est envoyée sur la pull request :

![notification de déploiement en prévisualisation](http://i.imgur.com/7ZuC2Zw.png)

Vous pouvez suivre le lien de la notification pour accéder à la version de l'application correspondant à la pull request.

### Production

Ce site est déployé en continu avec [Github Pages](https://pages.github.com). La branche qui reflète la production est `master`.

Pousser sur `master`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

C'est pourquoi la branche `master` est [protégée](https://help.github.com/articles/about-protected-branches/) : il est impossible de mettre en production sans que les [tests automatisés](http://circleci.com/gh/betagouv/beta.gouv.fr/207) n'aient validé que le site pouvait être généré correctement et qu'au moins un pair humain ait revu les modifications proposées.
