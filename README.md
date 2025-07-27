# RP Clothing - ECサイト

本リポジトリは、Next.js を基盤としたファッション系ECサイトです。ユーザーにとって快適でスムーズなショッピング体験を提供します。

---

## 🚀 使用技術

- **Next.js** – フロントエンド & サーバーサイドレンダリング  
- **Drizzle ORM** – 型安全なデータベース操作（PostgreSQL）  
- **Redis** – ログインセッション管理に使用  
- **Stripe** – 決済処理（クレジットカード支払い対応）

---

## 🔧 実装されている主な機能

- ✅ お気に入り登録機能  
- 🎂 お誕生日割引の自動適用  
- 👤 ユーザー登録・ログイン（セッションはRedisで管理）  
- 💳 Stripeによる決済機能  
- 🛒 カート（ショッピングバスケット）機能  
- 🔍 商品検索（検索条件の保存機能付き）  
- 🕘 閲覧履歴の保存・表示

---

## 🛠 環境変数の設定

以下の環境変数を `.env.local` に記述してください：

```env
# PostgreSQLデータベースURL
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<dbname>

# 楽天API（検索等に使用）
RAKUTEN_API_ID=各自で楽天アプリIDを取得

# JWTなどで使用（第三者に漏洩しない強固な値）
SECRET_KEY=長いランダム文字列を指定

# Redis（ログインセッション用）
REDIS_URL=redis://<user>:<password>@<host>:<port>

# Stripe 公開キー（クライアント用）
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=Stripeダッシュボードで取得

# Stripe 秘密キー（サーバー用）
STRIPE_SECRET_KEY=Stripeのシークレットキー
