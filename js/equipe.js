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

	points.push({
		x: buildDate,
		y: 0
	});

	var currentTotal = 0,
		todayIndex;

	points.sort(function(first, second) {
		if (first.x == second.x) return 0;
		return first.x < second.x ? -1 : 1;
	});

	points.some(function(point, index) {
		todayIndex = index;
		return point.x == buildDate;
	});

	points = points.map(function(point) {
		currentTotal += point.y;
		return {
			x: point.x,
			y: currentTotal
		};
	});

	var future = points.splice(todayIndex);

	new Chart(document.querySelector('canvas'), {
		type: 'line',
		data: {
			datasets: [{
				label: 'Membres ',
				data: points,
				lineTension: 0,
				pointRadius: 0,
				backgroundColor: 'rgba(100, 100, 200, .6)'
			}, {
				label: 'Présence future garantie au ' + moment(buildDate).format('DD/MM/YYYY'),
				data: future,
				pointRadius: 0
			}]
		},
		options: {
			animation: {
				duration: 0
			},
			scales: {
				xAxes: [{
					type: 'time',
					time: {
						unit: 'quarter'
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
