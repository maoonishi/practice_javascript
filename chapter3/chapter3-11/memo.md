## アイテムの価格と在庫の表示　オブジェクト

オブジェクト：複数のプロパティを持つデータのまとまり。

## １．オブジェクトの作成
↓変数jsbookにタイトル、価格、在庫のデータを代入。この形をjsbookオブジェクトという
let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};

↓コンソールにjsbookのプロパティを表示。
console.log(jsbook);

## ２．プロパティの読み取り
↓プロパティのtitleに登録されているテキストを個別にコンソールに表示。
console.log(jsbook.title);

↓書き方は違うが、上記のコードと同じ。
console.log(jsbook['price']);

## ３．プロパティの書き換え
↓stockのデータを呼び出し、10に書き換えている。
jsbook.stock = 10;  //もしくは、jsbook['stock'] = 10;でも可
console.log(jsbook.stock);

## すべてのプロパティを読み取る
↓jsbookオブジェクトをpプロパティという意味に書き換える。
for(let p in jsbook) {
    console.log(p + '=' + jsbook[p]);
}

・for...in文　：　オブジェクトのプロパティを読み取ることだけを目的とした、
専用の繰り返し文。オブジェクトに登録したプロパティの数だけ、
{○○○○}の処理を繰り返す。


## HTMLに出力する。
      <section>
<table>
    <tr>
        <td id="title"></td>
        <td id="price"></td>
        <td id="stock"></td>
    </tr>
</table>
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

let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price;
document.getElementById('stock').textContent = jsbook.stock;

    </script>

## 配列(for...of文)とオブジェクト(for...in文)の選び方
・配列(for...of文)：chapter3-10のように、HTMLに縦書きで表示したい場合は、
　　　　　　　　　　　配列を使用するのが適している。
・オブジェクト(for...in文)：配列とは逆で、HTMLに横書きで表示したい場合は、
　　　　　　　　　　　　　　　オブジェクトを使用するのが適している。
