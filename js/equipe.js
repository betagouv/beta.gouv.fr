$(function() {

var datasets = makeTimeSeries(window.data, window.buildDate);

new Chart(document.querySelector('canvas'), {
	type: 'line',
	data: {
		datasets: [{
			data: datasets.past,
			label: 'Membres ',
			lineTension: 0,
			pointRadius: 0,
			backgroundColor: 'rgba(100, 100, 200, .6)'
		}, {
			data: datasets.future,
			label: 'Présence future garantie au ' + window.buildDate.split('-').reverse().join('/'),
			pointRadius: 0
		}]
	},
	options: {
		animation: { duration: 0 },
		maintainAspectRatio: false,
		scales: {
			xAxes: [{
				type: 'time',
				time: { unit: 'quarter' }
			}]
		}
	}
});


/**
*@param	{Array<Object>}	data		An array containing objects with the following properties: `date`, an ISO-formatted date String on which an event happened, `increment`, by which Number the plotted amount has moved that day.
*@param	{String}		splitDate	The ISO-formatted day on which the past and future datasets are split.
*/
function makeTimeSeries(data, splitDate) {
	data = data.slice();  // copy to work in place

	var splitPoint = {
		date: splitDate,
		increment: 0
	};

	data.push(splitPoint);

	data.sort(function(first, second) {
		return first.date < second.date ? -1 : 1;
	});

	var points = data.map(function(point) {
		this.counter += point.increment;
		return {
			x: point.date,
			y: this.counter
		};
	}, { counter: 0 });

	var future = points.splice(data.indexOf(splitPoint));

	return {
		past: points,
		future: future
	}
}

});
