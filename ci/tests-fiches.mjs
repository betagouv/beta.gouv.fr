import fs from "node:fs";
//@ts-check
import path from "node:path";
import matter from "gray-matter";
import { parse, stringify } from "yaml";

/**
 * check authors and startups markdown files metadata againt schemas
 * ensure members startups exist
 */

const a = 10;

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
  let mdData;
  try {
    mdData = matter(mdContent);
  } catch (e) {
    return [{ path: filePath, message: e.message }];
  }
  if (mdData) {
    const parsed = await schema.safeParse(mdData.data);
    if (!parsed.success) {
      return [
        {
          path: filePath,
          errors: parsed.error.errors.map((i) => ({
            path: i.path.join("/"),
            message: i.message,
            code: i.code,
            received: i.received,
          })),
        },
      ];
    }
  }
};

console.log(`Checking ${authorsFiles.length} authors`);

const authorsErrors = (
  await Promise.all(
    authorsFiles
      //.filter((f) => f === "magali.migeon")
      .flatMap(async (file) => {
        const mdPath = path.join(authorsPath, `${file}.md`);
        return checkMarkdownFileHeader(mdPath, authorsSchema);
      }),
  )
)
  .filter(Boolean)
  .flat();

console.log(`Checking ${startupsFiles.length} files`);

const startupsErrors = (
  await Promise.all(
    startupsFiles.flatMap(async (file) => {
      const mdPath = path.join(startupsPath, `${file}.md`);
      return checkMarkdownFileHeader(mdPath, startupsSchema);
    }),
  )
)
  .filter(Boolean)
  .flat();

const errors = [...authorsErrors, ...startupsErrors];

for (error of errors) {
  console.error(`${error.path}:`);

  if (error.errors) {
    error.errors?.map((error) => {
      console.error(`\t${error.path} => ${error.message.substring(0, 100)}...`);
      console.error(`\t\treceived: ${error.received} `);
    });
  } else {
    console.error(`\t${error.path}: ${error.message}`);
  }
}

// fix author files missions (WIP)
// const checkAuthors = () => {
//   return authorsFiles.forEach((file) => {
//     const mdPath = path.join(authorsPath, `${file}.md`);
//     const mdContent = fs.readFileSync(mdPath, "utf8");
//     const matterData = matter(mdContent);
//     const mdData = matterData.data;
//     if (mdData.missions && mdData.missions.length === 1 && (mdData.previously || mdData.startups)) {
//       console.log(file, mdData.previously, mdData.startups);
//       mdData.missions[0].startups = [...(mdData.previously || []), ...(mdData.startups || [])];
//       delete mdData.previously;
//       delete mdData.startups;
//       console.log(JSON.stringify(mdData));
//       const content = `${matterData.matter}\n---\n${matterData.content}`;
//       fs.writeFileSync(mdPath, content);
//     }
//     return mdData;
//   });
// };

// await checkAuthors();

if (errors.length) {
  console.log(errors.length, "errors");
  process.exit(1);
} else {
  console.log("No errors");
}
