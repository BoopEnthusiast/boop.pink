import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { rssSchema } from '@astrojs/rss';

const daily = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/pages/daily' }),
    schema: rssSchema,
});

export const collections = { daily };