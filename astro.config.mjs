// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
        layouts: {
            // Default layout for markdown
            $: './src/layouts/MarkdownLayout.astro'
        }
    }
});
