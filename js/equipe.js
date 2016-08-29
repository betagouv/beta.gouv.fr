$(function drawTeamGraph() {
	var  points = [];

	starts.sort().forEach(function(date) {
		points.push({
			x: date,
			y: 1
		});
	});

	ends.sort().forEach(function(date) {
		points.push({
			x: date,
			y: -1
		});
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
