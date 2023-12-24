Le site public de l'Incubateur de Services Numériques de l'État français.

> Public website for the Digital Services Incubator of the French government.
> 
## `beta.gouv.fr`

Ce nom de domaine héberge :

- Une présentation de l'approche Startup d'État et valorisation de ses produits.
- Une présentation de chaque incubateur du réseau `beta.gouv.fr` dont l'Incubateur de Services Numériques de la [Direction interministérielle du numérique](https://www.numerique.gouv.fr/).
- Les membres actifs et anciens des incubateurs

### Les sous-domaines

Un sous-domaine de `*.beta.gouv.fr` est un produit respectant les principes décrits sur le site, et donc développé selon l'approche Startup d'État.
Le sous-domaine “beta.gouv.fr” existe depuis 2014 et est piloté par la Direction interministérielle du numérique (DINUM). Il permet aux Startups d’État de mettre en ligne rapidement les premières versions de leur service numérique, et donc de tester le service en conditions réelles, auprès de “vrais” utilisateurs, le plus vite possible, dans un périmètre restreint qui s’étend au fur et à mesure des évolutions du service.
Le nom “beta” renvoie à la notion de “version bêta” qui indique à l’utilisateur que le service n'est pas encore abouti. Pendant le programme beta.gouv.fr (qui dure en moyenne 3 ans), le service numérique, encore en construction ou en accélération, n’est pas encore parfait, et évolue en permanence au fil des retours des utilisateurs. L’objectif du programme est de bâtir des services utiles et exemplaires et conformes aux standards décrits ci-dessous (accessibles, sécurisés, respectueux des données personnelles, conformes au système de design de l’État, au code source ouvert…) par une démarche d’amélioration continue.

## Support navigateur

Au vu du public visé, ce site doit être **dégradable** jusqu'à IE11.
> Cela ne signifie pas qu'il doit afficher [la même chose](http://dowebsitesneedtolookexactlythesameineverybrowser.com) dans tous les navigateurs, mais simplement que son contenu doit être lisible même avec des navigateurs obsolètes.


## Autres usages

`beta.gouv.fr` est *principalement* un site statique, mais pas exclusivement. En particulier :

- Il expose une API des membres de la communauté : `https://beta.gouv.fr/api/v1/authors.json`.
- Un _bot_ ou assistant automatique (dont le code est également [disponible](https://github.com/betagouv/betaGouvBot)) exploite cette API pour faciliter la gestion RH de l'Incubateur.
- Un app de gestion (dont le code est également [disponible](https://github.com/betagouv/secretariat)) exploite cette API pour faciliter la gestion RH de l'Incubateur.
- Le contenu statique peut aussi être exploré à travers une console Ruby disponible dans `/bin/beta-rb`.

## Contribution et développement

Plus de détails ici : [CONTRIBUTING.md](https://github.com/betagouv/beta.gouv.fr/blob/master/CONTRIBUTING.md)
