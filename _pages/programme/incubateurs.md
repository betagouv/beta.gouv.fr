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
- Ils s’imposent à eux-mêmes la [méthode "itérative et incrémentale"](http://romy.tetue.net/mona-lisa-agile#:~:text=Le%20d%C3%A9veloppement%20it%C3%A9ratif%20%2C%20introduit%20par,successives%2C%20chacune%20am%C3%A9liorant%20la%20qualit%C3%A9.&text=Dans%20un%20processus%20agile%2C%20l,cela%20permet%20d'innover%20constamment) qu’ils promeuvent, c'est-à-dire : leur objectif initial est de lancer le plus rapidement possible un premier service numérique puis d’améliorer en continu leurs méthodes, leurs produits et les compétences de leurs membres, quitte à tout ne soit pas parfait dès le début. Dans leur portefeuille, rien n’est en maintenance, tout est soit en vie, soit stoppé.
- Une autonomie maximale est concédée aux équipes, pilotées uniquement par leurs objectifs d’impact et non par leurs moyens. 

<div class="grid">
  {%- for incubator in site.incubators -%} 
    {% include card-incubator.html incubator = incubator %} 
  {%- endfor -%}
</div>
