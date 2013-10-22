Reveal.initialize({
	controls: true
, progress: true
, history: true
, center: true
, theme: Reveal.getQueryHash().theme
, transition: Reveal.getQueryHash().transition || 'concave' // default/cube/page/concave/zoom/linear/fade/none
, backgroundTransition: 'slide'

, width: '90%'
, height: '90%'

	// Optional libraries used to extend on reveal.js
, dependencies: [
		{ src: 'assets/lib/js/classList.js', condition: function() { return !document.body.classList; } }
	, { src: 'assets/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } }
	, { src: 'assets/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } }
	, { src: 'assets/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
	, { src: 'assets/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } }
	, { src: 'assets/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});

$(document).ready(function() {
	$(".fancybox").fancybox();
});