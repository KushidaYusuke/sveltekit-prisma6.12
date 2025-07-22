# Prisma 6.12 における動作確認

* Prisma 6.12 で `prisma-client` ジェネレータを使用(ESMに対応)。
* `npm run dev` では正常に動作したが、`npm run build & npm run preview`した場合は、以下のようなエラーが発生した。

```
The table `main.User` does not exist in the current database.
    at Jn.handleRequestError (file:///home/yusuke/sveltekit-prisma6.12/node_modules/@prisma/client/runtime/library.mjs:128:7460)
    at Jn.handleAndLogRequestError (file:///home/yusuke/sveltekit-prisma6.12/node_modules/@prisma/client/runtime/library.mjs:128:6785)
    at Jn.request (file:///home/yusuke/sveltekit-prisma6.12/node_modules/@prisma/client/runtime/library.mjs:128:6492)
    at async l (file:///home/yusuke/sveltekit-prisma6.12/node_modules/@prisma/client/runtime/library.mjs:137:9767)
    at async load (file:///home/yusuke/sveltekit-prisma6.12/.svelte-kit/output/server/entries/pages/_page.server.ts.js:89:17)
    at async load_server_data (file:///home/yusuke/sveltekit-prisma6.12/.svelte-kit/output/server/index.js:683:18)
    at async file:///home/yusuke/sveltekit-prisma6.12/.svelte-kit/output/server/index.js:2382:18 {
  code: 'P2021',
  meta: { modelName: 'User', table: 'main.User' },
  clientVersion: '6.12.0'
}
```

---

## 手順

1. このリポジトリをクローン

   ```bash
   git clone <リポジトリURL>
   ```

2. パッケージのインストール

   ```bash
   npm install
   ```

3. マイグレーションの実行

   ```bash
   npx prisma migrate dev
   ```

4. シードデータの投入

   ```bash
   npx prisma db seed
   ```

5. 開発用サーバーの起動

   ```bash
   npm run dev
   ```

6. ビルドして動作確認

   ```bash
   npm run build
   npm run preview
   ```
