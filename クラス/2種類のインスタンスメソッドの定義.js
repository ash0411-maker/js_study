class ConflictClass {
  constructor() {
      // インスタンスオブジェクトに`method`を定義
      this.method = () => {
          console.log("インスタンスオブジェクトのメソッド");
      };
  }

  // クラスのプロトタイプメソッドとして`method`を定義
  method() {
      console.log("プロトタイプのメソッド");
  }
}

const conflict = new ConflictClass();
conflict.method(); // どちらの`method`が呼び出される？=>この場合はインスタンスオブジェクトに定義したmethodが呼び出されます

// プロトタイプメソッドとインスタンスオブジェクトのメソッドは上書きされずにどちらも定義されている
// インスタンスオブジェクトのメソッドがプロトタイプオブジェクトのメソッドよりも優先して呼ばれている
// どちらも注意深く意識しないと気づきにくいですが、この挙動はJavaScriptの重要な仕組みであるため理解することは重要です。
// この挙動はプロトタイプオブジェクトと呼ばれる特殊なオブジェクトとプロトタイプチェーンと呼ばれる仕組みで成り立っています。 どちらもプロトタイプとついていることからわかるように、2つで1組のような仕組みです。


// prototypeオブジェクトとは、すべてのオブジェクトの作成時に自動的に追加される特殊なオブジェクト
// `Object.prototype`オブジェクトに`toString`メソッドの定義がある
console.log(typeof Object.prototype.toString); // => "function"
// このようなprototypeオブジェクトに組み込まれているメソッドはプロトタイプメソッドと呼ばれます。 
// この書籍ではObject.prototype.toStringのようなプロトタイプメソッドをObject#toStringと短縮して表記します。
