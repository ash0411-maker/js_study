// JSON.stringifyメソッドは第一引数に与えられたオブジェクトをJSON形式の文字列に変換して返す関数です。 
// HTTP通信でサーバーにデータを送信するときや、 アプリケーションが保持している状態を外部に保存するときなどに必要になります。 
// 次のコードはJavaScriptのオブジェクトをJSON形式の文字列に変換する例です。

const obj = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj)); // => '{"id":1,"name":"js-primer","bio":null}'
