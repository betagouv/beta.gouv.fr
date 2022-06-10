var metrics = [
  {
    id: "investigation",
    future: {
      2019: 42,
      2020: 50,
      2021: 122,
      2022: 200,
    },
  },
  {
    id: "product_launch",
    future: {
      2019: 19,
      2020: 23,
      2021: 49,
      2022: 50,
    },
  },
  {
    id: "end",
    future: {
      2019: 3,
      2020: 8,
      2021: 13,
      2022: 17,
    },
  },
  {
    id: "national_impact",
    future: {
      2019: 1,
      2020: 2,
      2021: 5,
      2022: 5,
    },
  },
  {
    id: "agent",
    future: {
      2019: 81,
      2020: 56,
      2021: 140,
      2022: 200,
    },
  },
];

var db = {};
metrics.forEach(function (metric) {
  metric.years = {};
  db[metric.id] = metric;
});

function basicDateTest(s) {
  return s !== "" && s;
}

function getFirstStepDate(startup) {
  var dates = startup.attributes.phases.reduce(function (list, p) {
    var candidates = [p.start, p.end];
    candidates.forEach(function (c) {
      if (basicDateTest(c)) {
        list.push(c);
      }
    });
    return list;
  }, []);

  dates.sort();
  if (dates.length) {
    return dates[0];
  }
}

function get(startup, item) {
  var obj = startup.attributes[item.from].find(function (p) {
    return p.name === item.name;
  });
  if (obj) {
    return obj[item.prop];
  }
}

function getFirst(startup, sources) {
  var candidates = sources.map(function (source) {
    if (typeof source === "function") {
      return source(startup);
    } else if (typeof source === "string") {
      return source;
    }
    return get(startup, source);
  });

  return candidates.reduce(function (pick, value) {
    return pick || basicDateTest(value);
  }, false);
}

function addValue(container, dt, value) {
  if (dt) {
    var year = dt.slice(0, 4);
    var list = container[year] || [];
    list.push(value);
    container[year] = list;
  }
}

var prefix = "/api/v2/";
$.ajax(prefix + "startups.json").done(function (response) {
  var startups = response.data;
  startups.forEach(function (startup) {
    if (!startup.attributes.phases || !startup.attributes.phases.length) {
      console.warn(startup.id);
      return;
    }

    // Les données sont très incomplètes et disparates
    // Plusieurs dates candidates sont listées et la première disponible est utilisée

    // Date de la fin de l'investigation d'un problème
    var investigationDate = getFirst(startup, [{ from: "phases", name: "investigation", prop: "end" }, { from: "phases", name: "investigation", prop: "start" }, getFirstStepDate]);
    if (!investigationDate) {
      console.warn(startup.id);
    } else {
      addValue(db.investigation.years, investigationDate, startup.id);
    }

    // Date du lancement du produit
    var launchDate = getFirst(startup, [
      { from: "events", name: "product_launch", prop: "date" },
      { from: "phases", name: "construction", prop: "start" },
    ]);
    addValue(db.product_launch.years, launchDate, startup.id);

    // Date de l'abandon du produit
    var endDate = getFirst(startup, [{ from: "events", name: "end", prop: "date" }]);
    addValue(db.end.years, endDate, startup.id);

    // Date du passage à un produit d'impact national
    var s = getFirst(startup, [{ from: "events", name: "national_impact", prop: "date" }]);
    addValue(db.national_impact.years, s, startup.id);
  });

  $.ajax(prefix + "authors.json").done(function (response) {
    response.forEach(function (author) {
      if (!author.missions) {
        console.warn(author.id);
        return;
      }

      author.missions.reduce(function (done, mission) {
        if (!done && mission.status === "admin") {
          addValue(db.agent.years, mission.start, author.id);
          return true;
        }
        return done;
      }, false);
    });

    var years = [];
    var end = new Date().getFullYear() + 1;
    for (var i = 2013; i <= end; i = i + 1) {
      years.push(i);
    }

    metrics.forEach(function (metric) {
      var input = db[metric.id];
      if (!input) {
        return;
      }
      var data = years.map((y) => (input.years[y] || []).length);
      var future = years.map((y) => {
        if (!input.future[y]) {
          return 0;
        }
        var v = input.future[y];
        return v > 0 ? v : 0;
      });
      new Chart(document.getElementById(metric.id), {
        type: "bar",
        data: {
          labels: years,
          datasets: [
            {
              data: data,
              label: "Décompte ", // trailing space to ensure legend complies with French typography rules
              backgroundColor: "#EF7D29",
              pointRadius: 0,
              lineTension: 0.3,
            },
            {
              data: future,
              label: "Dernières prévisions ", // trailing space to ensure legend complies with French typography rules
              backgroundColor: "#f9caa8",
              pointRadius: 0,
              lineTension: 0.3,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          tooltips: {
            position: "topLeft",
            caretSize: 0,
            callbacks: {
              footer: function (selection, d) {
                if (selection[0].datasetIndex == 0) {
                  var items = input.years[selection[0].xLabel];
                  if (items.length > 25) {
                    return items
                      .join(" ")
                      .replace(/.{1,40} /g, "$&#")
                      .split(" #");
                  } else {
                    return items;
                  }
                }
              },
            },
          },
        },
      });
    });
  });
});

Chart.Tooltip.positioners.topLeft = function (elements, eventPosition) {
  var tooltip = this;
  return {
    x: 10,
    y: 10,
  };
};
