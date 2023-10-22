---
title: 'Assessment Forms'
excerpt: 'Assessment Forms'
---

<ul>

{% for form in collections.assessment_forms %}

<li>
  <a href="{{ form.url }}">
    {{ form.data.title }}
  </a>
</li>

{% endfor %}

</ul>
