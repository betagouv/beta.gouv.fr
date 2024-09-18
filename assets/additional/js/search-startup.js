const STARTUP_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const USERTYPES = {
  "etablissement-scolaire": "Etablissements scolaires et d'enseignement supérieur",
  etat: "Services de l'État",
  particulier: "Particuliers",
  entreprise: "Entreprises et professionels",
  "collectivite-territoriale": "Collectivités territoriales",
  parlement: "Parlement",
  association: "Associations",
};

const THEMATIQUES = ["Administratif", "Agriculture", "Collectivités", "Démocratie", "Écologie", "Entreprises", "Formation", "Inclusion numérique", "Jeunesse", "Justice", "Logement", "Mer", "Open-Data", "Outil technique", "Patrimoine", "Santé", "Sécurité informatique", "Social", "Territoires", "Transports", "Travail / Emploi"];

var filters = [];

var createStartupCard = function (startup) {
  var card = document.createElement("div");
  card.className = "fr-col-12 fr-col-md-4";
  card.id = startup.id;

  var startupSponsors = startup.sponsors
    .map((sponsor) => {
      return '<abbr title="' + sponsor.name + '">' + sponsor.acronym + "</abbr>";
    })
    .join(" / ");
  if (startupSponsors) {
    startupSponsors = '<p class="fr-card__detail">' + startupSponsors + "</p>";
  }
  var startupUsertypes = startup.attributes.usertypes
    .map((usertype) => {
      return '<abbr title="' + USERTYPES[usertype] + '">' + USERTYPES[usertype] + "</abbr>";
    })
    .join(" / ");
  if (startupUsertypes) {
    startupUsertypes = '<p class="fr-card__detail">' + startupUsertypes + "</p>";
  }
  card.innerHTML = `
        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__body">
                <h3 class="fr-card__title">
                    <a class="fr-card__link" href="/startups/${startup.id}.html">${startup.attributes.name}</a>
                </h3>
                ${startupSponsors}
                <p class="fr-card__desc">${startup.attributes.pitch}</p>
            </div>
            <div class="fr-card__img">
                <img class="screenshot lozad"
                    src="${STARTUP_PLACEHOLDER}"
                    data-src="${startup.attributes["screenshot-url"]}"
                    alt=""
                    />
            </div>
        </div>`;
  return card;
};

var generateDataWithHtmlCards = function (data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    for (var j = 0; j < data[key].length; j++) {
      data[key][j]["html"] = createStartupCard(data[key][j]);
    }
  }
  return data;
};

var displayNoDataMessage = function (shouldDisplay) {
  var noDataMessage = document.getElementById("no-data-message");
  if (shouldDisplay) {
    noDataMessage.style.display = "block";
  } else {
    noDataMessage.style.display = "none";
  }
};

var filterCards = function (data, value) {
  if (filters["incubator"]) {
    data = data.filter((d) => d.incubator_id === filters["incubator"]);
  }
  if (filters["usertypes"]) {
    data = data.filter((d) => d.attributes.usertypes.includes(filters["usertypes"]));
  }
  if (filters["thematiques"]) {
    data = data.filter((d) => d.attributes.thematiques.includes(filters["thematiques"]));
  }
  if (filters["is_national_impact"]) {
    data = data.filter((d) => d.events.find((event) => event.name === "national_impact"));
  }
  return data;
};

