class AccessorPop {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return this.lastName + " " +this.firstName
  }

  set extName(value) {
    this.lastName = value;
    this.firstName = value;
  }
}


let Taro = new AccessorPop("太郎", "柳");
console.log(Taro.name);


Taro.extName = "高杉新一"
console.log("lastName:" + Taro.lastName);
console.log("firstName:" + Taro.firstName);