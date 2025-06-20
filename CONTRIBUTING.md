# Contribuer au site public de beta.gouv.fr

## Contributions

### Startups et membres

La modification des données relatives aux membres, produits ou incubateurs est réservée aux membres de la communauté beta.gouv.fr.

Ces modifications doivent se faire via l'[espace membre](https://espace-membre.incubateur.net/dashboard).


### Contenu éditorial

[Rechercher le contenu à modifier](https://github.com/betagouv/beta.gouv.fr/search?q=contenu+à+modifier&type=Code) et éditer le fichier correspondant.


### Bonnes pratiques de contributions

Les contributions doivent être **relues et approuvées par une autre personne que l'auteur avant d’être intégrée** pour :
- éviter les erreurs d'inattention
- se mettre d'accord collectivement sur le contenu publié au nom de l'incubateur.

**L'auteur d'une modification est responsable d'obtenir une relecture**, en relançant les gens périodiquement. Pour demander une relecture :

1. **Ouvrir une <abbr title="Demande de modification sur GitHub">pull request</abbr>**, sans mentionner de relecteur explicitement. Les relecteurs potentiels vont recevoir une notification, et peuvent s'auto-assigner la relecture.
2. **Si plusieurs jours s'écoulent sans relecture** (entre 2 et 5 jours, à la louche), ajouter un commentaire à la pull request, en demandant explicitement une relecture à un relecteur potentiel.
3. **Si plusieurs jours s'écoulent à nouveau**, contacter directement un relecteur potentiel (par exemple par message privé ou public sur le [Mattermost de l'incubateur](https://mattermost.incubateur.net), ou en présentiel dans les locaux de _beta.gouv.fr_).

Pour les relectures de code, il vaut mieux choisir une personne ayant un peu l'habitude de Jekyll, de Ruby ou du développement web. En revanche, en cas d'urgence sur une relecture éditoriale, toute personne de l'incubateur est légitime à approuver les modifications.

## Développement en local

Ce site est construit avec [Jekyll](https://jekyllrb.com/).

Pour lancer le serveur et commencer à développer, un environnement
Docker est fourni. Des commandes utiles sont fournies dans le
[`Makefile`](./Makefile), mais pour démarrer :

```sh
docker compose up
```

Si vous préférez installer le projet sur votre système :

```sh
bundle install
npm install
bundle exec jekyll serve --incremental --livereload
```

Le site beta.gouv est alors accessible en local sur `http://localhost:4000`

## Déploiement

### Prévisualisation (staging)

Chaque pull request est déployée dans Netlify, une fois le [build passé](https://github.com/betagouv/beta.gouv.fr/actions). Vous pouvez la retrouver dans la partie des "Checks" au nom de *deploy/netlify*. Vous pouvez suivre le lien associé pour accéder à la version de l'application correspondant à la pull request.

### Production

Ce site est déployé en continu avec [Netlify](https://www.netlify.com/). La branche qui reflète la production est `master`.

Pousser sur `master`, c’est partager avec le monde… ce qui signifie donc qu'il faut être très prudent avec ce pouvoir et privilégier l'usage de [pull requests](https://guides.github.com/introduction/flow/) :wink:

C'est pourquoi la branche `master` est [protégée](https://help.github.com/articles/about-protected-branches/) : il est impossible de mettre en production sans que les [tests automatisés](https://github.com/betagouv/beta.gouv.fr/actions) n'aient validé que le site pouvait être généré correctement et qu'au moins un pair humain ait revu les modifications proposées.

Vous pouvez retrouver l'ensemble des "tests automatisés" dans l onglet 'Checks' de chaque Pull Request.
