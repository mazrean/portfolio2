<script lang="ts">
	// @ts-check
	import Basic from "../components/Basic.svelte";
	const today = new Date();
	const grade =
		today.getMonth() >= 4
			? today.getFullYear() - 2018
			: today.getFullYear() - 2019;
	const strGrade = grade > 4 ? `修士${grade - 4}年` : `学部${grade}年`;
</script>

<style>
	.wrapper {
		width: 100%;
	}
	.tag {
		display: inline-block;
		width: 64px;
	}
	.content {
		display: inline-block;
	}
	.box {
		display: flex;
		align-items: flex-start;
		width: 100%;
	}
	span {
		margin-right: 10px;
	}
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
	<title>Introduction</title>
</svelte:head>

<div class="wrapper">
	<Basic title="Profile" discription="">
		<li>
			<div class="box">
				<span class="tag">HN</span>
				<span>:</span>
				<span class="content">mazrean</span>
			</div>
		</li>
		<li>
			<div class="box">
				<span class="tag">所属</span>
				<span>:</span>
				<span class="content">東京工業大学{strGrade}</span>
			</div>
		</li>
		<li>
			<div class="box">
				<span class="tag">サークル</span>
				<span>:</span>
				<span class="content"><a
						href="https://trap.jp/">デジタル創作同好会traP</a>,折り紙同好会</span>
			</div>
		</li>
	</Basic>
	<Basic title="Performance" discription="">
		<li>ICTSC2019本戦にチーム「stohm」で出場し、9位でした</li>
		<li>ICTSC2020予選にチーム「xxNaNxx」で出場し、8位で予選突破しました</li>
		<li>セキュリティキャンプ全国大会2020オンラインに参加しました</li>
		<li>mixi Bug Shooting Challenge #5 ONLINEで優勝しました</li>
	</Basic>
	<Basic title="Skills" discription="上にあるものほど得意です。">
		<li>Golang</li>
		<li>MySQL,docker</li>
		<li>Rust</li>
		<li>Svelte</li>
		<li>HTML/CSS/JavaScript</li>
		<li>React.js/Vue.js</li>
		<li>C#/F#</li>
	</Basic>
	<Basic title="Interest" discription="">
		<li>サーバーサイド</li>
		<li>低レイヤ系(OS)</li>
	</Basic>
	<Basic title="Favorite" discription="">
		<li>オンラインのLT会・講習会の聴講</li>
		<li>Golang</li>
	</Basic>
	<Basic title="Link" discription="">
		<li><a href="https://github.com/mazrean">Github</a></li>
		<li><a href="https://atcoder.jp/users/mazrean">AtCoder</a></li>
		<li>
			<a
				href="https://trap.jp/author/mazrean/">所属しているサークルtraPのブログ</a>
		</li>
	</Basic>
</div>
