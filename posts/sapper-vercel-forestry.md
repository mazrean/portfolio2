---
title: Sapper+Vercel+Forestryでポートフォリオにブログ機能をつけた
custom_slug: sapper_vercel_forestry_portfolio
publishDate: 2021-04-28T00:00:00.000+09:00
updateDate: 2021-04-29T00:00:00.000+09:00
thumbnail: ''
tags:
- svelte
- forestry
- vercel
- sapper
isPublish: false

---
このポートフォリオにブログ機能をつけました。

実は機能自体は今年1月時点でついていたのですが、CMSを設定しておらず書くのが面倒だったため、ずっとno itemsで放置してしまっていました(おい)

今回CMSとしてForestryを設定してまともにブログとして使えるようにして、初めての記事を書いています。

# 技術選定

もともとポートフォリオはSapperを用いて作っていたため、ベースがSapperとするのは決めていました。そのため、ここではそれ以外のもの、具体的には

* markdownパーサー
* デプロイ先
* CMS

を選ぶ際に考えたことを書いていきます。

## markdownパーサー

真っ先に考えたのはtraPで使っているチャットtraQが使っている\[markdown-it\](https://github.com/markdown-it/markdown-it)でした。こちらを使えば

* traQで使い慣れた記法がそのまま使える
* 使った経験があるため、実装が楽

というメリットがありました。しかし、今回は\[remark\](https://github.com/remarkjs/remark)を使用しました。remarkはmarkdownを抽象構文木へ変換後、markdownの抽象構文木からhtmlの抽象構文木へ変換しhtmlとするという、抽象構文木を利用する変換方法が特徴のmarkdownパーサーです。変換の過程に様々なプラグインを入れることで　markdownを容易に拡張できます。今回は

* 拡張の容易さ
* せっかくの機会なので普段使っていないものに触りたい

という2つの考えから、markdownパーサーとしてremarkを利用することにしました。

## デプロイ先

ポートフォリオ自体は当初\[Netlify\](https://www.netlify.com/)にデプロイしていました。しかし、Netlifyは日本国内にサーバーを持たないため、日本からのリクエストに対するレスポンスの速度が非常に遅くなってしまっていました。そこで、ブログ機能をつける際にデプロイ先を日本国内にサーバーを持つ\[Vercel\](https://vercel.com/)に変更しました。これによって、大幅に応答速度が速くなり表示までの速度が改善されました。

## CMS

上記のデプロイ先で述べたとおり、当初はNetlifyにデプロイしていたため相性の良いNetlify CMSを用いる予定でした。しかし、デプロイ先をVercelに変更したことでこのメリットが消え、他の