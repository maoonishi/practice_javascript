## わかりやすく日時を表示する　Dateオブジェクト

## Deteオブジェクト
・現在日時の取得、過去や未来日時を設定、日時の計算をするオブジェクト。

      <section>
      ↓HTMLに表示領域を確保。id属性にtimeを追加。
<p>最終アクセス日時:<span id="time"></span></p～
            </section>
              ・
              ・
              省略
              ・
              ・
    <script>
'・se strict';

↓Dateオブジェクトを初期化。定数nowに代入。newはオブジェクトを初期化するキーワード
const now = new Date();　
↓Dateオブジェクトから年の情報を取得、定数Yearに代入。
const year = now.getFullYear();　
↓Dateオブジェクトから月の情報を取得、変数Monthに代入。以下,日,時,分も同様
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
↓変数ampmを定義。空の文字列「''」を代入
let ampm = '';
↓定数hourに保存されている数値が12以下なら'a.m.'　12以上なら'p.m.'を代入
if(hour < 12) {
    ampm = 'a.m.';
} else {
    ampm = 'p.m.';
}

↓定数outputに文字列を整形し代入。getMonthメソッドは実際の月-1となるので+1する。
　getHoursメソッドは通常なら24時間表記となるため、午前と午後にわけて
　12時間表記になるよう、%で24時間表記の時間を12で割った余りを計算する。
const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${ampm}`;
↓HTMLに表示されるid属性timeの箇所に定数outputを代入しHTMLに出力する。
document.getElementById('time').textContent = output;

    </script>
 
## Dateオブジェクトは初期化する必要がある
・複数のオブジェクトを作れるオブジェクトは初期化する必要がある。
・MathオブジェクトWindowsオブジェクトdocumentオブジェクトなど複数のオブジェクトを作れないオブジェクトは初期化の必要がない。
・初期化の際new Date()の()内にパラメータを含めなければ、
現在日時を記憶した状態で初期化される。
・現在日時を記憶しているということは、基準となる日時を記憶しているため、
現在の日時や10日後の日時を、基準となる日時から計算し、出力できる。
