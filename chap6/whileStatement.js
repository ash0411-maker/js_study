let width = Math.round(Math.random() * 10);
let height = Math.round(Math.random() * 10);
str = ""
for(w = 1; w <= width; w++){
    for(h = 1; h <= height; h ++){
        str += "*";
    }
    str += "\n"
}
console.log(str);