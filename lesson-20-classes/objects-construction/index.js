export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(number) {
    if (number < 0) {
      return false;
    }
    this.age = number;
    if (number >= 25) {
      this.requestNewPhoto();
    }
    return number;
  }
  static createEmpty() {
    const user = {
      age: null,
      name: '',
    };
    return user;
  }
}
const user1 = new User('Andrii', 23);
const user2 = User.createEmpty();

console.log(user2);

console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
console.log(user1.age);
user1.setAge(25);
console.log(user1.age);
console.log(user1);
console.log(user1.setAge(-2));
console.log(user1.setAge(2));
console.log(user1.setAge(25));
