// 条件に一致する要素を取得

const colors = [
  { "color": "red" },
  { "color": "green" },
  { "color": "blue" }
];

const blueColor = colors.find((obj) => {
  return obj.color === "blue"
});

console.log(blueColor); // => { "color": "blue" }
