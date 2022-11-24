const nameOfDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) =>
  nameOfDays[new Date(date.setDate(date.getDate() + days)).getDay()];

const result = dayOfWeek(new Date(2019, 0, 1), 14);

const result1 = dayOfWeek(new Date(2022, 5, 23), 16);

console.log(result);
console.log(result1);
