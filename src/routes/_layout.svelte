<script lang="ts">
	// @ts-check
	import Header from '../components/Header.svelte'
	import Menu from "../components/Menu.svelte"
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
	}
	.container {
		display: flex;
		justify-content: center;
	}
	.menu {
		position: fixed;
		right: 0;
	}
</style>

<Header />
<div class="container">
	<div class="menu">
		<Menu {segment}></Menu>
	</div>

	<main>
		<slot></slot>
	</main>
</div>

