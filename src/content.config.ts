import { defineCollection } from 'astro:content';

import { glob } from 'astro/loaders';

const dailyBlog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/daily" }),
});

export const collections = { dailyBlog };