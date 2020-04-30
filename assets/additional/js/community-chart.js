$(function() {

var datasets = {};
Object.keys(window.data).forEach(function(employerType) {
    datasets[employerType] = window.data[employerType];

    /** Work around Chart.js' unability to stack time series unless they explicitly share their abscissa, by adding neutral data points to all datasets whenever another changes.
    */
    Object.keys(window.data).forEach(function(otherEmployerType) {
        if (employerType == otherEmployerType)
            return;

        datasets[employerType] = datasets[employerType].concat(window.data[otherEmployerType].map(function(event) {
            return {
                date: event.date,
                increment: 0
            }
        }));
    });

    datasets[employerType] = makeTimeSeries(datasets[employerType], window.buildDate);
});

new Chart(document.querySelector('canvas'), {
    type: 'line',
    data: {
        datasets: [{
            data: datasets.admin,
            label: 'Agents publics ', // trailing space to ensure legend complies with French typography rules
            backgroundColor: '#EF7D29',
            pointRadius: 0,
            lineTension: 0.3
        }, {
            data: datasets.independent,
            label: 'Indépendantes et indépendants ', // trailing space to ensure legend complies with French typography rules
            backgroundColor: '#0048B3',
            pointRadius: 0,
            lineTension: 0.3
        }, {
            data: datasets.service,
            label: 'Prestataires ', // trailing space to ensure legend complies with French typography rules
            backgroundColor: '#3EA9FF',
            pointRadius: 0,
            lineTension: 0.3
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
        hover: {
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
    events = events.slice(); // copy to work in place

    events.sort(function(first, second) {
        return first.date < second.date ? -1 : 1;
    });

    var currentAmount = 0;
    var points = [];

    events.forEach(function(event) {
        event.date = event.date.slice(0, -2) + '01'; // ne garder que les mois
        currentAmount += event.increment;

        var toAdd = points.find(function(finalEvent) {
            return event.date == finalEvent.x;
        });

        if (toAdd == null) {
            if (event.date > splitDate) {
                return;
            }

            points.push({
                x: event.date,
                y: currentAmount
            });
        } else {
            toAdd.y += event.increment;
        }
    });

    return points;
}

});
