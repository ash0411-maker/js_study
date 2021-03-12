"use strict";
// strict modeを明示しているのは、thisがグローバルオブジェクトに暗黙的に変換されるのを防止するため
const Prefixer = {
  prefix: "pre",
  /**
   * `strings`配列の各要素にprefixをつける
   */
  prefixArray(strings) {
    return strings.map(function(str) {
      // コールバック関数における`this`は`undefined`となる(strict mode)
      // そのため`this.prefix`は`undefined.prefix`となり例外が発生する
      return this.prefix + "-" + str;
    });
  }
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
Prefixer.prefixArray(["a", "b", "c"]); // => TypeError: Cannot read property 'prefix' of undefined

// ======================================================================
// コールバック関数として呼び出すとき、この関数にはベースオブジェクトはありません。
// そのためcallback関数のthisはundefinedとなります。
// ======================================================================



"use strict";
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    // `that`は`prefixArray`メソッド呼び出しにおける`this`となる
    // つまり`that`は`Prefixer`オブジェクトを参照する
    const that = this;
    return strings.map(function(str) {
      // `this`ではなく`that`を参照する
      return that.prefix + "-" + str;
    });
  }
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]



// もちろんFunction#callメソッドなどで明示的にthisを渡して関数を呼び出すこともできます。
// また、Array#mapメソッドなどはthisとなる値を引数として渡せる仕組みを持っています。
// そのため、次のように第二引数にthisとなる値を渡すことでも解決できます。
"use strict";
const Prefixer = {
  prefix: "pre",
  prefixArray(strings) {
    // `Array#map`メソッドは第二引数に`this`となる値を渡せる
    return strings.map(function(str) {
      // `this`が第二引数の値と同じになる
      // つまり`prefixArray`メソッドと同じ`this`となる
      return this.prefix + "-" + str;
    }, this);
  }
};
// `prefixArray`メソッドにおける`this`は`Prefixer`
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings); // => ["pre-a", "pre-b", "pre-c"]
