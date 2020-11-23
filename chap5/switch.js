let num = Math.round(Math.random() * 5);
console.log("現在の値：" + num);


switch(num) {
  case 1:
  case 2:
  case 3:
    console.log("大吉");
    break;
  case 4:
    console.log("将吉");
    break;
  case 5:
    console.log("fuck");
    break;
  default:
    console.log("End of the World");
    break;
}
