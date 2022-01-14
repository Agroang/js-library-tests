const shuffle = require('./shuffle-array')

// JEST docs: https://jestjs.io/docs/using-matchers
// https://jestjs.io/docs/expect#methods
// run with yarn test

test('array of 8 elements to have a length of 8', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(8);
});

test('array to be in a different order', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).not.toBe([1, 2, 3, 4, 5, 6, 7, 8]);
});

test('array to be truthy (be defined)', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).toBeTruthy();
});

test('array to not be null', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).not.toBeNull();
});

test('array to not be undefined', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).not.toBeUndefined();
});

describe('not.arrayContaining', () => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];

  it('matches if the actual array does not contain the expected elements', () => {
    expect([1, 3, 10]).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});
