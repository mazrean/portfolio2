<script lang="ts">
  // @ts-checks
  import type { space } from "svelte/internal";
  import Basic from "../components/Basic.svelte";
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>

<div>
  <Basic title="Works" discription="">
    <li>
      <a href="https://github.com/mazrean/genorm">GenORM</a><br />
      Go言語のSQL Builderです。 1.18で入ったジェネリクスを利用して、型による制約でバグを防止するのが特徴です。<br
      />
      ドキュメント:
      <a href="https://mazrean.github.io/genorm-docs/ja/">
        https://mazrean.github.io/genorm-docs/ja/
      </a><br />
      Zenn:
      <a href="https://zenn.dev/mazrean/articles/c795c04e4837b4">
        https://zenn.dev/mazrean/articles/c795c04e4837b4
      </a>
    </li>
    <li>
      <a href="https://github.com/mazrean/separated-webshell">
        separated-webshell
      </a><br />
      ssh接続をdockerコンテナに振り分けるアプリケーションです。 CPCTF2021でユーザーごとに隔離されたWebshellを実現するために開発しました。
    </li>
    <li>
      <a href="https://github.com/traPtitech/trap-collection-server">
        traP&ensp;Collection
      </a><br />
      traPで開発されたゲームの管理・文化祭での公開・販売を行うゲームランチャーです。
      2021年の冬コミで販売しました。
    </li>
    <li>
      <a href="https://hackason20_winter_2.trap.show/customtheme-server/">
        Qtheme
      </a><br />
      サークルの部内ハッカソンで1週間で作った、部内チャットツールtraQのテーマ管理ツールです。自分はサーバーサイドを担当していました。
    </li>
  </Basic>
</div>

<style>
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
