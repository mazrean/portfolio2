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
      <a href="https://github.com/mazrean/separated-webshell">separated-webshell</a><br/>
      ssh接続をdockerコンテナに振り分けるアプリケーションです。
      CPCTF2021ユーザーごとに隔離されたWebshellを実現するために開発しました。
      しっかりLICENCEなどを設定してOSSとして公開予定です。
    </li>
    <li>
      <a href="https://github.com/titech-cpp/sqlboiler">ORMジェネレーター</a><br/>
      GolangのORMのジェネレーターです。
      スキーマ駆動、データベース構造を利用して型をつけることで
      コンパイルが通るならば正しいSQLとなる機能などが特徴です。
    </li>
    <li>
      <a href="https://hackason20_winter_2.trap.show/customtheme-server/">
        Qtheme
      </a><br />
      サークルの部内ハッカソンで1週間で作った、部内チャットツールtraQのテーマ管理ツールです。自分はサーバーサイドを担当していました。
    </li>
    <li>
      <a href="https://github.com/traPtitech/trap-collection-server"
        >traP&ensp;Collection</a
      ><br />
      traPで開発されたゲームの管理・文化祭の公開・販売を行うゲームランチャーです。
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
