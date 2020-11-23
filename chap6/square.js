let row = Math.round(Math.random() * 10);
let col = Math.round(Math.random() * 10);
let star = ""


for(i=0; i<=row; i++) {
  for(n=0; n<=col; n++) {
    star += "*";
  };
  star += "\n";
};
console.log(star);