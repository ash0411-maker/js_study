// Promise#finallyメソッドは成功時、失敗時どちらの場合でも呼び出されるコールバック関数を登録できます。
//  try...catch...finally構文のfinally節と同様の役割を持つメソッドです。

// `promise`にはResolvedまたはRejectedなPromiseインスタンスがランダムで入る
const promise = Math.random() < 0.5 ? Promise.resolve() : Promise.reject();
promise.then(() => {
    console.log("Promise#then");
}).catch((error) => {
    console.log("Promise#catch");
}).finally(() => {
    // 成功、失敗どちらの場合でも呼び出される
    console.log("Promise#finally");
});
