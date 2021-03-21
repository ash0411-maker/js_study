// JSON.parseメソッドは引数に与えられた文字列をJSONとしてパースし、
// その結果をJavaScriptのオブジェクトとして返す関数です。 
// 次のコードは簡単なJSON形式の文字列をJavaScriptのオブジェクトに変換する例です。

// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"
