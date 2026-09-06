import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const productions = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/productions',
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    date: z.coerce.date().optional(),

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

    mainInterests: z.array(
      z.string()
    ).min(1),

    secondaryInterests: z.array(
      z.string().optional()
    ).default([]),

    url: z.string().optional(),

    file: z.string().optional(),

    thumbnail: z.string().optional(),

    project: z.string().optional(),
  }),
});


const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    date: z.string(),

    tags: z.array(
      z.string()
    ),

    image: z.string().optional(),
  }),
});


export const collections = {
  productions,
  blog,
};