// input array of numbers
// output min number square or null

// algo
//1. check if isArray
//  1.1 if false return null
//2. get square numbers from all arr.el
//3. search min

export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const result = arr.reduce((acc, el) => {
    if (Math.abs(el) * Math.abs(el) < acc) {
      acc = el * el;
    }
    return acc;
  }, +Infinity);
  return result;
};

//test
// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
// console.log(getMinSquaredNumber([]));
// console.log(getMinSquaredNumber(35));
