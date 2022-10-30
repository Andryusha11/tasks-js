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

function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}

// put your code here

function addPropertyV2(obj, key, value) {
  // put your code here
  const copy = {};
  copy[key] = value;
  Object.assign(obj, copy);
  return obj;
}

// put your code here
function addPropertyV3(obj, key, value) {
  // put your code here
  const copy = {};
  copy[key] = value;
  Object.assign(copy, obj);
  return copy;
}

// put your code here

function addPropertyV4(obj, key, value) {
  // put your code here
  const { ...copy } = obj;
  copy[key] = value;
  return copy;
}

// examples
const transaction1 = {
  value: 170,
};
const transaction2 = {
  value: 170,
};
const transaction3 = {
  value: 170,
};
const transaction4 = {
  value: 170,
};
// addPropertyV1(transaction1, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV1(transaction1, 'currency', 'USD'));

// addPropertyV2(transaction2, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction2, 'currency', 'USD'));

// addPropertyV3(transaction3, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction3, 'currency', 'USD'));

// addPropertyV4(transaction4, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV4(transaction4, 'currency', 'USD'));
