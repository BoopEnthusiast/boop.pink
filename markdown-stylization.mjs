export function markdownStylization() {
    // All remark and rehype plugins return a separate function
    return function (tree, file) {
        file.data.astro.frontmatter.layout = '/src/layouts/MarkdownLayout.astro';
    }
}