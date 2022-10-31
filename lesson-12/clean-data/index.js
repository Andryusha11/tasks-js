const cleanTransactionList = (arr) => {
  const res = [];
  arr.map((el) => {
    if (+el) res.push(`$${parseFloat(el).toFixed(2)}`);
  });
  return res;
};

console.log(cleanTransactionList([' 1.9', '16.4', 17, ' 1 dollar']));
