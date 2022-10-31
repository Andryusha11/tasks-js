const sortContacts = (arr, bool) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = [...arr];
  if (bool === false) {
    res.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  } else {
    res.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  return res;
};

const example = [
  { name: 'Ann', age: 17 },
  { name: 'Sam', age: 80 },
  { name: 'Zack', age: 43 },
  { name: 'Ron', age: 22 },
];

console.log(sortContacts(example, false));
console.log(sortContacts(example, true));
console.log(sortContacts('Privet', true));
