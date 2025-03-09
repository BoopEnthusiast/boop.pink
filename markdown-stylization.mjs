export function markdownStylization() {
    return function (tree, file) {
        file.data.astro.frontmatter.layout = '/src/layouts/MarkdownLayout.astro';
    }
}