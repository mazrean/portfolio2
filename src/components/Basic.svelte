<script lang="ts">
	// @ts-check
	import SubTitleUnderline from "./SubTitleUnderline.svelte";
	export let title: string;
	export let discription: string;
</script>

<style>
	div.wrapper {
		width: 100%;
		padding-left: 10px;
		align-items: flex-start;
		padding-right: 10px;
		margin: 0 auto;
	}
	.slot {
		padding-left: 10px;
		width: 100%;
		margin-left: 0;
		margin-right: auto;
	}
	hr {
		display: block;
		border: #022b77;
		background-color: #022b77;
		height: 1px;
		width: 80%;
		margin-left: 0;
		margin-right: auto;
	}
	p {
		margin-right: auto;
		margin-left: 0;
	}
</style>

<div class="wrapper">
	<SubTitleUnderline {title} />
	<ul class="slot">
		<slot />
	</ul>
	{#if discription}
		<hr />
		<p>{discription}</p>
	{/if}
</div>
