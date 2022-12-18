const getSum = (numbers) => {
  return numbers
    .filter((el) => !isNaN(el))
    .reduce((acc, el) => (acc += +el), 0);
};

export const asyncSum = (...args) => {
  console.log(args);
  return Promise.all(args)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
