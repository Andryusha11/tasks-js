//put your code here

const splitText = (str, num = 10) => {
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
    arr.push(res[0].toUpperCase() + res.slice(1));
    startNumber += num;
  }

  return arr.join('\n');
};

console.log(splitText('dobriy den, everybody', 3));
console.log(splitText(null, 3));
console.log(splitText('dobriy den, everybody', 4));
