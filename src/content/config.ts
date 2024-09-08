import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				description: z.string(),
				sidebar: z.object({
					order: z.number(),
				}),
			})
		})
	}),
};
