const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = PersonProto;
console.log(steven);
steven.name = 'Steven';
steven.__proto__.birthYear = 2002;
console.log(steven);
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // um objeto criado é igual o prototype
