const STARTUP_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const USERTYPES = {
  "etablissement-scolaire":
    "Etablissements scolaires et d'enseignement supérieur",
  etat: "Services de l'État",
  particulier: "Particuliers",
  entreprise: "Entreprises et professionels",
  "collectivite-territoriale": "Collectivités territoriales",
  parlement: "Parlement",
  association: "Associations",
};

const THEMATIQUES = [
  "Administratif",
  "Agriculture",
  "Collectivités",
  "Démocratie",
  "Écologie",
  "Entreprises",
  "Formation",
  "Inclusion numérique",
  "Jeunesse",
  "Justice",
  "Logement",
  "Mer",
  "Open-Data",
  "Outil technique",
  "Patrimoine",
  "Santé",
  "Sécurité informatique",
  "Social",
  "Territoires",
  "Transports",
  "Travail / Emploi",
];

function setLocationParam(param, value) {
  const url = new URL(window.location);

  url.searchParams.set(param, value);

  history.replaceState(null, null, url);
}

const createStartupCard = (startup) => {
  const card = document.createElement("div");
  card.className = "fr-col-12 fr-col-md-4";
  card.id = startup.id;

  let startupSponsors = startup.sponsors
    .map((sponsor) => {
      return `<abbr title="${sponsor.name}">${sponsor.acronym}</abbr>`;
    })
    .join(" / ");
  if (startupSponsors) {
    startupSponsors = `<p class="fr-card__detail">${startupSponsors}</p>`;
  }
  let startupUsertypes = startup.attributes.usertypes
    .map((usertype) => {
      return `<abbr title="${USERTYPES[usertype]}">${USERTYPES[usertype]}</abbr>`;
    })
    .join(" / ");
  if (startupUsertypes) {
    startupUsertypes = `<p class="fr-card__detail">${startupUsertypes}</p>`;
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

const generateDataWithHtmlCards = (data) => {
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < data[key].length; j++) {
      data[key][j].html = createStartupCard(data[key][j]);
    }
  }
  return data;
};

const displayNoDataMessage = (shouldDisplay) => {
  const noDataMessage = document.getElementById("no-data-message");
  if (shouldDisplay) {
    noDataMessage.style.display = "block";
  } else {
    noDataMessage.style.display = "none";
  }
};

const filterCards = (startups) => {
  return startups
    .filter((startup) =>
      filters.incubator ? startup.incubator_id === filters.incubator : true,
    )
    .filter((startup) =>
      filters.usertypes
        ? startup.attributes.usertypes.includes(filters.usertypes)
        : true,
    )
    .filter((startup) =>
      filters.thematiques
        ? startup.attributes.thematiques.includes(filters.thematiques)
        : true,
    )
    .filter((startup) =>
      filters.is_national_impact ? startupHasNationalImpact(startup) : true,
    )
    .filter((startup) =>
      filters.excludeInvestigations ? startupIsNotInvestigation(startup) : true,
    );
};

const startupIsNotInvestigation = (startup) =>
  startup.phase !== "investigation";

const startupHasNationalImpact = (startup) =>
  startup.events.find((event) => event.name === "national_impact");

