// function createCalculator
// input
// includes 4 functions
// output obj with methods

// 4 functions

// first
// input number
// outout number + number from memory

// second
// input number
// outout number - number from memory

// third
// input
// outout reset memory to 0

// fourth
// input
// outout number in memory

// algo
// 1. create variable memory
// 2. create function add
//  2.1 number from input add number from memory
// 3. create function decrease
//  3.1 number from input minus number from memory
// 4. create function reset
//  4.1 reset memory to 0
// 5. create function getMemo
//  5.1 return number from memory

export const createCalculator = () => {
  let memory = 0;

  const add = (num) => (memory += num);

  const decrease = (num) => (memory -= num);

  const reset = () => (memory = 0);

  const getMemo = () => memory;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const example1 = createCalculator();
const example2 = createCalculator();

console.log(example1.add(10));
console.log(example1.decrease(5));
console.log(example1.getMemo());
console.log(example1.reset());

console.log('=====================');

console.log(example2.add(20));
console.log(example2.decrease(7));
console.log(example2.getMemo());

console.log('=====================');

console.log(example1.add(10));
console.log(example1.decrease(5));
console.log(example1.getMemo());
