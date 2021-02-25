// Arrow Function以外の関数において、thisは定義したときではなく実行したときに決定されます。
// そのため、関数にthisを含んでいる場合、その関数は意図した呼ばれ方がされないと間違った結果が発生するという問題があります。

const person = {
  fullName: "satoshi uetani",
  sayName: function() {
    return this.fullName;
  }
}

console.log(person.sayName());

const say = person.sayName;
// この`say`関数はどのオブジェクトにも所属していない
// `this`はundefinedとなるため例外を投げる
say(); // => TypeError: Cannot read property 'fullName' of undefined
