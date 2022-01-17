const celsiusToFahrenheit = require('./celsius-to-fahrenheit')

test('returns a fahrenheit value of 59 from 15 that is in celsius', () => {
  expect(celsiusToFahrenheit(15)).toBe(59);
});

test('returns a fahrenheit value of 32 from 0 that is in celsius', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('returns a fahrenheit value of -20 from -4 that is in celsius', () => {
  expect(celsiusToFahrenheit(-20)).toBe(-4);
});

test('returned value to be truthy', () => {
  expect(celsiusToFahrenheit(1)).toBeTruthy();
});
