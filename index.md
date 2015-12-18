---
layout: default
---

<header>
	<h1>{{ site.title }}</h1>
	<div id="missionStatement">{{ site.description }}</div>
</header>

<ul>
	{% for startup in site.startups %}
		<li>{{ startup.title }}</li>
	{% endfor %}
</ul>
