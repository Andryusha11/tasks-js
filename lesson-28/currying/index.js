export const mult = (num1) => (num2) => num1 * num2;

export const twice = mult(2);
export const triple = mult(3);

console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(9));
