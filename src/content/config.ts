import { z, defineCollection } from 'astro:content';

const authors = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    order: z.number().optional(),
    isFeatured: z.boolean().optional(),
    name: z.string(),
    workImg: z.union([image(), z.string()]).optional(),
    caseURL: z.union([z.string().url(), z.string()]).optional(),
    thumbnails: z.string().optional(),
    caseThumbnails: z.array(image()).optional(),
  }),
});

export const collections = {
  'authors': authors,
};