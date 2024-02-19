import { z } from "zod";

export const schema = z.object({
    title: z.string(),
    mission: z.string(),
    sponsors: z.array(z.string()).optional(),
    incubator: z.string(),
    contact: z.string(),
    link: z.string().optional().nullable(),
    repository: z.string().optional().nullable(),
    accessibility_status: z.string().optional(),
    dashlord_url: z.string().optional().nullable(),
    stats: z.boolean().optional().nullable(),
    stats_url: z.string().optional().nullable(),
    budget_url: z.string().optional(),
    analyse_risques: z.boolean().optional(),
    analyse_risques_url: z.string().optional(),
    events: z.array(z.object({ name: z.string(), date: z.date() })).optional(),
    phases: z.array(z.object({ name: z.string(), start: z.date(), comment: z.string().optional() })).optional(),
    techno: z.array(z.string()).optional(),
    usertypes: z.array(z.string()).optional(),
    redirect_from: z.array(z.string()).optional(),
    fast: z.object({ promotion: z.number(), montant: z.number() }).optional(),
});
