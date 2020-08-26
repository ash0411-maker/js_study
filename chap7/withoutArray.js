let numes = [];
let denomis = [];

for(let i = 0; i <= 4; i++){
    numes[i] = Math.round(Math.random() * 10)
    denomis[i] = Math.round(Math.random() * 10)
}

for(let denomi of denomis) {
    console.log("--分母の値：" + denomi);
    if(denomi === 0) {
        console.log("分母が０なので処理を中止。")
        break;
    }
    for(let nume of numes) {
        console.log("--分子の値：" + nume);
        if(nume === 0) {
            console.log("分子が０なので処理を飛ばす。")
            continue;
        }
        let ans = nume / denomi;
        console.log("分数値："　+ ans);
    }

}









// let breakPoint = Math.round(Math.random() * 10);
// console.log("breakPointの値：" + breakPoint);
// for(let i = 1; i <= 10; i++){
//     console.log(i + "回目のループ");
//     if(i === breakPoint){
//         console.log("breakPointなのでbreak");
//         break;
//     }
//     console.log(i + "回目のループ終了");
// }











// console.log();
// nums[i] = Math.round(Math.random() * 100);