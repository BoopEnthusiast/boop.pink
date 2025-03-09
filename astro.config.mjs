// @ts-check
import { defineConfig } from 'astro/config';
import { markdownStylization } from './markdown-stylization.mjs';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [markdownStylization]
    },
});
