// class構文ではクラスに対して自由にメソッドを定義できます。 
// このクラスに定義したメソッドは作成したインスタンスが持つ動作となります。



// クラスでは次のようにメソッドを定義できない
// オブジェクトにおけるメソッドとは異なりkey : valueのように:区切りでメソッドを定義できない
class クラス {
  // SyntaxError
  メソッド: () => {}
  // SyntaxError
  メソッド: function(){}
}

// クラスに対して定義したメソッドは、クラスの各インスタンスから共有されるメソッドとなります。
// このインスタンス間で共有されるメソッドのことをプロトタイプメソッドと呼びます。
// プロトタイプメソッドはインスタンスから呼び出せるメソッドであるためインスタンスメソッドとも呼ばれます。
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




// クラスのインスタンスに対して、直接メソッドを定義する方法
// しかし、インスタンスオブジェクトに定義したincrementメソッドはプロトタイプメソッドではありません
// プロトタイプメソッドは各インスタンスから共有されているため、各インスタンスからのメソッドの参照先が同じでした。 
// しかし、インスタンスオブジェクトのメソッドは、コンストラクタで毎回同じ挙動の関数（オブジェクト）を新しく定義しています。
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
