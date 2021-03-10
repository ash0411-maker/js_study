class クラス {
  // getter
  get プロパティ名() {
      return 値;
  }
  // setter
  set プロパティ名(仮引数) {
      // setterの処理
  }
}
const インスタンス = new クラス();
インスタンス.プロパティ名; // getterが呼び出される
インスタンス.プロパティ名 = 値; // setterが呼び出される
