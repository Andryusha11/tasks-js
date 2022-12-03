export const mult = (num1) => (num2) => num1 * num2;

const twice = mult(4);
const triple = mult(4);

console.log(mult(5)(4));
console.log(twice(2));
console.log(triple(3));
