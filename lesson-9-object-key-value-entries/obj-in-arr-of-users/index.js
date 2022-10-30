// input {key: {}}
// output [{minAge},{increaseAge}, ... , {maxAge}]

// pull values from inputObj
// iterate values
// compare values
// return arr with values from min to max

const customers = {
  id1: { firstName: 'Andrew', age: 23 },
  id2: { firstName: 'Nina', age: 50 },
  id3: { firstName: 'Oleg', age: 20 },
};

const getCustomersList = (obj) => {
  // put your code here
  const values = Object.values(obj);
  const arr = values
    .map((el) => el.age)
    .sort()
    .reduce((acc, el, index) => {
      console.log(values[index]['age']) === el;
      return acc;
    }, []);
  // const sortValues = values.reduce((acc, el, index) => {
  //   if (el[index] < el[index + 1]) {
  //     acc.push(el);
  //   } else {
  //     acc.unshift(el);
  //   }
  //   return acc;
  // }, []);
  return arr;
};

getCustomersList(customers);
console.log(getCustomersList(customers));
