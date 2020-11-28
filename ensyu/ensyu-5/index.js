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
            responseData += '<ul>';
            for(let key2 in recipeDateConst[inputValue][key]) {
                responseData += `<li>${key2}:${recipeDateConst[inputValue][key][key2]}</li>`
            }
            responseData += '</ul>';
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
                'step1':'今回は練習がてらメスティンでお米を炊飯してほしいので、<br>あらかじめ登山前にお米を水筒などに入れて水に浸しておく。',
                'step2':'玉ねぎをcutする。繊維を断って切る(1cm幅)',
                'step3':'(1)の調味料を合わせてパックに保存。',
                'step4':'(2)の調味料を合わせてパックに保存。',
                },
            '☆、本調理':{
                'step1':'メスティンでご飯を炊く。今回は牛丼がメインなので炊き方は省略！',
                'step2':'↓お米を炊いてる間に具材を仕上げます！',
                '     ':'クッカーの鍋に白ワインを入れて、強火でアルコール分を飛ばす！(アルコール臭が消えるくらい)',
                'step3':'(1)を入れて沸騰したら、玉ねぎを入れる。',
                'step4':'再沸騰したら弱めの中火にして蓋をして5分煮る',
                'step5':'一度火を止めて、(2)を加えて混ぜ溶かす。',
                'step6':'肉を加えて、強火にかける。',
                   '※':'沸騰したら、中火にして適度に混ぜる。',
                'step7':'肉に赤い所がなくなったら、中火のまま蓋をして、5分煮る。',
                   '※':'途中で一度混ぜる。',
                'step8':'メスティンで炊いたお米の上にかけたら完成！',
                },
            '☆、ワンポイント':{
                'その１':'好みで紅生姜、温玉、とろろ、刻みネギなどを牛丼の上にトッピングしても美味。',
                'その２':'料理の量は今回3人分なので、登山にいくチームの人数によって増やしたり減らしてください！',
                },     
        },
        '鶏もも肉の照り焼き':{
            '材料（１人分）':{
                '鶏もも肉':'一枚（250g~300g）',
                'サラダ油':'大さじ２',
                'キッチンペーパー':'１枚',
                '(1)片栗粉':'大さじ２',
                '(1)塩':'少々(１つまみと半つまみ)',
                '(1)コショウ':'少々(粗びき黒コショウがあればなおよい)',
                '(2)薄口醬油':'大さじ２',
                '(2)みりん':'大さじ２',
                '(2)料理酒':'大さじ２',
                '(2)砂糖':'大さじ１',
            },
            '☆、登山前の下準備':{
                'step1':'鶏もも肉の厚みを焼き上げる際全体がまんべんなく火が入るよう均等にする。',
                 '※':'本来は切り目を入れて開くが、難しそうなら厚みが均等になるよう切り落としてもよい。',
                'step2':'鶏もも肉をフォークもしくは包丁の先or下の角(アゴ)で全体をたたいて穴をあける。',
                 '※':'この工程は味をしみこませやすくする。お肉を柔らかくするため。',
                'step3':'袋に鶏もも肉、(1)を入れて全体になじませる。',
                'step4':'(2)の調味料を合わせてパックに保存。',
            }, 
            '☆、本調理':{
                'step1':'袋の鶏もも肉の粉をはたきおとす。粉が付きすぎると油を吸って油っぽくなるので。',
                'step1':'クッカーのフライパンにサラダ油をひき、鶏もも肉の皮の面を下向きにひく。サラダ油は多めにして揚げ焼きになるようにする。',
                'step1':'中火にし、皮目にきつね色の焼き色がつくまで焼く。約３分。',
                'step1':'火力は同じで、鶏もも肉を裏返し、きつね色の焼き色がつくまで焼く。約２分。',
                'step1':'一度火を止めて、キッチンペーパーで油をきれいにふき取る。',
                'step1':'鶏もも肉の皮の面を下にし、(2)を加えて中火でタレを煮絡める。焦げつかないようたまにお肉を揺する。',
                'step1':'タレがぐつぐつして少しとろみがでたら、鶏もも肉を裏返し、タレを絡める。',
                'step1':'タレと鶏もも肉に照りが出て全体に絡んだら完成。タレはフライパンに多少残るくらいがよい。',
            },
            '☆、ポイント':{
                '1':'鶏もも肉とフライパンの大きさは同じくらいのほうがよい。',
                '※':'サラダ油の量を増やさなくてはならなくなる。及び、タレが鶏もも肉に絡む前に煮詰まってしまう。',
            },
        },
        'シュウマイ':{
            '材料（15個分）':{


                
            },
        },
    }
}


/*
３．山ごはん三品目
シュウマイ
材料（15個分）
・豚ひき肉　　　　　　：100ｇ
・玉ねぎ　　　　　　　：1玉
・片栗粉　　　　　　　：大さじ２
・シュウマイの皮　　　：15枚
・(1)薄口醬油　　　　　：大さじ1/2
・(1)砂糖　　　　　　　：小さじ１
・(1)ごま油　　　　　　：小さじ１
・(1)オイスターソース　：小さじ１
・(1)おろし生姜　　　　：小さじ１
・(1)鶏ガラスープの素　：小さじ１
・(1)塩　　　　　　　　：少々
・(1)コショウ　　　　　：少々
・クッキングシート　　：１枚
・メスティン用長バット網(蒸し料理用）
☆、登山前の下準備
・玉ねぎを粗めにみじん切りにする。
・玉ねぎに片栗粉を混ぜ込む。足りなさそうなら、片栗粉の量を増やす。
・シュウマイの皮の角を4箇所とも5mmほど切る。
・豚ひき肉、(1)、玉ねぎ、皮の角をボールに入れて、粘りが出るまで混ぜ合わせる。
※材料を全て混ぜたものを「餡」といいます。
・味をなじませる、肉質を柔らかくするため、餡を冷蔵庫で１時間以上は寝かせる。
・餡を15等分にわけて、シュウマイの皮で餡を包む。
※この工程は、シュウマイの形が崩れる可能性があるので、余裕があればゴム手袋を持参して、山で行ってもよい。
☆、本調理
・メスティンに長バット網を引き、網の少し下くらいまで水を入れる。
・クッキングシートを網の上に敷き詰める。
・シュウマイ同士が引っ付かないように、ならべていく。
・蓋をして中火で蒸し焼きにする。8分ほど。
※途中で水の様子を確認して、少なくなったら補充する。
・シュウマイを指で押してみて、弾力が出ていれば出来上がり。
☆、ワンポイント
生姜醤油、からし醤油、ソースで食べるのが相性よし。
メスティンに一度で入りきらなければ、無理せず２回に分けて調理する。
*/