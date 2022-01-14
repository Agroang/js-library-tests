const shuffle = require('./shuffle-array')

test('array of 8 elements to have a length of 8', () => {
  expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8])).toHaveLength(8);
});
