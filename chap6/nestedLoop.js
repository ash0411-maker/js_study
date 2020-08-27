console.log("外のループかいし");
for(let i = 1; i <=3; i++) {
    console.log("内のループかいし");
    for(let j = 1; j <=3; j++) {
        console.log("i:j" + i + ":" + j);
    }
    console.log("内のループ終了");
}
console.log("外のループ終了");