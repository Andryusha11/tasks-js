// export const maxFibonacci = (num) => {
//   const result = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     const prevNumber1 = result[i - 1];
//     const prevNumber2 = result[i - 2];
//     if (prevNumber1 + prevNumber2 > num) {
//       return result[result.length - 1];
//     }
//     result.push(prevNumber1 + prevNumber2);
//   }
//   return result[result.length - 1];
// };

// const maxFibonacci = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   const resArr = [];

//   resArr.push(maxFibonacci(num - 1) + maxFibonacci(num - 2));
//   return resArr[resArr.length - 1];
// };

export function maxFibonacci(num, firstNum = 0, secondNum = 1) {
  if (secondNum > num) {
    return firstNum;
  }
  if (secondNum === num) {
    return secondNum;
  }

  return maxFibonacci(num, secondNum, firstNum + secondNum);
}

console.log(maxFibonacci(7));

console.log(maxFibonacci(5));

console.log(maxFibonacci(4));
