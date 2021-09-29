---
title: 'Illustrative Datasets, Sources, and Timing Considerations for Open Election Data'
lang: en
module_id: 7
permalink: '/assessment/supplementary/'
excerpt: 'Description here'
---

{% for row in site.data.assessment_supplemental %}

<h2>{{ row.process }}</h2>

<div class="forms-grid">

<div>

<h3>Possible Data Sets</h3>
<ul>
{% for item in row.datasets %}
<li>{{ item }}</li>
{% endfor %}
</ul>
</div>
<div>

<h3>Likely Data Source(s)</h3>
<ul>
{% for item in row.datasources %}
<li>{{ item }}</li>
{% endfor %}
</ul>
</div>
<div class="forms-grid__col-2">

<h3>Timing considerations</h3>

<p>{{ row.timing }}</p>

</div></div>

{% unless forloop.last %}<hr />{% endunless %}

{% endfor %}
