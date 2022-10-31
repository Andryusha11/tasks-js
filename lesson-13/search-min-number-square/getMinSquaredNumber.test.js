import getMinSquaredNumber from './getMinSquaredNumber';

it('should get null if array is empty', () => {
  const res = getMinSquaredNumber([]);
  expect(res).toEqual(null);
});

it('should get null if input not arr', () => {
  const res = getMinSquaredNumber('text');
  expect(res).toEqual(null);
});

it('should get min Square number if input arr of numbers', () => {
  const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(res).toEqual(4);
});
