import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productions = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/productions',
  }),

  schema: z.object({
    title: z.string(),

    description: z.string().optional(),

    date: z.coerce.date(),

    type: z.enum([
      "project",
      "artifact",
    ]),

    status: z.enum([
      "finished",
      "current",
      "future",
      "cancelled",
      "paused",
    ]),

    mainInterest: z.string(),

    secondaryInterests: z.array(
      z.string().optional()
    ).default([]),

    url: z.string().optional(),

    smurl: z.string().optional(),

    thumbnail: z.string().optional(),

    project: z.string().optional(),

    blog: z.string().optional(),

    otherImages: z.array(z.string()).optional(),
  }),
});

const now = defineCollection({
  loader: glob({
    pattern: '**/now.md',
    base: './src/content',
  }),

  schema: z.object({
    lastdate: z.coerce.date(),
  }),
});

export const collections = {
  productions,
  now,
};