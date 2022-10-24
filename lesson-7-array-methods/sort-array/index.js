const sortDesk = (arr) => {
  const sortArr = [...arr];
  return sortArr.sort((a, b) => b - a);
};

const sortDesc = (arr) => {
  const sortArr = [...arr];
  return sortArr.sort((a, b) => b - a);
};

const numbers = [6, 3, 12, 7, 2, 9, 10, 1];

console.log(sortDesk(numbers));
console.log(sortDesc(numbers));
