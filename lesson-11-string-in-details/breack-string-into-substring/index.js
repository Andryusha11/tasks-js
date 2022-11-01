const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const arr = [];
  let startNumber = 0;
  while (true) {
    let res = str.substr(startNumber, num);
    if (res.length === 0) {
      break;
    }
    arr.push(res.slice(0));
    startNumber += num;
  }
  if (arr[arr.length - 1].length !== num) {
    const dot = '.';
    const finishNumber = num - arr[arr.length - 1].length;
    for (let i = 0; i < finishNumber; i++) {
      arr[arr.length - 1] = arr[arr.length - 1].concat(dot);
    }
  }
  return arr;
};
console.log(splitString('dobriy den, everybody', 3));
console.log(splitString(null, 3));
console.log(splitString('dobriy den, everybody', 4));
console.log(splitString('dobriy den, everybody'));
