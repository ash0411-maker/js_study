// class構文で定義したプロトタイプメソッドはプロトタイプオブジェクトに定義されます。 
// しかし、インスタンス（オブジェクト）にはメソッドが定義されていないのに、インスタンスからクラスのプロトタイプメソッドを呼び出せます。

class MyClass {
  method() {
      console.log("プロトタイプのメソッド");
  }
}
const instance = new MyClass();
instance.method(); // "プロトタイプのメソッド"
