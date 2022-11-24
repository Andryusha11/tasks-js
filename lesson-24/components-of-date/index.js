const nameOfDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();

  const dayInFuture = new Date(date).setDate(day + days);

  return nameOfDays[new Date(dayInFuture).getDay()];
};

const date1 = new Date(2019, 0, 1);

const date2 = new Date(2022, 5, 23);

const result = dayOfWeek(date1, 14);

const result1 = dayOfWeek(date2, 16);

console.log(result);
console.log(result1);

console.log(date1);
console.log(date2);
