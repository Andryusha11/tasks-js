const calc = (value) => {
  let resultValue = value;

  const calculator = {
    add(number) {
      resultValue += number;
      return this;
    },
    subtract(number) {
      resultValue -= number;
      return this;
    },
    mult(number) {
      resultValue *= number;
      return this;
    },
    div(number) {
      resultValue /= number;
      return this;
    },
    result() {
      return resultValue;
    },
  };

  return calculator;
};

console.log(calc(5).add(5).subtract(2).mult(2).div(4).result());
console.log(calc(2).add(1).subtract(3).mult(2).div(4).result());
