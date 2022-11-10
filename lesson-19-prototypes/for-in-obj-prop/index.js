// export function getOwnProps(obj) {
//   return Object.keys(obj);
// }

export function getOwnProps(obj) {
  let res = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
      res.push(key);
    }
  }
  return res;
}

const user1 = {
  name: 'Tom',
  age: 17,
  height: 180,
  move() {
    console.log('I can');
  },
};
const user2 = {
  name: 'Bob',
  age: 22,
  sit() {
    console.log("I can't");
  },
  __proto__: user1,
};

console.log(getOwnProps(user2));
