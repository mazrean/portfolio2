<script lang="ts">
  // @ts-check
  import Basic from "../components/Basic.svelte";
  const today = new Date(new Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  const grade =
    today.getMonth() >= 3
      ? today.getFullYear() - 2018
      : today.getFullYear() - 2019;
  const strGrade = grade > 4 ? `修士${grade - 4}年` : `学部${grade}年`;
</script>

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
        <span class="content"
          ><a href="https://trap.jp/">デジタル創作同好会traP</a
          >,折り紙同好会</span
        >
      </div>
    </li>
  </Basic>
  <Basic title="Performance" discription="">
    <li>
      ISUCON11に「手が3本あるテディーベア」として参加し、本戦に出場しました
    </li>
    <li>
      ICTSC 2021 冬の陣にチーム「Windows
      11へのアップグレードオファーは最終段階に入りました」で出場し、3位でした
    </li>
    <li>mixi Bug Shooting Challenge #5 ONLINEで優勝しました</li>
    <li>セキュリティキャンプ全国大会2020オンラインに参加しました</li>
    <li>
      <a href="https://trap.jp/post/1263/">CPCTF2021</a
      >で作問・インフラ・Webshell開発を担当しました
    </li>
  </Basic>
  <Basic title="Skills" discription="">
    <li>Golang</li>
    <li>Rust</li>
    <li>terraform/AWS/GCP</li>
    <li>Kubernetes</li>
    <li>Svelte</li>
    <li>React.js/Vue.js</li>
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
      <a href="https://trap.jp/author/mazrean/">
        所属しているサークルtraPのブログ
      </a>
    </li>
  </Basic>
</div>

<style>
  .wrapper {
    width: 100%;
  }
  .tag {
    display: inline-block;
    width: 64px;
    max-width: 15%;
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
    font-family: "icomoon" !important;
    content: "\e9cb";
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
