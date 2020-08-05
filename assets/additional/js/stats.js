var metrics = [{
  id: 'investigation',
},{
  id: 'construction',
},{
  id: 'alumni',
},{
  id: 'success',
},{
  id: 'people',
}]

var db = {}
metrics.forEach(function(metric) {
  metric.incrementDates = []
  db[metric.id] = metric
})

var prefix = '/api/v2/'
$.ajax(prefix + "startups.json").done(function(response) {
  response.data.forEach(function(startup) {
    if (!startup.attributes.phases || !startup.attributes.phases.length) {
      console.warn(startup.id)
      return
    }

    db.investigation.incrementDates.push(startup.attributes.phases[0].start)

    var steps = ['construction', 'alumni', 'success']
    steps.forEach(function(step) {
      const sDate = startup.attributes.phases.reduce(function(date, current) {
        if (current.start && (current.name === step)) {
          return current.start
        }
        return date
      }, null)
      if (sDate) {
        db[step].incrementDates.push(sDate)
      }
    })
  })

  $.ajax(prefix + "authors.json").done(function(response) {
    response.forEach(function(author) {
      if (!author.missions) {
        console.warn(author.id)
        return
      }

      author.missions.reduce(function(done, mission) {
        if (!done && mission.status === 'admin') {
          db.people.incrementDates.push(mission.start)
          return true
        }
        return done
      }, false)
    })

    db.investigation.incrementDates.sort()
    var today = new Date()
    var start = new Date(db.investigation.incrementDates[0])
    var end = new Date(today.getFullYear() + '-12-31')
    function addDays(date, days) {
      var result = new Date(date)
      result.setDate(result.getDate() + days)
      return result
    }
    var dailyDateList = [start]
    while(dailyDateList[dailyDateList.length- 1] < end) {
      dailyDateList.push(addDays(dailyDateList[dailyDateList.length- 1], 1))
    }

    var days = dailyDateList.map(function(d) { return d.toISOString().slice(0, 10) })
    var dailyData = days.reduce(function(obj, day) {
      obj[day] = {
        date: new Date(day),
      }

      metrics.forEach(function(metric) {
        obj[day][metric.id] = 0
      })

      return obj
    }, {})

    metrics.forEach(function(metric) {
      metric.incrementDates.forEach(function(s) {
        if (!dailyData[s]) {
          console.warn('Missing ' + s)
        }
        dailyData[s][metric.id] = dailyData[s][metric.id] + 1
      })
    })

    days.reduce(function(prev, d) {
      metrics.forEach(function(metric) {
        prev[metric.id] = prev[metric.id] + dailyData[d][metric.id]
        dailyData[d][metric.id + 'Cum'] = prev[metric.id]
      })

      return prev
    }, metrics.reduce(function(r, metric) {
      r[metric.id] = 0
      return r
    }, {}))

    var years = dailyDateList.reduce(function(accumulator, item) {
      var year = item.toISOString().slice(0, 4)
      if (accumulator.yearList.indexOf(year) === -1) {
        accumulator.yearList.push(year)
      }
      return accumulator
    }, {
      current: start,
      yearList: [start.toISOString().slice(0,4)]
    }).yearList

    var displayedValues = years.reduce(function(results, y) {
      var next = dailyData[y + '-12-31']
      var item = {
        period: y
      }
      metrics.forEach(function(metric) {
        item[metric.id] = next[metric.id + 'Cum'] - (results.prev[metric.id + 'Cum'] || 0)
      })
      results.values.push(item)
      results.prev = next

      return results
    }, {
      prev: {},
      values: []
    }).values

    var lastYear = years[years.length-2]
    var currentYear = years[years.length-1]
    var nextYear = (parseInt(currentYear) + 1).toString()

    var projection = {
      start: lastYear + '-12-31',
      current: today.toISOString().slice(0, 10),
      end: currentYear + '-12-31'
    }

    var coef = (dailyData[projection.end].date - dailyData[projection.start].date) / (dailyData[projection.current].date - dailyData[projection.start].date)
    var pCurrent = {
      period: currentYear + '-proj',
      label: 'Projection pour toute l’année en cours (' + currentYear + ')',
    }
    metrics.forEach(function(metric) {
      pCurrent[metric.id] = Math.round(coef * (dailyData[projection.current][metric.id + 'Cum'] - dailyData[projection.start][metric.id + 'Cum']))
    })
    displayedValues.push(pCurrent)

    var base = displayedValues.find(function(item) { return item.period === lastYear })
    var current = displayedValues[displayedValues.length-1]
    var pNext = {
      period: nextYear + '-proj',
      label: 'Projection pour l’année prochaine (' + nextYear + ')',
    }
    metrics.forEach(function(metric) {
      pNext[metric.id] =  Math.round(current[metric.id] * current[metric.id] / base[metric.id])
    })
    displayedValues.push(pNext)

    metrics.forEach(function(metric) {
      element = document.getElementById(metric.id)
      displayedValues.forEach(function(item) {
        if (!item[metric.id]) {
          return
        }
        var node = document.createElement('li')
        element.appendChild(node)
        node.textContent = (item.label || item.period) + ' : ' + item[metric.id]
      })
    })
  })
})
