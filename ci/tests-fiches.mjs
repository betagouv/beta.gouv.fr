import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

/**
 * check authors and startups markdown files metadata againt schemas
 * ensure members startups exist
 */

import { schema as authorsSchema } from "./authors.mjs";
import { schema as startupsSchema } from "./startups.mjs";

const authorsPath = "./content/_authors";
const startupsPath = "./content/_startups";

const authorsFiles = (await fs.readdir(authorsPath)).filter((path) => path.endsWith(".md")).map((p) => p.replace(/\.md$/, ""));
const startupsFiles = (await fs.readdir(startupsPath)).filter((path) => path.endsWith(".md")).map((p) => p.replace(/\.md$/, ""));

const checkAuthorFile = async (filePath) => {
    const mdContent = await fs.readFile(filePath, "utf8");
    const mdData = matter(mdContent);
    try {
        // check schema
        const parsed = await authorsSchema.parse(mdData.data);

        // check member startups
        const errors = [];
        if (parsed.missions && parsed.missions.length) {
            parsed.missions.forEach((mission, i) => {
                if (mission.startups && mission.startups.length) {
                    // ensure startups OK
                    mission.startups.forEach((startup, j) => {
                        if (!startupsFiles.includes(startup)) {
                            errors.push({ path: filePath, errors: [{ path: `missions/${i}/startups/${j}`, message: `invalid startup ${startup}` }] });
                        }
                    });
                }
            });
        }
        parsed.startups.forEach((startup, j) => {
            if (!startupsFiles.includes(startup)) {
                errors.push({ path: filePath, errors: [{ path: `startups/${j}`, message: `invalid startup ${startup}` }] });
            }
        });
        parsed.previously.forEach((startup, j) => {
            if (!startupsFiles.includes(startup)) {
                errors.push({ path: filePath, errors: [{ path: `previously/${j}`, message: `invalid startup ${startup}` }] });
            }
        });
        return (errors.length && errors) || null;
    } catch (e) {
        if (!e.errors) {
            return null;
        }
        return [{ path: filePath, errors: e.errors.map((i) => ({ path: i.path.join("/"), message: i.message, code: i.code })) }];
    }
};

const authorsErrors = (
    await Promise.all(
        authorsFiles.flatMap(async (file) => {
            const mdPath = path.join(authorsPath, `${file}.md`);
            return checkAuthorFile(mdPath);
        })
    )
)
    .filter(Boolean)
    .flatMap((a) => a);

const checkStartupFile = async (filePath) => {
    const mdContent = await fs.readFile(filePath, "utf8");
    const mdData = matter(mdContent);
    try {
        // check schema
        const parsed = await startupsSchema.parse(mdData.data);
        return (errors.length && errors) || null;
    } catch (e) {
        if (!e.errors) {
            return null;
        }
        return [{ path: filePath, errors: e.errors.map((i) => ({ path: i.path.join("/"), message: i.message, code: i.code })) }];
    }
};

const startupsErrors = (
    await Promise.all(
        startupsFiles.flatMap(async (file) => {
            const mdPath = path.join(startupsPath, `${file}.md`);
            return checkStartupFile(mdPath);
        })
    )
)
    .filter(Boolean)
    .flatMap((a) => a);

const errors = [
    ...authorsErrors,
    ...startupsErrors,
    // startup wihth invalid slug
    //
    // ...startupsFiles
    //     .filter((filePath) => !filePath.match(/^[\w\d-]+$/))
    //     .map((filePath) => {
    //         return { path: `${startupsPath}/${filePath}.md`, errors: [{ path: "file name", message: `Invalid startup id: ${filePath}` }] };
    //     }),
];

errors.forEach((error) => {
    console.error(`${error.path}:`);
    console.error(`\t${error.errors && error.errors.map((error) => `${error.path}: ${error.message} ${error.code || ""}`).join("\n\t")}`);
});

if (errors.length) {
    process.exit(1);
}
