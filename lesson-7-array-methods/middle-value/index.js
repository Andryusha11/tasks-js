const arrEverage = (arr) =>
  Array.isArray(arr) ? arr.reduce((acc, el) => acc + el) / arr.length : null;

const numbers = [1, 2, 3, 4, 5, 6, 7]; // 4
console.log(arrEverage(numbers));
