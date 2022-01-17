const round = require('./round-decimals-to-exact-amount')

test('returns the number 1.005 with 2 decimals after the comma', () => {
  expect(round(1.005, 2)).toBe(1.01);
});

test('returns the number 5.105 with 1 decimal after the comma', () => {
  expect(round(5.105, 1)).toBe(5.1);
});

test('returns the number 4.005 with 3 decimals after the comma', () => {
  expect(round(4.005, 3)).toBe(4.005);
});

test('returns the number 567.163 with 2 decimals after the comma', () => {
  expect(round(567.163, 1)).toBe(567.2);
});

test('returns the number 10.98 with 1 decimals after the comma', () => {
  expect(round(10.98, 1)).toBe(11.0);
});

test('array to be truthy', () => {
  expect(round(567.163, 1)).toBeTruthy();
});
