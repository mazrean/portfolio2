<style>
  div{
	width:100%;
	height: 60px;
	overflow:hidden;
	display: flex;
	align-items: center;
	justify-content: center;
  }

  h1 {
  font-size: 36px;
	font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
	font-weight: bold;
	border-bottom: #022b77 solid 2px;
	overflow: hidden;
	white-space: nowrap;
	letter-spacing: .15em;
	margin: 0;
  }
</style>

<script lang="ts">
	// @ts-check
	export let segment: string;
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Menu from "./Menu.svelte"
	let visible = false
	onMount(async () => {
		visible = true
	})
</script>

<div>
	{#if visible}
	<h1 in:fade = "{{delay:0,duration:2000}}" >Mazrean's Portfolio</h1>
	{/if}
	<Menu {segment} />
</div>