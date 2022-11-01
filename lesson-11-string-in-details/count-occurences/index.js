const countOccurrences = (text, str) => {
  // put your code here
  if (str === '') {
    return null;
  } else {
    return text.split(str).length - 1;
  }
};

const text = 'text which i texted';
const text2 = 'NLO LOL KOLOBOK LOM';

console.log(countOccurrences(text, 'te'));
console.log(countOccurrences(text, ' '));
console.log(countOccurrences(text2, 'LO'));
