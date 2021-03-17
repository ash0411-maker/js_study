// PromiseはES2015で導入された非同期処理の結果を表現するビルトインオブジェクトです。
// エラーファーストコールバックは非同期処理を扱うコールバック関数の最初の引数にエラーオブジェクトを渡すというルールでした。
// Promiseはこれを発展させたもので、単なるルールではなくオブジェクトという形にして非同期処理を統一的なインターフェースで扱うことを目的にしています。

// asyncPromiseTask関数はPromiseインスタンスを返す
asyncPromiseTask().then(()=> {
  // 非同期処理が成功したときの処理
}).catch(() => {
  // 非同期処理が失敗したときの処理
});



// Promiseインスタンスの作成
const executor = (resolve, reject) => {
  // 非同期の処理が成功したときはresolveを呼ぶ
  // 非同期の処理が失敗したときはrejectを呼ぶ
};
const promise = new Promise(executor);



// このPromiseインスタンスのPromise#thenメソッドで、Promiseがresolve（成功）、reject（失敗）したときに呼ばれるコールバック関数を登録します。 thenメソッドの第一引数にはresolve（成功）時に呼ばれるコールバック関数、第二引数にはreject（失敗）時に呼ばれるコールバック関数を渡します。
// `Promise`インスタンスを作成
const promise = new Promise((resolve, reject) => {
  // 非同期の処理が成功したときはresolve()を呼ぶ
  // 非同期の処理が失敗したときにはreject()を呼ぶ
});
const onFulfilled = () => {
  console.log("resolveされたときに呼ばれる");
};
const onRejected = () => {
  console.log("rejectされたときに呼ばれる");
};
// `then`メソッドで成功時と失敗時に呼ばれるコールバック関数を登録
promise.then(onFulfilled, onRejected);
