<script lang="ts">
	// @ts-check
	import Header from "../components/Header.svelte";
	import Menu from "../components/Menu.svelte";
	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0;
		box-sizing: border-box;
		display: flex;
		justify-content: left;
		width: 50%;
		flex-direction: column;
	}
	.container {
		display: flex;
		justify-content: center;
	}
	@media screen and (max-width: 640px) {
		main {
			width: 100%;
		}
	}
</style>

<Header />
<div class="container">
	<Menu {segment} />

	<main>
		<slot />
	</main>
</div>
