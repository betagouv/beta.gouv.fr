---
mission: Simplifier la recherche d'aide et l'applicabilité des projets portés par les collectivités
incubator: mtes
title: VApp
contact: eglantine.schmitt@developpement-durable.gouv.fr
accessibility_status: non conforme
phases:
  - name: investigation
    start: 2024-04-04
thematiques:
  - Territoires
  - Écologie
  - Collectivités
usertypes:
  - etat
  - collectivite-territoriale
techno:
  - typescript
  - ia
  - LLM
repository: https://github.com/betagouv/VApp
link: https://vapp.beta.gouv.fr/
stats_url: https://stats.beta.gouv.fr/index.php?module=CoreHome&action=index&idSite=147&period=day&date=yesterday#?period=month&date=2025-03-26&idSite=147&category=Dashboard_Dashboard&subcategory=1
events:
  - name: committee
    date: 2024-06-28
    comment: Comité de mi-investigation
  - name: product_launch
    date: 2024-10-27
  - name: committee
    date: 2024-12-11
    comment: Prolongement de l'investigation jusqu'à mi avril
  - name: end
    date: 2025-03-31
    comment: Arrêt du projet
sponsors:
  - /organisations/anct
  - /organisations/mtes
---
# Hibernation
La Startup VApp est en ❄️ hibernation ❄️. Si vous êtes agent de l’État et que vous vous intéressez à ce sujet, écrivez un email aux personnes dans la partie contact.
# Contexte
Les collectivités jouent un rôle clé dans l’aménagement du territoire et la transition écologique. Toutefois, elles font face à un défi majeur : identifier et mobiliser les aides et subventions publiques adaptées à leurs projets. Le paysage des financements est complexe, fragmenté, et souvent difficile à naviguer, en particulier pour les petites collectivités qui ne disposent pas toujours des ressources humaines ou techniques nécessaires.

