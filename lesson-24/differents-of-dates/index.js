export const getDiff = (startDate, endDate) => {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);

  const diffTime = Math.abs(new Date(firstDate - secondDate));
  const res = `${Math.ceil(diffTime / (1000 * 60 * 60 * 24))}d ${new Date(
    diffTime
  ).getHours()}h ${new Date(diffTime).getMinutes()}m ${new Date(
    diffTime
  ).getSeconds()}s`;

  return res;
};

const date1 = new Date(2019, 2, 5);

const date2 = new Date(2020, 0, 1);

const date3 = new Date(2016, 6, 3);

console.log(getDiff(date1, date2));
console.log(getDiff(date1, date3));

console.log(getDiff(date2, date1));
console.log(getDiff(date2, date3));

console.log(getDiff(date3, date1));
console.log(getDiff(date3, date2));
