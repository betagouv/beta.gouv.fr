---
layout: startups
title: Le portefeuille de Startups d'État
permalink: /startups
additional_css:
  - side-panel.css
  - grid.css
redirect_from:
  - /portefeuille
  - /startup
---

{% assign death_counter = site.startups | where:'status', 'death' | size %}
{% assign consolidation_counter = site.startups | where:'status', 'consolidation' | size %}
{% assign endgame_counter = consolidation_counter | plus:death_counter %}

Une Startup d'État est un service public sans personnalité juridique propre, constituée d’une petite équipe totalement autonome.  
Elle est financée par une administration porteuse qui lui garantit un espace de liberté pour innover.  
Elle naît de l’identification d’un problème rencontré par les citoyens comme par les agents publics, qu’elle se donne pour objectif de résoudre grâce à un service numérique.

**{{ site.startups | size }}** Startups d’État incubées dans **{{ site.incubators | size }}** incubateurs, **{{ endgame_counter }}** sorties d’incubation, dont **{{ death_counter }}** abandonnées&#42;.  
*(&#42;) Le produit est peut-être encore actif, mais l’équipe qui l’opère n’obéit plus au [manifeste](/incubateurs/).*
