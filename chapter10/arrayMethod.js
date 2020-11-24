let nameList = ["ami", "mako", "yuki", "misaki"];
let nameStr = nameList.toString();
console.log(nameStr);

let nameIdx = nameList.indexOf("yuki");
console.log("yukiのindex：" + nameIdx);

let includeMethod = nameList.includes("mako");
console.log("makoは含まれるのか" + includeMethod);