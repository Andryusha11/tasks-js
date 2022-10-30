//put your code here
const users = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};
const getAdults = (obj) => {
  const result = Object.entries(obj)
    .filter((el) => el[1] >= 18)
    .map((el) => el[0]);
  return result;
};

console.log(getAdults(users));
// getAdults(users);
