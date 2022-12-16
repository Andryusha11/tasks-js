export const asyncCalculator = (num) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500)
  )
    .then(
      (num) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const result = num * num;
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        })
    )
    .then((num) => {
      const result = num * 2;
      console.log(`Doubled value: ${result}`);
      return result;
    })
    .then((num) => num);
