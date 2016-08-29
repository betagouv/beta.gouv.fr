$(function drawTeamGraph() {
	var points = [];

	starts.forEach(function(date) {
		if (! date) return;

		points.push({
			x: date,
			y: 1
		});
	});

	ends.forEach(function(date) {
		if (! date) return;

		points.push({
			x: date,
			y: -1
		});
	});

	var currentTotal = 0;

	points = points.sort(function(first, second) {
		if (first.x == second.x) return 0;
		return first.x < second.x ? -1 : 1;
	}).map(function(point) {
		currentTotal += point.y;
		return {
			x: point.x,
			y: currentTotal
		};
	});

	new Chart(document.querySelector('canvas'), {
		type: 'line',
		data: {
			labels: [ 'Effectif' ],
			datasets: [{
				label: 'Effectif',
				data: points
			}],
			borderWidth: 10
		},
		options: {
			scales: {
				xAxes: [{
					type: 'time',
					time: {
						unit: 'month'
					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
});
