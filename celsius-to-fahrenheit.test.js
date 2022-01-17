const celsiusToFahrenheit = require('./celsius-to-fahrenheit')

test('returns a fahrenheit value of 59 from 15 that is in celsius', () => {
  expect(celsiusToFahrenheit(15)).toBe(59);
});

test('returns a fahrenheit value of 59 from 15 that is in celsius', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('returns a fahrenheit value of 59 from 15 that is in celsius', () => {
  expect(celsiusToFahrenheit(-20)).toBe(-4);
});
