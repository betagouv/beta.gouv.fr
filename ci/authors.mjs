import fs from "node:fs/promises";

import path from "node:path";

import { z } from "zod";

// todo: share with espace-membre
const domaines = [
  "Animation",
  "Coaching",
  "Déploiement",
  "Design",
  "Développement",
  "Intraprenariat",
  "Produit",
  "Data",
  "Autre",
];

const preventDuplicates = (val, ctx) => {
  if (val && val.length !== new Set(val).size) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "No duplicates allowed.",
    });
  }
};

const startupsPath = "./content/_startups";
const startupsIds = (await fs.readdir(startupsPath))
  .filter((path) => path.endsWith(".md"))
  .map((p) => p.replace(/\.md$/, ""));

export const schema = z
  .object({
    fullname: z.string().min(1),
    role: z.string().min(1),
    link: z.string().optional().nullable(),
    github: z.string().optional().nullable(),
    missions: z.array(
      z.object({
        start: z.date(),
        end: z.date(),
        status: z.string(),
        employer: z.string().optional().nullable(),
        startups: z
          .array(z.enum(startupsIds))
          .optional()
          .superRefine(preventDuplicates),
      }),
    ),
    previously: z
      .array(z.enum(startupsIds))
      .optional()
      .nullable()
      .superRefine(preventDuplicates),
    startups: z
      .array(z.enum(startupsIds))
      .optional()
      .nullable()
      .superRefine(preventDuplicates),
    badges: z.array(z.string()).optional().nullable(),
    domaine: z.enum(domaines),
    competences: z
      .array(z.string())
      .optional()
      .nullable()
      .superRefine(preventDuplicates),
    teams: z.array(z.string()).optional().nullable(),
  })
  .superRefine((obj, ctx) => {
    for (const mission of obj.missions) {
      if (mission.end && mission.end <= mission.start) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Mission.end should be after mission.start",
        });
      }
    }
  });
