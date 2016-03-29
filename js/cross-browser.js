if (! Modernizr.flexwrap) {
	// Semantic UI implements grid row breaks with flex-wrap, and breaks if browser doesn't support it
	// see https://github.com/sgmap/beta.gouv.fr/issues/78
	Array.prototype.forEach.call(document.querySelectorAll('.grid'), function(grid) {
		grid.className = grid.className.replace('grid', '');
	});
}
