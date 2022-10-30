/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// dot
function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;
  return userData;
}

// put your code here assign mut

function addPropertyV2(userData, userId) {
  // put your code here
  Object.assign(userData, { id: userId });
  return userData;
}

// put your code here assign without mut

function addPropertyV3(userData, userId) {
  // put your code here
  return Object.assign({}, userData, { id: userId });
}

// put your code here spread

function addPropertyV4(userData, userId) {
  // put your code here
  const newObj = { ...userData };
  newObj.id = userId;
  return newObj;
}

// examples
const user1 = {
  name: 'Sam',
}; // must change
const user2 = {
  name: 'Sam',
}; // must change
const user3 = {
  name: 'Sam',
};
const user4 = {
  name: 'Sam',
};
// console.log(addPropertyV1(user1, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV2(user2, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV3(user3, '1234567')); // ==> { name: 'Sam', id: '1234567' }
// console.log(addPropertyV4(user4, '1234567')); // ==> { name: 'Sam', id: '1234567' }
addPropertyV1(user1, '1234567');
addPropertyV2(user2, '1234567');
addPropertyV3(user3, '1234567');
addPropertyV4(user4, '1234567');
