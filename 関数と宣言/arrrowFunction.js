// arrow function特徴
// 名前をつけることができない（常に匿名関数）
// thisが静的に決定できる（詳細は「関数とスコープ」の章で解説します）
// functionキーワードに比べて短く書くことができる
// newできない（コンストラクタ関数ではない）
// arguments変数を参照できない

const test = () => {
  return
}

// ===========================================================================

const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };

// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる

// ===========================================================================

// 次の２つの定義は同じ意味となる
const array = [1,2,3];
const doubleArray = array.map(function(value) {
  return value * 2; // 返した値をまとめた配列ができる
});
const doubleArray = array.map(value => value * 2);


const tripleArray = array.map(value => value * 3);
