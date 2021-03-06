// JSON.stringifyメソッドは第一引数に与えられたオブジェクトをJSON形式の文字列に変換して返す関数です。 
// HTTP通信でサーバーにデータを送信するときや、 アプリケーションが保持している状態を外部に保存するときなどに必要になります。 
// 次のコードはJavaScriptのオブジェクトをJSON形式の文字列に変換する例です。

const obj = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'



// JSON.stringifyメソッドにはオプショナルな引数が2つあります。 
// 第二引数はreplacer引数とも呼ばれ、関数あるいは配列を渡せます。 
// 関数を渡した場合は引数にプロパティのキーと値が渡され、その返り値によって文字列に変換される際の挙動をコントロールできます。 
// 次の例は値がnullであるプロパティを除外してJSONに変換するreplacer引数の例です。 
// replacer引数の関数でundefinedが返されたプロパティは、変換後のJSONに含まれなくなります。

const obj = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj, replacer)); // => '{"id":1,"name":"js-primer"}'


// 第三引数はspace引数とも呼ばれ、変換後のJSON形式の文字列を読みやすくフォーマットする際のインデントを設定できます。 
// 数値を渡すとその数値分の長さのスペースで、文字列を渡すとその文字列でインデントされます。 
// 次のコードはスペース2個でインデントされたJSONを得る例です。

const obj = { id: 1, name: "js-primer" };
// replacer引数を使わない場合はnullを渡して省略するのが一般的です
console.log(JSON.stringify(obj, null, 2));
/*
{
   "id": 1,
   "name": "js-primer"
}
*/
