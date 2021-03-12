// 関数におけるthisの基本的な参照先（暗黙的に関数に渡すthisの値）はベースオブジェクトとなります。 
// ベースオブジェクトとは「メソッドを呼ぶ際に、そのメソッドのドット演算子またはブラケット演算子のひとつ左にあるオブジェクト」のことを言います。 
// ベースオブジェクトがない場合のthisはundefinedとなります。

// Arrow Function内のthisは、スコープチェーンの仕組みと同様に外側の関数（この場合はprefixArrayメソッド）を探索します。 
// これにより、Arrow Functionで定義したコールバック関数は呼び出し方には関係なく、常に外側の関数のthisをそのまま利用します。
// Arrow Functionで定義された関数やメソッドにおけるthisがどの値を参照するかは関数の定義時（静的）に決まります。
// Arrow Functionにおけるthisは「Arrow Function自身の外側のスコープに定義されたもっとも近い関数のthisの値」となります。

"use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            // Arrow Function自体は`this`を持たない
            // `this`は外側の`prefixArray`関数が持つ`this`を参照する
            // そのため`this.prefix`は"pre"となる
            return this.prefix + "-" + str;
        });
    }
};
// このとき、`prefixArray`のベースオブジェクトは`Prefixer`となる
// つまり、`prefixArray`メソッド内の`this`は`Prefixer`を参照する
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
