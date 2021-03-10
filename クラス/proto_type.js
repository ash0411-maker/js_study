// クラスでは次のようにメソッドを定義できない
class クラス {
  // SyntaxError
  メソッド: () => {}
  // SyntaxError
  メソッド: function(){}
}

// クラスに対して定義したメソッドは、クラスの各インスタンスから共有されるメソッドとなります。
// このインスタンス間で共有されるメソッドのことをプロトタイプメソッドと呼びます
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}
const counterA = new Counter();
const counterB = new Counter();
// `counterA.increment()`のベースオブジェクトは`counterA`インスタンス
counterA.increment();
// 各インスタンスの持つプロパティ(状態)は異なる
console.log(counterA.count); // => 1
console.log(counterB.count); // => 0





// インスタンスメソッド
// しかし、インスタンスオブジェクトに定義したincrementメソッドはプロトタイプメソッドではありません
class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      // `this`は`constructor`メソッドにおける`this`（インスタンスオブジェクト）を参照する
      this.count++;
    }
  }
}

// プロトタイプメソッドとは異なり、インスタンスオブジェクトへのメソッド定義はArrow Functionが利用できます
class ArrowClass {
  constructor() {
      // コンストラクタでの`this`は常にインスタンス
      this.method = () => {
          // Arrow Functionにおける`this`は静的に決まる
          // そのため`this`は常にインスタンスを参照する
          return this;
      };
  }
}



// プロトタイプメソッドにおけるthisはメソッド呼び出し時のベースオブジェクトを参照します。 
// そのためプロトタイプメソッドは呼び出し方によってthisの参照先が異なります
