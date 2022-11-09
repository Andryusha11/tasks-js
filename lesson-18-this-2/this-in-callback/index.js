'use strict';

export const event = {
  message: 'Welcome to the party!',
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'ex1@gmail.com',
    },
    {
      name: 'Bob',
      age: 22,
      email: 'ex2@gmail.com',
    },
    {
      name: 'Tom',
      age: 14,
      email: 'ex3@gmail.com',
    },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => {
        return {
          email,
          message: `Dear ${name}! ${this.message}`,
        };
      });
  },
};
