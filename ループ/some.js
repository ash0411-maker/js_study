// someメソッドは、配列の各要素をテストする処理をコールバック関数として受け取ります。 コールバック関数が、一度でもtrueを返した時点で反復処理を終了し、someメソッドはtrueを返します。

function isEven(num) {
  return num % 2 === 0;
}

const nums = [1,5,10,15,20];
console.log(nums.some(isEven));
