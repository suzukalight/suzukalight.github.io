---
title: Role-Based Access Control (RBAC) を実践する
date: '2019-11-24T00:02:00'
category: Technology
tags: ['rbac', 'react']
hero: ./ja2.png
status: 'published'
---

Role-based Access Control は、ユーザと権限とを直接紐付けるのではなく、

# まえがき

## 完成品

実装したリポジトリはこちらです；

https://github.com/suzukalight/study-rbac-client

# Role-based Access Control

https://auth0.com/blog/role-based-access-control-rbac-and-react-apps/

##

## セットアップ

素振り用に create-react-app --typescript します；

```bash
$ npx create-react-app study-rbac-client --typescript
$ cd study-rbac-client
$ yarn
```

react-router-dom をインストールします；

```bash
$ yarn add react-router-dom @types/react-router-dom
```

# 権限

## Permission

「**何に対して**」と「**どういう振る舞い(perform/action)か**」という 2 つの述語を用いて記述します。文字列定数として表現します；

```typescript
[
  'posts:list',
  'posts:create',
  'posts:edit',
  'posts:delete',
  'users:get',
  'users:getSelf',
  'home-page:visit',
];
```

## ルールテーブルの作成

Role と Permission の関係を記述するテーブルを用意します。関係性は大きく **static** と **dynamic** に分けています。

```typescript
const rules: Rule = {
  visitor: {
    static: ['posts:list', 'home-page:visit'],
  },
  writer: {
    static: ['posts:list', 'posts:create', 'users:getSelf', 'home-page:visit'],
    dynamic: {
      'posts:edit': ({ userId, postOwnerId }: PostsEditParams) => {
        if (!userId || !postOwnerId) return false;
        return userId === postOwnerId;
      },
    },
  },
  admin: {
    static: [
      'posts:list',
      'posts:create',
      'posts:edit',
      'posts:delete',
      'users:get',
      'users:getSelf',
      'home-page:visit',
    ],
  },
};
```

**static: string[]**  
「その Role を持っている場合は**無条件で Permission を得られる**」という関係性です。たとえば「Admin であれば、すべての記事の削除権限を得る」などです。

**dynamic: { [key: string]: Function }**  
「その Role を持っている場合、**指定した関数を実行し、結果が true であれば Permission を得られる**」という関係性です。たとえば「その記事のオーナーであれば、編集権限を得る」などです。

## 権限チェック関数

ルールテーブルを用いて、当該 actor が対象への Permission を持つかをチェックする関数を用意します；

```typescript
import { Rule } from './rbac-rules';

export const check = (rules: Rule, role: string, action: string, data?: Object) => {
  const permissions = rules[role];
  if (!permissions) return false;

  const staticPermissions = permissions.static;
  if (staticPermissions && staticPermissions.includes(action)) return true;

  const dynamicPermissions = permissions.dynamic;
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) return false;
    return permissionCondition(data);
  }

  return false;
};
```

**check: (rules: Rule, role: string, action: string, data?: Object) => boolean**

- rules: ルールテーブル情報
- role: 当該 actor の持つ権限
- action: どの振る舞いに対する Permission をチェックするか
- data?: dynamic permission に渡すデータ

# 権限の利用

## ヘルパコンポーネント：権限があれば子ノードを表示する

「Permission を持っている actor の場合にのみ、子ノードを表示する」という機能を提供するコンポーネントを作ります；

```typescript
import { check } from '../../../check';
import rules from '../../../rbac-rules';

interface CanParams {
  role: string;
  perform: string;
  data?: Object;
  yes?: Function;
  no?: Function;
}

const Can: React.FC<CanParams> = ({ children, role, perform, data, yes, no = () => null }) => {
  if (!check(rules, role, perform, data)) return no();
  if (yes) return yes();
  return children;
};

export default Can;
```

## 自身の情報を取得できる場合にプロフィールを表示する

Can コンポーネントを利用して、プロフィール表示コンポーネントを作成してみます；

```typescript
import React from 'react';

import Can from '../../atoms/Can';
import { useAuth } from '../../contexts/Auth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Can role={user.role} perform="users:getSelf">
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    </Can>
  );
};

export default Profile;
```

処理としては最も単純で、role が perform を許可されているかを static にチェックするだけです。

## 自身の記事か、管理者の場合のみ、編集できる

```typescript
import React from 'react';

import Can from '../../atoms/Can';

interface PostParams {
  user: User;
  post: Post;
  index: number;
}

const Post: React.FC<PostParams> = ({ user, post, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>{post.title}</td>
    <td>
      <Can
        role={user.role}
        perform="posts:edit"
        data={{
          userId: user.id,
          postOwnerId: post.ownerId,
        }}
      >
        <button>Edit Post</button>
      </Can>
      <Can role={user.role} perform="posts:delete">
        <button>Delete Post</button>
      </Can>
    </td>
  </tr>
);
```

**編集処理（posts:edit）**  
ルールテーブルによると、writer の場合は dynamic、admin の場合は static に permission チェックが行われます。dynamic permission を使用するため、data オブジェクトも付与しています。

**削除処理（posts:delete）**  
admin の場合にのみ、static に permission チェックを行います。つまり管理者権限を持つ場合にのみ、削除が許可されます。

# 認証認可 Context

```typescript
import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';

const visitor: User = {
  id: '',
  email: '',
  role: 'visitor',
};

interface AuthContextValues {
  authenticated: boolean;
  user: User;
  accessToken: string;
  login: (email: string, password: string, options: Object) => void;
  logout: Function;
}

const AuthContext = createContext<AuthContextValues>({
  authenticated: false,
  user: visitor,
  accessToken: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User>(visitor);
  const [accessToken, setAccessToken] = useState('');

  const login = useCallback(
    (email, password, { id, role }) => {
      setAuthenticated(true);
      setUser({ id, email, role });
      setAccessToken('1234567890abcdef1234567890abcdef');
    },
    [setAuthenticated, setUser, setAccessToken],
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser(visitor);
    setAccessToken('');
  }, [setAuthenticated, setUser, setAccessToken]);

  const contextValue = useMemo(() => ({ authenticated, user, accessToken, login, logout }), [
    authenticated,
    user,
    accessToken,
    login,
    logout,
  ]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { authenticated, user, accessToken, login, logout } = useContext(AuthContext);

  return {
    authenticated,
    user,
    accessToken,
    login,
    logout,
  };
};
```

# 完成品

実装したリポジトリはこちらです；

https://github.com/suzukalight/study-rbac-client
