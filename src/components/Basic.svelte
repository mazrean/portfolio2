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
	h2 {
		max-height: 40px;
		font-size: 24px;
    	font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));
		font-weight: bolder;
		border-bottom: 2px #022b77 solid;
		padding: 0 10px;
		margin-bottom: 10px;
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
	div.title {
		display: inline-flex;
		justify-content: left;
		width: 100%;
		margin: 0 auto;
	}
	p {
		margin-right: auto;
		margin-left: 0;
	}
</style>

<script lang="ts">
	// @ts-check
	export let title: string;
	export let discription: string;
</script>

<div class="wrapper">
	<div class="title">
		<h2>{title}</h2>
	</div>
	<ul class="slot">
		<slot />
	</ul>
	{#if discription}
		<hr />
		<p>{discription}</p>
	{/if}
</div>
