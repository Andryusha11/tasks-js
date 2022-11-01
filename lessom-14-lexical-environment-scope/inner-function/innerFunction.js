// function
// input
// output object with 3 methods

//algo
// 1. create function createMessenger
// 2. create method setMessage into function
//  2.1 setMessage input message and save it
// 3. create method setSender into function
//  3.1 setSender input name of sender and save it
// 4. create method sendMessage into function
//  4.1 setSender input name of recipient and console full message

'use strict';

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  // put your code here
  const sendMessage = (name) => {
    console.log(
      `Hello, ${name}! ${message}! This message was sent by ${sender}`
    );
  };

  const setMessage = (someMessage) => {
    message = someMessage;
  };

  const setSender = (senderName) => {
    sender = senderName;
  };

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// examples
const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
