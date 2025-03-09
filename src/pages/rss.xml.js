import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const daily = await getCollection('daily');
    return rss({
        title: "Boop's Blog",
        description: "A personal blog by Boop",
        site: context.site,
        items: daily.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/daily/${post.id}/`,
            content: sanitizeHtml(parser.render(post.body), {}),
            ...post.data,
        })),
    });
}