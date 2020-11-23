let numes = [];
let denomis = [];

for(let i=0; i<=4; i++) {
  numes[i] = Math.round(Math.random() * 10);
  denomis[i] = Math.round(Math.random() * 10);
}

for(let denomi of denomis) {
  console.log("--分母の値" + denomi);
  if(denomi === 0) {
    console.log("分母が0なので処理を終了させます。");
    break;
  };

  for(let nume of numes) {
    console.log("--分子の値" + nume);
    if(nume === 0) {
      console.log("分母が0なので処理を飛ばす。");
      continue;
    }
      let ans = nume / denomi;
      console.log("分数値:" + ans);
  };
};
