const getMethods = {
  years: 'getFullYear',
  month: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethods = {
  years: 'setFullYear',
  month: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = (someDate) => {
  let initialValue = someDate;

  const calculator = {
    add(methodName, number) {
      const newValue = initialValue[getMethods[methodName]]() + number;
      initialValue[setMethods[methodName]](newValue);
      return this;
    },
    subtract(methodName, number) {
      const newValue = initialValue[getMethods[methodName]]() - number;
      initialValue[setMethods[methodName]](newValue);
      return this;
    },
    result() {
      return new Date(initialValue);
    },
  };

  return calculator;
};

console.log(
  shmoment(new Date(2020, 0, 7, 17, 17, 17))
    .add('minutes', 2)
    .add('days', 8)
    .subtract('years', 1)
    .result()
);
