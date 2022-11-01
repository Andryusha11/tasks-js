'use strict';

// const withdraw = (clients, balances, client, amount) => {
//   //put your code here

//   if (clients.includes(client)) {
//     const index = clients.indexOf(client);
//     if (balances[index] - amount >= 0) {
//       return (balances[index] -= amount);
//     } else {
//       return -1;
//     }
//   }
//   return -1;
// };

export const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const index = clients.indexOf(client);

  return amount > balances[index] ? -1 : (balances[index] -= amount);
};

//example 1:

//input
// const clients = ['Ann', 'John', 'User'];
// const balances = [1400, 87, -6];
// const client = 'John';
// const amount = 50;
// console.log(withdraw(clients, balances, client, amount));
// console.log(balances);

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//output
//-1
//и массив balances должен быть [1400, 87, -6]

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Andrii', 10));
