const increaseEvenEl = (arr, delta) => {
  if (Array.isArray(arr)) {
    return arr.map((el) => (el % 2 === 0 ? el + delta : el));
  }
  return null;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(increaseEvenEl(numbers, 2));
console.log(increaseEvenEl({}));
