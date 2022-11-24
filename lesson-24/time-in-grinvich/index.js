export const getGreenwichTime = (date) => {
  const hour = new Date(date).getUTCHours();
  const minute = new Date(date).getUTCMinutes();

  return `${hour}:${minute}`;
};

const date1 = new Date();

const date2 = new Date(2022, 5, 23);

const result = getGreenwichTime(date1);

const result1 = getGreenwichTime(date2);

console.log(result);
console.log(result1);
console.log(date1);
console.log(date2);
