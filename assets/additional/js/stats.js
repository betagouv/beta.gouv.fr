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
    
  $.ajax(prefix + "seedlings.json").done(function(response) {
    var seasonStarts = {}
    response.included.forEach(function(inclusion) {
      if (inclusion.type == 'season') {
        seasonStarts[inclusion.id] = inclusion.attributes.start
      }
    })
    response.data.forEach(function(seedling) {
      raw.starts.push(seasonStarts[seedling.relationships.season.data.id])
    })

    raw.starts.sort()
    var start = new Date(raw.starts[0])
    var end = new Date('2019-12-31')
    function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    var timeSeries = [start]
    while(timeSeries[timeSeries.length- 1] < end) {
      timeSeries.push(addDays(timeSeries[timeSeries.length- 1], 1))
    }

    var days = timeSeries.map(function(d) { return d.toISOString().slice(0, 10) })
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

    val = ['2014', '2015', '2016', '2017', '2018', '2019'].reduce(function(results, y) {
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

    var projection = {
      start: '2018-12-31',
      current: '2019-09-05',
      end: '2019-12-31',
    }

    var coef = (dailyData[projection.end].date - dailyData[projection.start].date) / (dailyData[projection.current].date - dailyData[projection.start].date)
    val.values.push({
      period: '2019-proj',
      label: 'Projection pour toute l\'année 2019',
      construction: Math.round(coef * (dailyData[projection.current].constructionCum - dailyData[projection.start].constructionCum)),
      start: Math.round(coef * (dailyData[projection.current].startCum - dailyData[projection.start].startCum)),
    })

    var base = val.values.find(function(i) { return i.period === '2018' })
    var current = val.values[val.values.length-1]
    val.values.push({
      period: '2020-proj',
      label: 'Projection pour 2020',
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
})
