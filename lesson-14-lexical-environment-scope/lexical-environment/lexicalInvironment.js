// first function
// input name
// console some message
// output undefined

// second function
// input new text
// output undefined

//algo
// 1. create let message
// 2. add name into message in first function
// 3. console result
// 4. change message into second function
// 5. first function should console message with new text

let message = 'Just learn it';

const sendMessage = (name) => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

const setMessage = (newText) => {
  message = newText;
};
