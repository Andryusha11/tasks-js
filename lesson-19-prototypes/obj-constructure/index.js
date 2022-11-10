export function User(name, age) {
  (this.name = name), (this.age = age);
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    return false;
  }
  if (newAge < 25) {
    this.age = newAge;
  }
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return this.age;
};

const user3 = new User('Bob', 25);
const res3 = user3.setAge(4);

const user1 = new User('Andrii', -2);
const res1 = user1.setAge(-5);

const user2 = new User('Tom', 18);
const res2 = user2.setAge(28);

console.log(res3);
console.log(res1);
console.log(res2);
