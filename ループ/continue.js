function isEven(num) {
  return num % 2 === 0;
}

function filterEven(nums) {
  const results = [];
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(!isEven(num)) {
      continue;
    }
    results.push(num);
  }
  return results;
}

const array = [1,5,10,15,20];
console.log(filterEven(array));
