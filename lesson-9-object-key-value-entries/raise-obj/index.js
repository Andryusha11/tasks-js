'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  // put you code here
  const obj = keysList.reduce((acc, el, index) => {
    return { ...acc, [el]: valuesList[index] };
  }, {});
  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
// buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
