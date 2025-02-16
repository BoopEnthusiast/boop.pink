<script>
    let { text, link } = $props();
</script>

<h2>
    <a href="{link}">{text}</a>
</h2>

<style>
    a {
        text-decoration: none;
        color: var(--text-color);
    }

    h2 {
        margin: 0.7em;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        padding: 0.4em;
    }

    h2:hover {

        text-decoration: none;
        background-color: var(--accent-color-2);
        border-radius: 5px;
    }
</style>