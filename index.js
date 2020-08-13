'use strict';

// 外部JavaScriptファイル
/*
外部JavaScriptファイルは
読み込まれたらすぐ実行されます。
*/
console.log('隣の客は');
//単一行コメント
/*
複数行にまたがる
コメント
*/

'use strict'

//ダイアログボックスの書き方

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