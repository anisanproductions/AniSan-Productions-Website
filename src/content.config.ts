import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),

  schema: z.object({
    title: z.string(),

    status: z.enum([
      'current',
      'future',
      'completed',
      'cancelled',
      'paused',
    ]),

    type: z.enum(['project', 'artifact']),

    mainInterest: z.string(),
    secondaryInterests: z.array(z.string()).default([]),

    description: z.string(),
    thumbnail: z.string().optional(),

    links: z.object({
      website: z.string().url().optional(),
      social: z.string().url().optional(),
    }).optional(),

    platform: z.string().optional(),

    content: z.object({
      blogTags: z.array(z.string()).default([]),
    }).optional(),

    files: z.object({
      attachment: z.string().optional(),
      collection: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};