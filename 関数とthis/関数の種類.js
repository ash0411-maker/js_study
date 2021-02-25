// `function`キーワードからはじめる関数宣言
function fn1(/* 仮引数 */ ) {}
// `function`を式として扱う関数式
const fn2 = function(/* 仮引数 */ ) {};
// Arrow Functionを使った関数式
const fn3 = (/* 仮引数 */ ) => {};





const obj = {
  // `function`キーワードを使ったメソッド
  method1: function() {
  },
  // Arrow Functionを使ったメソッド
  method2: () => {
  }
};

const obj = {
  // メソッドの短縮記法で定義したメソッド
  method() {
  }
};
