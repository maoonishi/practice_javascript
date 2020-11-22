"use strict";

document.getElementById('form').onchange = function() {
    event.preventDefault();
    let select = document.getElementById('puldown').value;
    let recipeDateHTML = getRecipeDateHtml(select);
    document.getElementById('output').innerHTML = recipeDateHTML;
}

function getRecipeDateHtml(inputValue) {
    let recipeDateConst = getRecipeDateConst();
    let responseData = '';
    if (recipeDateConst[inputValue]) {
        responseData += `<h2>${inputValue}</h2>`;

        for (let key in recipeDateConst[inputValue]) {
            responseData += `<h3>${key}</h3>`;
            for(let key2 in recipeDateConst[inputValue][key]) {
                responseData += `<li>${key2}:${recipeDateConst[inputValue][key][key2]}</li>`
            }
        }

    } else {
        responseData = `<p>レシピが存在しません。</p>`
    }
    return responseData;
}
function getRecipeDateConst() {
    
    return {
        '牛丼':{
            '材料':{
                '牛バラ肉薄切り':'300g',
                '玉ねぎ':'2/3個',
                '白ワインor料理酒':'大さじ3',
                '(1)水':'180ml',
                '(1)砂糖':'小さじ2',
                '(2)濃口醤油':'大さじ1',
                '(2)薄口醤油':'大さじ1',
                '(2)みりん':'小さじ1/2',
                '(2)ダシダ':'小さじ4(ほんだし&中華だし各小さじ２でも可)',
             },
        '☆、登山前下準備':{
                'step1':'今回は練習がてらメスティンでお米を炊飯してほしいので、あらかじめ登山前にお米を水筒などに入れて水に浸しておく。',
                'step2':'玉ねぎをcutする。繊維を断って切る(1cm幅)',
                'step3':'(1)の調味料を合わせてパックに保存。',
                'step4':'(2)の調味料を合わせてパックに保存。',
        }     
        },
        '鶏もも肉の照り焼き':{
            '材料':{
                
            }
        },
    }
}


/*
1.山ごはん一品目
牛丼
材料(3人分)
・牛バラ肉薄切り    ：300g
・玉ねぎ                   ：2/3個
・白ワインor料理酒 ：大さじ3
・(1)水                       ：180ml
・(1)砂糖                   ：小さじ2
・(2)濃口醤油            ：大さじ1
・(2)薄口醤油            ：大さじ1
・(2)みりん                ：小さじ1/2
・(2)ダシダ                ：小さじ4
    ↑なければほんだし小さじ2、中華だし小さじ2
☆、登山前の下準備
・今回は練習がてらメスティンでお米を炊飯してほしいので、あらかじめ登山前にお米を水筒などに入れて水に浸しておく。
・玉ねぎをcutする。繊維を断って切る(1cm幅)
・(1)の調味料を合わせてパックに保存。
・(2)の調味料を合わせてパックに保存。
☆、本調理
・メスティンでご飯を炊く。今回は牛丼がメインなので炊き方は省略！
↓お米を炊いてる間に具材を仕上げます！
・クッカーの鍋に白ワインを入れて、強火でアルコール分を飛ばす！(アルコール臭が消えるくらい)
・(1)を入れて沸騰したら、玉ねぎを入れる。
・再沸騰したら弱めの中火にして蓋をして5分煮る
・一度火を止めて、(2)を加えて混ぜ溶かす。
・肉を加えて、強火にかける。
    ※沸騰したら、中火にして適度に混ぜる。
・肉に赤い所がなくなったら、中火のまま蓋をして、5分煮る。
    ※途中で一度混ぜる。
・メスティンで炊いたお米の上にかけたら完成！
3、ワンポイント
好みで紅生姜、温玉、とろろ、刻みネギなどを牛丼の上にトッピングしても美味。
料理の量は今回3人分なので、登山にいくチームの人数によって増やしたり減らしてください！
*/