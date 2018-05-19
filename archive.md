---
layout: page
title: Archives
---
<div id="blog-archives">

	{% for post in site.posts %}
		<article class="post">
			{% if post.external-url %}
				<h6>
					<a href="{{ post.external-url }}">{{ post.date |  date: "%B %e, %Y"}} {{ post.title }}</a> 
					<a class="anchor" href="{{ post.url }}"><i class="icon-anchor"></i></a>
				</h6>
			{% else %}
				<h6><a href="{{ post.url }}">{{ post.date |  date: "%B %e, %Y" }} {{ post.title }}</a></h6>
			{% endif %}
		</article>
	{% endfor %}

</div>
