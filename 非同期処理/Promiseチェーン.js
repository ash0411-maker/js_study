// thenメソッドでPromiseチェーンをしています。
// Promiseチェーンでは、Promiseが失敗（Rejectedな状態）しない限り、
// 順番にthenメソッドで登録した成功時のコールバック関数を呼び出します。
// そのため、次のコードでは、1、2と順番にコンソールへログが出力されます。

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })




// Promiseチェーンではコールバックで返した値を次のコールバックへ引数として渡せます。
// thenやcatchメソッドのコールバック関数は数値、文字列、オブジェクトなどの任意の値を返せます。
// このコールバック関数が返した値は、次のthenのコールバック関数へ引数として渡されます。

Promise.resolve(1).then((value) => {
  console.log(value); // => 1
  return value * 2;
}).then(value => {
  console.log(value); // => 2
  return value * 2;
}).then(value => {
  console.log(value); // => 4
  // 値を返さない場合は undefined を返すのと同じ
}).then(value => {
  console.log(value); // => undefined
