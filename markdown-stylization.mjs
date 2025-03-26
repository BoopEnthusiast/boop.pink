export function markdownStylization() {
    return function (tree, file) {
        let filename = file.basename;
        filename = filename.substr(0, filename.length - 3);

        const [day, month, year] = filename.split('-').map(Number);

        const pubDate = new Date(2000 + year, month - 1, day);

        file.data.astro.frontmatter.layout = '/src/layouts/MarkdownLayout.astro';
        file.data.astro.frontmatter.author = 'Boop';
        file.data.astro.frontmatter.pubDate = pubDate;
    }
}