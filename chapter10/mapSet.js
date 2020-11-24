//Mapオブジェクトを生成するためにnew Map()。
let studentNumList = new Set();
//要素の登録各クラスの人数を登録。
studentNumList.add(30);
studentNumList.add(31);
studentNumList.add(29);
studentNumList.add(30);
studentNumList.add(32);

//Mapの要素数を取得。
let count = studentNumList.size;
console.log("要素数: " + count);

//Mapのループ。
for(let element of studentNumList) {
	console.log("値は" + element);
}
