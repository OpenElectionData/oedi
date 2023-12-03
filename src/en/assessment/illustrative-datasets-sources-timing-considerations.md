---
title: 'Illustrative Datasets, Sources, and Timing Considerations for Open Election Data'
excerpt: 'Examples of datasets, sources, and timing considerations'
---

**[Download as PDF ![]({{ site.url }}/\_assets/images/assessment/supplemental_icon.svg)]({{ site.url }}/\_assets/assessment/Illustrative_Datasets.pdf)**

{% for row in assessment.supplemental.items %}

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

{% if not loop.last %}<hr />{% endif %}

{% endfor %}
