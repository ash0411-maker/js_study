// 関数やメソッドのthisを明示的に指定して関数を実行する方法
関数.call(thisの値, ...関数の引数);

"use strict";
function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich"
};

// `this`を`person`にして`say`関数を呼びだす
console.log(say.call(person, "こんにちは")); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

関数.apply(thisの値, [関数の引数1, 関数の引数2]);

"use strict";
function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich"
};
// `this`を`person`にして`say`関数を呼びだす
// callとは異なり引数を配列として渡す
console.log(say.apply(person, ["こんにちは"])); // => "こんにちは Brendan Eich！"
// `say`関数をそのまま呼び出すと`this`は`undefined`となるため例外が発生
say("こんにちは"); // => TypeError: Cannot read property 'fullName' of undefined


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// callメソッドとapplyメソッドの違いは、関数の引数への値の渡し方が異なるだけ
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


関数.bind(thisの値, ...関数の引数); // => thisや引数がbindされた関数

function say(message) {
  return `${message} ${this.fullName}！`;
}
const person = {
  fullName: "Brendan Eich"
};
// `this`を`person`に束縛した`say`関数をラップした関数を作る
const sayPerson = say.bind(person, "こんにちは");
console.log(sayPerson()); // => "こんにちは Brendan Eich！"
