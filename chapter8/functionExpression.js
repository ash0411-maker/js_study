function space(lName="", fName="", space=" ") {
  return lName + space + fName;
}

function dot(lName="", fName="") {
  return lName + "・" + fName;
}

funcs = [space, dot]
for(func of funcs) {
  let name = func("ナカタ", "かず")
  console.log("結果：" + name);
}