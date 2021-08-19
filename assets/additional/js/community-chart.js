$(function() {

    /** 
    * obj to pass to chartjs : each key representing a dataset of employerType
    * will get an array of points in x,y where x is the date, y the value. 
    **/
    var datasets = {}; 

    // keys to use for the datasets
    var employerTypes = Object.keys(window.data['employer'])

    /** 
    *   Work around Chart.js' unability to stack time series unless they explicitly share their abscissa,
    *   by adding neutral data points to all datasets whenever another changes.
    *   dataByDate : each key is a date, and contains an obj with the datasets' keys 
    *   and their corresponding values for the date, 0 (neutral value) if none.
    */
    var dataByDate = {};
    employerTypes.forEach(function(employerType) {
        datasets[employerType] = []
        window.data['employer'][employerType].forEach(function(event) {
            // Round departure to next month
            if(event.increment === -1) {
                oldDate = new Date(event.date);
                event.date = formatDateToISOString(new Date(oldDate.getFullYear(), oldDate.getMonth() + 1, 1));
            }
            event.date = event.date.slice(0, -2) + '01' // replace day by first day of the month
            if (event.date < window.buildDate) {
                // use previous obj for date if exist, else define a default obj
                dataByDate[event.date] = dataByDate[event.date] || createDefaultObjectWithKeysAndValue(employerTypes, 0)
                dataByDate[event.date][employerType] += event.increment
            }
        });
    });

    // use dataByDate to define each points and corresponding values
    // for each datasets we compute the value for each new points by adding all values from previous date
    var currentAmounts = createDefaultObjectWithKeysAndValue(employerTypes, 0)

    Object.keys(dataByDate).sort(sortASC).forEach(function(date) {
        var row = dataByDate[date]
        Object.keys(row).forEach(function(employerType){
            currentAmounts[employerType] += row[employerType];
            datasets[employerType].push({
                x: date,
                y: currentAmounts[employerType]
            })
        })
    })

    new Chart(document.querySelector('canvas#member'), {
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

    new Chart(document.querySelector('canvas#domaine'), {
        type: 'line',
        data: {
            datasets: [
                {
                    data: datasets['Déploiement'],
                    label: 'Déploiement ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#EF7D29',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Design'],
                    label: 'Design ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#0048B3',
                    pointRadius: 0,
                    lineTension: 0.3
                }, 
                {
                    data: datasets['Développement'],
                    label: 'Développement ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#3EA9FF',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Coaching'],
                    label: 'Coaching ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#FEA9FF',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Autre'],
                    label: 'Autre ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#FEAC1F',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Intraprenariat'],
                    label: 'Intraprenariat ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#9E121F',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Animation'],
                    label: 'Animation ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#9E1D1F',
                    pointRadius: 0,
                    lineTension: 0.3
                },
                {
                    data: datasets['Produit'],
                    label: 'Produit ', // trailing space to ensure legend complies with French typography rules
                    backgroundColor: '#9E129F',
                    pointRadius: 0,
                    lineTension: 0.3
                }
            ],
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
    var totalKeys = Object.keys(window.data.total)
    console.log(totalKeys.map(key => window.data.total[key]))
    new Chart(document.querySelector('canvas#pie-chart'), {
        type: 'polarArea',
        data: {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue',
                'Grey',
                'Grey',
            ],
            datasets: [{
                label: 'Domaine',
                data: totalKeys.map(key => window.data.total[key]),
                // backgroundColor: [
                //     'rgb(255, 99, 132)',
                //     'rgb(75, 192, 192)',
                //     'rgb(255, 205, 86)',
                //     'rgb(201, 203, 207)',
                //     'rgb(54, 162, 235)',
                //     'rgb(54, 162, 235)',
                //     'rgb(54, 162, 235)'
                //   ]
                backgroundColor: [
                    '#EF7D29',
                    '#0048B3',
                    '#3EA9FF',
                    '#FEA9FF',
                    '#FEAC1F',
                    '#9E121F',
                    '#9E1D1F',
                    '#9E129F'
                ]
            }],
            labels: totalKeys.map(key => key),
           
        }
    });
});

/**
*@param	{String} date1 A date in ISO format to compare to the other one.
*@param	{String} date2 A date in ISO format to compare to the other one.     
*/
function sortASC(date1, date2) {
    return date1 < date2 ? -1 : 1;
}

/**
*@param	{Date} date     A date to convert to an ISO formated day.
*/
function formatDateToISOString(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}

/**
*@param	{Array} keys An array of strings
*@param {Int} value A value to assign to each key
*/
function createDefaultObjectWithKeysAndValue(keys, value=0) {
    var obj = {}
    keys.forEach(function(key) {
        obj[key] = value
    })
    return obj
}
