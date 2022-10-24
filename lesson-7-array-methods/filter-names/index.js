const filterNames = (arr, text) =>
  arr.filter((el) => el.includes(text)).filter((el) => el.length > 5);

const names = [
  'Andrii',
  'Ira',
  'Sasha',
  'Igor',
  'Julia',
  'Sergii',
  'Inokentii',
  'Suii',
];

console.log(filterNames(names, 'ii'));
console.log(names);
