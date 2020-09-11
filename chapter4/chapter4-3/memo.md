## 少数第〇位で切り捨てる　Mathオブジェクト

 <section>
 ↓HTMLに円周率を出力する領域を確保する。
<p>円周率は <span id="pi"></span> です。</p>
↓HTMLに小数点を切り捨てて、円周率を出力する領域を確保する。
<p>普通に切り捨てると　<span id="floor"></span> です。</p>
HTMLに少数点第２位までの円周率を出力する領域を確保する。
<p>小数点第２位で切り捨てると <span id="output"></span> です。</p>
            </section>
              ・
              ・
              省略
              ・
              ・
    <script>
'use strict';

document.getElementById('pi').textContent = Math.PI;
document.getElementById('floor').textContent = Math.floor(Math.PI);

↓ファンクション名を設定(point),要求するパラメータでは、(num)少数第〇位から
　切り捨てたい元の数字、(digit)少数第〇位の〇を指定する数字が保存されている。
function point(num, digit) {
  　↓10をdigit回掛けて、計算結果をmoverに代入する。
    const mover = 10 ** digit;
    ↓num ×　moverする→結果をfloorメソッドで小数点以下切り捨て→定数moverで割る
    return Math.floor(num * mover) / mover;
}

document.getElementById('output').textContent = point(Math.PI, 2);

    </script>

## Mathオブジェクト
・計算に関する多くのメソッドと、数学的に意味のある定数(円周率など)があらかじめ代入されたプロパティが登録されている。
・プロパティは全て読み取り専用。書き換えは不可。


## Mathオブジェクトのプロパティ
・PI : 円周率を表示するプロパティ
・floor ：　( )内の数値の小数点を切り捨てるプロパティ

## べき乗演算子　a ** b
・aをb乗する
