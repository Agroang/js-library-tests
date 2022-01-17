const round = require('./round-decimals-to-exact-amount')

test('returns the number 1.005 with two decimals after the comma', () => {
  expect(round(1.005, 2)).toBe(1.01);
});

test('returns the number 1.005 with two decimals after the comma', () => {
  expect(round(5.105, 1)).toBe(5.1);
});

test('returns the number 1.005 with two decimals after the comma', () => {
  expect(round(4.005, 3)).toBe(4.005);
});

test('returns the number 1.005 with two decimals after the comma', () => {
  expect(round(567.163, 1)).toBe(567.2);
});

test('array to be truthy', () => {
  expect(round(567.163, 1)).toBeTruthy();
});
