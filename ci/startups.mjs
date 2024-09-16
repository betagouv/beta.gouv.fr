import fs from "node:fs/promises";
import { z } from "zod";

const organisationsPath = "./content/_organisations";
const organisationsIds = (await fs.readdir(organisationsPath))
  .filter((path) => path.endsWith(".md"))
  .map((p) => p.replace(/\.md$/, ""));

export const schema = z
  .object({
    title: z.string(),
    mission: z.string(),
    sponsors: z
      .array(z.enum(organisationsIds.map((id) => `/organisations/${id}`)))
      .optional(),
    incubator: z.string(),
    contact: z.string(),
    link: z.string().optional().nullable(),
    repository: z.string().optional().nullable(),
    accessibility_status: z.string().optional(),
    dashlord_url: z.string().optional().nullable(),
    stats: z.boolean().optional().nullable(),
    stats_url: z.string().optional().nullable(),
    budget_url: z.string().optional().nullable(),
    analyse_risques: z.boolean().optional().nullable(),
    analyse_risques_url: z.string().optional().nullable(),
    events: z.array(z.object({ name: z.string(), date: z.date() })).optional(),
    phases: z
      .array(
        z.object({
          name: z.string(),
          start: z.date(),
          end: z.date().optional().nullable(),
          comment: z.string().optional().nullable(),
        }),
      )
      .optional(),
    techno: z.array(z.string()).optional(),
    usertypes: z.array(z.string()).optional(),
    thematiques: z.array(z.string()).optional(),
    redirect_from: z.array(z.string()).optional(),
    fast: z.object({ promotion: z.number(), montant: z.number() }).optional(),
    mon_service_securise: z.boolean().optional().nullable(),
  })
  .superRefine((obj, ctx) => {
    if (
      obj.phases.length !==
      Array.from(new Set(obj.phases.map((p) => p.name))).length
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Duplicated phases",
      });
    }

    for (const phase of obj.phases) {
      if (phase.end && phase.end <= phase.start) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phase.end should be after phase.start",
        });
      }
    }
  });
