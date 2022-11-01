const getTotalPrice = (arr) => {
  const res = arr.reduce((acc, el) => {
    acc += el;
    return acc;
  }, 0);

  return `$${Math.floor(res * 100) / 100}`;
};

const example = [1.003, 2.455, 3.3743, 4.116, 5.9];

console.log(getTotalPrice(example));
