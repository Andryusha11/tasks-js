const getSpecialNumbers = (num) => {
  return num.filter((elem) => elem % 3 === 0);
};

const numbers = [1, 2, 3, 6, 7, 9, 10, 12];

console.log(getSpecialNumbers(numbers));
