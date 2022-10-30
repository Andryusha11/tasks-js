const player = {
  firstName: 'Bob',
  age: 18,
};

const copyObj = (obj) => {
  const { ...res } = obj;
  return res;
};

const newPlayer = copyObj(player);

newPlayer.age = 35;

console.log(newPlayer);
console.log(player);
