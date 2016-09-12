# Améliorer le site public de l'Incubateur


## Ajouter une Startup

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/gh-pages/_startup?filename=_startup/nom_startup.md&value=---%0d%0atitle%3a+Mes+Aides++%23+une+majuscule+et+pas+d%27acronymes%0d%0amission%3a+%c3%89valuez+vos+droits+%c3%a0+15+aides+sociales.+En+moins+de+6+minutes.++%23+s%27adresser+aux+utilisateurs+et+finir+par+un+point%0d%0adomain%3a+mes-aides.gouv.fr++%23+ne+pas+ajouter+de+http%3a%2f%2f%0d%0arepository%3a+https%3a%2f%2fgithub.com%2fsgmap%2fmes-aides-ui++%23+ou+page+de+description+des+d%c3%a9p%c3%b4ts+s%27il+y+en+a+plusieurs%0d%0astatus%3a+consolidation++%23+les+phases+possibles+sont+d%c3%a9finies+dans+%5b%60_config.yml%60%5d(https%3a%2f%2fgithub.com%2fsgmap%2fbeta.gouv.fr%2fblob%2fgh-pages%2f_config.yml%23L29-L52)%0d%0acontact%3a+contact%40mes-aides.gouv.fr++%23+sera+visible+de+tous%0d%0alogo%3a+%23+URL+vers+un+logo+en+HTTPS+%3b+supprimer+cette+ligne+si+pas+de+logo%0d%0astart%3a+2015-01-15++%23+date+au+format+ISO+(AAAA-MM-DD)%0d%0a%23+screenshot%3a+ajouter+une+image+en+1280x720px+dans+%2fimg%2fstartups%2f%24nom_startup.png+et+effacer+cette+ligne+%3b+%c3%a0+d%c3%a9faut%2c+URL+en+HTTPS+%3b+%c3%a0+d%c3%a9faut%2c+mettre+screenshot%3a+false%0d%0a---%0d%0a%0d%0a%23%23+Fiche+produit%0d%0a%0d%0aTexte+libre+au+format+%5bMarkdown%5d(http%3a%2f%2fricostacruz.com%2fcheatsheets%2fmarkdown.html).%0d%0a%0d%0a%0d%0a%23%23+Rappels%0d%0a%0d%0a-+%5b+%5d+Modifier+le+nom+du+fichier+%60nom_startup.md%60+dans+le+champ+ci-dessus.%0d%0a-+%5b+%5d+Cr%c3%a9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2c+et+la+nommer+du+m%c3%aame+nom+que+le+fichier+%60nom_startup%60.%0d%0a-+%5b+%5d+Ouvrir+une+pull+request+pour+valider+l%27int%c3%a9gration.%0d%0a-+%5b+%5d+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu+%f0%9f%98%89) :smiley:

