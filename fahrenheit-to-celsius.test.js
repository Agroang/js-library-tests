const fahrenheitToCelsius = require('./fahrenheit-to-celsius')


test('returns a celsius value of 15 from 59 that is in fahrenheit', () => {
  expect(fahrenheitToCelsius(59)).toBe(15);
});

test('returns a celsius value of 0 from 32 that is in fahrenheit', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test('returns a celsius value of -4 from -20 that is in fahrenheit', () => {
  expect(fahrenheitToCelsius(-4)).toBe(-20);
});

test('returned value to be truthy', () => {
  expect(fahrenheitToCelsius(1)).toBeTruthy();
});
