let numbers = [];
for(i=0;i < 30; i++) {
    numbers[i] = Math.round(Math.random() * 100);
    console.log(i + 1 + "番目の値：" + numbers[i]);
}

let sum = 0;
let ave = 0;
let max = 0;
for(num of numbers) {
    sum += num
    if(num > max) {
        max = num;
    }
}

ave = sum / numbers.length;

console.log("最大値："　+ max);
console.log("合計：" + sum);
console.log("平均" + ave);









// console.log();
// nums[i] = Math.round(Math.random() * 100);