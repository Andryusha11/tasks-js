export const wallet = {
  transactions: [1, 20, 43, 15, 5, 17, 128, 221, 14, 876],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
