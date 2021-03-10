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
