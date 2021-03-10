// クラスとは動作や状態を定義した構造です。
// クラスからはインスタンスと呼ばれるオブジェクトを作成でき、インスタンスはクラスに定義した動作を継承し、状態は動作によって変化します。


// 定義方法。クラス名は大文字で
class MyClass {
  constructor() {
    // コンストラクタ関数の処理
    // インスタンス化されるときに自動的に呼び出される
  }
}

// クラスを値として定義する方法。
const MyClass = class MyClass {
  constructor() {}
};


// クラスのインスタンス化
const myClass = new MyClass();


// 値を持ったクラス
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // コンストラクタではreturn文は書かない
  }
}
const point = new Point(3,4)
console.log(point.x); // => 3
