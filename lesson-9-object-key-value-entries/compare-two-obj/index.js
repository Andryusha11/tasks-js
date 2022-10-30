('use strict');

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
// function compareObjects(firstObj, secondObj) {
//   const keys1 = Object.keys(firstObj).sort();
//   const values1 = Object.values(firstObj).sort();
//   const keys2 = Object.keys(secondObj).sort();
//   const values2 = Object.values(secondObj).sort();
//   const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
//   if (equals(keys1, keys2) && equals(values1, values2)) {
//     return true;
//   }
//   return false;
// }

function compareObjects(firstObj, secondObj) {
  const ordered = (obj) =>
    Object.keys(obj)
      .sort()
      .reduce((acc, el) => {
        acc[el] = obj[el];
        console.log(acc);
        return acc;
      }, {});
  const sortFirstObj = ordered(firstObj);
  const sortSecondObj = ordered(secondObj);
  return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true
// compareObjects(obj4, obj5); // ==> true
console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
