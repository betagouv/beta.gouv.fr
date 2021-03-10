
var createStartupCard = function(startup) {
    var card = document.createElement('div');
    card.className = 'card'
    card.id = startup.id

    card.innerHTML = `
        <a href="/startups/${ startup.id }.html">
            <div class="card__cover">
                <img class="screenshot lozad"
                    src="${startup.attributes['screenshot-url']}"
                    title="${startup.attributes.name} est encore en travaux"
                    alt=""
                    data-proofer-ignore>
            </div>
            <div class="card__content">
            <h3 class="startup__title">${startup.attributes.name}</h3>
            <div class="card__meta">
                ${ startup.attributes.owner }
            </div>
            <p>
                ${ startup.attributes.pitch }
            </p>
            </div>
        </a>`
    return card
}

var generateDataWithHtmlCards = function(data) {
    for (var i=0; i<data.length; i++) {
        data[i]['html'] = createStartupCard(data[i]);
    }
    return data
}

function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

var noContentMessage = document.createElement('p');
noContentMessage.innerText = "Il n'y a pas de startup correspondantes à ces filtres";

var filters = {};

var applyFilter = function(data) {
    return data.filter(function(d) {
        return Object.keys(filters).reduce(function(acc, filterKey) {
            return acc && filters[filterKey](d);
        }, true)
    });
}

var createPhaseSelect = function(data, initValue) {
    var PHASES_DISPLAY = {
        investigation: 'Investigation',
        acceleration: 'Accélération',
        construction: 'Construction',
    }
    var phases = Array.from(new Set(data.map(d => d.attributes.phases[0].name)));
    var selectPhase = document.getElementById('select-phase');
    var optionFragment = document.createDocumentFragment();
    for (var i=0; i < phases.length; i++) {
        var phase = phases[i]
        var option = document.createElement('option');
        option.innerText = PHASES_DISPLAY[phase] || phase;
        option.value = phase;
        optionFragment.appendChild(option)
    }
    selectPhase.appendChild(optionFragment);
    var onPhaseChange = function(value) {
        var grid = document.getElementsByClassName('startups grid')[0]
        var documentFragment = document.createDocumentFragment();
        if (value) {
            filters['phase'] = ((d) => {
                return d.attributes.phases[0].name === value
            });
        } else {
            delete filters['phase'];
        }
        var dataToDisplay = value ? applyFilter(data) : data;
        if (!dataToDisplay.length) {
            grid.parentNode.appendChild(noContentMessage);
        } else if (noContentMessage.parentNode) {
            noContentMessage.parentNode.removeChild(noContentMessage)
        }
        for (var i = 0; i < dataToDisplay.length; i++) {
            documentFragment.appendChild(dataToDisplay[i].html)
        }
        grid.innerHTML = "" 
        grid.appendChild(documentFragment)
    }
    selectPhase.addEventListener('change', function (e) {
        var value = e.target.value;
        onPhaseChange(value);
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('phase', value);
        history.replaceState(null, null, window.location.origin + window.location.pathname + '?' + urlParams);
    });
    if (initValue) {
        selectPhase.value = initValue;
        onPhaseChange(initValue);
    }
}

var createIncubatorSelect = function(data, initValue) {
    var incubators = Array.from(new Set(data.map(d => d.relationships.incubator.data.id)));
    var selectIncubator = document.getElementById('select-incubateur');
    var optionFragment = document.createDocumentFragment();
    for (var i=0; i < incubators.length; i++) {
        var incubator = incubators[i]
        var option = document.createElement('option');
        option.innerText = incubator;
        option.value = incubator;
        optionFragment.appendChild(option)
    }
    selectIncubator.appendChild(optionFragment);
    var onIncubatorChange = function(value) {
        var grid = document.getElementsByClassName('startups grid')[0]
        for (var i=0; i < phases.length < i++) {
            var phase = phases[i];
            var phaseElement = document.getElementById(phases.status)
            var grid = phaseElement.getElementsByClassName('startups')[0];
            var documentFragment = document.createDocumentFragment();
            // if (value) {
            //     filters['incubator'] = ((d) => {
            //         return d.relationships.incubator.data.id === value
            //     });
            // } else {
            //     delete filters['incubator'];
            // }
            var dataToDisplay = value ? data.filter(d => d.incubator === value) : data;
            if (!dataToDisplay.length) {
                phaseElement.appendChild(noContentMessage);
            } else if (noContentMessage.parentNode) {
                phaseElement.removeChild(noContentMessage)
            }
            for (var i = 0; i < dataToDisplay.length; i++) {
                documentFragment.appendChild(dataToDisplay[i].html)
            }
            grid.innerHTML = "" 
            grid.appendChild(documentFragment)
            
        }
        
    };
    selectIncubator.addEventListener('change', function (e) {
        var value = e.target.value
        onIncubatorChange(value);
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('incubateur', value);
        history.replaceState(null, null, window.location.origin + window.location.pathname + '?' + urlParams);
    });
    if (initValue) {
        selectIncubator.value = initValue;
        onIncubatorChange(initValue);
    }
}