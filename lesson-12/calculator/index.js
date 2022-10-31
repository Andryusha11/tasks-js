const calc = (str) => {
  const [a, operator, b] = str.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = `${a} + ${b} = ${+a + +b}`;
      break;
    case '-':
      result = `${a} - ${b} = ${a - b}`;
      break;
    case '*':
      result = `${a} * ${b} = ${a * b}`;
      break;
    case '/':
      result = `${a} / ${b} = ${a / b}`;
      break;
  }
  return result;
};

console.log(calc('1 / 2'));
