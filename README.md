maperitive-presentation
=======================

Presentation slides on generating custom maps with Maperitive.


1. set-geo-bounds
-----------------

	http://boundingbox.klokantech.com/
	103.406067,1.090327,104.246521,1.607913

	http://www.openstreetmap.org/export

	set-geo-bounds 103.406067,1.090327,104.246521,1.607913
	zoom-bounds


2. export-bitmap / export-svg
-----------------------------

	export-bitmap zoom=12

	output folder
		- output.png
		- output.png.georef

	export-svg zoom=12 compatibility=Illustrator


3. edit exported map image
--------------------------

	ensure it sticks to the original size of image provided


4. load-image
-------------

	if `map.png` ensure `output.png.georef` is copied and renamed to `map.png.georef`

	load-image file=output/map.png background=false


5. generate-tiles
-----------------

	generate-tiles minzoom=11 maxzoom=12 bounds=103.406067,1.090327,104.246521,1.607913

	saved to: `Maperitive/Tiles/`


6. hosting and using tiles with map plugins
-------------------------------------------

	/tiles/{z}/{x}/{y}.png


7. considerations and limitations
---------------------------------

	- By setting bounding box, map view needs to be locked since trying to load a tile that is out of the bounding area will cause a 404 since the tile image is not present.