> Sinon, offline : dupliquer un fichier de description dans le dossier [`_startup`](https://github.com/sgmap/beta.gouv.fr/tree/gh-pages/_startup) et suivre les instruction ci-dessous sur l'édition.


## Éditer la description d'une Startup existante

Modifier le fichier `$id_startup.md` de description de la Startup dans le dossier [`_startup`](https://github.com/sgmap/beta.gouv.fr/tree/gh-pages/_startup).

La documentation des différentes propriétés à renseigner est accessible en cliquant sur le lien de création d'une nouvelle Startup dans la section précédente.

## Publier un billet

### 1. Écrire le billet

[En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/gh-pages/_posts?filename=_posts/AAAA-MM-DD-titre.md&value=---%0d%0atitle%3a+Nom+du+billet%0d%0aauthor%3a+Jean+Dupont+%23+nom+de+l%27auteur%0d%0a---%0d%0a%0d%0aPour+ajouter+une+image+au+billet%2c+cr%c3%a9er+un+fichier+JPEG+dans+%60img%2fposts%60+du+m%c3%aame+nom+que+le+fichier+contenant+le+post.%0d%0a%0d%0a**Pensez+%c3%a0+modifier+le+nom+de+ce+fichier+%3a+il+doit+%c3%aatre+au+format+%60AAAA-MM-DD-titre.md%60+!**%0d%0aO%c3%b9+%60AAAA-MM-DD%60+est+la+date+%c3%a0+laquelle+vous+souhaitez+que+le+billet+soit+publi%c3%a9.) :smiley:

Pour ajouter une image au billet, créer un fichier JPEG dans `img/posts` du même nom que le fichier contenant le post (donc par exemple `AAAA-MM-DD-titre.jpg`). À l'affichage, l'image sera redimensionnée : les dimensions exactes de l'image ont donc peu d'importance.

> Sinon, offline : créer un nouveau post dans le dossier [`_posts`](https://github.com/sgmap/beta.gouv.fr/tree/gh-pages/_posts).

### 2. Faire revoir le billet

Avant d'ouvrir une pull request, diffuser un lien privé de prévisualisation à `membres@beta.gouv.fr`.

> Par exemple, créer un [Gist](https://gist.github.com) privé.

Après de potentielles itérations, si aucun des destinataires n'a posé de véto à la publication, et dès qu'au moins 25% en ont validé le contenu, l'auteur transmet son billet au directeur de l'incubateur pour confirmation.

### 3. Ouvrir une pull request

Une fois le contenu validé par les pairs et la direction, l'auteur ouvre une pull request pour vérifications syntaxiques et fonctionnelles.


## Ajouter un événement

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/gh-pages/_posts?filename=_posts/AAAA-MM-DD-nom_evenement.md&value=---%0d%0atitle%3a+Nom+de+l%27%c3%a9v%c3%a9nement%0d%0acategory%3a+evenement%0d%0aregistration%3a+https%3a%2f%2feventbrite.com%2f%e2%80%a6+%23+URL+%c3%a0+laquelle+on+peut+s%27inscrire%0d%0alocation%3a+Palais+des+Congr%c3%a8s+de+Paris+%23+lieu+de+l%27%c3%a9v%c3%a9nement%0d%0astart%3a+2016-04-20T09%3a30%2b02%3a00++%23+date+de+d%c3%a9but+au+format+ISO%0d%0aend%3a+2016-04-20T17%3a30%2b02%3a00++%23+date+de+fin+au+format+ISO%0d%0a---%0d%0a%0d%0a%c3%89crire+ici+le+descriptif+de+l%27%c3%a9v%c3%a9nement.+Un+lien+d%27inscription+et+un+descriptif+des+horaires+sera+automatiquement+g%c3%a9n%c3%a9r%c3%a9%2c+ne+pas+l%27%c3%a9crire+ici.%0d%0a%0d%0aPour+ajouter+une+image+%c3%a0+l%27%c3%a9v%c3%a9nement%2c+cr%c3%a9er+un+fichier+JPEG+dans+%60img%2fposts%60+du+m%c3%aame+nom+que+le+fichier+contenant+le+post.%0d%0a%0d%0a**Pensez+%c3%a0+modifier+le+nom+de+ce+fichier+%3a+il+doit+%c3%aatre+au+format+%60AAAA-MM-DD-nom_evenement.md%60+!**%0d%0aO%c3%b9+%60AAAA-MM-DD%60+est+la+date+%c3%a0+laquelle+vous+souhaitez+que+l%27%c3%a9v%c3%a9nement+soit+annonc%c3%a9+sur+le+site+(et+non+la+date+de+l%27%c3%a9v%c3%a9nement+lui-m%c3%aame).) :smiley:

Un événement est un type de billet particulier. Il a donc quelques métadonnées supplémentaires (`start`, `end`…), mais est [équivalent](#publier-un-billet) pour le reste, dont l'ajout d'images et la création offline.

Notamment, attention, la date dans le nom du fichier au format `AAAA-MM-DD-nom_evenement.md` est la date à laquelle vous souhaitez que l'événement soit annoncé sur le site (et non la date de l'événement lui-même).


## Ajouter un membre à l'équipe Incubateur


### [En un clic par l'interface web de GitHub](https://github.com/sgmap/beta.gouv.fr/new/gh-pages/_posts?filename=_author/id.md&value=---%0d%0afullname%3a+Camille+Dupont+%23+penser+%c3%a0+modifier+le+nom+du+fichier+ci-dessus+!%0d%0arole%3a+Smartass%0d%0astart%3a+2016-12-31+%23+date+d%27arriv%c3%a9e+au+format+ISO+(AAAA-MM-JJ)%0d%0aend%3a+2016-09-15+%23+date+de+fin+de+contrat+au+format+ISO+(AAAA-MM-JJ)%0d%0aavatar%3a+%23+uploader+un+fichier+JPG+en+512x512+du+m%c3%aame+nom+que+ce+fichier+dans+%2fimg%2fauthor+et+effacer+cette+ligne%2c+ou+sp%c3%a9cifier+une+URL+externe+en+HTTPS%0d%0alink%3a+%23+optionnel+%3a+lien+vers+une+page+perso+externe.+Effacer+cette+ligne+si+rien+%c3%a0+mettre.%0d%0a---%0d%0a%0d%0a%c3%89crit+des+autobiographies+percutantes+en+moins+de+200+caract%c3%a8res+depuis+1972.) :smiley:

Attention, l'image doit être carrée et de préférence à une résolution supérieure à 512 ⨉ 512 pixels.

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_author`](https://github.com/sgmap/beta.gouv.fr/tree/gh-pages/_author) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/sgmap/beta.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


## Modifier les startups mises en avant sur la page d'accueil

Mettre à jour la propriété `featured` de la phase correspondante pour référencer le nom du fichier dans lequel la startup à mettre en avant est décrite dans [`index.html`](https://github.com/sgmap/beta.gouv.fr/tree/gh-pages/index.html).

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


## Modifier le logo

La source du logo est dans le répertoire `_sources`. Il s'agit d'un SVG contenant du texte. Pour le rendre accessible à tous les utilisateurs, il importe de le transformer en un SVG contenant des `path`.

Cela peut être fait à la ligne de commande avec [Inkscape](https://inkscape.org/fr/) :

```shell
inkscape --export-text-to-path `pwd`/_sources/logo.svg -l `pwd`/img/logo.svg
svgo --multipass img/logo.svg  # optimisation, cf. https://jakearchibald.github.io/svgomg/
```


## Déploiement

### Prévisualisation (staging)

Chaque pull request est déployée dans Heroku, une fois le [build passé](https://circleci.com/gh/sgmap/beta.gouv.fr). Une notification est envoyée sur la pull request :

![notification de déploiement en prévisualisation](http://i.imgur.com/7ZuC2Zw.png)

Vous pouvez suivre le lien de la notification pour accéder à la version de l'application correspondant à la pull request.

### Production

Ce site est déployé en continu avec [Github Pages](https://pages.github.com). La branche principale, qui reflète la production, est donc `gh-pages`.

Pousser sur `gh-pages`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

C'est pourquoi la branche `gh-pages` est [protégée](https://help.github.com/articles/about-protected-branches/) : il est impossible de mettre en production sans que les [tests automatisés](http://circleci.com/gh/sgmap/beta.gouv.fr/207) n'aient validé que le site pouvait être généré correctement.
