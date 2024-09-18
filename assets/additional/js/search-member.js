const MEMBER_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const createStartupTag = (startupId) => {
  if (!startupId) return "";

  const startup = startups.find((s) => s.id === startupId);

  if (!startup) return "";

  return `
    <li>
      <a href="/startups/${startupId}" class="fr-tag" target="_self">${startup.title || startupId}</a>
    </li>`;
};

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? `0${s}` : s;
  }
  const d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

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

function markupForCard(params) {
  const { title, detail, content, tags, other, avatar } = params;

  return `
<div class="fr-card fr-card--grey">
  <div class="fr-card__body">
    <div class="fr-card__content">
      <div class="fr-card__start">
    <h3 class="fr-card__title fr-mb-2w">
      ${title}
    </h3>
    <p class="fr-card__detail">
      ${detail}
    </p>
    ${content ? `<p class="fr-card__desc">${content}</p>` : ""}
    ${tags ? `<ul class="fr-tags-group">${tags}</ul>` : ""}
    ${other ? `<p class="fr-card__detail">${other}</p>` : ""}
  </div>
</div>
</div>
<div class="fr-card__header">
  <div class="fr-card__img">
    <div class="avatar fr-py-2w">
      ${avatar}
    </div>
  </div>
</div>
</div>`;
}

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

const createIncubatorSelect = (members, incubators, initValue) => {
  const selectIncubator = document.getElementById("select-incubateur");
  const optionFragment = document.createDocumentFragment();
  for (let i = 0; i < incubators.length; i++) {
    const incubator = incubators[i];
    const option = document.createElement("option");
    option.innerText = incubator.title;
    option.value = incubator.id;
    optionFragment.appendChild(option);
  }
  selectIncubator.appendChild(optionFragment);
  const intersection = (array1, array2) =>
    Boolean(array1.filter((n) => array2.indexOf(n) !== -1).length);
  const onIncubatorChange = (value) => {
    const selectedStartups = (
      value ? startups.filter((d) => d.incubator_id === value) : startups
    ).map((s) => s.id);
    let currentsToDisplay = members.filter(
      (member) =>
        intersection(member.startups, selectedStartups) ||
        member.incubator === value,
    );
    currentsToDisplay = currentsToDisplay.map((d) => ({
      ...d,
      html: createAuthorCard(d),
    }));
    let alumnisToDisplay = alumnis.filter(
      (alumni) =>
        intersection(alumni.startups, selectedStartups) ||
        alumni.incubator === value,
    );
    alumnisToDisplay = alumnisToDisplay.map((d) => ({
      ...d,
      html: createAuthorCard(d),
    }));
    const documentFragmentCurrents = document.createDocumentFragment();
    for (let j = 0; j < currentsToDisplay.length; j++) {
      documentFragmentCurrents.appendChild(currentsToDisplay[j].html);
    }
    const gridCurrents = document.getElementsByClassName("authors")[0];
    gridCurrents.innerHTML = "";
    gridCurrents.appendChild(documentFragmentCurrents);
    const countCurrentsElement = document.getElementById("currents-count");
    countCurrentsElement.innerHTML = currentsToDisplay.length;

    const documentFragmentAlumnis = document.createDocumentFragment();
    for (let j = 0; j < alumnisToDisplay.length; j++) {
      documentFragmentAlumnis.appendChild(alumnisToDisplay[j].html);
    }
    const gridAlumnis = document.getElementsByClassName("alumnis")[0];
    gridAlumnis.innerHTML = "";
    gridAlumnis.appendChild(documentFragmentAlumnis);
    const countAlumnisElement = document.getElementById("alumnis-count");
    countAlumnisElement.innerHTML = alumnisToDisplay.length;

    if (window.lozad) {
      const observer = lozad();
      observer.observe();
    }
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
