var impressions = [{
  id: 'start',
  label: 'problèmes investigués'
},{
  id: 'construction',
  label: 'produits lancés'
}]

var raw = {
  constructions: [],
  starts: [],
}
var prefix = '/api/v1.6/'
$.ajax(prefix + "startups.json").done(function(response) {
  response.data.forEach(function(startup) {
    raw.constructions.push(startup.attributes.start)
    raw.starts.push(startup.attributes.start)
  })

  raw.starts.sort()
  var today = new Date()
  var start = new Date(raw.starts[0])
  var end = new Date(today.getFullYear() + '-12-31')
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  var dailyDateList = [start]
  while(dailyDateList[dailyDateList.length- 1] < end) {
    dailyDateList.push(addDays(dailyDateList[dailyDateList.length- 1], 1))
  }

  var days = dailyDateList.map(function(d) { return d.toISOString().slice(0, 10) })
  var dailyData = days.reduce(function(obj, day) {
    obj[day] = {
      date: new Date(day),
      construction: 0,
      start: 0,
    }

    return obj
  }, {})

  raw.starts.forEach(function(s) {
    dailyData[s].start = dailyData[s].start + 1
  });

  raw.constructions.forEach(function(c) {
    dailyData[c].construction = dailyData[c].construction + 1
  });


  days.reduce(function(prev, d) {
    prev.construction = prev.construction + dailyData[d].construction
    dailyData[d].constructionCum = prev.construction

    prev.start = prev.start + dailyData[d].start
    dailyData[d].startCum = prev.start

    return prev
  }, {
    construction: 0,
    start: 0,
  })

  var years = dailyDateList.reduce(function(accumulator, item) {
    var year = item.toISOString().slice(0, 4)
    if (accumulator.yearList.indexOf(year) === -1) {
      accumulator.yearList.push(year)
    }
    return accumulator;
  }, {
    current: start,
    yearList: [start.toISOString().slice(0,4)]
  }).yearList

  val = years.reduce(function(results, y) {
    var next = dailyData[y + '-12-31']
    var item = {
      period: y
    }
    item.construction = next.constructionCum - results.prev.constructionCum
    item.start = next.startCum - results.prev.startCum
    results.values.push(item)
    results.prev = next

    return results
  }, {
    prev: {
      constructionCum: 0,
      startCum: 0,
    },
    values: []
  })

  var lastYear = years[years.length-2]
  var currentYear = years[years.length-1]
  var nextYear = (parseInt(currentYear) + 1).toString()

  var projection = {
    start: lastYear + '-12-31',
    current: today.toISOString().slice(0, 10),
    end: currentYear + '-12-31'
  }

  var coef = (dailyData[projection.end].date - dailyData[projection.start].date) / (dailyData[projection.current].date - dailyData[projection.start].date)
  val.values.push({
    period: currentYear + '-proj',
    label: 'Projection pour toute l’année en cours (' + currentYear + ')',
    construction: Math.round(coef * (dailyData[projection.current].constructionCum - dailyData[projection.start].constructionCum)),
    start: Math.round(coef * (dailyData[projection.current].startCum - dailyData[projection.start].startCum)),
  })

  var base = val.values.find(function(i) { return i.period === lastYear })
  var current = val.values[val.values.length-1]
  val.values.push({
    period: nextYear + '-proj',
    label: 'Projection pour l’année prochaine (' + nextYear + ')',
    construction: Math.round(current.construction * current.construction / base.construction),
    start: Math.round(current.start * current.start / base.start),
  })

  impressions.forEach(function(i) {
    element = document.getElementById(i.id + 's')
    val.values.forEach(function(item) {
      var node = document.createElement('li')
      element.appendChild(node)
      node.textContent = (item.label || item.period) + ' : ' + item[i.id] + ' ' + i.label
    });
  })
})
