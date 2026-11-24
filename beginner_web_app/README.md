# かんたんタスク管理アプリ

HTML・CSS・JavaScriptで作った、初心者向けのタスク管理アプリです。

## できること

- タスクを追加する
- チェックボックスで完了・未完了を切り替える
- タスクを1件ずつ削除する
- 完了したタスクをまとめて削除する
- ブラウザを閉じてもタスクを保存する

## ファイル構成

```text
beginner_web_app/
├── index.html   # 画面の構造
├── style.css    # 色・余白・レイアウト
├── script.js    # タスクの追加や削除などの処理
└── README.md    # この説明書
```

## 起動方法

1. ZIPファイルを解凍します。
2. VS Codeで `beginner_web_app` フォルダを開きます。
3. `index.html` を開きます。
4. `index.html` をブラウザで開くとアプリを使えます。

VS Codeの拡張機能「Live Server」を使うと、編集内容をブラウザで確認しやすくなります。

## 初心者向けの確認ポイント

1. `index.html` の `<h1>` を変更して、画面のタイトルが変わるか確認する。
2. `style.css` の `background` を変更して、背景色が変わるか確認する。
3. `script.js` の `taskForm.addEventListener` を読んで、追加ボタンの動きを確認する。
4. タスクを追加して、ブラウザを再読み込みしても残っているか確認する。

## 使っている主な仕組み

- `querySelector()`：HTMLの要素を取得する
- `addEventListener()`：クリックや入力などのイベントを検知する
- `createElement()`：HTML要素をJavaScriptで作る
- `filter()`：条件に合うデータだけを取り出す
- `localStorage`：ブラウザにデータを保存する
