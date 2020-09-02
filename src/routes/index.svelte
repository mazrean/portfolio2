<style>
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
</style>

<script lang="ts">
	// @ts-check
	import Basic from "../components/Basic.svelte"
	const today = new Date()
	const grade = today.getMonth()>=4?today.getFullYear()-2018:today.getFullYear()-2019
	const strGrade = grade>4?`修士${grade-4}年`:`学部${grade}年`
</script>

<svelte:head>
  <title>Introduction</title>
</svelte:head>

<div>
	<Basic title="Profile">
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
				<span class="content"><a href="https://trap.jp/">デジタル創作同好会traP</a>,折り紙同好会</span>
			</div>
		</li>
	</Basic>
	<Basic title="Performance">
		<li>9月7日(土)にISUCON9予選に参加しました</li>
		<li>ICTSC予選に出場し、二次予選を11位で突破しました</li>
		<li>インターンでN-ISUCONに出場し、4位でした</li>
		<li>ICTSC本戦に出場し、9位でした</li>
	</Basic>
	<Basic title="Skills" discription="上にあるものほど得意です。">
		<li>Golang</li>
		<li>MySQL,docker</li>
		<li>HTML/CSS/JavaScript</li>
		<li>Svelte/React.js/Vue.js</li>
		<li>React Native</li>
		<li>C#/F#</li>
	</Basic>
	<Basic title="Interest">
		<li>web系(とくにサーバーサイド)</li>
		<li>低レイヤ系(OS)</li>
	</Basic>
	<Basic title="Favorite">
		<li>Golang</li>
		<li>折り紙</li>
	</Basic>
	<Basic title="Link">
		<li><a href="https://github.com/mazrean">Github</a></li>
		<li><a href="https://atcoder.jp/users/mazrean">AtCoder</a></li>
		<li><a href="https://trap.jp/author/mazrean/">所属しているサークルtraPのブログ</a></li>
	</Basic>
</div>
