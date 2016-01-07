---
title: Réalisations
---
<h2>Nous avons actuellement…</h2>

<section id="dashboard">
	<ol class="counter--incubation">
		{% for phase in site.phases.incubation %}
			<li class="counter {{ phase[0] }}">
				<span class="counter--count">{{ site.startups | where:'status',phase[0] | size }}</span>
				<i>produits en</i>
				<span title="{{ phase[1].description }}" class="tooltip counter--name">{{ phase[1].name }}</span>
			</li>
		{% endfor %}

		<li>
			<ul class="counter--endgame">
				{% for phase in site.phases.endgame %}
					<li class="counter {{ phase[0] }}">
						<span class="counter--count">{{ site.startups | where:'status',phase[0] | size }}</span>
						<i>produits en</i>
						<span title="{{ phase[1].description }}" class="tooltip counter--name">{{ phase[1].name }}</span>
					</li>
				{% endfor %}
			</ul>
		</li>
	</ol>
</section>

<main>
	{% for startup in site.startups %}
		{% include startup.html description=startup %}
	{% endfor %}
</main>
