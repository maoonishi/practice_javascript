//時間で異なるメッセージを表示する　　論理演算子

/*

const hour = new Date().getHours();

if(hour >= 2 && hour < 4){
    window.alert('2時～4時までの表示');
} else if(hour === 9 || hour === 15){
    window.alert('9時または15時のときの表示');
} else {
    window.alert('それ以外の表示');
}

上記のコードでは、ページを開いた時間帯を、
24時間時計で取得し、定数hourに代入している。
この定数hourにはページを開いた時刻によって、
０～２３までの整数が代入されている。

・&&演算子
if(hour >= 2 && hour < 4)
上記の箇所の&&は、左側「hour >= 2」および「hour < 4」の両方の条件式の、
評価結果がtrueであるとき、続く{○○○○}が実行される。

・||演算子
else if(hour === 9 || hour === 15)
上記の箇所の||は、左側「hour === 9」もしくは、
右側「hour === 15」の条件式のどちらか片方もしくは両方がtrueであるとき、
全体の評価結果がtrueになり、続く{○○○○}が実行される。

・!演算子　（今回は使用なし）
例　　!○○○○
！に続く条件式（○○○○）の評価結果がfalseのとき、
評価結果がtrueになる。



*/