import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { parse, stringify } from "yaml";

/**
 * check authors and startups markdown files metadata againt schemas
 * ensure members startups exist
 */

import { schema as authorsSchema } from "./authors.mjs";
import { schema as startupsSchema } from "./startups.mjs";

const authorsPath = "./content/_authors";
const startupsPath = "./content/_startups";

const authorsFiles = fs
  .readdirSync(authorsPath)
  .filter((path) => path.endsWith(".md"))
  .map((p) => p.replace(/\.md$/, ""));
const startupsFiles = fs
  .readdirSync(startupsPath)
  .filter((path) => path.endsWith(".md"))
  .map((p) => p.replace(/\.md$/, ""));

const checkMarkdownFileHeader = async (filePath, schema) => {
  const mdContent = fs.readFileSync(filePath, "utf8");
  const mdData = matter(mdContent);
  const parsed = await schema.safeParse(mdData.data);
  if (!parsed.success) {
    return [{ path: filePath, errors: parsed.error.errors.map((i) => ({ path: i.path.join("/"), message: i.message, code: i.code, received: i.received })) }];
  }
};

const authorsErrors = (
  await Promise.all(
    authorsFiles
      //.filter((f) => f === "magali.migeon")
      .flatMap(async (file) => {
        const mdPath = path.join(authorsPath, `${file}.md`);
        return checkMarkdownFileHeader(mdPath, authorsSchema);
      })
  )
)
  .filter(Boolean)
  .flatMap((a) => a);

const startupsErrors = (
  await Promise.all(
    startupsFiles.flatMap(async (file) => {
      const mdPath = path.join(startupsPath, `${file}.md`);
      return checkMarkdownFileHeader(mdPath, startupsSchema);
    })
  )
)
  .filter(Boolean)
  .flatMap((a) => a);

const errors = [...authorsErrors, ...startupsErrors];

errors.forEach((error) => {
  console.error(`${error.path}:`);
  console.error(`\t${error.errors && error.errors.map((error) => `${error.path}: ${error.received}: ${error.message.substring(0, 100)}... ${error.code || ""}`).join("\n\t")}`);
});

const checkAuthors = () => {
  return authorsFiles.forEach((file) => {
    const mdPath = path.join(authorsPath, `${file}.md`);
    //  console.log(mdPath);
    //fs.readFile(mdPath);
    //const mdContent = await
    const mdContent = fs.readFileSync(mdPath, "utf8");
    //.then((data) => console.log("xxx" + data))
    //.catch(console.error);
    //const mdContent = await fs.readFile(mdPath, "utf8");
    //const mdContent = "";
    //console.log(mdContent);
    const matterData = matter(mdContent);
    const mdData = matterData.data;
    if (mdData.missions && mdData.missions.length === 1 && (mdData.previously || mdData.startups)) {
      console.log(file, mdData.previously, mdData.startups);
      mdData.missions[0].startups = [...(mdData.previously || []), ...(mdData.startups || [])];
      delete mdData.previously;
      delete mdData.startups;
      console.log(JSON.stringify(mdData));
      const content = `${matterData.matter}\n---\n${matterData.content}`;
      fs.writeFileSync(mdPath, content);
    }
    return mdData;
  });
};

await checkAuthors();

if (errors.length) {
  console.log(errors.length, "errors");
  process.exit(1);
}
