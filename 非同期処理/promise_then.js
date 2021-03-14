function errorPromise(message) {
  return new Promise((resolve, reject) => {
      reject(new Error(message));
  });
}
// 非推奨: `then`メソッドで失敗時のコールバック関数だけを登録
errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
    console.log(error.message); // => "thenでエラーハンドリング"
});
// 推奨: `catch`メソッドで失敗時のコールバック関数を登録
errorPromise("catchでエラーハンドリング").catch(error => {
    console.log(error.message); // => "catchでエラーハンドリング"
});



function throwPromise() {
  return new Promise((resolve, reject) => {
      // Promiseコンストラクタの中で例外は自動的にキャッチされrejectを呼ぶ
      throw new Error("例外が発生");
      // 例外が発生すると、これ以降のコンストラクタの処理は実行されません
  });
}

throwPromise().catch(error => {
  console.log(error.message); // => "例外が発生"
});
