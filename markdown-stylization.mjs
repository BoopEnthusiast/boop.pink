export function markdownStylization() {
    return function (tree, file) {
        file.data.astro.frontmatter.layout = '/src/layouts/MarkdownLayout.astro';
        file.data.astro.frontmatter.author = 'Boop'
    }
}