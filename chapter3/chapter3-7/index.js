//回数が決まっていない繰り返し

/*

・変数enemyに100を代入
let enemy = 100;

・ダイアログボックスにてtest開始を表示
window.alert('test開始');

・変数enemyが0より大きければtrueとなり、
続く{○○○○}内の処理が繰り返される
while(enemy > 0) {

・定数attackに1~30までの数値をランダムに代入
    const attack = Math.floor(Math.random() * 30) + 1;

・文字列連結を使用し、戦況報告メッセージをコンソールに出力
    console.log('モンスターに'　+ attack + 'のダメージ');

    ・変数enemyに保存されている数値から、定数attackに保存されている数値を引いて、
変数enemyに代入しなおす。
    enemy = enemy - attack;

    （ここまでで、変数enemyの数値が0より大きければ、条件式がtureとなり、
    　while文の最初に戻り、変数enemyの数値が0となるまで処理が繰り返される）

・変数enemyの数値が0となったことをコンソールに出力
}
console.log('test終了');

・繰り返すたびに値が変わるのに、定数(const)を使用できる仕組み
定数(const),変数(let)には参照できる「有効範囲」が決まっている。
その範囲とは、今回の場合、定数attackはwhile文ので定義されている。
そのため、while文の中だけで値が参照される。{○○○○}の外側ではエラーとなる。

*/

//繰り返しの回数をカウントする

/*

let enemy = 100;
let count = 0;

window.alert('test開始');
while(enemy > 0) {
    const attack = Math.floor(Math.random() * 30) + 1;
    console.log('モンスターに'　+ attack + 'のダメージ');
    enemy -= attack;
    count += 1;
}
console.log(count + '回でtest終了');

前半のコードを書き換え、繰り返し何回でtest終了したか、
カウントされるように書き換えている。

・カウント要素を加えるため、変数countを定義、0を代入
let count = 0;

・while文が処理されるたび、「count += 1;」が実行され、
１ずつカウントが増えていく。

・-=演算子
enemy -= attack;
左の数値から右の数値を引き、結果を左に代入する
*/