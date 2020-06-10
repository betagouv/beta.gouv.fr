---
layout: with-sidebar
sidebar: sidebar-approche.html
title: Incubateurs
permalink: /approche/incubateurs
additional_css:
  - side-panel.css
---

beta.gouv.fr anime un **réseau d'incubateurs** dans les ministères et autres structures publiques. Ces espaces accueillent des équipes qui travaillent selon [notre manifeste](https://beta.gouv.fr/approche/manifeste). En particulier : 
- Ils ciblent leurs investissements sur des sujets qui en valent la peine, c’est-à-dire où existe un réel problème touchant des milliers ou des millions de personnes ;
- Ils s’imposent à eux-mêmes la méthode frugale et incrémentale qu’ils promeuvent. En particulier, leur objectif initial est de lancer le plus rapidement possible un premier service numérique puis d’améliorer en continu leurs méthodes, leurs produits et les compétences de leurs membres. Dans leur portefeuille, rien n’est en maintenance, tout est soit en vie, soit stoppé.
- Une autonomie maximale est concédée aux équipes, pilotées uniquement par leurs objectifs d’impact et non par leurs moyens. 

<div class="grid">
  {%- for incubator in site.incubators -%} 
    {% include card-incubator.html incubator = incubator %} 
  {%- endfor -%}
</div>
