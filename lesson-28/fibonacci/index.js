export const maxFibonacci = (num) => {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNumber1 = result[i - 1];
    const prevNumber2 = result[i - 2];
    if (prevNumber1 + prevNumber2 > num) {
      return result;
    }
    result.push(prevNumber1 + prevNumber2);
  }
  return result;
};

console.log(maxFibonacci(22));
console.log(maxFibonacci(20));
console.log(maxFibonacci(21));
