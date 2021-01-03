<script lang="ts">
	// @ts-checks
	import Basic from "../components/Basic.svelte";
</script>

<style>
	a:after {
		font-family: "Font Awesome 5 Free";
		content: "\f0c1";
		font-size: 0.7em;
		font-weight: 900;
		padding: 0 0 0 0.3em;
		display: inline-block;
		font-style: normal;
		font-variant: normal;
		text-rendering: auto;
		line-height: 1;
	}
</style>

<svelte:head>
	<title>Works</title>
</svelte:head>

<div>
	<Basic title="Works" discription="">
		<li>
			<a href="http://mazrean-twitter-clone.netlify.com/">TwitterClone</a><br />
			2019年5~6月にtraPのWebエンジニアになろう講習会の最終課題として作ったものです。
			自分の初めての制作物です。
		</li>
		<li>
			<a href="https://mazrean-portfolio.netlify.com/#/">旧Portfolio</a><br />
			2019年6月に作った1つ前のポートフォリオです。Vue.js+Vuetifyで作りました。
		</li>
		<li>
			<a
				href="http://hakkasonc.kejun.trap.show/">いあい・まあい・きあい</a><br />
			traP内のハッカソンで作ったゲーム。コマンドは、いあい(攻撃)、きあい(能力上昇)、まあい(移動)の三種類。ターン制。製作時間は8時間15分+α。<br />
			共同制作者(敬称略)<br />
			TA:Kejun<br />
			プログラマ:Kanagu,bonc256<br />
			グラフィック:1mA<br />
		</li>
	</Basic>
</div>
