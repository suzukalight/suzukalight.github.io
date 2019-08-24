---
title: yarn workspaceでMonorepo+TypeScript環境をつくる
date: "2019-08-18T00:02:00"
category: Technology
tags: ['monorepo', 'workspace', 'create-react-app', 'typescript', 'prisma2']
hero: ./yarn_workspace.png
status: 'published'
---

Monorepo環境で、__yarn workspace__ を使って、__create-react-app --typescript__ した client パッケージと、__prisma2__ で作成した server パッケージを共存させる手順のメモです。

# セットアップ: yarn workspace

## リポジトリ作成

```bash
$ mkdir monorepo-react-prisma2
$ cd monorepo-react-prisma2
$ git init
$ yarn init -y
```

## package.json で workspace を設定

yarn workspace で Monorepo環境を構築する場合は、package.jsonに `private: true` と `workspaces: {...}` の2つを記述することになっています。

- packages: ワークスペースの対象となるディレクトリを指定します。ワイルドカード指定が可能です。
- nohoist: ワークスペース内のnpmモジュールは、デフォルトで共用になります（容量削減）。一方で共用設定をするとトラブルになってしまうようなパッケージについては、nohoistを指定することで、子パッケージ内で個別管理させることができるようになります。

```json:title=package.json
{
  "name": "monorepo-react-prisma2",
  "version": "1.0.0",
  "main": "index.js",
  "author": "suzukalight <mail@mkubara.com>",
  "license": "MIT",
  "private": true,
  "workspaces": {
    "packages": [
      "src/*"
    ],
    "nohoist": [
      "**/react-scripts",
      "**/react-scripts/**",
      "**/@generated",
      "**/@generated/**"
    ]
  }
}
```

# client: create-react-app --typescript

create-react-app で TypeScript の環境を作成します；

```bash
$ npx create-react-app src/client --typescript
```

## yarn workspace client add
クライアント側でしか使わないようなパッケージのインストールを行う場合は、`yarn workspace client add` コマンドが使えます。

```bash
$ yarn workspace client add node-sass
```

client側のpackage.jsonにのみ、設定が追加されます；

```json:title=/src/client/package.json
{
  "dependencies": {
    "node-sass": "^4.12.0",
  },
}
```

ルートのpackage.jsonに、クライアント起動コマンドを追加します；

```json:title=package.json
{
  "scripts": {
    "cl:start": "yarn workspace client start",
  },
}
```

これでクライアントの開発環境が起動できるようになりました；

```bash
$ yarn cl:start
```

# server: prisma2

サーバ環境のディレクトリを作成します；

```bash
$ mkdir src/server
$ yarn init -y
```

[PhotonJs](https://github.com/prisma/photonjs/tree/master/examples/typescript/graphql) のサンプルから、5つのファイルをコピーし、初期環境としました；

```
- src/server
    - /prisma/schema.prisma
    - /prisma/seed.ts
    - /src/index.ts
    - /src/schema.graphql
    - /src/types.ts
```

Lift + generate します；

```bash
$ prisma2 lift save --name 'init'
$ prisma2 lift up
$ yarn seed
$ prisma2 generate
```

ルートのpackage.jsonに、サーバ起動コマンドを追加します；

```json:title=package.json
{
  "scripts": {
    "sr:start": "yarn workspace server start",
  },
}
```

これでサーバの開発環境が起動できるようになりました；

```bash
$ yarn sr:start
```

# Lint + Prettier

- eslint, prettier, plugin のインストール（React向け）
- TypeScript の Linting に `@typescript-eslint/eslint-plugin @typescript-eslint/parser` を追加
- 各プロジェクトごとに、 `.prettierrc`, `.eslintrc.json`, `tsconfig.json` を追加

## yarn install

```bash
$ yarn add -D -W prettier eslint eslint-config-prettier eslint-plugin-prettier
$ yarn add -D -W eslint-plugin-import eslint-plugin-flowtype eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
$ yarn add -D -W @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## package.json

```json:title=package.json
{
  "scripts": {
    "lint": "yarn cl:lint && yarn sr:lint",
    "cl:lint": "eslint --fix --ext .jsx,.js,.tsx,.ts ./src/client/src",
    "sr:lint": "eslint --fix --ext .jsx,.js,.tsx,.ts ./src/server/src",
  },
}
```

## .prettierrc

```json:title=src/client/.prettierrc, src/server/.prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "all",
  "singleQuote": true,
  "semi": true
}
```

## .eslintrc.json

```json:title=src/client/.eslintrc.json, src/server/.eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "plugins": ["@typescript-eslint", "prettier"],
  "env": { "node": true, "es6": true },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": "off"
  }
}
```

## tsconfig.json

```json:title=src/client/tsconfig.json, src/server/tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
```

## Lint + Prettier 実行

これでクライアント・サーバ両方のLint+Prettierが実行できるようになりました；

```bash
$ yarn lint
```

> もし「pluginが読み取れない」系のエラーが発生した場合は、`@typescript-eslint/eslint-plugin @typescript-eslint/parser` のバージョンを 1.3 にダウングレードしてみると良いかもしれません。

# Husky + lint-staged

クライアント・サーバどちらのファイルがコミットされても、huskyによってLint+Prettierが行われるように設定します；

```json:title=package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "./src/client/src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ],
    "./src/server/src/**/*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```
