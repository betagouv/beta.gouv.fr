---
layout: default
---

<header>
	<h1>{{ site.title }}</h1>
	<div id="missionStatement">{{ site.description }}</div>
</header>

<h2>Nous avons actuellement…</h2>

<section>
	<ol id="counters">
		{% for phase in site.phases %}
			<li class="counter {{ phase[0] }}">
				<span class="counter--count">{{ site.startups | where:'status',phase[0] | size }}</span>
				<i>produits en</i>
				<span class="counter--name">{{ phase[1] }}</span>
			</li>
		{% endfor %}
	</ol>
</section>

<main>
	{% for startup in site.startups %}
		{% include startup.html description=startup %}
	{% endfor %}
</main>
