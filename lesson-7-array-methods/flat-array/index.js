const flatArray = (arr) => [...arr].flat().sort((a, b) => a - b);

const multidimensional = [
  [1, 5],
  [4, 2],
  [3, 3],
  [8, 6],
];

console.log(flatArray(multidimensional));
