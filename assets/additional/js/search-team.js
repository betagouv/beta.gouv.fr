const STARTUP_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

var filters = [];

var createStartupTag = function (startupId) {
  if (!startupId) return "";

  const startup = startups.find((s) => s.id == startupId);

  if (!startup) return "";

  return `
    <li>
      <a href="/startups/${startupId}" class="fr-tag" target="_self">${startup.title || startupId}</a>
    </li>`;
};

var createAuthorCard = function (author) {
  var card = document.createElement("div");
  card.className = "fr-col-12 fr-col-sm-6 fr-col-md-4 fr-col-lg-3";
  card.id = author.id;
  var totalStartups = [];
  if (author.startups) {
    totalStartups = totalStartups.concat(author.startups);
  }
  if (author.previously) {
    totalStartups = totalStartups.concat(author.previously);
  }
  totalStartups = totalStartups.slice(0, 4);

  let timestampNow = new Date();
  let authorEndDate;
  if (author.missions.length) {
    authorEndDate = new Date(author.missions[author.missions.length - 1].end);
  }

  var avatarSrc = staticFiles.filter((staticFile) => staticFile.includes(author.id))[0];
  if (!avatarSrc) {
    if (author.avatar) {
      avatarSrc = author.avatar;
    } else if (author.github) {
      avatarSrc = `https://avatars3.githubusercontent.com/${author.github}?s=600`;
    } else {
      avatarSrc = "/img/logo-generique-startup-carre-2019.jpg";
    }
  }
  const incubator = author.incubator ? incubators.find((incubator) => incubator.id === author.incubator) : undefined;
  const isAlumnus = authorEndDate < timestampNow;

  const avatar = `<img class="lozad avatar-rounded" src="${MEMBER_PLACEHOLDER}" data-src="${avatarSrc}" alt="">`;

  const title = author.link ? `<a class="fr-card__link" href="${author.link}" target="_blank" rel="noopener">${author.fullname}</a>` : author.fullname;
  const detail = isAlumnus ? "Alumnus" : author.role;
  const content = author.content || "";
  const tags = totalStartups.map(createStartupTag).join("");
  const other =
    !isAlumnus && incubator
      ? `<a href="/startups/?incubateur=${author.incubator}" class="fr-link" target="_self">
           RACE: ${incubator.title}
         </a>`
      : "";

  card.innerHTML = markupForCard({ title, detail, content, tags, detail, avatar });

  return card;
};


var generateDataWithHtmlCards = function (members) {
  var keys = Object.keys(members);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    for (var j = 0; j < members[key].length; j++) {
      members[key][j]["html"] = createAuthorCard(members[key][j]);
    }
  }
  return members;
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
  return data;
};

var displayTeam = (team) => {
  var $section = document.getElementById('team-'+ team.id)
  $section.style.display = 'block'
}

var hideTeam = (team) => {
  var $section = document.getElementById('team-'+ team.id)
  $section.style.display = 'none'
}

var updateCards = function (authorsteam, teams) {
  displayNoDataMessage(false);
  var teamsInIncubator = teams
  var teamsNotInIncubator = []
  if (filters['incubator']) {
    teamsInIncubator = teams.filter(team => team.incubator_id === filters["incubator"])
    teamsNotInIncubator = teams.filter(team => team.incubator_id !== filters["incubator"])
  }
  console.log(filters, teamsInIncubator)

  for (var i=0; i < teamsInIncubator.length; i++) {
    var team = teamsInIncubator[i]
    displayTeam(team)
  }
  for (var i=0; i < teamsNotInIncubator.length; i++) {
    var team = teamsNotInIncubator[i]
    hideTeam(team)
  }
  if (!teamsInIncubator.length) {
    displayNoDataMessage(true)
  }
};

var createIncubatorSelect = function (authorsteam, teams, incubators, initValue) {
  var selectIncubator = document.getElementsByClassName("select-operateur");
  var optionFragment = document.createDocumentFragment();
  for (var i = 0; i < incubators.length; i++) {
    var incubator = incubators[i];
    var option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectIncubator.appendChild(optionFragment);
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
    updateCards(authorsteam, teams);
  };
  if (initValue) {
    selectIncubator.value = initValue;
    onIncubatorChange(initValue);
  }
  selectIncubator.addEventListener("change", function (e) {
    var value = e.target.value;
    onIncubatorChange(value);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("incubateur", value);
    history.replaceState(null, null, window.location.origin + window.location.pathname + "?" + urlParams);
  });
};
