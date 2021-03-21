// コールバック関数でPromiseインスタンスを返す
// Promiseチェーンで一度キャッチすると、次に呼ばれるのは成功時の処理（thenメソッド）でした。
// これは、コールバック関数で任意の値を返すと、その値でresolveされたFulfilled状態のPromiseインスタンスを作成するためです。
// しかし、コールバック関数でPromiseインスタンスを返した場合は例外的に異なります。

// コールバック関数でPromiseインスタンスを返した場合は、同じ状態を持つPromiseインスタンスがthenやcatchメソッドの返り値となります。
// つまりthenメソッドでRejected状態のPromiseインスタンスを返した場合は、次に呼ばれるのは失敗時の処理です。

// 次のコードでは、thenメソッドのコールバック関数でPromise.rejectメソッドを使ってRejectedなPromiseインスタンスを返しています。
// RejectedなPromiseインスタンスは、次のcatchメソッドで登録した失敗時の処理を呼び出すまで、thenメソッドの成功時の処理をスキップします。


Promise.resolve().then(function onFulfilledA() {
  return Promise.reject(new Error("失敗"));
}).then(function onFulfilledB() {
  console.log("onFulfilledBは呼び出されません");
}).catch(function onRejected(error) {
  console.log(error.message); // => "失敗"
}).then(function onFulfilledC() {
  console.log("onFulfilledCは呼び出されます");
});


// 通常は一度catchすると次に呼び出されるのは成功時の処理でした。
// このPromiseインスタンスを返す仕組みを使うことで、catchしてもそのままRejectedな状態を継続できます。
// 次のコードではcatchメソッドでログを出力しつつPromise.rejectメソッドを使ってRejectedなPromiseインスタンスを返しています。
// これによって、asyncFunctionで発生したエラーのログを取りながら、Promiseチェーンはエラーのまま処理を継続できます。
function main() {
  return Promise.reject(new Error("エラー"));
}
// mainはRejectedなPromiseを返す
main().catch(error => {
  // asyncFunctionで発生したエラーのログを出力する
  console.log(error);
  // Promiseチェーンはそのままエラーを継続させる
  return Promise.reject(error);
}).then(() => {
  // 前のcatchでRejectedなPromiseが返されたため、この行は実行されません
}).catch(error => {
  console.log("メインの処理が失敗した");
});
