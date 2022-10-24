// const sum = (arr) =>
//   Array.isArray(arr) ? arr.reduce((acc, el) => acc + el) : null;
function sum(arr) {
  return Array.isArray(arr) ? arr.reduce((acc, el) => acc + el) : null;
}

console.log(sum([1, 2, 3, 4, 10]));
console.log(sum([8, 5, 13, 2, 22, 6, 0, 9]));
