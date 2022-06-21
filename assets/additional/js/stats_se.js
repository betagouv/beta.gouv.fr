const ATTRIBUTES_PRESENCE = ["stats_url", "budget_url", "dashlord_url"];
const ATTRIBUTES_VALUES = ["analyse_risques", "accessibility_status"];

$.ajax("/api/v2.5/startups.json").done(function (response) {
  const startupsCount = response.data.length;
  const attributesCount = {};
  const attributesValues = {};
  for (const item of response.data) {
    const startup = item.attributes;
    for (const attribute of ATTRIBUTES_PRESENCE) {
      if (!startup.hasOwnProperty(attribute) || !startup[attribute])
        continue;
      if (!attributesCount.hasOwnProperty(attribute))
        attributesCount[attribute] = 0;
      attributesCount[attribute]++;
    }

    for (const attribute of ATTRIBUTES_VALUES) {
      if (!attributesValues.hasOwnProperty(attribute))
        attributesValues[attribute] = { "absent": 0 };
      const value = startup.hasOwnProperty(attribute) && startup[attribute] || "absent";
      if (!attributesValues[attribute].hasOwnProperty(value))
        attributesValues[attribute][value] = 0
      attributesValues[attribute][value]++;
    }
  }

  console.log("attributesValues", attributesValues)

  ATTRIBUTES_PRESENCE.forEach(attribute => {
    new Chart(
      document.getElementById(attribute),
      {
        type: "pie",
        data: {
          labels: [`${attribute} présent`, `${attribute} absent`],
          datasets: [{
            data: [
              attributesCount[attribute],
              startupsCount - attributesCount[attribute]
            ],
            backgroundColor: [
              'rgb(54, 162, 235)',
              'rgb(255, 99, 132)'
            ],
          }]
        },
        options: {
          maintainAspectRatio: false,
        }
      }
    );
  });
  ATTRIBUTES_VALUES.forEach(attribute => {
    const orderedAttributes = ["absent"].concat(Array.from(Object.keys(attributesValues[attribute]).filter(e => e !== "absent")))
    new Chart(
      document.getElementById(attribute),
      {
        type: "pie",
        data: {
          labels: orderedAttributes,
          datasets: [{
            data: orderedAttributes.map(key => attributesValues[attribute][key]),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(99, 255, 132)',
            ],
          }]
        },
        options: {
          maintainAspectRatio: false,
        }
      }
    );
  });
})
