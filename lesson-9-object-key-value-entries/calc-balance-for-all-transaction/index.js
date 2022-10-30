// const getTotalRevenue = (transactions) => {
//   // put your code here
//   let totalRevenue = 0;
//   transactions.forEach((element) => {
//     totalRevenue += element.amount;
//   });
//   return totalRevenue;
// };

const getTotalRevenue = (transactions) => {
  // put your code here
  const res = transactions.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);
  return res;
};
// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

// getTotalRevenue(dayTransactions);
console.log(result);
