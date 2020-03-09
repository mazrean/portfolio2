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
	animation: 
		opacity 2.0s
  }
	
  @keyframes opacity {
	from { opacity: 0 }
	to { opacity: 1 }
  }
</style>

<script>
	export let segment;
	import Menu from "./Menu.svelte"
</script>

<div>
	<h1>Mazrean's Portfolio</h1>
	<Menu {segment} />
</div>