VApp est né de ce constat. L’objectif était d’exploiter les avancées de l’intelligence artificielle générative (GenAI) pour simplifier et accélérer l’accès des collectivités aux aides publiques. En collaboration avec des partenaires comme [Aides Territoires](https://beta.gouv.fr/startups/aides-territoires.html) (AT) et [Mon Espace Collectivité](https://beta.gouv.fr/startups/mon.espace.collectivite.html) (MEC), VApp visait à fournir un outil numérique capable de :
1. Comprendre les projets spécifiques des collectivités,
2. Identifier les aides pertinentes pour ces projets parmi plusieurs milliers de dispositifs existants,
3. aider les collectivités à optimiser leur projet et leur plan de financement.

Ces enjeux sont d’autant plus palpables pour des petites collectivités, qui ne disposent souvent pas de l’expertise technique (ingénierie financière) nécessaire à l’identification des aides applicables à leurs projets. C’est pourquoi VApp s’est concentré d’abord sur les élus et employés de petites collectivités, ainsi que les chefs de projet Village d’Avenir et Petite Ville de Demain qui les accompagnent.

# Problème
## Problème utilisateurs
**Les élus et employés de petites collectivités, ainsi que les chefs de projet Village d’Avenir et Petite Ville de Demain qui les accompagnent**, font face à des défis de plusieurs natures :

1. **Identification des financements adaptés**:
Les collectivités peinent à naviguer parmi les nombreuses aides existantes pour trouver celles qui correspondent à leurs projets. Les plateformes comme [Aides-Territoires](https://beta.gouv.fr/startups/aides-territoires.html) centralisent une partie des dispositifs, mais ne sont pas exhaustives. Par ailleurs, avec Aides-Territoires, l’utilisateur se retrouve souvent avec plusieurs dizaines de dispositifs potentiellement applicables à son projet, et doit faire une analyse chronophage.

2. **Optimisation des projets pour répondre aux exigences des aides**: 
Une approche conseil, fondée sur une connaissance approfondie des dispositifs, permettrait souvent à une collectivité de modifier partiellement le cahier des charges de leur projet pour optimiser son éligibilité à différentes aides. C’est un manque à gagner pour les collectivités et cela permettrait par ailleurs d’améliorer la qualité des projets vis à vis des priorités de politiques publiques que les dispositifs d’aide visent à encourager.

3. **Construction du plan de financement**:
Bien que crucial pour la réussite d’un projet, le montage d’un plan de financement clair et précis reste un défi majeur. Ce problème remonté lors de l’investigation de VApp a toutefois été laissé de côté, car il était déjà sur la roadmap d’un autre produit de l’écosystème ([Mon Espace Collectivité](https://beta.gouv.fr/startups/mon.espace.collectivite.html)).


## Problèmes de politiques publiques
Ces problèmes ont des répercussions directes sur l’efficacité des politiques publiques :
- **Aides publiques mal distribuées** : Certaines aides sont sous-utilisées, tandis que d’autres (DETR, DSIL, Fonds Vert) sont sur-sollicitées, entraînant des déséquilibres dans leur allocation.
- **Projets moins qualitatifs et moins pertinents** : Les projets proposés par les collectivités sont parfois moins alignés avec les priorités définies dans les cahiers des charges des dispositifs d’aides, ce qui réduit leur impact potentiel.

Ces enjeux freinent la capacité des petites collectivités à répondre aux défis de la transition écologique et à concrétiser des projets ambitieux.

# Solution
## Proposition de valeur initiale
VApp propose d’accompagner les petites collectivités dans la recherche et l’accès aux financements publics en s’appuyant sur l’IA générative. La plateforme permet :
- **De recommander les aides les plus pertinentes** : À partir des descriptions de projets en langage naturel (texte libre), VApp identifie les dispositifs d’aides les plus adaptés parmi ceux recensés sur [Aides-Territoires](https://beta.gouv.fr/startups/aides-territoires.html).
- **D’enrichir les projets pour optimiser leur éligibilité** : Grâce à des questions contextualisées générées par l’IA, VApp guide les utilisateurs pour préciser et structurer leur projet, augmentant ainsi leurs chances de répondre aux critères des aides disponibles.

En simplifiant et en optimisant ces étapes critiques, VApp permet aux collectivités de gagner du temps, de réduire les erreurs, et d’augmenter leurs chances de succès dans la mobilisation des financements publics.

Le produit peut également être utilisé par les chefs de projet Village d'avenir ou Petite Ville de Demain pour gagner du temps dans leur travail d'accompagnement des collectivités.

## Comment marche le service ?
1. L’utilisateur accède au site [https://vapp.beta.gouv.fr/](https://vapp.beta.gouv.fr/)
2. L’utilisateur décrit son projet et répond à quelques questions pour mieux filtrer sa recherche (territoire concerné, type de dispositifs recherchés…)
3. Il accède à une liste d’aides recommandées, associées à un score de compatibilité entre son projet et chaque dispositif d’aide.
4. En cliquant sur une aide, il est redirigé sur la page [Aides-territoires](https://beta.gouv.fr/startups/aides-territoires.html) de l’aide en question (AT étant la seule source intégrée pour le moment)
5. Il peut ensuite cliquer sur “Préciser mon projet”. L’IA lui propose alors 3 questions générées spécifiquement pour creuser l’éligibilité de son projet aux aides recommandées
6. L’IA génère une nouvelle description du projet de l’utilisateur, intégrant la description initiale qu’il en a faite et les réponses aux questions. Les scores de recommandation sont alors recalculés

## Pivot et passage en mode API
Suite au comité d’investissement que nous avons fait en décembre 2024, il a été acté que VApp continuerait son développement en s’intégrant à d’autres services, en leur fournissant une brique générique d’évaluation et de recommandations d’aides par IA, plutôt que d'être une plateforme autonome.

Les premiers services demandeurs étaient ceux de l’ANCT: [Aides-Territoires](https://beta.gouv.fr/startups/aides-territoires.html) et [Mon Espace Collectivité](https://beta.gouv.fr/startups/mon.espace.collectivite.html). L’intégration se serait faite dans le cadre du développement de l'écosystème des [Communs de la Transition Écologique des Collectivités](https://beta.gouv.fr/startups/communs-de-la-transition-ecologique-des-collectivites.html), projet porté par la DINUM et le SGPE.

La perspective de développement de VApp était alors de devenir un fournisseur de services IA par API à destination d’autres Startups d'État, en particulier autour de tous les sujets liés à la recherche, la demande et le traitement des subventions. Des prises de contact ont eu lieu avec [Plus Fraîche ma Ville](https://beta.gouv.fr/startups/plusfraichemaville.html), [Territoires en Transition](https://beta.gouv.fr/startups/territoires-en-transitions.html), [Aides-Agri](https://beta.gouv.fr/startups/plateforme-agriculteurs.html) ou [Aides simplifiées](https://beta.gouv.fr/startups/droit-data-gouv-fr-simulateurs-de-droits.html) pour recueillir des marques d’intérêt.

Plusieurs briques fonctionnelles auraient pu être envisagées dans le cadre d’un plan de développement pluriannuel :
- identification des bonnes aides pour chaque projet
- assistant intelligent pour décrire son projet, dans la perspective de faciliter l’identification des bonnes aides
- reformulation de projet pour le pré-remplissage de dossiers sur [Démarches Simplifiées](https://beta.gouv.fr/startups/demarches-simplifiees.fr.html)
pré-instruction de dossiers

Le projet s’est arrêté à ce moment-là, faute de financement et dans le contexte du départ de l’intrapreneur de la fonction publique.

# Startup d’État
## Chronologie
**Avril 2024 - début de l’investigation** : exploration de l’écosystème de services proches de VApp (AT, MEC), validation du problème autour de la recherche d’aides et de la construction de plan de financement.

**Juin 2024 - comité de mi-investigation** : Décision de se concentrer sur le sujet de recherche d’aides. Échanges préfigurant l'expérimentation en vue d'une éventuelle intégration de VApp au sein d’AT ou de MEC.

**Septembre 2024** : obtention de crédits pour serveurs IA.

**Octobre 2024** : recrutement d’un lead développeur web (en complément de notre intra qui était aussi notre développeur IA) ; mise en production de la plateforme et premiers tests utilisateurs.

**Décembre 2024 - Comité de fin d’investigation** : décision de la Fabrique Numérique et l’Incubateur des Territoires de prolonger le financement jusqu’à mi avril, avec des objectifs d’impact précis pour passer à la prochaine étape:  intégration à [Mon Espace Collectivité](https://beta.gouv.fr/startups/mon.espace.collectivite.html), et ouverture de la plateforme en beta-test auprès de premiers utilisateurs pour recueillir des retours qualitatifs.

**Janvier 2025** : Début de développement de l’API.

**Février 2025** : Décision de réaliser un A/B test au sein d’[Aides-Territoires](https://beta.gouv.fr/startups/aides-territoires.html) préalablement à une éventuelle intégration à [MEC](https://beta.gouv.fr/startups/mon.espace.collectivite.html). Ouverture de l’API. Annonce du départ de l’intrapreneur de la fonction publique. 

**Mars 2025** : sondage auprès de différents acteurs de l'écosystème pour identifier un éventuel repreneur ([Aides Simplifiées](https://beta.gouv.fr/startups/droit-data-gouv-fr-simulateurs-de-droits.html), [Incubateur des Territoires](https://beta.gouv.fr/incubateurs/anct), [ALLiaNCE](https://beta.gouv.fr/incubateurs/ALLiaNCE), [Albert API](https://beta.gouv.fr/startups/albert-api.html)) suite au départ de l’intrapreneur et évaluer l’intérêt de poursuivre le projet. **Décision de mettre fin à l’investigation**.

## Mesure de l’impact
Nous n’avons pas pu mener la mesure d’impact de façon satisfaisante.

En effet, le produit n’a été mis en production que fin octobre. De novembre à décembre, les tests utilisateur nous ont permis de rendre la plateforme efficace et stable en utilisation réelle, et d'affiner notre moteur d’évaluation des aides pour qu’il donne des recommandations pertinentes.

La mesure d’impact devait se faire sur le 1e trimestre 2025 grâce à un beta test : ouverture du produit à des beta testeurs (les 100 chefs de projet Villages d’Avenir au niveau national), recueil de leur feedback et questionnaire évaluant le temps gagné et les aides identifiées grâce à VApp.

L’annonce du départ de notre intrapreneur fin février a fortement fragilisé le projet et posé la question de sa pérennité. Fin mars, les résultats peu satisfaisants de l'A/B test, la fin des crédits et l'absence de sponsor pour les mois suivants ont justifié l'arrêt du service

### Intégration à Aides-territoire sous forme d’A/B Test
Nous avons conçu en partenariat avec l’équipe d’[Aides-Territoire](https://beta.gouv.fr/startups/aides-territoires.html) un A/B test préfigurant une intégration pérenne. L’A/B test visait à comparer la **pertinence des recommandations** générées par VApp à celles du moteur classique d’Aides-Territoires (AT). Deux branches ont été testées :
- Branche A (AT classique) : Accès à la recherche standard AT
- Branche B (intégration VApp) : Recommandations basées sur une description de projet et un scoring par VApp.

Nous n’avons pas pu conclure car le test s’est heurté à une contrainte de design : les cas d’usage de VApp et d’AT, en apparence proches, ne sont pas identiques. Selon l’équipe AT, 85% des recherches sur leur plateforme se font sans que l’utilisateur ait un projet précis en tête. A l’inverse, VApp est destiné à des collectivités qui veulent financer un projet précis. Le test a donc surtout montré que l’expérience de recherche d’aides proposée par VApp n’est pas adaptée à Aides-Territoires à l’heure actuelle. Il ne nous a pas permis de conclure sur la question de la pertinence des recommandations. 

Entre-temps, une solution alternative explorée par l'équipe des Communs a été testée et s’est avérée plus prometteuse que celle de VApp en termes de coûts et de temps de calcul.

# Apprentissages
### Pertinence de l’usage de l’IA pour du filtrage et de la recherche d’aides
Fin 2024, nous avons mené des tests auprès d’une quinzaine d’utilisateurs experts (des référents [Aides Territoires](https://beta.gouv.fr/startups/aides-territoires.html)) pour valider la pertinence de notre brique de recommandation. On peut affirmer formellement que OUI, l’intelligence artificielle permet d’identifier les similitudes entre un projet et une base d’aides, pour faire ressortir les aides les plus pertinentes.

### Apprentissage sur les façon d’utiliser l’IA générative pour ce cas d’usage
Notre V1 fonctionnait en envoyant 1 requête par aide analysée, avec un prompt de forme: 
```
Voici une aide: [aide]. Voici un projet: [projet]; évalue la pertinence de cette aide pour ce projet
```


Cette méthode comporte 3 avantages principaux :
- elle ne requiert pas de pré-traitement de la base de donnée d’aides, ce qui est adapté pour une API indépendante qui serait ouverte à plusieurs acteurs
- elle fonctionne immédiatement y compris sur une base de données restreinte, sans phase d’apprentissage nécessitant un corpus d’entraînement significatif
- La réponse de l’IA ne comporte que 2 token de sortie (les 2 chiffres du score de compatibilité, entre 0 et 99), limitant les coûts d’usage de l’API

En revanche, les coûts et les temps de calcul augmentent de façon linéaire avec le nombre d’aides à analyser.

Une approche alternative et beaucoup plus frugale imaginée par l’équipe des [Communs](https://beta.gouv.fr/startups/communs-de-la-transition-ecologique-des-collectivites.html) s’est avérée plus pertinente:

Aides-territoires, grâce à son expérience, avait identifié 47 typologies de projets de collectivité. La nouvelle approche consiste à utiliser l’IA pour catégoriser des aides en masse en leur associant un ou plusieurs « projets référents ». Cette catégorisation n’a lieu qu’une fois pour chaque aide. Par la suite, quand un utilisateur décrit son projet pour faire une recherche, il suffit d’associer son projet à un ou plusieurs projets types et de montrer les aides correspondant à ces projets référents. Une requête IA catégorisant un projet précis par rapport aux projets référents est environ 1000x plus rapide et moins coûteuse, que de comparer le projet à chaque aide individuellement.


### Appétence des utilisateurs pour une aide à la description des projets
Les utilisateur avaient souvent un “effet waouh” en utilisant la fonctionnalité “préciser mon projet” et en voyant l’IA reformuler leur projet.

Nous pensons qu’un assistant intelligent, qui irait questionner l’utilisateur sur son projet, puis génèrerait une description exhaustive selon une trame prédéfinie, ferait gagner beaucoup de temps et serait plébiscité par les utilisateurs.

Cela pourrait également servir un autre cas d’usage : le pré-remplissage des dossiers sur Démarches Simplifiée (chaque dossier de demande subvention n’étant qu’une reformulation du projet selon une trame et des exigences spécifiques.

### Usage d’Albert API
Une équipe qui voudrait ré-explorer ce type de projet pourrait aujourd’hui expérimenter beaucoup plus vite grâce à Albert API.

En effet, par souci de confidentialité et de souveraineté numérique, nous n’avons pas souhaité utiliser les API propriétaires d’OpenAI ou de ses concurrents, et nous avons privilégié d’internaliser la partie infrastructure en montant et en gérant nos propres serveurs IA sur Scaleway. Aujourd’hui, un projet qui utiliserait Albert API pourrait redémarrer et itérer beaucoup plus vite en ne faisant que du prompt engineering et de la préparation de données.

# Contacts
Si vous êtes agent de l’État et que vous vous intéressez à ce sujet, écrivez un email à
Eglantine Schmitt ([eglantine.schmitt@developpement-durable.gouv.fr](mailto:eglantine.schmitt@developpement-durable.gouv.fr)), responsable de portefeuille au sein de la [Fabrique du Numérique de l'Ecologie (MTE- MCT)](https://beta.gouv.fr/incubateurs/mtes)

# Remerciements ✌️
Merci à toutes celles et ceux qui ont participé à cette aventure.

Nos beta-testeurs, référents Aides Territoire ou chefs de projet Village d’avenir, en particulier Romain, Jean-Baptiste, Emilie, Julie, Michel, Loïc, Juliette et Cécile.

Nos collègues d’autres Startups d'État avec qui nous avons travaillé main dans ma main pendant plusieurs mois :
- chez Aides-Territoires : Elise, Céline, Alexia et Rémi
- chez Mon Espace Collectivités : Stéphane et Matthieu
- Aux Communs de la transition écologique (DINUM/SGPE) : Jean et Mathieu

Merci aux équipes de la [Fabrique Numérique](https://beta.gouv.fr/incubateurs/mtes), de l’[Incubateur des Territoires (ANCT)](https://beta.gouv.fr/incubateurs/anct) et de la [DINUM](https://beta.gouv.fr/incubateurs/dinum) pour leur accompagnement et leur soutien bienveillant: Samuel Goldszmidt, Eglantine Schmitt, Alexis Boudard, Adrien Zemour et Jean Perret.

Merci à Ian d’avoir initié le projet, Louis pour son accompagnement et Johan d’avoir construit le produit pour qu’on puisse le mettre entre les mains de nos utilisateurs.

## À propos
VApp est portée par [La Fabrique Numérique de l'Ecologie (MTE-MCT)](https://beta.gouv.fr/incubateurs/mtes).
Ce service numérique est sponsorisé par le Ministère de la Transition Écologique et l’ANCT.

