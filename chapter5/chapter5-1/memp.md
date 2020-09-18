## カウントダウンタイマー　時間の計算とタイマー

  <section>
  ↓HTMLに表示する領域ID「timer」を作成する。
<p>いまから<span id="timer"></span>以内に注文すると50%オフ</p>
            </section>
             ・
             ・
             省略
             ・
             ・
    <script>
'use strict';
↓パラメータとして未来時間が設定されたDateオブジェクトを受け取りパラメータdueに代入
function countdown(due) {
    ↓別のDeteオブジェクトを初期化し、定数nowに代入。現在日時を示す。
    const now = new Date();
　　↓パラメータdueのミリ秒から定数nowのミリ秒を引いて定数restに代入
    const rest = due.getTime() - now.getTime();
    ↓定数restに保存されたミリ秒を計算し、秒、分、時、日を算出する。
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    ↓算出されたそれぞれの定数を配列し、定数countに代入。
    const count = [days, hours, min, sec];

　　↓呼び出し元にリターンする。
    return count;
}
変数goalに現在時間を代入
let goal = new Date();
↓時、分、秒を未来の時間に設定
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

//↓コンソールにcountdown(goal)を出力
//console.log(countdown(goal));
↓countdownファンクションを呼び出し残り時間を計算。テンプ文字列を整形。HTMLに出力。
function recalc() {
↓countdownファンクションが計算した残り時間の配列を、定数counterに代入する。
const counter = countdown(goal);
↓定数counterに保存されたデータをもとにテンプ文字列を作成。定数timeに代入。
const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
↓<span id="timer"></span>のテキストコンテンツとして出力。
document.getElementById('timer').textContent = time;
↓１秒後、recalcファンクションを実行。refreshファンクションを呼び出し１秒後繰り返し。
refresh();
}

function refresh() {
    ↓メソッド名(ファンクション、待ち時間)　待ち時間後に1度だけファンクションを実行。
    setTimeout(recalc, 1000);
}
↓recalcファンクションにリターンする。
recalc();
    </script>

## setTimeoutファンクション
・待ち時間後に１度だけファンクションを呼び出すメソッド
・１つ目に実行するファンクション、２つ目にそのファンクションを実行するまでの待ち時間をミリ秒で指定する。
・１つ目に実行するファンクションに()をつけてしまうと、繰り返し数が多すぎるため、エラーコードとなる。注意。