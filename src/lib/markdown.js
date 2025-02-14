// @ts-nocheck
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { parse } from 'svelte/compiler';
import { unified } from 'unified';

async function markdownToHtml(string) {
    return unified()
        .use(remarkParse) // turn Markdown into ast
        .use(remarkRehype, { allowDangerousHtml: true }) // turn Markdown ast into HTML ast
        .use(rehypeStringify, { allowDangerousHtml: true }) // turn HTML ast into HTML
        .process(string);
}

async function html(content) {
    const svast = parse(content);
    const { start, end } = svast.html;
    const string = content.slice(start, end);
    const html = await markdownToHtml(string);

    return {
        code: content.replace(string, html),
    };
}

function markdown() {
    return {
        name: 'markdown',
        markup({ content, filename }) {
            if (filename.endsWith('.md')) {
                return html(content);
            }
        },
    };
}

export default markdown;