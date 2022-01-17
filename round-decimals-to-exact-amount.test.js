const round = require('./round-decimals-to-exact-amount')

test('returns the number 1.005 with two decimals after the comma', () => {
  expect(round(1.005, 2)).toBe(1.01);
});
