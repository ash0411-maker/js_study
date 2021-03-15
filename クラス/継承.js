// extendsキーワードを使うことで既存のクラスを継承できます。 
// 継承とは、クラスの構造や機能を引き継いだ新しいクラスを定義することです。

class 子クラス extends 親クラス {

}

class Parent {

}
class Child extends Parent {

}
const instance = new Child();


// extendsを使って定義した子クラスから親クラスを参照するにはsuperというキーワードを利用します。 もっともシンプルなsuperを使う例としてコンストラクタの処理を見ていきます。
// class構文でも紹介しましたが、クラスは必ずconstructorメソッド（コンストラクタ）を持ちます。 これは、継承した子クラスでも同じです。
// 次のコードでは、Parentクラスを継承したChildクラスのコンストラクタで、super()を呼び出しています。 super()は子クラスから親クラスのconstructorメソッドを呼び出します。

// 親クラス
class Parent {
    constructor(...args) {
        console.log("Parentコンストラクタの処理", ...args);
    }
}
// Parentを継承したChildクラスの定義
class Child extends Parent {
    constructor(...args) {
        // Parentのコンストラクタ処理を呼び出す
        super(...args);
        console.log("Childコンストラクタの処理", ...args);
    }
}
const child = new Child("引数1", "引数2");
// "Parentコンストラクタの処理", "引数1", "引数2"
// "Childコンストラクタの処理", "引数1", "引数2"



// コンストラクタの処理順は親クラスから子クラスへ
// コンストラクタの処理順は、親クラスから子クラスへと順番が決まっています。
// class構文では必ず親クラスのコンストラクタ処理（super()の呼び出し）を先に行い、その次に子クラスのコンストラクタ処理を行います。 
// 子クラスのコンストラクタでは、thisを触る前にsuper()で親クラスのコンストラクタ処理を呼び出さないとReferenceErrorとなるためです。



// プロパティを参照する場合には次のような順番でオブジェクトを探索しています。
// instanceオブジェクト自身
// Child.prototype（instanceオブジェクトの[[Prototype]]の参照先）
// Parent.prototype（Child.prototypeオブジェクトの[[Prototype]]の参照先）
