export const getDiff = (startDate, endDate) => {
  const firstDate = new Date(startDate);
  const secondDate = new Date(endDate);

  let newDate;
  let res;

  if (startDate - endDate > 0) {
    newDate = new Date(firstDate - secondDate);
    res = `${newDate.getDate()}d ${newDate.getHours()}h ${newDate.getMinutes()}m ${newDate.getSeconds()}s`;
  } else {
    newDate = new Date(secondDate - firstDate);
    res = `${newDate.getDate()}d ${newDate.getHours()}h ${newDate.getMinutes()}m ${newDate.getSeconds()}s`;
  }

  return res;
};

const date1 = new Date(2019, 2, 5, 2, 2, 2);

const date2 = new Date(2020, 0, 1, 4, 4, 4);

const date3 = new Date(2016, 44, 3, 12, 7, 22);

console.log(getDiff(date1, date2));
console.log(getDiff(date1, date3));

console.log(getDiff(date2, date1));
console.log(getDiff(date2, date3));

console.log(getDiff(date3, date1));
console.log(getDiff(date3, date2));
