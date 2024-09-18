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

const filters = [];

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
    );
};

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

const createIncubatorSelect = (selectElement, data, incubators, initValue) => {
  const optionFragment = document.createDocumentFragment();
  for (let i = 0; i < incubators.length; i++) {
    const incubator = incubators[i];
    const option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectElement.appendChild(optionFragment);
  const onIncubatorChange = (value) => {
    filters.incubator = value;
    const incubatorElements =
      document.getElementsByClassName("incubator-header");
    for (let i = 0; i < incubatorElements.length; i++) {
      const incubatorElement = incubatorElements[i];
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
  selectElement.addEventListener("change", (e) => {
    const value = e.target.value;
    onIncubatorChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("incubateur", value);
    history.replaceState(
      null,
      null,
      `${window.location.origin + window.location.pathname}?${urlParams}`,
    );
  });
};

const createUsertypesSelect = (selectElement, data, initValue) => {
  const optionFragment = document.createDocumentFragment();
  const usertypes = Object.keys(USERTYPES);
  for (let i = 0; i < usertypes.length; i++) {
    const usertypeKey = usertypes[i];
    const usertypeLabel = USERTYPES[usertypeKey];
    const option = document.createElement("option");
    option.innerText = usertypeLabel;
    option.value = usertypeKey;
    optionFragment.appendChild(option);
  }
  selectElement.appendChild(optionFragment);
  const onUsertypesChange = (value) => {
    filters.usertypes = value;
    updateCards(data);
  };
  if (initValue) {
    selectElement.value = initValue;
    onUsertypesChange(initValue);
  }
  selectElement.addEventListener("change", (e) => {
    const value = e.target.value;
    onUsertypesChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("usertypes", value);
    history.replaceState(
      null,
      null,
      `${window.location.origin + window.location.pathname}?${urlParams}`,
    );
  });
};

const createThematiquesSelect = (selectElement, data, initValue) => {
  const optionFragment = document.createDocumentFragment();
  for (const thematique of THEMATIQUES) {
    const option = document.createElement("option");
    option.innerText = thematique;
    option.value = thematique;
    optionFragment.appendChild(option);
  }

  selectElement.appendChild(optionFragment);

  const onThematiquesChange = (value) => {
    filters.thematiques = value;
    updateCards(data);
  };
  if (initValue) {
    selectElement.value = initValue;
    onThematiquesChange(initValue);
  }
  selectElement.addEventListener("change", (e) => {
    const value = e.target.value;
    onThematiquesChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("thematiques", value);
    history.replaceState(
      null,
      null,
      `${window.location.origin + window.location.pathname}?${urlParams}`,
    );
  });
};

const createNationalImpactSelect = (selectElement, data, initValue) => {
  const onNationalImpactChange = (value) => {
    filters.is_national_impact = value;
    updateCards(data);
  };
  if (initValue === "true") {
    setTimeout(() => {
      selectElement.checked = true;
    }, 1000);
    onNationalImpactChange(true);
  }
  selectElement.addEventListener("change", (e) => {
    const value = selectElement.checked;
    onNationalImpactChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("national_impact", value);
    history.replaceState(
      null,
      null,
      `${window.location.origin + window.location.pathname}?${urlParams}`,
    );
  });
};
