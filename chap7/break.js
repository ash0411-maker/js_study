let breakPoint =  Math.round(Math.random() * 10);
console.log("break pointの値：" + breakPoint);

for(let i=1; i <= 10; i++) {
    console.log(i+"回目のループ");
    if(i===breakPoint) {
        console.log("break pointなのでbreak");
        break;
    }
    console.log("回目のループ終了");
}









// console.log();
// nums[i] = Math.round(Math.random() * 100);