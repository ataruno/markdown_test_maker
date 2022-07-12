# MarkDown Test Maker README(EN)
This is an extension to create fill-in-the-blank questions with sentences described in Markdown.

## Features
This extension adds html styles within a Markdown file and works in preview.
Select the text and choose the action from the command palette ('ctrl + shift + p' or F1).

* Markdown Test Maker : Made By Asterisk ***
Replaces selected text with asterisks.
The number of asterisks will be replaced by the number of characters selected.
Hover your mouse over the asterisks to see the answer.

* Markdown Test Maker : Made By Box
Replaces the selected text with the input box.
Hover your mouse over the [*] next to the box to see the answer.


* Markdown Test Maker : Made By Fill-in-the-blank
Replaces the selected text with the input box.
You can check your answer by clicking the button next to the input box.
The result of the correct or incorrect answer is displayed at the bottom of the markdown preview.
If the answer is correct, 'great!' will be displayed.
If wrong, 'no.... . answer is ***' will be displayed.
In markdown, html-style text for checking for correctness is appended at the bottom.

## Settings
Allow markdown to use html styles from vscode settings

## Unsupported
* All correct/incorrect buttons in one batch
* Undo text added with this function
* Display the correct/incorrect answer near the entry box

It has not yet been determined if it will be supported.

## Attention
* This function is achieved by appending a template in html format on markdown.
If you change the appended text, it will not be displayed correctly in the preview.
* You should reload the preview after you have created the question sentences.

## Examples of usage
Copy the text you want to study into markdown.
Use the function to create fill-in-the-blank questions.
Converting to test format allows you to study more efficiently!
You can easily share your tests with your friends by converting markdown to html files using other extensions.

# MarkDown Test Maker README(JP)
Markdownで記載した文章で穴埋め問題を作る拡張機能です。

## 特徴
Markdownファイル内でhtml形式を使い、プレビュー表示で動作します。
テキストを選択した状態でコマンドパレット('ctrl + shift + p' or F1)から動作を選択します。
Markdownにhtmlを書くことで機能実現しています。

* Markdown Test Maker : Made By Asterisk ***
選択したテキストをアスタリスク記号で置き換えます。
元の文字数を保持したまま、アスタリスク記号が置き換えられます。
アスタリスクにマウスをホバーすると答えが見えます。

* Markdown Test Maker : Made By Box
選択したテキストを入力ボックスで置き換えます。
ボックス横の[*]にマウスをホバーすると答えが見えます。

* Markdown Test Maker : Made By Fill-in-the-blank
選択したテキストを入力ボックスで置き換えます。
ボックス横のcheckボタンをクリックすると答え合わせができます。
正誤判定の結果は最下部に表示されます。
正解の場合は'great!'と表示。
間違っている場合は'no...answer is ***'と答えも表示。
markdownの地の文では最下部に答え合わせ用のhtmlが記載されます。

## 設定
markdownでhtml形式での記載をvscodeの設定から許可してください。

## 注意
markdown上にhtml形式でひな形を追記することで実現しています。
機能によって追記された部分を変えると、プレビューで正しく機能しません。
問題文章を作ったら、一度プレビューをリロードしたほうがよいです。

## 未対応
* 一括正誤判定ボタン
* 機能で追加した箇所を元に戻す機能
* 記入ボックス付近に違和感なく正誤判定を表示

対応できたらしたいですが未定です。

## 使い方の例
勉強したい文章をmarkdownにコピーします。
機能を使って穴埋め問題を作成します。
簡単にテスト形式で勉強できます！
他の拡張機能を使ってmarkdownをhtml形式に変換すれば、友達とも簡単にテストを共有できます。




