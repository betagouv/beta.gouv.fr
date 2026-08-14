import fs from "node:fs/promises";
import matter from "gray-matter";

// Vérifie l'assemblage JSON:API du site généré : toute référence portée par un
// `relationships` doit pointer vers une ressource réellement présente dans
// `included`. Sans ce contrôle, une erreur de préfixe passe inaperçue, le
// document restant un JSON parfaitement valide. C'est ce qui a laissé les
// versions 2.1 à 2.6 sortir avec un `included` inexploitable.
//
// Seule la v2.7 est vérifiée : les versions antérieures sont publiées avec ce
// défaut et ne peuvent plus être corrigées sans casser leurs consommateurs.
const VERSIONS = ["v2.7"];

// Les incubateurs masqués sont volontairement absents d'`included` : l'API
// n'expose pas leurs métadonnées (leur titre est déjà `null` dans
// `incubators.json`). Leurs produits restent publics et continuent donc de les
// référencer. Ces références ne sont pas résolvables par construction.
const incubatorsPath = "./content/_incubators";
const hiddenIncubators = new Set();

for (const file of await fs.readdir(incubatorsPath)) {
  if (!file.endsWith(".md")) continue;

  const { data } = matter(
    await fs.readFile(`${incubatorsPath}/${file}`, "utf8"),
  );
  if (data.hidden) hiddenIncubators.add(file.replace(/\.md$/, ""));
}

const errors = [];

for (const version of VERSIONS) {
  const path = `./_site/api/${version}/startups.json`;

  let document;
  try {
    document = JSON.parse(await fs.readFile(path, "utf8"));
  } catch (error) {
    errors.push(`${version}: ${path} illisible (${error.message})`);
    continue;
  }

  const included = new Set((document.included ?? []).map((entry) => entry.id));
  if (included.size === 0) {
    errors.push(`${version}: included est vide`);
    continue;
  }

  const missing = new Set();
  for (const startup of document.data ?? []) {
    const relationships = startup.relationships ?? {};
    const referenced = [
      relationships.incubator?.data,
      ...(relationships.incubators?.data ?? []),
    ].filter(Boolean);

    for (const { id } of referenced) {
      if (!included.has(id) && !hiddenIncubators.has(id)) {
        missing.add(`${id} (ex. ${startup.id})`);
      }
    }
  }

  if (missing.size > 0) {
    errors.push(
      `${version}: ${missing.size} référence(s) introuvable(s) dans included : ${[...missing].slice(0, 5).join(", ")}`,
    );
  } else {
    console.log(
      `${version}: ${included.size} ressources incluses, toutes les références résolvent`,
    );
  }
}

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

console.log("No errors");
