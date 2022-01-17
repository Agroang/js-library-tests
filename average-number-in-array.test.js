const average = require('./average-number-in-array')

test('given an array of [21, 56, 23, 122, 67] the result should be 57.8', () => {
  expect(average([21, 56, 23, 122, 67])).toBe(57.8);
});

test('given an array of [80, 1, 0, 50, 99] the result should be 46', () => {
  expect(average([80, 1, 0, 50, 99])).toBe(46);
});

test('given an array of [0, 0, 0, 1, 1, 0, 0, 1] the result should be 0.375', () => {
  expect(average([0, 0, 0, 1, 1, 0, 0, 1])).toBe(0.375);
});

test('result to be truthy', () => {
  expect(average([0, 0, 0, 1, 1, 0, 0, 1])).toBeTruthy();
});
