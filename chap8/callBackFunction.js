// 関数に値を渡しつつ2回実行する関数！！
function concatenateSpace(lastName, firstName) {
    return lastName + "" + firstName;
}

function useConcatenate(name, func) {
    let concatName = func(...name);
    console.log("結合結果：" + concatName);
}

let nameParam = ["大阪", "kaka"];
useConcatenate(nameParam, concatenateSpace);