const updateCards = (data) => {
  displayNoDataMessage(false);
  const grid = document.getElementsByClassName("startups")[0];
  const keys = Object.keys(data);
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    const phase = keys[i];
    const phaseElement = document.getElementById(phase);
    const optionElements = document.querySelectorAll(`.${phase}-option`);
    const grid = phaseElement.getElementsByClassName("startups")[0];
    const documentFragment = document.createDocumentFragment();
    const dataToDisplay = filterCards(data[phase]);
    if (phase !== "alumni") {
      count = count + dataToDisplay.length;
    }
    if (!dataToDisplay.length) {
      phaseElement.style.display = "none";
      for (const optionElement of optionElements) {
        optionElement.style.display = "none";
      }
      const noContentMessage =
        phaseElement.getElementsByClassName("phase-no-result");
      if (!noContentMessage.length) {
        const noContentMessage = document.createElement("p");
        noContentMessage.className = "phase-no-result";
        noContentMessage.innerText =
          "Il n'y a pas de startup dans cette phase actuellement.";
        phaseElement.appendChild(noContentMessage);
      }
    } else {
      phaseElement.style.display = "block";
      for (const optionElement of optionElements) {
        optionElement.style.display = "block";
      }
      const noContentMessage =
        phaseElement.getElementsByClassName("phase-no-result");
      if (noContentMessage.length) {
        phaseElement.removeChild(noContentMessage[0]);
      }
    }
    /* ce code permet de calculer le nombre de start-up dans une phase lors de la recherche par incubateur. Il ne compte pas les start-up lors du chargement de la page start-up */
    const phaseCounter =
      phaseElement.getElementsByClassName("phase-counter")[0];
    if (phaseCounter) {
      phaseCounter.innerText = dataToDisplay.length;
    }
    const phaseLabel = phaseElement.getElementsByClassName("phase-label")[0];
    if (phaseLabel) {
      const currentPhase = phases.filter((p) => p.status === phase)[0];
      const plural = dataToDisplay.length > 1 ? "s" : "";
      if (currentPhase.status === "success") {
        phaseLabel.innerText = `${currentPhase.type_label.toLowerCase()}s`;
      } else if (currentPhase.status === "alumni") {
        phaseLabel.innerText = currentPhase.label.toLowerCase();
      } else {
        phaseLabel.innerText = currentPhase.type_label + plural;
      }
    }
    for (let j = 0; j < dataToDisplay.length; j++) {
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
  for (const counterElement of document.querySelectorAll(
    ".global-search-counter",
  )) {
    counterElement.innerText = count;
  }

  for (labelElement of document.querySelectorAll(
    ".global-search-counter-label",
  )) {
    labelElement.innerText =
      count > 1 ? "services numériques" : "service numérique";

    if (!count) {
      displayNoDataMessage(true);
    }
  }
};

const createIncubatorSelect = (selectElement, data, incubators) => {
  const optionFragment = document.createDocumentFragment();

  for (const incubator of incubators) {
    const option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }

  selectElement.appendChild(optionFragment);

  const onIncubatorChange = (value) => {
    filters.incubator = value;

    for (const incubatorElement of document.getElementsByClassName(
      "incubator-header",
    )) {
      if (incubatorElement.id !== value) {
        incubatorElement.style.display = "none";
      } else {
        incubatorElement.style.display = "block";
      }
    }

    updateCards(data);
  };

  if (filters.incubator) selectElement.value = filters.incubator;

  selectElement.addEventListener("change", ({ target: { value } }) =>
    updateFilters("incubator", "incubateur", value),
  );
};

const createUsertypesSelect = (selectElement, data) => {
  const optionFragment = document.createDocumentFragment();
  const usertypes = Object.keys(USERTYPES);

  for (const [value, label] of Object.entries(USERTYPES)) {
    const option = document.createElement("option");
    option.innerText = label;
    option.value = value;
    optionFragment.appendChild(option);
  }

  selectElement.appendChild(optionFragment);

  if (filters.usertypes) selectElement.value = filters.usertypes;

  selectElement.addEventListener("change", ({ target: { value } }) =>
    updateFilters("usertypes", "usertypes", value),
  );
};

const createThematiquesSelect = (selectElement, data) => {
  const optionFragment = document.createDocumentFragment();
  for (const thematique of THEMATIQUES) {
    const option = document.createElement("option");
    option.innerText = thematique;
    option.value = thematique;
    optionFragment.appendChild(option);
  }

  selectElement.appendChild(optionFragment);

  if (filters.thematiques) selectElement.value = filters.thematiques;

  selectElement.addEventListener("change", ({ target: { value } }) =>
    updateFilters("thematiques", "thematiques", value),
  );
};

const createNationalImpactSelect = (selectElement, data) => {
  selectElement.checked = filters.is_national_impact;

  selectElement.addEventListener("change", ({ target: { checked: value } }) =>
    updateFilters("is_national_impact", "national_impact", value),
  );
};

function setupExcludeInvestigations() {
  const toggle = document.getElementById("exclude-investigations-toggle");

  toggle.checked = filters.excludeInvestigations;

  toggle.addEventListener("change", ({ target: { checked: value } }) =>
    updateFilters("excludeInvestigations", "exclude-investigations", value),
  );
}

function updateFilters(filterName, paramName, value) {
  filters[filterName] = value;

  setLocationParam(paramName, value);

  updateCards(data);
}
