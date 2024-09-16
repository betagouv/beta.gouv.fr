$(() => {
  /**
   * obj to pass to chartjs : each key representing a dataset of employerType
   * will get an array of points in x,y where x is the date, y the value.
   **/
  const datasets = {};

  // keys to use for the datasets
  const employerTypes = Object.keys(window.data.employer);

  /**
   *   Work around Chart.js' unability to stack time series unless they explicitly share their abscissa,
   *   by adding neutral data points to all datasets whenever another changes.
   *   dataByDate : each key is a date, and contains an obj with the datasets' keys
   *   and their corresponding values for the date, 0 (neutral value) if none.
   */
  const dataByDate = {};
  for (employerType of employerTypes) {
    datasets[employerType] = [];
    for (employerEvent of window.data.employer[employerType]) {
      // Round departure to next month
      if (employerEvent.increment === -1) {
        oldDate = new Date(employerEvent.date);
        employerEvent.date = formatDateToISOString(
          new Date(oldDate.getFullYear(), oldDate.getMonth() + 1, 1),
        );
      }
      employerEvent.date = `${employerEvent.date.slice(0, -2)}01`; // replace day by first day of the month
      if (employerEvent.date < window.buildDate) {
        // use previous obj for date if exist, else define a default obj
        dataByDate[employerEvent.date] =
          dataByDate[employerEvent.date] ||
          createDefaultObjectWithKeysAndValue(employerTypes, 0);
        dataByDate[employerEvent.date][employerType] += employerEvent.increment;
      }
    }
  }
  // Chart.defaults.scale.gridLines.display = false;

  // use dataByDate to define each points and corresponding values
  // for each datasets we compute the value for each new points by adding all values from previous date
  const currentAmounts = createDefaultObjectWithKeysAndValue(employerTypes, 0);

  for (date of Object.keys(dataByDate).sort(sortASC)) {
    const row = dataByDate[date];

    for (employerType of Object) {
      currentAmounts[employerType] += row[employerType];
      datasets[employerType].push({
        x: date,
        y: currentAmounts[employerType],
      });
    }
  }

  new Chart(document.querySelector("canvas#member"), {
    type: "line",
    data: {
      datasets: [
        {
          data: datasets.admin,
          label: "Agents publics ", // trailing space to ensure legend complies with French typography rules
          backgroundColor: "#F7DD6F",
          pointRadius: 0,
          lineTension: 0.3,
          fill: true,
        },
        {
          data: datasets.independent,
          label: "Indépendantes et indépendants ", // trailing space to ensure legend complies with French typography rules
          backgroundColor: "#00008B",
          pointRadius: 0,
          lineTension: 0.3,
          fill: true,
        },
        {
          data: datasets.service,
          label: "Prestataires ", // trailing space to ensure legend complies with French typography rules
          backgroundColor: "#8D84F0",
          pointRadius: 0,
          lineTension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: "Progression des effectifs",
          display: true,
          color: "#666",
          font: {
            family: "Marianne",
            size: 18,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        legend: {
          labels: {
            font: {
              family: "Marianne",
              size: 12,
            },
          },
        },
        tooltip: {
          titleFont: {
            family: "Marianne",
          },
          bodyFont: {
            family: "Marianne",
          },
        },
      },
      animation: { duration: 0 },
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        x: {
          type: "time",
          time: { unit: "quarter", tooltipFormat: "MM/YYYY" },
          gridLines: { display: false },
        },
        y: {
          stacked: true,
        },
      },
    },
  });

  const idealOrder = [
    "Animation",
    "Intraprenariat",
    "Coaching",
    "Développement",
    "Déploiement",
    "Design",
    "Produit",
    "Data",
    "Autre",
  ];
  const domaineKeys = Object.keys(window.data.domaine).sort(
    (a, b) => idealOrder.indexOf(a) - idealOrder.indexOf(b),
  );

  new Chart(document.querySelector("canvas#pie-chart"), {
    type: "polarArea",
    data: {
      datasets: [
        {
          label: "Domaine",
          data: domaineKeys.map((key) => window.data.domaine[key]),
          backgroundColor: [
            "#DD6A57", // animation

            "#9FE0F7", // intra
            "#5BA7BC", // coach

            "#7666F6", // dev

            "#92E3A9", // bizdev

            "#ECC962", // design
            "#F4DEA8", // product

            "#FFB6A3", // data

            "#D9D9D9",
          ], // autre
        },
      ],
      labels: domaineKeys.map((key) => key),
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          text: "Répartition des membres par compétence",
          display: true,
          color: "#666",
          font: {
            family: "Marianne",
            size: 18,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        animation: { duration: 0 },
        maintainAspectRatio: false,
        legend: {
          onClick: () => false,
          onLeave: (evt, item, legend) => {
            legend.chart.data.datasets[0].backgroundColor.forEach(
              (color, index, colors) => {
                colors[index] = color.length === 9 ? color.slice(0, -2) : color;
              },
            );
            legend.chart.update();
          },
          onHover: (evt, item, legend) => {
            legend.chart.data.datasets[0].backgroundColor.forEach(
              (color, index, colors) => {
                colors[index] =
                  index === item.index || color.length === 9
                    ? color
                    : `${color}4D`;
              },
            );
            legend.chart.update();
          },
          position: "right",
          labels: {
            font: {
              family: "Marianne",
              size: 12,
              weight: "bold",
            },
          },
        },
      },
      scales: {
        r: {
          display: false,
        },
      },
    },
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
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
}

/**
 *@param	{Array} keys An array of strings
 *@param {Int} value A value to assign to each key
 */
function createDefaultObjectWithKeysAndValue(keys, value = 0) {
  const obj = {};
  for (key of keys) {
    obj[key] = value;
  }
  return obj;
}
