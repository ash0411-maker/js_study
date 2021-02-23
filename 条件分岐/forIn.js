// オブジェクトのプロパティに対して反復処理を行う

const obj = {
  "a": 1,
  "b": 2,
  "c": 3,
}

for(const key in obj) {
  const value = obj[key];
  console.log("key:${key}, value: ${value}");
}
”
