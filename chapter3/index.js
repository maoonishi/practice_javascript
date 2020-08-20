'use strict';

// 外部JavaScriptファイル
/*
外部JavaScriptファイルは
読み込まれたらすぐ実行されます
*/
console.log('隣の客は');
//単一行コメント
/*
複数行にまたがる
コメント
*/

'use strict'
/*
ダイアログボックスの書き方と、確認ダイアログボックスの条件分岐（IF文）の書き方。
ダイアログボックスの書き方は下記の通り。

確認ダイアログボックスとは、ボックス内に選択肢が出力され、
どちらをクリックしたかによって、動作を変えるコード。
これには条件分岐（IF文）を使用する。
まず、前半は、console.log()をつける。
（　）内はwindowオブジェクトのalertメソッドの箇所を、
confirmメソッドに変える。表示したいメッセージを記入する
例　console.log(window.confirm('確認ダイアログボックスIF文'));
*/

window.alert('ダイアログボックス外部ファイルtest');


/*
HTMLを書き換えるための要素の取得方法
index.HTMLの中の<section></section>内に書き込んだ内容を取得できる。

<p id="choice">あいうえお</p>の"choice"部分がID名

これを下記の通り、指定された('ID名')を入力することで要素を取得できる。
console.log(document.getElementById('choice'));
*/

'use strict'

/*
HTMLから取得した要素のコンテンツを書き換えるコード
上記の要素の取得方法のコードを少し書き換えるとできる

例　document.getElementById('ID名').textContent = 書き換えたい文字列;

「書き換えたい文字列」を('文字')で囲むと書いた内容に置き換えることも可能。
('文字')で囲まず、数式を書くと、計算結果を表示することも可能。
*/

document.getElementById('choice').textContent = new Date();

/*
HTMLの要素コンテンツを書き換えるのではなく、読み取るコード
document.getElementById('choice').textContent;の手前に、
console.log(コード、文字列）をつけることで、
取得した要素のコンテンツを読み取ってコンソールに出力できる。
*/

console.log(document.getElementById('choice').textContent);


/*
windowオブジェクトのconfirmメソッドのリターンの値は、
true(成り立つ。OK)、false(成り立たない。キャンセル)という意味。ブール値。
下記のIF文を使用した場合、確認ダイアログボックスの「OK]を
クリックした場合「test開始」、「キャンセル」をクリックした場合
「test終了」とコンソールに出力される。

if(window.confirm('確認ダイアログボックス処理の振り分け。条件分岐（IF文）test')) {
    console.log('test開始');
    } else {
        console.log('test終了');
    }

    */
