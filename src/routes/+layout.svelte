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
        margin: 0%;
        background-color: #ffc5bb;
    }

    nav a {
        margin: 0.5em 1em;
    }
    
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>