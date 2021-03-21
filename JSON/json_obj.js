// JSON.parseメソッドは引数に与えられた文字列をJSONとしてパースし、
// その結果をJavaScriptのオブジェクトとして返す関数です。 
// 次のコードは簡単なJSON形式の文字列をJavaScriptのオブジェクトに変換する例です。

// JSONはダブルクォートのみを許容するため、シングルクォートでJSON文字列を記述
const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json);
console.log(obj.id); // => 1
console.log(obj.name); // => "js-primer"


// 与えられた文字列がJSON形式でパースできない場合は例外が投げられます。
// また、実際のアプリケーションでJSONを扱うのは、外部のプログラムとデータを交換する用途がほとんどです。
// 外部のプログラムが送ってくるデータが常にJSONとして正しい保証はありません。
// そのため、JSON.parseメソッドは基本的にtry...catch構文で例外処理をするべきです。

const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("パースできませんでした");
}
