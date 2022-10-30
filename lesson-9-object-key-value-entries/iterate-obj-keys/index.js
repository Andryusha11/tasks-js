'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */

// 1
function getKeys1(obj) {
  // put you code here
  return Object.keys(obj).map((el) => console.log(el));
}
// 2
// function getKeys2(obj) {
//   // put you code here
//   const result = Object.keys(obj).map((el) => console.log(el));
//   return result;
// }
// 3
// function getKeys3(obj) {
//   // put you code here
//   Object.keys(obj).map((el) => console.log(el));
// }

// examples
getKeys1({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
getKeys2({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
getKeys3({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
