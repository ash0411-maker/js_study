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

// Promiseのthenメソッドやcatchメソッドによる処理がわかったところで、Promiseインスタンスの状態について整理していきます。
// Promiseインスタンスには、内部的に次の3つの状態が存在します。
// Fulfilled
// resolve（成功）したときの状態。このときonFulfilledが呼ばれる
// Rejected
// reject（失敗）または例外が発生したときの状態。このときonRejectedが呼ばれる
// Pending
// FulfilledまたはRejectedではない状態
// new Promiseでインスタンスを作成したときの初期状態
// これらの状態はECMAScriptの仕様として決められている内部的な状態です。 しかし、この状態をPromiseのインスタンスから取り出す方法はありません。 そのためAPIとしてこの状態を直接扱うことはできませんが、Promiseについて理解するのに役立ちます。
// Promiseインスタンスの状態は作成時にPendingとなり、一度でもFulfilledまたはRejectedへ変化すると、それ以降状態は変化しなくなります。 そのため、FulfilledまたはRejectedの状態であることをSettled（不変）と呼びます。
// 一度でもSettled（FulfilledまたはRejected）となったPromiseインスタンスは、それ以降別の状態には変化しません。 そのため、resolveを呼び出した後にrejectを呼び出しても、そのPromiseインスタンスは最初に呼び出したresolveによってFulfilledのままとなります。
// 次のコードでは、rejectを呼び出しても状態が変化しないため、thenで登録したonRejectedのコールバック関数は呼び出されません。 thenメソッドで登録したコールバック関数は、状態が変化した場合に一度だけ呼び出されます。


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    reject(new Error("エラー")) //すでにresolveされているからエラーになる
  }, 16);
})
promise.then(() => {
  console.log("Fulfilledとなった");
}, (error) => {
  // この行は呼び出されない
});
