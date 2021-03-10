// クラスとは動作や状態を定義した構造です。
// クラスからはインスタンスと呼ばれるオブジェクトを作成でき、インスタンスはクラスに定義した動作を継承し、状態は動作によって変化します。


// 定義方法。クラス名は大文字で
// クラスは必ずコンストラクタを持ち、constructorという名前のメソッドとして定義。
// コンストラクタ関数内で、何も処理がない場合はコンストラクタの記述を省略できます。
// 省略した場合でも自動的に空のコンストラクタが定義されるため、クラスにはコンストラクタが必ず存在
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
