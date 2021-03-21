// Promise.allを使うことで複数のPromiseを使った非同期処理をひとつのPromiseとして扱えます。
// Promise.allメソッドは Promiseインスタンスの配列を受け取り、新しいPromiseインスタンスを返します。 
// その配列のすべてのPromiseインスタンスがFulfilledとなった場合は、返り値のPromiseインスタンスもFulfilledとなります。 
// 一方で、ひとつでもRejectedとなった場合は、返り値のPromiseインスタンスもRejectedとなります。
// 返り値のPromiseインスタンスにthenメソッドで登録したコールバック関数には、Promiseの結果をまとめた配列が渡されます。 
// このときの配列の要素の順番はPromise.allメソッドに渡した配列のPromiseの要素の順番と同じになります。


// `timeoutMs`ミリ秒後にresolveする
function delay(timeoutMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(timeoutMs);
    }, timeoutMs);
  });
}
const promise1 = delay(1);
const promise2 = delay(2);
const promise3 = delay(3);

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values); // => [1, 2, 3]
});
