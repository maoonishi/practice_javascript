## 山ごはんレシピ検索フォーム仕様案

## トップページに表示する内容
・一番上にタイトル「山ごはんレシピ」をh1の大きさで表示(画面左)
・検索にはプルダウンメニューを使用。タイトルの下に表示(画面左)


## プルダウンメニューの仕様
・プルダウンメニューを開くと、数字.品名(1.ごはん etc.)を一覧表示
・品名をクリックするとレシピをページ中央に出力

## レシピの表示形式
 ```
           <h2>　「品名」 </h2>
          　<h3> 材料　</h3>
          <h4> ・あいうえお　　　：100 </h4>
          <h4> ・かきくけこ　　　：200 </h4>
                    ・
                    ・
                    ・
            <h3> ☆、登山前下準備 </h3>
          <h4>　・あいうえお </h4>
          <h4>　・かきくけこ </h4>
          　　　　　　・
          　　　　　　・
          　　　　　　・
            <h3> ☆、本調理 </h3>
        　<h4>　・あいうえお </h4>
        　<h4>　・かきくけこ </h4>
                     ・
                     ・
                     ・
            <h3> ☆、ポイント </h3>
          <h4>　・あいうえお </h4>
                     ・
                     ・
```

・上記のような形式で出力

## ファイルのアップロード計画案
１、Wordなどにレシピをコピー。wordとアプリを連動させて出力
２、slackのyoutube-cooking-recipeとアプリを連動させて出力
３、それぞれのレシピをHTMLのファイルで作成する
↑上記のうちいずれかを使用

```html
<h1~></h1~> 見出し
<p></p>　段落
<ul><li></li></ul> 箇条書き
```