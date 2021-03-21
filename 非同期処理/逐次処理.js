
// Promiseチェーンで非同期処理の流れを書く大きなメリットは、非同期処理のさまざまなパターンに対応できることです。
// ここでは、典型的な例として複数の非同期処理を順番に処理していく逐次処理を考えていきましょう。
// Promiseで逐次的な処理といっても難しいことはなく、単純にthenで非同期処理をつないでいくだけです。
// 次のコードでは、Resource AとResource Bを順番に取得しています。 それぞれ取得したリソースを変数resultsに追加し、すべて取得し終わったらコンソールに出力します。


function dummyFetch(path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (path.startsWith("/resource")) {
          resolve({ body: `Response body of ${path}` });
      } else {
          reject(new Error("NOT FOUND"));
      }
    }, 1000 * Math.random());
  });
}

const results = [];
// Resource Aを取得する
dummyFetch("/resource/A").then(response => {
  results.push(response.body);
  // Resource Bを取得する
  return dummyFetch("/resource/B");
}).then(response => {
  results.push(response.body);
}).then(() => {
  console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
});
