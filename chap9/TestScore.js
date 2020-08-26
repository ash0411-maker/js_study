class TestScoreWithConstructor {
  constructor(name = "" , english = 0, math = 0, japanese = 0) {
    this.name = name;
    this.english = english;
    this.math = math;
    this.japanese = japanese;
  }

  calSum() {
    let sum = this.english + this.math + this.japanese;
    return sum;
  }

  calAve() {
    let sum = this.calSum();
    let ave = sum / 3;
    return ave;
  }

  printScore () {
    let sum = this.calSum();
    let ave = this.calAve();
    console.log(this.name + "さんの合計：" + sum + "平均：" + ave);
  }
}


class TestScoreExtend extends TestScoreWithConstructor {
  constructor(name = "", english = 0, math = 0, japanese = 0, science = 0, social = 0) {
    super(name, english, math, japanese);
    this.science = science;
    this.social = social;
  }

  calTotalScore() {
    let sum3 = this.calSum();
    let total = sum3 + this.science + this.social;
    return total;
  }

  calTotalAve() {
    let ave = this.calTotalScore / 5;
    return ave;
  }

  printScore() {
    super.printScore();
    let total = this.calTotalScore();
    let ave = this.calTotalAve();
    console.log(this.name + "さんの５教科合計：" + total + "　平均：" + "ave");
  }
}




// class TestScore {
//   constructor(name = "" , english = 0, math = 0, japanese = 0) {
//     this.name = name;
//     this.english = english;
//     this.math = math;
//     this.japanese = japanese;
//   }

//   calSum() {
//     let sum = this.english + this.math + this.japanese;
//     return sum;
//   }

//   calAve() {
//     let sum = this.calSum();
//     let ave = sum / 3;
//     return ave;
//   }

//   printScore () {
//     let sum = this.calSum();
//     let ave = this.calAve();
//     console.log(this.name + "さんの合計：" + sum + "平均：" + ave);
//   }
// }