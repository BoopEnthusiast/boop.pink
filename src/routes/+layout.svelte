<script>
    import HeaderButton from "$lib/HeaderButton.svelte";
	let { children } = $props();
</script>

<nav class="nav">
    <HeaderButton text="home" link="/" />
    <HeaderButton text="blog" link="/blog" />
</nav>
<nav class="mobile-nav">
    <HeaderButton text="home" link="/" />
    <HeaderButton text="blog" link="/blog" />
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
        background-color: var(--accent-color-1);
    }

    .mobile-nav {
        display: none;
    }

    @media (max-width: 600px) {
        nav {
            display: none;
        }
        .mobile-nav {
            display: flex;
        }
    }
    
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>