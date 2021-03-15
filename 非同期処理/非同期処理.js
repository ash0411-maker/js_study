function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
    const diffTime = Date.now() - startTime;
    if (diffTime >= timeout) {
      return;
    }
  }
}

console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
setTimeout(() => {
    console.log("3. ブロックする処理を開始します");
    blockTime(1000); // 他の処理を1秒間ブロックする
    console.log("4. ブロックする処理が完了しました");
}, 10);
// ブロックする処理は非同期なタイミングで呼び出されるので、次の行が先に実行される
console.log("2. 同期的な処理を実行します");




// 指定した`timeout`ミリ秒経過するまで同期的にブロックする関数
function blockTime(timeout) {
  const startTime = Date.now();
  while (true) {
      const diffTime = Date.now() - startTime;
      if (diffTime >= timeout) {
          return; // 指定時間経過したら関数の実行を終了
      }
  }
}

const startTime = Date.now();
// 10ミリ秒後にコールバック関数を呼び出すようにタイマーに登録する
setTimeout(() => {
  const endTime = Date.now();
  console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
console.log("ブロックする処理を開始します");
blockTime(1000); // 1秒間処理をブロックする
console.log("ブロックする処理が完了しました");
