'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  // put your code here
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = (Math.random() * (1000000 - 1) + 1).toFixed(0);
    this.isConfirmed = false;
    this.dateCreated = new Date();
    this.dateConfirmed = new Date();
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const user1 = new Order();

console.log(user1.id);
console.log(user1.dateConfirmed);
console.log(user1.isConfirmed);
