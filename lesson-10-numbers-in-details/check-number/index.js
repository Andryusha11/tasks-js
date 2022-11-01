//put your code here
const getFiniteNumber = (arr) => arr.filter((el) => !Number.isFinite(el));

const getFiniteNumber2 = (arr) => arr.filter((el) => !isFinite(el));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));

const getNaN2 = (arr) => arr.filter((el) => isNaN(el));

const getInteger = (arr) => arr.filter((el) => Number.isInteger(el));

const array = [0, 2, 5, -2, -6, null, undefined, NaN];

console.log(getFiniteNumber(array));
console.log(getFiniteNumber2(array));
console.log(getNaN(array));
console.log(getNaN2(array));
console.log(getInteger(array));
