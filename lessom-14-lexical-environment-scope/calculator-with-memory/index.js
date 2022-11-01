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

let memory = 0;

export const add = (num) => (memory += num);

export const decrease = (num) => (memory -= num);

export const reset = () => (memory = 0);

export const getMemo = () => memory;
