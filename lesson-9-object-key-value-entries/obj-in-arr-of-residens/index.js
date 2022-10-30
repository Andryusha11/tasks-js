const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
  room3: [{ name: 'Dan' }],
};

// first
const getPeople = (obj) => {
  // put your code here
  const result = [];
  const values = Object.values(obj);
  values.forEach((arr) => arr.forEach((el) => result.push(Object.values(el))));
  const finalArr = result.map((el) => el[0]);
  return finalArr;
};

// Second

const getPeople1 = (obj) =>
  Object.values(obj)
    .reduce((acc, el) => acc.concat(el), [])
    .map((el) => el.name);

console.log(getPeople(rooms));
console.log(getPeople1(rooms));
// getPeople(rooms);
