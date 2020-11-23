class TestScore {
  constructor(name, en, math, jap) {
    this.name = name;
    this.english = en;
    this.math = math;
    this.jap = jap;
  }

  printScore() {
    let sum = this.english + this.math + this.jap;
    let ave = sum / 3;
    console.log(this.name + "さんの合計：" + sum + " " + "平均：" + ave);
  }
}


let Taro = new TestScore("太郎", 40, 10, 90);
let Hanako = new TestScore("花子", 40, 10, 90);


console.log(Hanako.printScore());