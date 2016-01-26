# Améliorer ce site

## Ajouter une startup

[Créer un nouveau fichier](https://github.com/sgmap/sgmap.github.io/new/master/_startups) de description dans le dossier `_startups` et renseigner les informations en prenant exemple sur [un existant](https://raw.githubusercontent.com/sgmap/sgmap.github.io/master/_startups/mes-aides.md).

La liste des états possibles est accessible dans [`_config.yml`](https://github.com/sgmap/sgmap.github.io/blob/master/_config.yml#L29).


## Éditer la description d'une startup

Modifier le fichier de description dans le dossier [`_startups`](https://github.com/sgmap/sgmap.github.io/tree/master/_startups).


## Modifier le site

Ce site est construit avec [Jekyll](https://jekyllrb.com/), un générateur de sites statiques.

Pour l'améliorer, installer [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com/) :

```sh
git clone https://github.com/sgmap/sgmap.github.io.git
gem install jekyll
cd sgmap.github.io
jekyll serve --watch
```


## Déployer

Ce site est déployé en continu avec [Github Pages](https://pages.github.com). Pousser sur `master`, c’est partager avec le monde  :)
