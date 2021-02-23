// 空のオブジェクトをtargetにすることで、既存のオブジェクトには影響を与えずマージしたオブジェクトを作ることができます。 
// そのため、Object.assignメソッドの第一引数には、空のオブジェクトリテラルを指定するのが典型的な利用方法です。

const onj1 = {a:1};
const onj2 = {b:2};
const merged = Object.assign({}, obj1, obj2);
console.log(merged);
