# Améliorer le site public de l'Incubateur


## Ajouter une startup

### [En un clic par l'interface web de GitHub](https://github.com/sgmap/sgmap.github.io/new/master/_startups?filename=nom_startup.md&value=---%0d%0atitle%3a+Mes+Aides++%23+pas+d%27acronymes+ici%0d%0amission%3a+%c3%89valuez+vos+droits+%c3%a0+15+aides+sociales.+En+moins+de+6+minutes.++%23+s%27adresser+aux+utilisateurs%0d%0adomain%3a+mes-aides.gouv.fr++%23+ne+pas+ajouter+de+http%3a%2f%2f%0d%0arepository%3a+https%3a%2f%2fgithub.com%2fsgmap%2fmes-aides-ui++%23+ou+page+de+description+des+d%c3%a9p%c3%b4ts+s%27il+y+en+a+plusieurs%0d%0astatus%3a+consolidation++%23+les+phases+possibles+sont+d%c3%a9finies+dans+%5b%60_config.yml%60%5d(https%3a%2f%2fgithub.com%2fsgmap%2fsgmap.github.io%2fblob%2fmaster%2f_config.yml%23L29-L52)%0d%0acontact%3a+contact%40mes-aides.gouv.fr++%23+sera+visible+de+tous%0d%0alogo%3a+%23+URL+vers+un+logo+%3b+supprimer+cette+ligne+si+pas+de+logo%0d%0astart%3a+2015-01-15++%23+date+au+format+ISO+(AAAA-MM-DD)%0d%0a---%0d%0a%0d%0a%23%23+Fiche+produit%0d%0a%0d%0aTexte+libre+au+format+%5bMarkdown%5d(http%3a%2f%2fricostacruz.com%2fcheatsheets%2fmarkdown.html).%0d%0a%0d%0a%0d%0a%23%23+Rappels%0d%0a%0d%0a-+%5b+%5d+Modifier+le+nom+du+fichier+%60nom_startup.md%60+dans+le+champ+ci-dessus.%0d%0a-+%5b+%5d+Cr%c3%a9er+une+nouvelle+branche+pour+l%27ajout+de+ce+fichier%2c+et+la+nommer+du+m%c3%aame+nom+que+le+fichier+%60nom_startup%60.%0d%0a-+%5b+%5d+Ouvrir+une+pull+request+pour+valider+l%27int%c3%a9gration.%0d%0a-+%5b+%5d+Effacer+ce+texte+une+fois+que+vous+l%27avez+lu+%f0%9f%98%89) :smiley:

> Sinon, offline : créer un nouveau fichier de description dans le dossier [`_startups`](https://github.com/sgmap/sgmap.github.io/tree/master/_startups) et renseigner les informations en prenant exemple sur un fichier de description existant déjà dans ce dossier.


## Éditer la description d'une startup

Modifier le fichier de description de la startup dans le dossier [`_startups`](https://github.com/sgmap/sgmap.github.io/tree/master/_startups).


## Modifier le contenu éditorial

[Rechercher le contenu à modifier](https://github.com/sgmap/sgmap.github.io/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


## Modifier la présentation du site

Ce site est construit avec [Jekyll](https://jekyllrb.com/) ≥ 3.1, un générateur de sites statiques.

Pour l'améliorer, installer [Ruby](https://www.ruby-lang.org/fr/) et [Jekyll](https://jekyllrb.com/) :

```sh
git clone https://github.com/sgmap/sgmap.github.io.git
gem install jekyll
cd sgmap.github.io
jekyll serve
```

Les fichiers pertinents pour une modification de la présentation sont probablement dans les dossiers `_layouts` et `css`.


## Déployer

Ce site est déployé en continu avec [Github Pages](https://pages.github.com).

Pousser sur `master`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:
