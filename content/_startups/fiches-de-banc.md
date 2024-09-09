---
title: Fiches de banc
mission: Augmenter la productivité du traitement des amendements dans les cabinets ministériels
sponsors:
  - /organisations/dinum
incubator: dinum
events:
  - name: end
    date: 2016-09-30
phases:
  - name: investigation
    start: 2015-01-12
  - name: construction
    start: 2015-01-12
  - name: alumni
    start: 2016-01-09
usertypes:
  - etat
repository: https://github.com/betagouv/fiches-de-banc
stats: false
contact: contact@beta.gouv.fr
---
Une application web permettant d'émettre des avis sur les amendements déposés à l'Assemblée Nationale, et de répartir les réponses parmi plusieurs collaborateurs.

Ces réponses sont appelées « fiches de banc », du nom des fiches que les représentants du gouvernement utilisent comme support pour les présenter aux députés.


Abandon
-------

_Le certificat ayant expiré, le service n'est plus en ligne._

Cette Startup a été abandonnée en septembre 2016.

La raison en est que la temporalité de construction est incompatible avec les besoins des utilisateurs.

En effet, un cabinet ministériel se préoccupe d'améliorer les outils lui permettant de rédiger des fiches de banc lorsqu'il fait face à un projet de loi générant une quantité inhabituellement élevée d'amendements. Dans ce cas, il est par définition très peu disponible. Le travail nocturne, voire intérimaire, n'est pas inhabituel dans ces situations. La disponibilité pour co-construire un nouvel outil est donc extrêmement réduite.

Cette faible disponibilité est combinée à un enjeu démesuré : si le projet de loi nécessitant la rédaction de fiches de banc a généré autant d'amendements, c'est qu'il a une forte visibilité politique. Une incertitude sur le traitement est donc inacceptable, et les utilisateurs veulent par sécurité conserver leur processus habituel, très coûteux mais éprouvé. Cela leur rend inacceptable l'investissement supplémentaire, même s'il est plus faible, dans un nouvel outil.

Nous avons ainsi été sollicités à trois reprises dans ce genre de cas, et n'avons jamais réussi à obtenir une utilisation réelle au-delà des premiers tests, alors même qu'ils étaient très satisfaisants.

L'alternative consisterait à mobiliser les utilisateurs sur un projet de loi à faible impact et faible visibilité. Néanmoins, dans ce cas, les processus habituels sont effectifs, et le surcoût que représenterait l'investissement dans un nouvel outil est considéré comme inutile. Nous avons tenté à deux reprises cette démarche, mais n'avons pas obtenu d'engagement des cabinets démarchés.

Une Startup d'État, qui construit _avec_ ses utilisateurs, ne semble donc pas adaptée au problème visé.

Le [code](https://github.com/betagouv/fiches-de-banc) reste libre et ouvert, et toute reprise du produit, sur la base du code en question ou en s'inspirant de l'expérience utilisateur proposée, est la bienvenue.


Usage
-----

Le processus de base est le suivant : en m’identifiant comme conseiller, j’ai un accès direct aux fiches de banc que je dois rédiger. Un compteur m’indique en permanence celles qu’il me reste à traiter, et je peux donc consulter l’application à mon rythme.

En tant qu’assistant, je peux également attribuer des fiches à des conseillers. Tout conseiller peut réattribuer ses fiches s’il connaît un conseiller plus à même de traiter l’amendement.

À tout moment, je peux utiliser le champ de recherche pour lister les fiches de banc associées à un article (« 23 ») ou à d’autres éléments du projet de loi (« titre », « chapitre IV »…). Un compteur m’indique le nombre de fiches restant à rédiger.

Je peux dès lors imprimer les fiches rédigées parmi la liste affichée en cliquant sur « imprimer ». Cette liste conservera toujours l’ordre d’examen de l’Assemblée, ce qui évite les innombrables réordonnancements des liasses.

Enfin, en cliquant sur le numéro d’un amendement, j’accède à une vue numérique de la fiche de banc. Cette vue numérique pourrait être utilisée par un ministre depuis une tablette. Toute modification étant répercutée en temps réel, il devient possible de modifier des éléments de langage dix minutes avant la discussion de l’amendement sans devoir courir pour déplacer du papier.
