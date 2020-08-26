let jobs = new Date(2011, 9, 5);
console.log("ジョブの命日：" + jobs.toDateString());
console.log("ジョブの命日：" + jobs.toLocaleDateString());

let month = jobs.getMonth();
jobs.setMonth(month + 1);
console.log("ジョブの命日：" + jobs.toLocaleDateString());

let date = jobs.getDate();
jobs.setDate(date - 6);
console.log("6日前" + jobs.toLocaleDateString());


// let studentList = new Map();
// studentList.set("a", 10);
// studentList.set("b", 20);
// studentList.set("c", 30);
// studentList.set("e", 40);

// let count = studentList.size;
// console.log("要素数：" + count);

// let studentListC = studentList.get("c");
// console.log("c組の人数:" + studentListC);

// for(let [key, value] of studentList) {
//   console.log("キーは"+key + "valueは" + value);
// }





// let langs = ["ruby", "php", "java", "c"];
// let lang = "";
// for(i = 0; i <= lang.length; i ++) {
//   lang = langs[i];
//   console.log(lang);
// }





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