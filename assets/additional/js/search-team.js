const STARTUP_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const filters = [];

const createStartupTag = (startupId) => {
  if (!startupId) return "";

  const startup = startups.find((s) => s.id === startupId);

  if (!startup) return "";

  return `
    <li>
      <a href="/startups/${startupId}" class="fr-tag" target="_self">${startup.title || startupId}</a>
    </li>`;
};

const createAuthorCard = (author) => {
  const card = document.createElement("div");
  card.className = "fr-col-12 fr-col-sm-6 fr-col-md-4 fr-col-lg-3";
  card.id = author.id;
  let totalStartups = [];
  if (author.startups) {
    totalStartups = totalStartups.concat(author.startups);
  }
  if (author.previously) {
    totalStartups = totalStartups.concat(author.previously);
  }
  totalStartups = totalStartups.slice(0, 4);

  const timestampNow = new Date();
  let authorEndDate;
  if (author.missions.length) {
    authorEndDate = new Date(author.missions[author.missions.length - 1].end);
  }

  let avatarSrc = staticFiles.filter((staticFile) =>
    staticFile.includes(author.id),
  )[0];
  if (!avatarSrc) {
    if (author.avatar) {
      avatarSrc = author.avatar;
    } else if (author.github) {
      avatarSrc = `https://avatars3.githubusercontent.com/${author.github}?s=600`;
    } else {
      avatarSrc = "/img/logo-generique-startup-carre-2019.jpg";
    }
  }
  const incubator = author.incubator
    ? incubators.find((incubator) => incubator.id === author.incubator)
    : undefined;
  const isAlumnus = authorEndDate < timestampNow;

  const avatar = `<img class="lozad avatar-rounded" src="${MEMBER_PLACEHOLDER}" data-src="${avatarSrc}" alt="">`;

  const title = author.link
    ? `<a class="fr-card__link" href="${author.link}" target="_blank" rel="noopener">${author.fullname}</a>`
    : author.fullname;
  const detail = isAlumnus ? "Alumnus" : author.role;
  const content = author.content || "";
  const tags = totalStartups.map(createStartupTag).join("");
  const other =
    !isAlumnus && incubator
      ? `<a href="/startups/?incubateur=${author.incubator}" class="fr-link" target="_self">
           RACE: ${incubator.title}
         </a>`
      : "";

  card.innerHTML = markupForCard({
    title,
    content,
    tags,
    detail,
    avatar,
  });

  return card;
};

const generateDataWithHtmlCards = (members) => {
  const keys = Object.keys(members);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < members[key].length; j++) {
      members[key][j].html = createAuthorCard(members[key][j]);
    }
  }
  return members;
};

const displayNoDataMessage = (shouldDisplay) => {
  const noDataMessage = document.getElementById("no-data-message");
  if (shouldDisplay) {
    noDataMessage.style.display = "block";
  } else {
    noDataMessage.style.display = "none";
  }
};

const filterCards = (data, value) => {
  let filtered = [];

  if (filters.incubator) {
    filtered = data.filter((d) => d.incubator_id === filters.incubator);
  }

  return filtered;
};

const displayTeam = (team) => {
  const $section = document.getElementById(`team-${team.id}`);
  $section.style.display = "block";
};

const hideTeam = (team) => {
  const $section = document.getElementById(`team-${team.id}`);
  $section.style.display = "none";
};

const updateCards = (authorsteam, teams) => {
  displayNoDataMessage(false);
  let teamsInIncubator = teams;
  let teamsNotInIncubator = [];
  if (filters.incubator) {
    teamsInIncubator = teams.filter(
      (team) => team.incubator_id === filters.incubator,
    );
    teamsNotInIncubator = teams.filter(
      (team) => team.incubator_id !== filters.incubator,
    );
  }
  console.log(filters, teamsInIncubator);

  for (let i = 0; i < teamsInIncubator.length; i++) {
    const team = teamsInIncubator[i];
    displayTeam(team);
  }
  for (let i = 0; i < teamsNotInIncubator.length; i++) {
    const team = teamsNotInIncubator[i];
    hideTeam(team);
  }
  if (!teamsInIncubator.length) {
    displayNoDataMessage(true);
  }
};

const createIncubatorSelect = (authorsteam, teams, incubators, initValue) => {
  const selectIncubator = document.getElementsByClassName("select-operateur");
  const optionFragment = document.createDocumentFragment();
  for (let i = 0; i < incubators.length; i++) {
    const incubator = incubators[i];
    const option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectIncubator.appendChild(optionFragment);
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
    updateCards(authorsteam, teams);
  };
  if (initValue) {
    selectIncubator.value = initValue;
    onIncubatorChange(initValue);
  }
  selectIncubator.addEventListener("change", (e) => {
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
