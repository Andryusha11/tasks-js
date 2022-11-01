// first function
// input array
// output array all input array.el to square

// algo
// arr.el * arr.el
// return arr

export const getSquaredArray = (arr) => {
  return arr.map((el) => el * el);
};

// second function
// input array
// output filtered array with odd numbers

// algo
// check if arr.el is odd
// return arr with odd numbers

export const getOddNumbers = (arr) => {
  return arr.filter((el) => el % 2 === 1);
};

// third function
// input two numbers
// output sum of two numbers

// algo
// first number * second number
// return sum

export default (a, b) => a + b;
