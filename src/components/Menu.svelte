<style>
	@media (max-width: 500px) {
		.ham {
			visibility: hidden;
		}
		li {
			height: 40px;
			width: 100px;
		}
		li.two {
			margin-top: 40px;
		}
		ul {
			width: 120px;
			height: 80px;
			position: fixed;
		}
	}
	@media (min-width: 500px) {
		li {
			height: 0px;
			width: 0px;
		}
		ul {
			visibility: hidden;
			width: 0px;
			height: 0px;
			position: absolute;
		}
	}
	.ham {
		position: absolute;
		right: 5px;
		width: 60px;
		height: 60px;
		cursor: pointer;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ham_line {
		position: absolute;
		width: 40px;
		height: 3px;
		background-color: #022b77;
		transition: all 0.3s;
	}
	.ham_line1 {
		margin-top: -13.3333px;
	}
	.ham_line3 {
		margin-top: 13.3333px;
	}

	.clicked.ham_line1 {
		transform: rotate(45deg);
		margin-top: 0px;
	}
	.clicked.ham_line2 {
		width: 0px;
	}
	.clicked.ham_line3 {
		transform: rotate(-45deg);
		margin-top: 0px;
	}

	ul {
		overflow: hidden;
		margin: 0;
		padding-left: 0;
		padding-bottom: 10px;
		right: 0px;
		top: 60px;
		background-color: transparent;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		z-index: 100;
		transition: all 0.3s;
	}
	ul.clicked {
		visibility: visible;
		width: 120px;
		height: 93px;
	}

	li {
		position: absolute;
		padding-left: 20px;
		padding: 0 10px;
		margin-left: 5px;
		color: #022b77;
		display: flex;
		align-items: center;
		justify-content: left;
		transition: all 0.3s;
	}
	hr {
		border: #022b77;
		background-color: #022b77;
		height: 3px;
		width: 100px;
		margin: 0 auto;
		margin-top: 45px
	}
	li.clicked {
		cursor: pointer;
		height: 40px;
		width: 100px;
	}
	li.two.clicked {
		margin-top: 53px;
	}
	li.mouseover {
		background-color: #022b77;
		color: #ffffff;
	}

	span {
		background-color: transparent;
	}
	li.selected {
		border-left: #022b77 solid 5px;
	}
</style>

<script lang="ts">
	// @ts-check
	import { goto } from '@sapper/app';
	export let segment: string;
	let clicked = false;
	let mouseoverOne = false;
	let mouseoverTwo = false;
	const menuNavi = (path: string)=>{
		return async ()=>{
			clicked = !clicked
			await goto(path, {})
		}
	}
</script>

<div class="ham" on:click={()=>{clicked = !clicked}}>
	<span class="ham_line ham_line1" class:clicked />
	<span class="ham_line ham_line2" class:clicked />
	<span class="ham_line ham_line3" class:clicked />
</div>

<ul class="menu" class:clicked>
	<li
		class="page_list one {mouseoverOne ? 'mouseover' : ''} {segment === undefined ? 'selected' : ''}"
		on:click={menuNavi(".")}
		class:clicked
		on:mouseover={()=>{mouseoverOne=true}}
		on:mouseout={()=>{mouseoverOne=false}}
	>
		<span>Introduction</span>
	</li>
	<hr>
	<li
		class="page_list two {mouseoverTwo ? 'mouseover' : ''} {segment === "works" ? 'selected' : ''}"
		on:click={menuNavi("works")}
		class:clicked
		on:mouseover={()=>{mouseoverTwo=true}}
		on:mouseout={()=>{mouseoverTwo=false}}
	>
		<span>Work</span>
	</li>
</ul>

