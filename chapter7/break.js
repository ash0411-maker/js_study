let breakPoint = Math.round(Math.random() * 10);
console.log("breakPoint" + breakPoint);

for(i=0; i<=10; i++) {
  if(breakPoint === i) {
    console.log("breakpointなのでbreak");
    break
  }
  console.log(i + "回目のループ終了");
}