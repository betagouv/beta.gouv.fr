---
layout: default
permalink: /stats/
title: Indicateurs de beta.gouv.fr
additional_js:
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.min.js
  - https://unpkg.com/jquery@2.2.2/dist/jquery.min.js
  - stats.js
---

<section class="hero-section">
  <div class="fr-container fr-py-5w">
    <div class="fr-grid-row">
      <div class="fr-col-md-8">
        <h1 class="fr-mb-3w">Indicateurs d’impact</h1>
        <p>Le programme beta.gouv.fr rend compte de ses résultats publiquement. Certains de ces indicateurs sont notamment <b>suivis par le Parlement</b>, lors du vote du budget annuel.</p>
      </div>
      <div class="fr-col-md-4">
        <img class="fr-responsive-img" alt="" src="/assets/images/fast-home.svg" style="max-width: 200px" />
      </div>
    </div>
  </div>
</section>

<div class="fr-container fr-pb-6w fr-pt-6w">
  <div class="fr-grid-row fr-grid-row--gutters fr-b__two-col">
    <!-- Menu -->
    <div class="fr-col-12 fr-col-md-4">
      {% include sidebar-stats.html %}
    </div>
    <!-- Content -->
    <div class="fr-col-12 fr-col-md-8">
      <h2 class="fr-mt-4w" id="snin">Produits à impact national</h2>
      <p>
      L'objectif principal du programme beta.gouv.fr est de :
      </p>
      <ul>
      <li><b>construire des services numériques</b> de grande qualité,</li>
      <li>qui <b>résolvent réellement les problème</b> des citoyennes et des citoyens,</li>
      <li>en ayant un <b>impact direct sur leur vie quotidienne</b>.</li>
      </ul>
      <p>Chaque année, nous dénombrons les services conçus dans le programme beta.gouv.fr ayant atteint un <a href="https://doc.incubateur.net/communaute/gerer-sa-startup-detat-ou-de-territoires-au-quotidien/la-vie-dune-se/acceleration/services-numeriques-a-impact-national">impact national</a>.</p>
      <p><a href="/startups/?national_impact=true" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Voir nos produits à impact national</a></p>
      <iframe
        src="https://metabase.incubateur.net/public/question/1c26341f-431f-4848-9934-dde55d5059ca#titled=false"
        class="graph h300" 
        title="Statistiques des produits à impact national (description détaillée disponible ci-après)"
      ></iframe>
      {%- capture alt -%}
      Ce diagramme en barres présente le nombre de produits ayant atteint l'impact national depuis 2013. En 2023, nous avons surpassé notre objectif de 5 nouveaux produits atteignant l'impact national : 6 produits ont atteint ce niveau.
      {%- endcapture -%}
      {% include transcription.html id="snin" title="Produits à impact national" alt=alt %}
      <h2 class="fr-mt-4w" id="launching">Nombre de produits lancés par an</h2>
      <p>Cet indicateur suit le <b>nombre de nouveaux produits</b> ayant commencé une <b>phase de construction</b>, toutes administrations publiques confondues. Il donne une indication sur l'<b>évolution de la diffusion de l'approche Startups d'État</b> au sein du secteur public.
      </p>
      <p><a href="/startups/#construction" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Voir les produits actuellement en construction</a></p>
      <iframe
      src="https://metabase.incubateur.net/public/question/054af3b2-4f34-447f-8b16-211738932cfe#titled=false"
      class="graph h300" 
      title="Statistiques des produits lancés chaque année (description détaillée disponible ci-après)"
      ></iframe>
      {%- capture alt -%}
      Ce diagramme en barres présente le nombre de produits lancés. Il est en évolution constante. Depuis 2020, nous atteignons quasiment notre objectif de 50 nouveaux produits par an.
      {%- endcapture -%}
      {% include transcription.html id="launch-per-year" title="Nombre de produits lancés par an" alt=alt %}
      <h2 class="fr-mt-4w" id="standards-qualite">Respect des standards de qualité</h2>
      <p>beta.gouv.fr tente d'améliorer la qualité des services numériques publics pour garantir aux citoyennes, citoyens et agents publics des solutions <b>sobres, ouvertes, accessibles, protectrices, sécurisées</b>. Pour cela, beta.gouv.fr a fixé un certain nombre de <b>standards de qualité</b> dont certains sont suivis ci-dessous.</p>
      <div class="fr-mb-8w">
          <p>Conformément à la <a href="https://www.legifrance.gouv.fr/affichLoiPubliee.do?idDocument=JORFDOLE000031589829&type=general&legislature=14">Loi pour une République Numérique du 7 octobre 2016</a>, les <b>codes sources de services numériques publics</b> sont des documents administratifs communicables et réutilisables. Ils doivent donc être <b>ouverts</b>.
          </p>
          <p><a href="/startups/" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Retrouver le code source d'un produit</a>
          </p>
          <iframe
            src="https://metabase.incubateur.net/public/question/28f3f460-9a96-4b89-b1dd-7b130b1fbd35#titled=false"
            class="graph h300" 
            title="Statistiques d'ouverture du code source (description détaillée disponible ci-après)"
            ></iframe>
            {%- capture alt -%}
            Ce diagramme en barres indique le taux d'ouverture des codes sources selon la phase de vie d'un projet. Plus de 80 % des services en accélération, transfert et pérénisation ouvrent leur code source (contre environ 50 % au stade de construction).
            {%- endcapture -%}
            {% include transcription.html id="open-source" title="Ouverture des codes sources" alt=alt %}
      </div>
      <div class="fr-mb-8w">
          <p>
          Chaque service numérique du réseau beta.gouv.fr est tenu de mesurer son usage et son impact de manière publique sur une <b>page "Stats"</b>. Cette mesure permet d'<b>évaluer la pertinence de chaque service</b>, et de vérifier qu'elle apporte réellement de la valeur à ses utilisateurs et utilisatrices.
          </p>
          <p><a href="/startups/" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Retrouver les statistiques d'usage d'un produit</a></p>
          <iframe
              src="https://metabase.incubateur.net/public/question/7576aeaa-5782-46c3-859d-313bfa3036bd#titled=false"
              class="graph h300" 
              title="Statistiques de taux de publication de pages Statistiques (description détaillée disponible ci-après)"
          ></iframe>
          {%- capture alt -%}
            Ce diagramme en barres indique le taux de publication de la mesure d'impact d'un produit, selon sa phase de vie. Ce taux atteint les 75 % pour les produits en phase d'accélération.
          {%- endcapture -%}
          {% include transcription.html id="stats" title="Publication de la mesure d'impact" alt=alt %}
      </div>
      <div class="fr-mb-8w">
          <p><a href="https://dashlord.incubateur.net/">Dashlord</a> est un outil de suivi des bonnes pratiques. Il permet aux équipes produits d'identifier automatiquement certaines métriques (tests automatiques d'accessibilité, problèmes de sécurité, etc).</p>
          <p><a href="https://dashlord.incubateur.net/" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Explorer les données</a></p>
          <iframe
              src="https://metabase.incubateur.net/public/question/829e18f8-92fb-4dcf-928c-3838aa94093e#titled=false"
              class="graph h300" 
              title="Statistiques de présence sur l'outil Dashlord (description détaillée disponible ci-après)"
          ></iframe>
          {%- capture alt -%}
            Ce diagramme en barres indique le nombre de produits suivant leurs bonnes pratiques sur Dashlord, selon leur phase de vie. Ce taux atteint les 60 % pour les produits en phase d'accélération.
          {%- endcapture -%}
          {% include transcription.html id="dashlord" title="Statistiques de présence sur l'outil Dashlord" alt=alt %}
      </div>
      <div class="fr-mb-4w">
          <p>L'accessibilité numérique est une obligation pour les services publics. Elle se mesure via un <b>audit de conformité</b>, quand le <b>produit est stabilisé</b>.</p>
          <p>C'est pourquoi nos produits numériques en construction ou en accélération sont rarement conformes à ce stade de vie : ils évoluent trop pour qu'un audit soit pertinent (l'accessibilité numérique est à ce stade prise en compte via d'autres moyens).</p>
          <iframe
              src="https://metabase.incubateur.net/public/question/749b136a-a181-4510-bf1c-11807ca1a799#titled=false"
              class="graph h300" 
              title="Statistiques de conformité en accessibilité numérique des produits (description détaillée disponible ci-après)"
          ></iframe>
          {%- capture alt -%}
            Ce diagramme en barres indique le statut de conformité (non conforme, partiellement conforme ou non renseigné) des produits, selon leur phase de vie. Le nombre de produits non audités réduit en phase de pérénisation. 
          {%- endcapture -%}
          {% include transcription.html id="conformite-rgaa" title="Statistiques de conformité en accessibilité numérique des produits" alt=alt %}
      </div>
      <h2 class="fr-mt-4w" id="administration">Montée en compétence de l'administration</h2>
      <p>beta.gouv.fr souhaite faire <b>monter l'administration en compétence</b>, en formant des agents publics, par la pratique, à la construction de services publics numériques à impact et de qualité.</p>
      <p>Cet indicateur compte, par an, les nouveaux agents (intrapreneurs, équipes d'animation et de pilotage d'incubateurs, développeuses, développeurs, etc) impliqués dans le réseau beta.gouv.fr.</p>
      <p><a href="/communaute/" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Explorer la communauté</a></p>
      <iframe
          src="https://metabase.incubateur.net/public/question/c2508867-50b4-469e-8b1e-5e7771f5f21e#titled=false"
          class="graph h300" 
          title="Statistiques sur les nouveaux membres, par année (description détaillée disponible ci-après)"
      ></iframe>
      {%- capture alt -%}
        Ce diagramme en barres indique le nombre de nouveaux membres (prestataires, indépendants ou agents publics) pour chaque année. Depuis 2021, au moins 300 prestataires et 150 agents publics nous rejoignent chaque année. 
      {%- endcapture -%}
      {% include transcription.html id="nouveaux-membres" title="Statistiques sur les nouveaux membres, par année" alt=alt %}
      <h2 class="fr-mt-4w" id="network">Réseau d'incubateur</h2>
      <p>Depuis 2017, beta.gouv.fr accompagne les administrations publique dans la création de leur propre structure d'incubation et d'exploitation de produits numériques.</p>
      <iframe
          src="https://metabase.incubateur.net/public/question/d0cc3f86-14d6-4345-9748-0b1724586d18#titled=false"
          class="graph h800" 
          title="Statistiques sur les incubateurs du réseau, par phase (description détaillée disponible ci-après)"
      ></iframe>
      {%- capture alt -%}
        Ce diagramme en barres indique le nombre de produits pour chaque incubateur. Cela varie de 1 ou 2 produits pour les petits incubateurs à presque une cinquantaine pour les plus gros. 
      {%- endcapture -%}
      {% include transcription.html id="produits-incubateurs" title="Statistiques sur les incubateurs du réseau, par phase" alt=alt %}
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-md-6 fr-col-sm-6 fr-col-lg-6">
          <iframe
            src="https://metabase.incubateur.net/public/question/49816481-f68d-424e-b36e-0cbedda942fd#titled=false"
            class="graph h300" 
            title="Statistiques sur les produits lancés en 2022 par incubateur (description détaillée disponible ci-après)"
          ></iframe>
          {%- capture alt -%}
            Ce diagramme en barres indique le nombre de produits lancés dans chaque incubateur en 2022.
          {%- endcapture -%}
          {% include transcription.html id="produits-incubateurs-2022" title="Statistiques sur les produits lancés en 2022 par incubateur" alt=alt %}
        </div>
        <div class="fr-col-md-6 fr-col-sm-6 fr-col-lg-6">
          <iframe
            src="https://metabase.incubateur.net/public/question/70eaff77-fcdf-4c84-8733-54b58226b16c#titled=false"
            class="graph h300" 
            title="Statistiques sur les produits lancés en 2023 par incubateur (description détaillée disponible ci-après)"
          ></iframe>
          {%- capture alt -%}
            Ce diagramme en barres indique le nombre de produits lancés dans chaque incubateur en 2023.
          {%- endcapture -%}
          {% include transcription.html id="produits-incubateurs-2023" title="Statistiques sur les produits lancés en 2023 par incubateur" alt=alt %}
        </div>
      </div>
      <p><a href="/incubateurs/" class="fr-link fr-link--icon-right fr-icon-arrow-right-line">Voir tous les incubateurs</a></p>
    </div>
  </div>
</div>
