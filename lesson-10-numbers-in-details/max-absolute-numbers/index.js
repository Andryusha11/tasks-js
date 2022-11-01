'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = (arr) => {
  if (Array.isArray(arr) && arr.length) {
    const res = arr.map((el) => Math.abs(el));
    return Math.max(...res);
  }

  return null;
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([])); // null
console.log(getMaxAbsoluteNumber(22)); // null

//&& arr !== []
