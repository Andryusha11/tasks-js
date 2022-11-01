'use strict';

export const reverseArray = (arr) =>
  Array.isArray(arr) ? [...arr].reverse() : null;

// examples
// console.log(reverseArray([11, 10, 15])); // 15 10 11
// console.log(reverseArray([5, 0, 1, 3])); // 3 1 0 5
// console.log(reverseArray([-1, 0, -7, 6])); // 6 -7 0 -1
// console.log(reverseArray({})); // null
