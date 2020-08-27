let num = Math.round(Math.random() * 5);
console.log("現在の値：" + num );
switch(num) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("中吉です");
        break;
    case 4:
        console.log("小吉です");
        break;
    case 5:
        console.log("凶です");
        break;
    default:
        console.log("破滅");
        break;
}



// let cond = (num <= 40)
// if(cond){
//     console.log("40以下です");
// }else{
//     console.log("40超えとるがな");
// }
// console.log("処理終了です");