// 配列を展開して関数の引数に渡すSpread構文
function fn(x, y, z) {
  console.log(x); // => 1 
  console.log(y); // => 2 
  console.log(z); // => 3 
}
const array = [1, 2, 3];
// Spread構文で配列を引数に展開して関数を呼び出す
fn(...array);
// 次のように書いたのと同じ意味
fn(array[0], array[1], array[2]);
