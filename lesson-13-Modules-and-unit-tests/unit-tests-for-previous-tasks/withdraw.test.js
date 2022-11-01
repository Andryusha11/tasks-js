import { withdraw } from './withdraw';

it('should get -1 if balance of client < amount', () => {
  const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50);
  expect(res).toEqual(-1);
});

it('should get balance of client', () => {
  const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(res).toEqual(37);
});

it('should get balance of client', () => {
  const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 10);
  expect(res).toEqual(1390);
});
