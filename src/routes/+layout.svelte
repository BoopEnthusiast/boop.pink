<script>
	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/blog">blog</a>
</nav>

<div>
    {@render children()}
</div>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em 0;
    }

    nav a {
        margin: 0 1em;
    }
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>