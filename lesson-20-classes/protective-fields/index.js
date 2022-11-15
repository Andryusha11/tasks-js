export class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(number) {
    this.balance += number;
  }

  withdraw(number) {
    if (number > this.balance) {
      console.log('No enough funds');
      return;
    }
    this.balance -= number;
  }
}
const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(50);
console.log(wallet1.getBalance());
wallet1.withdraw(45);
// wallet1.withdraw(55);
console.log(wallet1.getBalance());
