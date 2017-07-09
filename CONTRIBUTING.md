# Améliorer le site public de l'Incubateur

## Ajouter une Startup

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_startup?filename=_startup/nom_startup.md&value=---%0d%0atitle%3a+Mes+Aides++%23+une+majuscule+et+pas+d%27acronymes%0d%0amission%3a+Acc%c3%a9der+aux+conseils+d%27un%c2%b7e+professionnel%c2%b7le+%c3%a0+proximit%c3%a9+pour+trouver+un+logement++%23+infinitif%2c+pas+de+point+%3b+compl%c3%a9ter+la+phrase+%c2%ab+En+investissant+dans+ce+produit+l%27%c3%89tat+cherche+%c3%a0%e2%80%a6+%c2%bb%0d%0alink%3a+https%3a%2f%2fmes-aides.gouv.fr%0d%0arepository%3a+https%3a%2f%2fgithub.com%2fsgmap%2fmes-aides-ui++%23+ou+page+de+description+des+d%c3%a9p%c3%b4ts+s%27il+y+en+a+plusieurs%0d%0astatus%3a+consolidation++%23+les+phases+possibles+sont+d%c3%a9finies+dans+%5b%60_config.yml%60%5d(https%3a%2f%2fgithub.com%2fsgmap%2fbeta.gouv.fr%2fblob%2fmaster%2f_config.yml%23L29-L52)%0d%0acontact%3a+contact%40mes-aides.gouv.fr++%23+sera+visible+de+tous%0d%0alogo%3a+%23+URL+vers+un+logo+en+HTTPS+%3b+supprimer+cette+ligne+si+pas+de+logo%0d%0astart%3a+2015-01-15++%23+date+au+format+ISO+(AAAA-MM-DD)%0d%0a%23+screenshot%3a+ajouter+une+image+en+1280x720px+dans+%2fimg%2fstartups%2f%24nom_startup.png+(ou+.jpg)+et+effacer+cette+ligne%0d%0a---%0d%0a%0d%0a%23%23+Fiche+produit%0d%0a%0d%0aTexte+libre+au+format+%5bMarkdown%5d(http%3a%2f%2fricostacruz.com%2fcheatsheets%2fmarkdown.html).%0d%0a%0d%0a%0d%0a%23%23+Rappels%0d%0a%0d%0a-+%5b+%5d+Modifier+le+nom+du+fichier+%60nom_startup.md%60+dans+le+champ+ci-dessus.%0d%0a-+%5b+%5d+Cr%c3%a9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2c+et+la+nommer+du+m%c3%aame+nom+que+le+fichier+%60nom_startup%60.%0d%0a-+%5b+%5d+Ouvrir+une+pull+request+pour+valider+l%27int%c3%a9gration.%0d%0a-+%5b+%5d+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu+%f0%9f%98%89) :smiley:

Les logos doivent être carrés et de préférence à une résolution supérieure à 512 ⨉ 512 pixels.
Les illustrations doivent être en 16:9, et à une résolution supérieure à 1280 ⨉ 720 pixels.

