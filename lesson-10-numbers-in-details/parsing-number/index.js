const getParsedIntegers = (arr) => {
  return arr.map((el) => Number.parseInt(el));
};

const getParsedIntegersV2 = (arr) => {
  return arr.map((el) => parseInt(el));
};

const getParsedFloat = (arr) => {
  return arr.map((el) => Number.parseFloat(el));
};
const getParsedFloatV2 = (arr) => {
  return arr.map((el) => parseFloat(el));
};

console.log(Math.round(-17.3));

const example = [0.22, 9, 7.55, null, undefined, NaN, 'text', '25.02day', true];

console.log(getParsedIntegers(example));

console.log(getParsedIntegersV2(example));

console.log(getParsedFloat(example));

console.log(getParsedFloatV2(example));
