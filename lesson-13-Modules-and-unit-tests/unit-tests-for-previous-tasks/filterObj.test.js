import { getAdults } from './filterObj';

it('should get object key: value', () => {
  const res = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(res).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty obj if input empty obj', () => {
  const res = getAdults({});
  expect(res).toEqual({});
});

it('should get object key: value', () => {
  const res = getAdults({ Ann: 56, Andrey: 7 });
  expect(res).toEqual({ Ann: 56 });
});
