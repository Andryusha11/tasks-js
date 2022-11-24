export const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formatter.format(date);
};

const date1 = new Date();

const date2 = new Date(2022, 5, 23);

const result = getGreenwichTime(date1);

const result1 = getGreenwichTime(date2);

console.log(result);
console.log(result1);
console.log(date1);
console.log(date2);
