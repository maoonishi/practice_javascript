## 応用例：表示の仕方を変える

 <section>
<h2><span>知ってました？</span><br>
2025年大阪万博開催まで</h2>
<p class="timer">あと<span id="day"></span>日<span id="hour"></span>時間
<span id="min"></span>分<span id="sec"></span>秒</p>

            </section>

             ・
             ・
             ・
             ・
             ・

    <script>
'use strict';

function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}
↓日時を設定した状態でDateオブジェクトを初期化。定数goalに代入。
const goal = new Date(2025, 4, 3);


function recalc() {
const counter = countdown(goal);
document.getElementById('day').textContent = counter[0];
document.getElementById('hour').textContent = counter[1];
document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
refresh();
}

function refresh() {
    setTimeout(recalc, 1000);
}

recalc();
    </script>

## StringオブジェクトとpadStartメソッド
・分や秒が1桁の時、先頭に０をつけて常に２桁にする。
・String(必要な文字列).padStart(そろえる文字数、埋め合わせ用の文字)
