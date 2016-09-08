$(function() {

var datasets = {};
Object.keys(window.data).forEach(function(employerType) {
	datasets[employerType] = makeTimeSeries(window.data[employerType], window.buildDate);
});

new Chart(document.querySelector('canvas'), {
	type: 'line',
	data: {
		datasets: [{
			data: datasets.dinsic.past,
			label: 'Agents DINSIC ',  // trailing space to ensure legend complies with French typography rules
			lineTension: 0,
			pointRadius: 0,
			backgroundColor: 'rgba(100, 100, 200, .6)'
		}, {
			data: datasets.admin.past,
			label: 'Autres agents publics ',  // trailing space to ensure legend complies with French typography rules
			lineTension: 0,
			pointRadius: 0,
			backgroundColor: 'rgba(200, 100, 100, .6)'
		}, {
			data: datasets.independent.past,
			label: 'Indépendant·e·s ',  // trailing space to ensure legend complies with French typography rules
			lineTension: 0,
			pointRadius: 0,
			backgroundColor: 'rgba(100, 200, 100, .6)'
		}, {
			data: datasets.service.past,
			label: 'Prestataires ',  // trailing space to ensure legend complies with French typography rules
			lineTension: 0,
			pointRadius: 0,
			backgroundColor: 'rgba(150, 150, 150, .6)'
		}],
	},
	options: {
		animation: { duration: 0 },
		maintainAspectRatio: false,
		legend: {
			onClick: function() { return false }
		},
		tooltips: {
			mode: 'x-axis'
		},
		scales: {
			xAxes: [{
				type: 'time',
				time: { unit: 'quarter' },
				gridLines: { display: false }
			}],
			yAxes: [{
				stacked: true
			}]
		}
	}
});


/**
*@param	{Array<Object>}	events		An array containing objects with the following properties: `date`, an ISO-formatted date String on which an event happened, `increment`, by which Number the plotted amount has moved that day.
*@param	{String}		splitDate	The ISO-formatted day on which the past and future datasets are split.
*/
function makeTimeSeries(events, splitDate) {
	events = events.slice();  // copy to work in place

	var splitPoint = {
		date: splitDate,
		increment: 0
	};

	events.push(splitPoint);

	events.sort(function(first, second) {
		return first.date < second.date ? -1 : 1;
	});

	var currentAmount = 0;
	var points = events.map(function makeAmountPoint(event) {
		currentAmount += event.increment;
		return {
			x: event.date,
			y: currentAmount
		};
	});

	var future = points.splice(events.indexOf(splitPoint));

	return {
		past: points,
		future: future
	}
}

});
