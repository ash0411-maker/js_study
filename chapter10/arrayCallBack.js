function isMultiplesOf13(currentValue, index, array) {
  return currentValue % 13 === 0;
}

let list = [];
for(let i = 0; i < 10; i++) {
  list[i] = Math.round(Math.random() * 100);
}
console.log(list.toString());



let result = list.some(isMultiplesOf13);
console.log("配列内に13は含まれるか:" + result);


let newList = list.map(function(currentValue, index, array){
  return currentValue * 100;
});
console.log(newList.toString());