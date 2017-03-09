$(function() {

var series = makeTimeSeries(window.data, window.buildDate)

new Chart(document.querySelector('#chart-effectifs canvas'), {
    type: 'line',
    data: {
        datasets: [{
            data: series.past,
            label: 'Effectif total ',  // trailing space to ensure legend complies with French typography rules
            backgroundColor: '#EAE5A2',  // color scheme: credit http://www.colorschemer.com/schemes/viewscheme.php?id=10785
            steppedLine: true,
            pointRadius: 0
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

new Chart(document.querySelector('#chart-repartition canvas'), {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Agents DINSIC ',
            data: [window.employers['dinsic']],
            backgroundColor: '#EAE5A2',
            stack: 'all'
        },
        {
            label: 'Autres agents publics ',
            data: [window.employers['admin']],
            backgroundColor: '#A2EADA',
            stack: 'all'
        },
        {
            label: 'Indépendants ',
            data: [window.employers['independent']],
            backgroundColor: '#C5A2EA',
            stack: 'all'
        },
        {
            label: 'Prestataires ',
            data: [window.employers['service']],
            backgroundColor: '#EAC8A2',
            stack: 'all'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }],
            xAxes: [{
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
