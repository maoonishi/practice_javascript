## FizzBuzz  算術演算子


今回の演習は、パラメータとして渡された数値が、
１、３でも５でも割り切れる数値は[fizzbuzz]をリターンとして返す
２、３で割り切れる数値は[fizz]をリターンとして返す
３、５で割り切れる数値は[buzz]をリターンとして返す
４、３でも５でも割り切れない数値は渡された数値をそのままリターンとして返す

function fizzbuzz　←「ファンクション名」(num　←「要求するパラメータ」) {

    ↓具体的な処理、パラメータ[num]は{○○○○}内だけで使用できる。
    if(num % 3 === 0 && num % 5 === 0) {　←パラメータ[num]の値が３で割り切れるかつ５で割り切れる場合true

        return 'fizzbuzz'; ←上記の条件式がtrueの時コンソールに表示されるコード

    } else if(num % 3 === 0) {　←パラメータ[num]の値が３で割り切れる場合true
        return 'fizz';
    } else if(num % 5 === 0) { ←パラメータ[num]の値が５で割り切れる場合true
        return 'buzz'
    } else {
        return num;
    }
}

let i = 1; ←変数[i]に１を代入
while(i <= 30) {　←[i]が30以下の時true
    console.log(fizzbuzz(i)); ←コンソールに１～３０まで繰り返された値を表示
    i += 1;　←[i] + 1をして、[i]に代入する。
}


## %演算子
割り算の余りを求める記号
## &&演算子
左側の条件式かつ右側の条件式がtrueの場合、全体の評価結果がtrue
## ===（比較演算子）
左側と右側を比較し、同じであれば評価結果がtrue