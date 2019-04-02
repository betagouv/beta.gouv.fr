---
layout: page
permalink: /test/
title: Test
---

{% for startup in site.startups %}
  {% assign startup_id = startup.id | remove: "/startups/" %}
  {% assign startup_name = startup.title %}
  \- \{ label: "{{ startup_name }}", value: "{{ startup_id }}" \}
{% endfor %}
