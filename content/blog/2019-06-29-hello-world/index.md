---
title: Gatsby + GitHub Pages でブログを構築
date: "2019-06-29T23:11:00"
description: 'Gatsby + GitHub Pages でブログを公開するまでの手順'
tags: ['gatsby', 'github pages', 'react']
---


# 背景

- 個人的な発信の場を設け、強化していきたい
- 業務で、月に1,2回ほど内容を更新するブログ的なサイトを作ることになった
- でもWordPressとかは（技術的興味としては）使いたくない

などの理由から、WordPress以外の技術でブログシステムを構築することにした。

私個人のスキルセットはフロントエンド（React）に寄っているので、マークアップやシステム構築はReact+Sass系で行いたい。そこでGatsbyを使ってブログシステムを構築することにしてみた。これはその最初のテスト投稿。

# 手順

## `[username].github.io` の名称でリポジトリを作成

- https://github.com/suzukalight/suzukalight.github.io

このリポジトリ名にしておくと、masterブランチが自動的に公開される。

## Gatsbyの準備

gatsby CLI から、スターターキットをインストールすることができる。

```bash
$ npm i -g gatsby
$ gatsby new suzukalight-github https://github.com/gatsbyjs/gatsby-starter-blog
$ cd suzukalight-github
```

インストールした時点で、すでにブログシステムとして完成しており、dev-serverで起動してデモ体験ができる；

```bash
$ yarn develop
```

## デプロイコマンドの準備

gh-pagesコマンドをインストールし、GitHub Pagesとして公開できるようにする；

```bash
$ yarn add -D gh-pages
$ git init
$ git checkout -b develop
$ git commit -am "gatsby new"
$ git push origin develop
```

masterブランチは公開ファイル用なので、gatsbyシステム全体は別のブランチにコミットしておく必要がある。私はとりあえず develop にコミットすることとした。

## デプロイ実行

以下のデプロイコマンドを package.json に追記する；

```json{3-4}:title=package.json
{
  "scripts": {
    "push": "gh-pages -d public -b master",
    "deploy": "yarn build && yarn push"
  }
}
```

デプロイコマンドを実行すれば、スタティックサイト生成と、GitHub Pagesへの公開がシリアルに行われる。

```bash
$ yarn deploy
```

ビルドから公開まで、約30秒で行われるので、速度としては十分速いと感じる。

## 必要に応じて、GitHub Pages の設定を行う

- 独自ドメインの設定
    - suzukalight.com を割付
    - DNS側に、AレコードとALIASレコードを設定
- HTTPSの強制
    - SSLじゃないとPWA対応ができなくなる
    - 証明書はGitHubが自動で用意してくれる（Let's Encrypt）

# 今後

- [x] テンプレート変更
- [x] タグ追加
- [x] PWA対応
- [x] SNSカード
- [ ] Contentful 使ってみる

