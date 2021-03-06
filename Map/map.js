// Mapオブジェクトをnewで初期化するときに、コンストラクタに初期値を渡せます。 
// コンストラクタ引数として渡せるのはエントリーの配列です。 
// エントリーとは、1つのキーと値の組み合わせを[キー, 値]という形式の配列で表現したものです。
// 次のコードでは、Mapに初期値となるエントリー（配列）の配列を渡しています。

const map = new Map([["key1", "value1"], ["key2", "value2"]]);
// 2つのエントリーで初期化されている
console.log(map.size); // => 2


// 要素の追加と取り出し
const map = new Map();
// 新しい要素の追加
map.set("key", "value1");
console.log(map.size); // => 1
console.log(map.get("key")); // => "value1"
// 要素の上書き
map.set("key", "value2");
console.log(map.get("key")); // => "value2"
// キーの存在確認
console.log(map.has("key")); // => true
console.log(map.has("foo")); // => false


// deleteメソッドはマップから要素を削除します。 
// deleteメソッドに渡されたキーと、そのキーにひもづいた値がマップから削除されます。 
// また、マップが持つすべての要素を削除するためのclearメソッドがあります。

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.size); // => 2
map.delete("key1");
console.log(map.size); // => 1
map.clear();
console.log(map.size); // => 0
