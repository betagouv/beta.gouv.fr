import { z } from "zod";

const domaines = ["Animation", "Coaching", "Déploiement", "Design", "Développement", "Intraprenariat", "Produit", "Autre"];

export const schema = z.object({
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
            startups: z.array(z.string()).optional(),
        })
    ),
    previously: z.array(z.string()).optional().nullable(),
    startups: z.array(z.string()).optional().nullable(),
    badges: z.array(z.string()).optional().nullable(),
    domaine: z.enum(domaines),
    competences: z.array(z.string()).optional(),
    teams: z.array(z.string()).optional().nullable(),
});
