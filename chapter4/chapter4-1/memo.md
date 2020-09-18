## フォームの入力内容を取得　入力内容の取得とイベント

  <section>
↓データ送信場所の指定　↓document.getElementByIdで使用するIDの指定
<form action="#"  id="form">
↓テキストフィールド作成　↓name属性[word]を追加
<input type="text" name="word">
　　　↓送信ボタンの作成　　↓送信ボタンの名前
    <input type="submit" value="検索">
</form>
↓入力内容をテキストとして読み取ったものを加工し、出力する領域を確保。
<p id="output"></p>
            </section>
        .
        .
        .
        省略
        .
        .
        .
    <script>
'use strict';
↓<form id="form">～</form>を取得 ↓onsubmitイベントにfunction()を代入
document.getElementById('form').onsubmit = function() {
   // ↓onsubmitイベントが発生したときに実行させたい処理内容。
   // console.log('クリックされました');
     event.preventDefault(); ←HTMLの<form>と<p>の動作をキャンセル
   ↓テキストフィールドの入力内容を代入 ↓HTMLの<form>要素を取得 
   const search = document.getElementById('form').word.value;
   document.getElementById('output').textContent = `「${search}」の検索中`;
};
    </script>

## action属性
・データを送信する先のURLを指定する。
・どこにも送信しない場合は、URLの代わりに「#(ページの最上部)」を指定する。

## <form>　○○○○　</form>タグ
・送信ボタンがクリックされると、指定されたページにフォームの入力内容を送信するタグ
・送信する場所は、action属性に指定する。

## name属性
・入力されたデータがサーバーに送信されたとき、そのデータにつく名前。
・JSでいう変数名と同じ意味

## preventDefault()
<form>や<p>など、基本動作があらかじめ定義されているHTMLタグの、
基本動作をキャンセルする。検索をクリックした際、次のページに移動しないようにする。
