const transformToObject = (arr) => {
  // put your code here
  const resObj = {};
  arr.map((el) => (resObj[el] = el));
  return resObj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
