// インスタンスメソッドは、クラスをインスタンス化して利用します。 
// 一方、クラスをインスタンス化せずに利用できる静的メソッド（クラスメソッド）もあります。
// 静的メソッドの定義方法はメソッド名の前に、staticをつけるだけです。
class クラス {
  static メソッド() {
      // 静的メソッドの処理
  }
}
// 静的メソッドの呼び出し
クラス.メソッド();



class ArrayWrapper {
  constructor(array = []) {
      this.array = array;
  }

  // rest parametersとして要素を受けつける
  static of(...items) {
      return new ArrayWrapper(items);
  }

  get length() {
      return this.array.length;
  }
}

// 配列を引数として渡している
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
// 要素を引数として渡している
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapperA.length); // => 3
console.log(arrayWrapperB.length); // => 3
