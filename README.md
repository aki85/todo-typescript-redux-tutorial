# 概要
typescript + redux で todoリストを作ってみよう！  
で、reactを学ぼう！
  
https://nametake.github.io/posts/2018/12/05/typescript-react-redux-tutorial/  
  
こちらのチュートリアルを参考に、todoリストを作ってみます。

# 準備

* nodejs: ^12.x
  * バージョンを変える必要がない場合
    * https://nodejs.org/ja/download/
  * バージョンを変える必要がある場合
    * https://qiita.com/mame_daifuku/items/373daf5f49ee585ea498

* yarn: ^1.9
  * https://yarnpkg.com/lang/ja/docs/install/#mac-stable


# 学習ステップ

## step1. 環境の用意

### チェックポイント
1. node, yarnをinstallし実行できるようにする
2. todo-app-sampleを起動してみる

## step2. 記事の通り実装
https://nametake.github.io/posts/2018/12/05/typescript-react-redux-tutorial/  
tips: まずは詳しく読まずに、動くかどうかに焦点を当てて作ってみよう！  
tips: 作れなかったらstep3の分岐に進んでみよう！  
### チェックポイント
1. yarn startでブラウザから確認できるようにする
2. TodoComponent.tsx, App.tsxを書いた段階で、デフォルト値でtodoリストが表示される
3. 最後まで行くと、todoリストに自分でtodoを追加できる


## step3. 実装したものを改造

tips: チェックポイント1が難しそうであれば分岐へ進んでみよう！

### チェックポイント
1. 以下のどれかを選んで1つ作ってみる
* 追加した時にフォームの文字を消す
* todoを削除できるようにする
* todoを編集できるようにする
2. 上記3点を全部作ってみる
3. 以下の機能をどれか作ってみる
* 管理者用todoページを作ってみる
* APIと通信してみる
* 見た目をいい感じにしてみる

### 分岐

tips: 分岐の2まで行ければ大体OK！

1. まずはreactのみだとどうなるかをみてみる
https://github.com/aki85/todo
2. 気になるところを調べてみる
3. todo-app-arrangeと比べてみる

## step4. 気になる知識の追求

tips: 詳しい人に聞いたり、googleに聞いたりしよう！

### チェックポイント
1. 追加したい機能もしくは、知りたいコードを見つける
2. 調べる
3. 作る

## まとめ
[このリポジトリ(難)](https://github.com/aki85/todo-typescript-redux-tutorial)や、[このリポジトリ(易)](https://github.com/aki85/todo)を読んだり動かしたりしてみると、reactでどんなことができるのかがわかるかもしれません！

是非、ローカルにクローンして色々試してみてください！

質問などあれば[twitter](https://twitter.com/akikogarasi)までどうぞー
