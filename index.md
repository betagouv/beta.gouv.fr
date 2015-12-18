---
layout: default
---

<header>
	<h1>{{ site.title }}</h1>
	<div id="missionStatement">{{ site.description }}</div>
</header>

<main>
	<h1>Nous avons permis…</h1>
	{% for startup in site.startups %}
		{% include startup.html description=startup %}
	{% endfor %}
</main>
