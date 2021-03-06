// 多くのプログラミング言語にはコードの評価の仕方として、同期処理（sync）と非同期処理（async）という大きな分類があります。
// 今まで書いていたコードは同期処理と呼ばれているものです。 同期処理ではコードを順番に処理していき、ひとつの処理が終わるまで次の処理は行いません。 
// 同期処理では実行している処理はひとつだけとなるため、とても直感的な動作となります。

// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now()
  console.log(`startTime: ${startTime}`);
  console.log(`timeout: ${timeout}`);
  // `timeout`ミリ秒経過するまで無限ループをする
  while (true) {
      const diffTime = Date.now() - startTime;
      console.log(`diffTime: ${diffTime}`);
      if (diffTime >= timeout) {
          return; // 指定時間経過したら関数の実行を終了
      }
  }
}
console.log("処理を開始");
blockTime(1000); // 他の処理を1000ミリ秒（1秒間）ブロックする
console.log("この行が呼ばれるまで処理が1秒間ブロックされる");


// 同期的にブロックする処理があると、ブラウザでは大きな問題となります。 なぜなら、JavaScriptは基本的にブラウザのメインスレッド（UIスレッドとも呼ばれる）で実行されるためです。 
// メインスレッドは表示の更新といったUIに関する処理も行っています。 そのため、メインスレッドが他の処理で専有されると、表示が更新されなくなりフリーズしたようになります。
// 先ほどの例では1秒間も処理をブロックしているため、1秒間スクロールなどの操作が効かないといった悪影響がでます。
