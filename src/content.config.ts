import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    readingMinutes: z.number().default(3),
    author: z.string().optional(),
    canonical: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { blog };
