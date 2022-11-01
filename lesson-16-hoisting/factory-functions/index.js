export const createArrayOfFunctions = (num) => {
  if (num && typeof num !== 'number') {
    return null;
  }
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
};

console.log(createArrayOfFunctions(10)[9]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('text'));