> Sinon, offline : dupliquer un fichier de description dans le dossier [`_startup`](https://github.com/sgmap/beta.gouv.fr/tree/master/_startup) et suivre les instruction ci-dessous sur l'édition.

Pour le titre de la startup, s'en tenir aux [règles usuelles](https://fr.wikipedia.org/wiki/Usage_des_majuscules_en_fran%C3%A7ais#R.C3.A8gles_traditionnelles), c'est-à-dire sauf cas particuliers : le premier mot prend une majsucule, les autres non. (Ce n'est pas grave de se tromper, mais il faut s'attendre à ce que ça soit corrigé plus tard.)

Pour l'énoncé de mission, utiliser une phrase à l'infinitif, qui complète « En investissant dans ce produit, l'État cherche à… » ou « l'État cherche à rendre plus facile de… ».

## Éditer la description d'une Startup existante

Modifier le fichier `$id_startup.md` de description de la Startup dans le dossier [`_startup`](https://github.com/sgmap/beta.gouv.fr/tree/master/_startup).

La documentation des différentes propriétés à renseigner est accessible en cliquant sur le lien de création d'une nouvelle Startup dans la section précédente.

## Publier un billet

### 1. Écrire le billet

[En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_posts?filename=_posts/AAAA-MM-DD-titre.md&value=---%0d%0atitle%3a+Nom+du+billet%0d%0aauthors%3a+jean.dupont+%23+id+du+ou+des+auteurs%0d%0a---%0d%0a%0d%0aPour+ajouter+une+image+au+billet%2c+cr%c3%a9er+un+fichier+JPEG+dans+%60img%2fposts%60+du+m%c3%aame+nom+que+le+fichier+contenant+le+post.%0d%0a%0d%0a**Pensez+%c3%a0+modifier+le+nom+de+ce+fichier+%3a+il+doit+%c3%aatre+au+format+%60AAAA-MM-DD-titre.md%60+!**%0d%0aO%c3%b9+%60AAAA-MM-DD%60+est+la+date+%c3%a0+laquelle+vous+souhaitez+que+le+billet+soit+publi%c3%a9.) :smiley:

Pour ajouter une image au billet, créer un fichier JPEG dans `img/posts` du même nom que le fichier contenant le post (donc par exemple `AAAA-MM-DD-titre.jpg`). À l'affichage, l'image sera redimensionnée : les dimensions exactes de l'image ont donc peu d'importance.

> Sinon, offline : créer un nouveau post dans le dossier [`_posts`](https://github.com/sgmap/beta.gouv.fr/tree/master/_posts).

### 2. Faire revoir le billet

Avant d'ouvrir une pull request, diffuser un lien privé de prévisualisation à `incubateur@beta.gouv.fr`.

> Par exemple, créer un [Gist](https://gist.github.com) privé.

Recueillez l'avis d'au moins 2 membres de l'incubateur. Après de potentielles itérations, si aucun des destinataires n'a posé de véto à la publication, l'auteur peut ouvrir une pull request pour dernières vérifications syntaxiques et fonctionnelles.


## Ajouter un événement

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_posts?filename=_posts/AAAA-MM-DD-nom_evenement.md&value=---%0d%0atitle%3a+Nom+de+l%27%c3%a9v%c3%a9nement%0d%0acategory%3a+evenement%0d%0aregistration%3a+https%3a%2f%2feventbrite.com%2f%e2%80%a6+%23+URL+%c3%a0+laquelle+on+peut+s%27inscrire%0d%0alocation%3a+Palais+des+Congr%c3%a8s+de+Paris+%23+lieu+de+l%27%c3%a9v%c3%a9nement%0d%0astart%3a+2016-04-20T09%3a30%2b02%3a00++%23+date+de+d%c3%a9but+au+format+ISO%0d%0aend%3a+2016-04-20T17%3a30%2b02%3a00++%23+date+de+fin+au+format+ISO%0d%0a---%0d%0a%0d%0a%c3%89crire+ici+le+descriptif+de+l%27%c3%a9v%c3%a9nement.+Un+lien+d%27inscription+et+un+descriptif+des+horaires+sera+automatiquement+g%c3%a9n%c3%a9r%c3%a9%2c+ne+pas+l%27%c3%a9crire+ici.%0d%0a%0d%0aPour+ajouter+une+image+%c3%a0+l%27%c3%a9v%c3%a9nement%2c+cr%c3%a9er+un+fichier+JPEG+dans+%60img%2fposts%60+du+m%c3%aame+nom+que+le+fichier+contenant+le+post.%0d%0a%0d%0a**Pensez+%c3%a0+modifier+le+nom+de+ce+fichier+%3a+il+doit+%c3%aatre+au+format+%60AAAA-MM-DD-nom_evenement.md%60+!**%0d%0aO%c3%b9+%60AAAA-MM-DD%60+est+la+date+%c3%a0+laquelle+vous+souhaitez+que+l%27%c3%a9v%c3%a9nement+soit+annonc%c3%a9+sur+le+site+(et+non+la+date+de+l%27%c3%a9v%c3%a9nement+lui-m%c3%aame).) :smiley:

Un événement est un type de billet particulier. Il a donc quelques métadonnées supplémentaires (`start`, `end`…), mais est [équivalent](#publier-un-billet) pour le reste, dont l'ajout d'images et la création offline.

Notamment, attention, la date dans le nom du fichier au format `AAAA-MM-DD-nom_evenement.md` est la date à laquelle vous souhaitez que l'événement soit annoncé sur le site (et non la date de l'événement lui-même).


## Ajouter un membre à l'équipe Incubateur

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_posts?filename=_authors/prenom.nom.md&value=---%0Afullname%3A%20Camille%20Dupont%20%23%20penser%20%C3%A0%20modifier%20le%20nom%20du%20fichier%20ci-dessus%20!%0Arole%3A%20Smartass%0A%23%20ci-dessous%2C%20tu%20peux%20aussi%20remplacer%20sgmap-bot%20par%20ton%20propre%20pseudo%20Github%0A%23%20ou%20bien%20fournir%20l%27URL%20(HTTPS%20obligatoire)%20d%27une%20image%20carr%C3%A9e%20512x512%20minimum%0A%23%20ou%20bien%20uploader%20un%20fichier%20JPG%20en%20512x512%20du%20m%C3%AAme%20nom%20que%20ce%20fichier%20dans%20%2Fimg%2Fauthors%20et%20effacer%20cette%20ligne%0Aavatar%3A%20https%3A%2F%2Favatars3.githubusercontent.com%2Fsgmap-bot%3Fs%3D600%0Alink%3A%20%23%20optionnel%20%3A%20lien%20vers%20une%20page%20perso%20externe.%20Effacer%20cette%20ligne%20si%20rien%20%C3%A0%20mettre.%0Astart%3A%202016-12-31%20%23%20date%20d%27arriv%C3%A9e%20au%20format%20ISO%20(AAAA-MM-JJ)%0Aend%3A%202017-09-15%20%23%20date%20de%20fin%20de%20contrat%20au%20format%20ISO%20(AAAA-MM-JJ)%0Aemployer%3A%20%23%20dinsic%20ou%20independent%2F%3Cemployer%3E%20ou%20admin%2F%3Cemployer%3E%0A---%0A%0A%C3%89crit%20des%20autobiographies%20percutantes%20en%20moins%20de%20200%20caract%C3%A8res%20depuis%201972.) :smiley:

Attention, l'image doit être carrée et de préférence à une résolution supérieure à 512 ⨉ 512 pixels, optimisée au préalable avec un outil du type [ImageOptim](https://imageoptim.com/mac) - choisir des réglages "lossy" donnant en général plus de 50% de gains à la compression, mais ne pas supprimer les métadonnées d'images.

Le nom du fichier est important : il doit correspondre au nom de la personne, selon le schéma `prenom.nom`. Les parties `prenom` et `nom` sont en minuscules et sans accents. Les espaces des noms propres sont remplacés par `_` et les tirets restent. Rien de très important ne dépend du respect de ces conventions, par contre **il est important que cet identifiant et celui du mail `@beta.gouv.fr` correspondent**. Cela nous permet de traiter [automatiquement](https://github.com/sgmap/betaGouvBot) divers sujets liés à la gestion RH tels que abonnement et désabonnement des listes de diffusion, anticipation des fins de contrat, etc.

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_authors`](https://github.com/sgmap/beta.gouv.fr/tree/master/_authors) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Ajouter une offre d'emploi

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_posts?filename=_jobs/AAAA-MM-DD-nom_offre.md&value=---%0Aroles%3A%20intitul%C3%A9%20du%2Fdes%20poste%2Fs%20%23%20un%C2%B7e%20d%C3%A9veloppeur%C2%B7e%2C%20deux%20business%20d%C3%A9veloppeur%C2%B7e%C2%B7s%2C%20un%C2%B7e%20d%C3%A9veloppeur%C2%B7e%20et%20une%20un%C2%B7e%20business%20d%C3%A9veloppeur%C2%B7e%2C%20etc.%0Astartup%3A%20identifiant%20de%20la%20startup%20%20%23%20identifiant%20de%20la%20startup%20pour%20laquelle%20le%20recrutement%20est%20fait%20%3B%20cr%C3%A9er%20la%20startup%20si%20elle%20n%27existe%20pas%20encore%0Aopen%3A%20true%0A---%0A%0A%C3%89crire%20ici%20le%20descriptif%20du%20poste.%20Attention%20%C3%A0%20la%20neutralit%C3%A9%20de%20genre%20!%0A%0A**Pensez%20%C3%A0%20modifier%20le%20nom%20de%20ce%20fichier%20%3A%20il%20doit%20%C3%AAtre%20au%20format%20%60AAAA-MM-DD-nom_offre.md%60%20!**%0AO%C3%B9%20%60AAAA-MM-DD%60%20est%20la%20date%20%C3%A0%20laquelle%20vous%20souhaitez%20que%20l%27offre%20soit%20publi%C3%A9e.) :smiley:

> Une fois l'offre pourvue, bien penser à changer la valeur du flag `open` et de la mettre à `false`.

## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/sgmap/beta.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


## Modifier les startups mises en avant sur la page d'accueil

Mettre à jour la propriété `featured` de la phase correspondante pour référencer le nom du fichier dans lequel la startup à mettre en avant est décrite dans [`index.html`](https://github.com/sgmap/beta.gouv.fr/tree/master/index.html).

## Ajouter une page

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/master/_pages/fr?filename=page.html&value=---%0Apermalink%3A%20/page%0Alang%3A%20fr%0Aref%3A%20page%0A---) :smiley:

Attention, toutes les pages doivent avoir, dans leur [front matter](https://jekyllrb.com/docs/frontmatter/), les variables `permalink`, `lang` et `ref` définies.

## Modifier la présentation du site

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques. La version utilisée est celle [actuellement en production](https://pages.github.com/versions/) sur GitHub Pages.

Pour l'améliorer, installer [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com) dans leurs [versions de production](https://pages.github.com/versions/) :

```sh
git clone https://github.com/sgmap/beta.gouv.fr.git
cd beta.gouv.fr
gem install bundler --no-ri --no-rdoc
bundle install
bundle exec jekyll serve
```

Les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `_layouts` et `css`.

### Dépendances : un `Gemfile` particulier

Afin de minimiser les écarts entre les versions de développement et les versions de production, ce dépôt contient un fichier `Gemfile` (spécification des versions minimum des dépendances), comme beaucoup de dépôts Ruby. Ce fichier `Gemfile` a par ailleurs un fonctionnement un peu particulier : lorsque c'est possible, il obtient sur le site de Github le numéro de version de Github Pages le plus récent, et tente de mettre à jour les dépendances.

## Modifier le logo

La source du logo est dans le répertoire `_sources`. Il s'agit d'un SVG contenant du texte. Pour le rendre accessible à tous les utilisateurs, il importe de le transformer en un SVG contenant des `path`.

Cela peut être fait à la ligne de commande avec [Inkscape](https://inkscape.org/fr/) :

```shell
inkscape --export-text-to-path `pwd`/_sources/logo.svg -l `pwd`/img/logo.svg
svgo --multipass img/logo.svg  # optimisation, cf. https://jakearchibald.github.io/svgomg/
```

## Relire les changements

Pour encourager les contributions, éviter les erreurs d'inattention, et se mettre d'accord collectivement sur le contenu publié au nom de l'incubateur, chaque modification doit être relue et approuvée par une autre personne que l'auteur avant d’être intégrée.

### Conseils pour demander une relecture

Pour les relectures de code, il vaut mieux choisir une personne ayant un peu l'habitude de Jekyll, de Ruby ou du développement web. En revanche, en cas d'urgence sur une relecture éditoriale, toute personne de l'incubateur est légitime à approuver les modifications.

**L'auteur d'une modification est responsable de pousser pour obtenir une relecture**, en relançant les gens périodiquement. Pour demander une relecture :

1. **Ouvrir une <abbr title="Demande de modification sur GitHub">pull request</abbr>**, sans mentionner de relecteur explicitement. Les relecteurs potentiels vont recevoir une notification, et peuvent s'auto-assigner la relecture.
2. **Si plusieurs jours s'écoulent sans relecture** (entre 2 et 5 jours, à la louche), ajouter un commentaire à la pull request, en demandant explicitement une relecture à un relecteur potentiel.
3. **Si plusieurs jours s'écoulent à nouveau**, contacter directement un relecteur potentiel (par exemple par message privé sur le [Slack de l'incubateur](https://github.com/sgmap/beta.gouv.fr/wiki/Slack), ou en présentiel dans les locaux de _beta.gouv.fr_).

### Conseils pour les relecteurs

- **Commentez le code ou le texte – pas l'auteur** : on ne cherche pas à assigner de responsabilités ou à critiquer l'auteur ; mais juste à voir comment un bout de code ou de texte pourrait être plus pertinent.
- **Si vous critiquez, proposez** : si quelque chose ne vous plait pas, expliquez comment vous proposeriez de l'améliorer.
- **Soyez souple** : si vous avez une remarque mineure, ne bloquez pas la pull request avec une revue négative. Il vaut mieux approuver la pull request, en laissant l'auteur responsable de prendre en compte (ou pas) vos remarques.

## Déploiement

### Prévisualisation (staging)

Chaque pull request est déployée dans Heroku, une fois le [build passé](https://circleci.com/gh/sgmap/beta.gouv.fr). Une notification est envoyée sur la pull request :

![notification de déploiement en prévisualisation](http://i.imgur.com/7ZuC2Zw.png)

Vous pouvez suivre le lien de la notification pour accéder à la version de l'application correspondant à la pull request.

### Production

Ce site est déployé en continu avec [Github Pages](https://pages.github.com). La branche qui reflète la production est `master`.

Pousser sur `master`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

C'est pourquoi la branche `master` est [protégée](https://help.github.com/articles/about-protected-branches/) : il est impossible de mettre en production sans que les [tests automatisés](http://circleci.com/gh/sgmap/beta.gouv.fr/207) n'aient validé que le site pouvait être généré correctement et qu'au moins un pair humain ait revu les modifications proposées.
