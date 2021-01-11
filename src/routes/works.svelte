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
			<a
				href="https://github.com/titech-cpp/sqlboiler">ORMジェネレーター</a><br />
			2020年4~8月に大学のプログラミング創造演習という自由に好きな情報系の創作を行う授業で制作したものです。
			Golangの既存のORM(もしくはそれに類するもの)には
			<a href="https://github.com/go-gorm/gorm">GORM</a>、
			<a href="https://github.com/volatiletech/sqlboiler">sqlboiler</a>、
			<a href="https://github.com/xo/xo">xo</a>
			などがありますが、サーバーサイドの開発で使う中でこれらでは型安全性が足りていないと感じました。
			具体的にはテーブルの情報がORMに組み込まれていないため、実行時エラーとなるSQLを実行できてしまいますが、
			これを型制約により防ぐことができるのではないかと考えました。
			そこでDBスキーマからコード生成を行うことでテーブルの情報も用いたより型安全なORMを生成できる、
			スキーマ駆動なORMを生成するツールを作れれば良いのではないかと考え作った試作品です。
			現在、この試作品で得た知見を元により拡張性の高い完成品のツールを製作中です。
		</li>
		<li>
			<a
				href="https://hackason20_winter_2.trap.show/customtheme-server/">Qtheme</a><br />
			サークルの部内ハッカソンで1週間で作った、部内チャットツールtraQのテーマ管理ツールです。自分はサーバーサイドを担当していました。
			部内チャットツールtraQにはカスタムテーマとそのJSONエクスポートの機能がついているのですが、
			一度テーマを変えると元のテーマに戻すことが出来ず、
			バージョン管理が非常に大変でした。
			このツールはその改善を目的としたツールで、テーマの公開・バージョン管理ができるようになっています、
			サーバーのOpenAPIは<a
				href="https://hackason20_winter_2.trap.show/customtheme-server/openapi/">https://hackason20_winter_2.trap.show/customtheme-server/openapi/</a>のようになっています。
			traQ側の認証と連携するために(本来は認証ではなく認可の仕組みですが)OAuth2.0のAuthorization
			Flowを用いています。 現在も運用・開発が続いています。
		</li>
		<li>
			<a
				href="https://github.com/traPtitech/trap-collection-server"><pre>traP Collection</pre></a><br />
			サークルのSysAd班として制作しているゲームランチャーです。
			traPというサークルは現在はWebアプリケーションなどのデジタル創作全般を取り扱うようになっていますが、
			元々は主にゲーム製作を行うサークルでした。
			そのため現在でもゲーム製作が盛んであり、毎年多くのゲームが制作されています。
			このゲームランチャーはそれらのゲームの管理・文化祭の公開・販売を行うものです。
		</li>
	</Basic>
</div>
