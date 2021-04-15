
var createStartupCard = function(startup) {
    var card = document.createElement('div');
    card.className = 'fr-col-12 fr-col-md-3';
    card.id = startup.id;

    card.innerHTML = `
        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__img">
                <img class="screenshot lozad"
                    data-src="${startup.attributes['screenshot-url']}"
                    title="${startup.attributes.name} est encore en travaux"
                    alt=""
                    data-proofer-ignore>
            </div>
            <div class="fr-card__body">
                <h2 class="fr-card__title">
                    <a class="fr-card__link" href="/startups/${ startup.id }.html" target="\_blank" rel="noopener">${startup.attributes.name}</a>
                </h2>
        
                <p class="fr-card__detail">${ startup.attributes.owner }</p>
                <p class="fr-card__desc">${ startup.attributes.pitch }</p>
            </div>
        </div>`
    return card
}

var generateDataWithHtmlCards = function(data) {
    var keys = Object.keys(data);
    for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        for (var j=0; j<data[key].length; j++) {
            data[key][j]['html'] = createStartupCard(data[key][j]);
        }
    }
    return data
}

var createIncubatorSelect = function(data, incubators, initValue) {
    var selectIncubator = document.getElementById('select-incubateur');
    var optionFragment = document.createDocumentFragment();
    for (var i=0; i < incubators.length; i++) {
        var incubator = incubators[i]
        var option = document.createElement('option');
        option.innerText = incubator.title;
        option.value = incubator.id;
        optionFragment.appendChild(option)
    }
    selectIncubator.appendChild(optionFragment);
    var onIncubatorChange = function(value) {
        var grid = document.getElementsByClassName('startups')[0];
        var keys = Object.keys(data);
        var incubatorElements = document.getElementsByClassName('incubator-header');
        for (var i=0; i < incubatorElements.length; i++) {
            var incubatorElement = incubatorElements[i];
            if (incubatorElement.id !== value) {
                incubatorElement.style.display = 'none';
            } else {
                incubatorElement.style.display = 'block';
            }
        }
        for (var i=0; i < keys.length; i++) {
            var phase = keys[i];
            var phaseElement = document.getElementById(phase);
            var optionElement = document.getElementById(phase+'-option');
            var grid = phaseElement.getElementsByClassName('startups')[0];
            var documentFragment = document.createDocumentFragment();
            var dataToDisplay = value ? data[phase].filter(d => d.incubator_id === value) : data[phase];
            if (!dataToDisplay.length) {
                phaseElement.style.display = 'none';
                optionElement.style.display = 'none';
                var noContentMessage = phaseElement.getElementsByClassName('phase-no-result');
                if (!noContentMessage.length) {
                    var noContentMessage = document.createElement('p');
                    noContentMessage.className = 'phase-no-result';
                    noContentMessage.innerText = "Il n'y a pas de startup dans cette phase actuellement."
                    phaseElement.appendChild(noContentMessage);
                }
            } else {
                phaseElement.style.display = 'block';
                optionElement.style.display = 'block';
                var noContentMessage = phaseElement.getElementsByClassName('phase-no-result');
                if (noContentMessage.length) {
                    phaseElement.removeChild(noContentMessage[0]);
                }
            }
            var phaseCounter = phaseElement.getElementsByClassName('phase-counter')[0];
            if (phaseCounter) {
                phaseCounter.innerText = dataToDisplay.length;
            }
            for (var j = 0; j < dataToDisplay.length; j++) {
                documentFragment.appendChild(dataToDisplay[j].html)
            }
            grid.innerHTML = "" 
            grid.appendChild(documentFragment)
            if (window.lozad) {
                const observer = lozad();
                observer.observe();
            }
        }
    };
    if (initValue) {
        selectIncubator.value = initValue;
        onIncubatorChange(initValue);
    }
    selectIncubator.addEventListener('change', function (e) {
        var value = e.target.value
        onIncubatorChange(value);
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('incubateur', value);
        history.replaceState(null, null, window.location.origin + window.location.pathname + '?' + urlParams);
    });
}
