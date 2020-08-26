// 関数に値を渡しつつ2回実行する関数！！
function doTwiceWithValue(func) {
  func('Hello!'); // 1回目！
  func('I am here!!!'); // 2回目！
}

// 受け取ったmessageを表示するだけの関数を渡す
doTwiceWithValue(function(message) {
  console.log(message);
});






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