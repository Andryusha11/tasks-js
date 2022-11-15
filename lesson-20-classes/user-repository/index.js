/* eslint-disable max-classes-per-file */

//1. create class User
//2. constructure should input prop in corect order
//3. all must be private
//4. must be getter
//5. create class UserRepository with field users(arr)
//6. method getUserName
//7. method getUserIds
//8. method getUserNameById

/* eslint-disable max-classes-per-file */

class User {
  // put your code here
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  // put your code here
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => {
      const { name } = el;
      return name;
    });
  }
  getUserIds() {
    return this._users.map((el) => {
      const { id } = el;
      return id;
    });
  }
  getUserNameById(id) {
    return this._users.find((el) => id === el.id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user1 = new User('2', 'Carl', 'session-id');
const user2 = new User('3', 'Igor', 'session-id');
const user3 = new User('1', 'Van', 'session-id');
const userRepository = new UserRepository([user, user1, user2, user3]);
console.log(userRepository.getUserNames());
console.log(userRepository.getUserIds());
console.log(userRepository.getUserNameById('1'));

// console.log(new UserRepository([user]));

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
