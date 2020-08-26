let taro = new TestScoreExtend("太郎", 10, 15, 20, 30 ,40);
let total3 = taro.calSum;
console.log("3教科の合計：" + total3);
taro.printScore();







// let taro = new TestScore("太郎", 50, 55, 1);
// taro.printScore();


// function doTwice(func) {
//     func();
//     func();
// }

// function hello () {
//     console.log("hello");
// }

// doTwice(hello);


// function printElement(currentValue, index, array) {
//     console.log((index + 1) + "個目の値:" + currentValue);
// }

// let list = [2, 7, 66, 4, 9];
// list.forEach(printElement);




// function concatenate(lastName = "", firstName = "") {
//     return lastName + "" + firstName;
// }

// function concatenateDot(lastName = "", firstName = "") {
//     return lastName + "・" + firstName;
// }

// let lName = "中田";
// let fName = "康隆";
// let funcList = [concatenate, concatenateDot];
// for(let func of funcList){
//     let name = func(lName, fName);
//     console.log("結合結果：" + name);
// }








// console.log();
// nums[i] = Math.round(Math.random() * 100);