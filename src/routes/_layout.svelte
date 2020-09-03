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
		z-index: 100;
		display: flex;
		justify-items: right;
		width: 120px;
	}
	@media screen and (max-width: 640px) {
		main {
			width: 100%;
		}
	}
</style>

<Header />
<div class="container">
	<Menu {segment}></Menu>

	<main>
		<slot></slot>
	</main>
</div>

