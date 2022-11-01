import { calc } from './calculator';

it('should get null if input not string', () => {
  const res = calc([10 + 2]);
  expect(res).toEqual(null);
});
it('should get sum', () => {
  const res = calc('10 + 2');
  expect(res).toEqual('10 + 2 = 12');
});
it('should get multiply', () => {
  const res = calc('10 * 2');
  expect(res).toEqual('10 * 2 = 20');
});
it('should get divide ', () => {
  const res = calc('10 / 2');
  expect(res).toEqual('10 / 2 = 5');
});
it('should get minus ', () => {
  const res = calc('10 - 2');
  expect(res).toEqual('10 - 2 = 8');
});
