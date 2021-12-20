
var createStartupTag = function(startup, author, index, extraCount) {
    var labelClass = ((author.previously || []).includes(startup)) ? 'fr-tag fr-tag--sm fr-tag--inactive' : 'fr-tag fr-tag--sm'
    var html
    if (startup === "_help_me_") {
        html = ''
    } else if (startup === "_in_progress_") {
        html = `<li>
            <span class="fr-tag--sm">Fiche produit à venir</span>
        </li>`
    } else if (startup === "_alpha_") {
        html = ` <li>
        <a href="approche/formation" class="${labelClass}" target="_self">Formation Alpha</a>
      </li>`
    } else if (startup === "_openfisca_") {
        html = `<li>
            <a href="https://openfisca.org" class="${labelClass}" target="_self">OpenFisca</a>
        </li>`
    } else {
        foundStartup = startups.find(s => s.id === startup)
        if (foundStartup) {
            html = `<li>
                <a href="/startups/${foundStartup.id}" class="${labelClass}" target="_self">${foundStartup.title}</a>
            </li>`
        } else {
            html = `<li>
                <a href="/startups/${startup}" class="${labelClass}" target="_self">${startup}</a>
            </li>`
        }
    }
    var extra = index === 5 ? '<li><span class="fr-tag--sm">Et ' + extraCount + ' autre(s)</span></li>' : ''
    return html + extra
}

function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }
  

var createAuthorCard = function(author) {
    var card = document.createElement('div');
    card.className = 'fr-col-6 fr-col-md-3';
    card.id = author.id;
    var totalStartups = []
    if (author.startups) {
        totalStartups = totalStartups.concat(author.startups)
    }
    if (author.previously) {
        totalStartups = totalStartups.concat(author.previously)
    }
    totalStartups = totalStartups.filter(s => s)
    var totalCount = totalStartups.length;
    var extraCount = totalCount - 5
    extraCount = extraCount > 0 ? extraCount : 0;
    totalStartups = totalStartups.slice(0, 5)
    let timestampNow = new Date();
    let authorEndDate;
    if (author.missions.length) {
        authorEndDate = new Date(author.missions[author.missions.length - 1].end)
    }
    var avatarSrc = staticFiles.filter(staticFile => staticFile.includes(author.id))[0];
    if (!avatarSrc) {
        if (author.avatar) {
            avatarSrc = author.avatar
        } else if (author.github) {
            avatarSrc = `https://avatars3.githubusercontent.com/${author.github}?s=600`
        } else {
            avatarSrc = "/img/logo-generique-startup-carre-2019.jpg"
        }
    }
    var avatarHTML = `<img class="lozad avatar-rounded" data-src="${avatarSrc}" title="${author.fullname}" alt="" data-proofer-ignore>`
    card.innerHTML = `<div class="fr-card fr-card--no-arrow fr-card__img__rounded">
            <div class="fr-card__body">
                <h3 class="fr-card__title">
                    ${(author.link) ? '<a class="fr-card__link" href="{{ author.link }}" target="_blank" rel="noopener">' + author.fullname + '</a>' : author.fullname}
                </h3>
                <p class="fr-card__detail">
                    ${timestampNow > authorEndDate ? 'Alumni' : author.role }
                </p>
                ${author.content ? '<p class="fr-card__desc">' + author.content + '</p>' : ''}        
                ${totalCount ? '<ul class="fr-tags-group">' + totalStartups.map((s,i) => createStartupTag(s, author, i, extraCount)).join('') + '</u>' : ''}
            </div>
            <div class="fr-card__img">
            ${avatarHTML}
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
    var intersection = function(array1, array2) {
        return Boolean(array1.filter(function(n) {
            return array2.indexOf(n) !== -1;
        }).length)
    };
    var onIncubatorChange = function(value) {
        var selectedStartups = (value ? startups.filter(d => d.incubator_id === value) : startups).map(s => s.id);
        var currentsToDisplay = data.filter(d => intersection(d.startups, selectedStartups))
        currentsToDisplay = currentsToDisplay.map(d => ({
            ...d,
            html: createAuthorCard(d),
        }))
        var alumnisToDisplay = alumnis.filter(d => intersection(d.startups, selectedStartups))
        alumnisToDisplay = alumnisToDisplay.map(d => ({
            ...d,
            html: createAuthorCard(d),
        }))
        var documentFragmentCurrents = document.createDocumentFragment();
        for (var j = 0; j < currentsToDisplay.length; j++) {
            documentFragmentCurrents.appendChild(currentsToDisplay[j].html)
        }
        var gridCurrents = document.getElementsByClassName('authors')[0];
        gridCurrents.innerHTML = "" 
        gridCurrents.appendChild(documentFragmentCurrents)
        var countCurrentsElement = document.getElementById('currents-count');
        countCurrentsElement.innerHTML = currentsToDisplay.length

        var documentFragmentAlumnis = document.createDocumentFragment();
        for (var j = 0; j < alumnisToDisplay.length; j++) {
            documentFragmentAlumnis.appendChild(alumnisToDisplay[j].html)
        }
        var gridAlumnis = document.getElementsByClassName('alumnis')[0];
        gridAlumnis.innerHTML = "" 
        gridAlumnis.appendChild(documentFragmentAlumnis)
        var countAlumnisElement = document.getElementById('alumnis-count');
        countAlumnisElement.innerHTML = alumnisToDisplay.length
        
        if (window.lozad) {
            const observer = lozad();
            observer.observe();
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
