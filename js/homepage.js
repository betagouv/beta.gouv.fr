$(function initHomepage() {
	var currentIndex = 0,
		total = $('#masthead .card').length;

	function selectorForIndex(index) {
		index %= total;
		return '#masthead .card:nth-child(' + (index + 1) + ')';
	}

	function showExample(event) {
		$(selectorForIndex(currentIndex) + ',' + selectorForIndex(currentIndex + 1))
			.transition('fade right');

		currentIndex++;
	}


	$('#masthead .card').transition('hide');
	$(selectorForIndex(currentIndex)).transition('browse');

	document.getElementById('otherExample').addEventListener('click', showExample);
});
