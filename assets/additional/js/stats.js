var impressions = [{
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

var map = {}
impressions.forEach(function(i) {
  i.raw = []
  map[i.id] = i
})

var prefix = '/api/v1.9/'
$.ajax(prefix + "startups.json").done(function(response) {
  response.data.forEach(function(startup) {
    if (!startup.attributes.phases || !startup.attributes.phases.length) {
      console.warn(startup.id)
      return
    }

    map.investigation.raw.push(startup.attributes.phases[0].start)

    var steps = ['construction', 'alumni', 'success']
    steps.forEach(function(step) {
      const sDate = startup.attributes.phases.reduce(function(date, current) {
        if (current.start && (current.name === step)) {
          return current.start
        }
        return date
      }, null)
      if (sDate) {
        map[step].raw.push(sDate)
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
          map.people.raw.push(mission.start)
          return true
        }
        return done
      }, false)
    })

    map.investigation.raw.sort()
    var today = new Date()
    var start = new Date(map.investigation.raw[0])
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

      impressions.forEach(function(i) {
        obj[day][i.id] = 0
      })

      return obj
    }, {})

    impressions.forEach(function(i) {
      i.raw.forEach(function(s) {
        if (!dailyData[s]) {
          console.warn('Missing ' + s)
        }
        dailyData[s][i.id] = dailyData[s][i.id] + 1
      })
    })

    days.reduce(function(prev, d) {
      impressions.forEach(function(i) {
        prev[i.id] = prev[i.id] + dailyData[d][i.id]
        dailyData[d][i.id + 'Cum'] = prev[i.id]
      })

      return prev
    }, impressions.reduce(function(r, i) {
      r[i.id] = 0
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

    val = years.reduce(function(results, y) {
      var next = dailyData[y + '-12-31']
      var item = {
        period: y
      }
      impressions.forEach(function(i) {
        item[i.id] = next[i.id + 'Cum'] - (results.prev[i.id + 'Cum'] || 0)
      })
      results.values.push(item)
      results.prev = next

      return results
    }, {
      prev: {},
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
    var pCurrent = {
      period: currentYear + '-proj',
      label: 'Projection pour toute l’année en cours (' + currentYear + ')',
    }
    impressions.forEach(function(i) {
      pCurrent[i.id] = Math.round(coef * (dailyData[projection.current][i.id + 'Cum'] - dailyData[projection.start][i.id + 'Cum']))
    })
    val.values.push(pCurrent)

    var base = val.values.find(function(i) { return i.period === lastYear })
    var current = val.values[val.values.length-1]
    var pNext = {
      period: nextYear + '-proj',
      label: 'Projection pour l’année prochaine (' + nextYear + ')',
    }
    impressions.forEach(function(i) {
      pNext[i.id] =  Math.round(current[i.id] * current[i.id] / base[i.id])
    })
    val.values.push(pNext)

    impressions.forEach(function(i) {
      element = document.getElementById(i.id)
      val.values.forEach(function(item) {
        if (!item[i.id]) {
          return
        }
        var node = document.createElement('li')
        element.appendChild(node)
        node.textContent = (item.label || item.period) + ' : ' + item[i.id]
      })
    })
  })
})