var updateCards = function (data) {
  displayNoDataMessage(false);
  var grid = document.getElementsByClassName("startups")[0];
  var keys = Object.keys(data);
  var count = 0;
  for (var i = 0; i < keys.length; i++) {
    var phase = keys[i];
    var phaseElement = document.getElementById(phase);
    var optionElements = document.querySelectorAll(`.${phase}-option`);
    var grid = phaseElement.getElementsByClassName("startups")[0];
    var documentFragment = document.createDocumentFragment();
    var dataToDisplay = filterCards(data[phase]);
    if (phase !== "alumni") {
      count = count + dataToDisplay.length;
    }
    if (!dataToDisplay.length) {
      phaseElement.style.display = "none";
      optionElements.forEach((optionElement) => {
        optionElement.style.display = "none";
      });
      var noContentMessage = phaseElement.getElementsByClassName("phase-no-result");
      if (!noContentMessage.length) {
        var noContentMessage = document.createElement("p");
        noContentMessage.className = "phase-no-result";
        noContentMessage.innerText = "Il n'y a pas de startup dans cette phase actuellement.";
        phaseElement.appendChild(noContentMessage);
      }
    } else {
      phaseElement.style.display = "block";
      optionElements.forEach((optionElement) => {
        optionElement.style.display = "block";
      });
      var noContentMessage = phaseElement.getElementsByClassName("phase-no-result");
      if (noContentMessage.length) {
        phaseElement.removeChild(noContentMessage[0]);
      }
    }
    /* ce code permet de calculer le nombre de start-up dans une phase lors de la recherche par incubateur. Il ne compte pas les start-up lors du chargement de la page start-up */
    var phaseCounter = phaseElement.getElementsByClassName("phase-counter")[0];
    if (phaseCounter) {
      phaseCounter.innerText = dataToDisplay.length;
    }
    var phaseLabel = phaseElement.getElementsByClassName("phase-label")[0];
    if (phaseLabel) {
      var currentPhase = phases.filter((p) => p.status === phase)[0];
      var plural = dataToDisplay.length > 1 ? "s" : "";
      if (currentPhase.status === "success") {
        phaseLabel.innerText = currentPhase.type_label.toLowerCase() + "s";
      } else if (currentPhase.status === "alumni") {
        phaseLabel.innerText = currentPhase.label.toLowerCase();
      } else {
        phaseLabel.innerText = currentPhase.type_label + plural;
      }
    }
    for (var j = 0; j < dataToDisplay.length; j++) {
      documentFragment.appendChild(dataToDisplay[j].html);
    }
    grid.innerHTML = "";
    grid.appendChild(documentFragment);
    if (window.lozad) {
      const observer = lozad();
      observer.observe();
    }
  }

  // Update global search counter
  document.querySelectorAll(".global-search-counter").forEach((counterElement) => {
    counterElement.innerText = count;
  });

  document.querySelectorAll(".global-search-counter-label").forEach((labelElement) => {
    labelElement.innerText = count > 1 ? "services numériques" : "service numérique";
  });

  if (!count) {
    displayNoDataMessage(true);
  }
};

var createIncubatorSelect = function (selectElement, data, incubators, initValue) {
  var optionFragment = document.createDocumentFragment();
  for (var i = 0; i < incubators.length; i++) {
    var incubator = incubators[i];
    var option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectElement.appendChild(optionFragment);
  var onIncubatorChange = function (value) {
    filters["incubator"] = value;
    var incubatorElements = document.getElementsByClassName("incubator-header");
    for (var i = 0; i < incubatorElements.length; i++) {
      var incubatorElement = incubatorElements[i];
      if (incubatorElement.id !== value) {
        incubatorElement.style.display = "none";
      } else {
        incubatorElement.style.display = "block";
      }
    }
    updateCards(data);
  };
  if (initValue) {
    selectElement.value = initValue;
    onIncubatorChange(initValue);
  }
  selectElement.addEventListener("change", function (e) {
    var value = e.target.value;
    onIncubatorChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("incubateur", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};

var createUsertypesSelect = function (selectElement, data, initValue) {
  var optionFragment = document.createDocumentFragment();
  var usertypes = Object.keys(USERTYPES);
  for (var i = 0; i < usertypes.length; i++) {
    var usertypeKey = usertypes[i];
    var usertypeLabel = USERTYPES[usertypeKey];
    var option = document.createElement("option");
    option.innerText = usertypeLabel;
    option.value = usertypeKey;
    optionFragment.appendChild(option);
  }
  selectElement.appendChild(optionFragment);
  var onUsertypesChange = function (value) {
    filters["usertypes"] = value;
    updateCards(data);
  };
  if (initValue) {
    selectElement.value = initValue;
    onUsertypesChange(initValue);
  }
  selectElement.addEventListener("change", function (e) {
    var value = e.target.value;
    onUsertypesChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("usertypes", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};

var createThematiquesSelect = function (selectElement, data, initValue) {
  const optionFragment = document.createDocumentFragment();
  THEMATIQUES.forEach((thematique) => {
    const option = document.createElement("option");
    option.innerText = thematique;
    option.value = thematique;
    optionFragment.appendChild(option);
  });

  selectElement.appendChild(optionFragment);

  var onThematiquesChange = function (value) {
    filters["thematiques"] = value;
    updateCards(data);
  };
  if (initValue) {
    selectElement.value = initValue;
    onThematiquesChange(initValue);
  }
  selectElement.addEventListener("change", function (e) {
    var value = e.target.value;
    onThematiquesChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("thematiques", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};

var createNationalImpactSelect = function (selectElement, data, initValue) {
  var onNationalImpactChange = function (value) {
    filters["is_national_impact"] = value;
    updateCards(data);
  };
  if (initValue === "true") {
    setTimeout(() => {
      selectElement.checked = true;
    }, 1000);
    onNationalImpactChange(true);
  }
  selectElement.addEventListener("change", function (e) {
    var value = selectElement.checked;
    onNationalImpactChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("national_impact", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};
