import sum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get aquare numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should get odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = sum(3, 5);
  expect(result).toEqual(8);
});
