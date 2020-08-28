// 関数に値を渡しつつ2回実行する関数！！
function sumArray(list) {
    let sum = 0;
    for(let num of list){
        sum += num;
    }
    console.log("合計値:" + sum);
}

let list1 =[1,2,3,4,5];
let list2 =[2,2,3,4,5];
let list3 =[3,2,3,4,5];

sumArray(list1);
sumArray(list2);
sumArray(list3);