Reveal.initialize({
	controls: true
, progress: true
, history: true
, center: true
, theme: Reveal.getQueryHash().theme
, transition: Reveal.getQueryHash().transition || 'concave' // default/cube/page/concave/zoom/linear/fade/none
, backgroundTransition: 'slide'

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
	$(".fancybox-url")
		.attr('rel', 'gallery')
		.fancybox({
			type: 'iframe'
		, autoSize : false
		});


	$('#map-run').click(function(e) {
		e.preventDefault();
		// create bounds
		var bounds = new L.LatLngBounds(
		  new L.LatLng(1.090327, 103.406067)
		, new L.LatLng(1.607913, 104.246521)
		);

		// create a map in the "map" div, set the view to a given place and zoom
		var map = L.map('map', {
			"center" : [1.335, 103.820]
		, "zoom" : 11
		, "minZoom" : 11
		, "maxZoom" : 12
		, "maxBounds" : bounds
		});

		// add an OpenStreetMap tile layer
		L.tileLayer('assets/tiles/{z}/{x}/{y}.png', {
//			L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		  attribution: "Calvin's custom map design"
		, minZoom: 11
		, maxZoom: 12
		}).addTo(map);
	});
});