import { reverseArray } from './reverseArray';

it('should get null if input not array', () => {
  const res = reverseArray(22);
  expect(res).toEqual(null);
});

it('should get null if input not array', () => {
  const res = reverseArray({});
  expect(res).toEqual(null);
});

it('should get reverse array if input is array', () => {
  const res = reverseArray(['text', 'number', 'all', 'name']);
  expect(res).toEqual(['name', 'all', 'number', 'text']);
});

it('should get reverse array if input is array', () => {
  const res = reverseArray([15, 10, 11]);
  expect(res).toEqual([11, 10, 15]);
});
