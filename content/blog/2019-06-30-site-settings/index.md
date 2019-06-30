---
title: Gatsby での各種サイト設定
date: "2019-06-30T00:08:00"
description: 'GatsbyでPWA設定とSNS設定をする手順'
tags: ['gatsby', 'github pages', 'react']
---

# これは何？

GatsbyでPWA設定とSNS設定をする手順

# PWA対応

manifest.json を生成させる。 `gatsby-plugin-manifest` が利用可能。
マニフェストの内容とアイコン類は、便利なサイトを使って自動生成する。

- gatsby-plugin-manifest
    - 手順: https://takumon.com/2018/10/08/
    - 生成: https://app-manifest.firebaseapp.com/

# SEO(OGP)対応

すでに starter で <SEO /> が利用されており、自動設定されている。

