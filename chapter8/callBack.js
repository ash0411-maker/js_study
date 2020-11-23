function space(lName="", fName="", space=" ") {
  return lName + space + fName;
}

function useConcatenate(name, func) {
  let concatName = func(...name)
  console.log("結果：" + concatName);
}

let nameParam = ["中田", "剛"];
useConcatenate(nameParam, space)