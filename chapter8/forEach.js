function printElement(currentValue, index, array) {
  console.log((index + 1) + "個目の値：" + currentValue);
}

let list = [10, 20, 30, 40, 50];
list.forEach(function(currentValue, index, array){
  console.log((index + 1) + "個目の値：" + currentValue);
});