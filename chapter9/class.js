class TestScore {
  constructor(name, en, math, jap) {
    this.name = name;
    this.english = en;
    this.math = math;
    this.jap = jap;
  }
}


function printScore(student) {
  let sum = student.english + student.math + student.jap;
  let ave = sum / 3;
  console.log(student.name + "さんの合計：" + sum + " " + "平均：" + ave);
}

let Taro = new TestScore("太郎", 40, 10, 90);
let Hanako = new TestScore("花子", 40, 10, 90);


printScore(Hanako);