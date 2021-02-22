const array = [1, 2, 3];
array.forEach(currentValue => {
    // 配列の要素ごとに呼び出される処理
});

function sum(...nums) {
  let total = 0;
  nums.forEach(num => {
    total += num
  })
  return total;
}
sum(1,2,3,4,5);
