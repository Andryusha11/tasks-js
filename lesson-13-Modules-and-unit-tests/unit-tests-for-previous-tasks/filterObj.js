/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

export const getAdults = (obj) => {
  // put your code here
  let resObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) {
      resObj[key] = obj[key];
    }
  }
  return resObj;
};

// examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
// getAdults({ Ann: 56, Andrey: 7 });
