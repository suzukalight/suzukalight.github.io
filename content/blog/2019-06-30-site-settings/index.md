---
title: Gatsby のサイトカスタマイズ
date: "2019-06-30T00:08:00"
description: 'GatsbyでPWA対応・OGP対応・syntaxHighlight・テーマ変更などを行う手順'
tags: ['gatsby', 'pwa']
---

Gatsbyのプラグインを利用することで、ブログに必要な数々の設定を簡単におこなうことができた。

# PWA対応

- [Add manifest and favicon](https://github.com/suzukalight/suzukalight.github.io/commit/13b7d4660c560061a3892daa54e76b89162cb2ef)

`gatsby-plugin-manifest` が利用可能。starterで自動インストール済み。

マニフェストの内容とアイコン類は、下記のサイトを使って自動生成することができる。それを `gatsby-config.js` にコピペすれば良い。

- 手順: https://takumon.com/2018/10/08/
- 生成: https://app-manifest.firebaseapp.com/

# OGP対応

starter に付属のコンポーネント `<SEO />` を利用すると、多くの項目について、自動でOGPを設定してくれるため、こちらから追加で何かをする必要はほとんどなかった。

# syntax-highlighter

- [Add syntax highligher](https://github.com/suzukalight/suzukalight.github.io/commit/ed08bb35190bbb2bea121af2a0cedfddff6388a8)

`gatsby-remark-prismjs` のオプションで指定可能。

- [Add gatsby-remark-code-titles](https://github.com/suzukalight/suzukalight.github.io/commit/91aeab5e033a4f8001d363ddf88dd538f80c8e1f)

`gatsby-remark-code-titles` を追加すると、さらにファイル名表記も付与可能に。

# headingにanchorアイコンを付与

- [Add gatsby-remark-code-titles](https://github.com/suzukalight/suzukalight.github.io/commit/410289641fb4da6aa9f5e107f2b8b243a6154f16)

`gatsby-remark-autolink-headers` を追加すると、Markdownのheading要素に対して、鎖マークを付与し、アンカーリンクを提供できるようになる。

# テーマ変更

- [Add typography theme of github](https://github.com/suzukalight/suzukalight.github.io/commit/976447b1a6b7cdeb3a6fd60b6ba8663f8174321b)

starterは [typography.js](https://kyleamathews.github.io/typography.js/) で文字のスタイリングを行っている。typographyjsのテーマにGitHub版の `typography-theme-github` があったので、これを適用した。

