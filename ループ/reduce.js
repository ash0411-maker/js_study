// const result = array.reduce((前回の値, 現在の値) => {
//   return 次の値;
// }, 初期値);

function sum(numbers) {
  return numbers.reduce((total, num) => {
    return total + numbers;
  }, 0);
}

sum([1,2,3,4,5]);
