<style>
  div{
		width:100%;
		height: 60px;
		overflow:hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: #022b77 solid 2px;
  }

  h1 {
		font-size: 36px;
		font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
		font-weight: bold;
		overflow: hidden;
		white-space: nowrap;
		letter-spacing: .15em;
		margin: 0 auto;
  }
</style>

<script lang="ts">
	// @ts-check
	import Hamburger from "./Hamburger.svelte"
</script>

<div>
	<h1>Mazrean's Portfolio</h1>
	<Hamburger />
</div>