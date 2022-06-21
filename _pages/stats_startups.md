---
layout: page
permalink: /stats_startups/
title: Indicateurs techniques des fiches de Startup d'État
additional_js:
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.bundle.min.js
  - https://unpkg.com/jquery@2.2.2/dist/jquery.min.js
  - stats_se.js
---

## Startups d'état publiant leur budget

<div class="canvas-wrapper"><canvas id="budget_url"></canvas></div>

## Startups d'état publiant leur statistiques d'usage

<div class="canvas-wrapper"><canvas id="stats_url"></canvas></div>

## Startups d'état publiant leur suivi des bonnes pratiques

<div class="canvas-wrapper"><canvas id="dashlord_url"></canvas></div>

## Startups ayant réalisé leur analyse des risques

<div class="canvas-wrapper"><canvas id="analyse_risques"></canvas></div>

## Startups ayant réalisé leur évaluation d'accessibilité

<div class="canvas-wrapper"><canvas id="accessibility_status"></canvas></div>

<style>
.canvas-wrapper {
  height: 300px;
}
</style>
