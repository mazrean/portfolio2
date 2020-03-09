<script>
	import Title from '../components/Title.svelte'

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Title {segment} />

<main>
	<slot></slot>
</main>