const stringReverse = require('./reverse-string')

test('reverse a str into i hope you like my article', () => {
  expect(stringReverse('elcitra ym ekil uoy epoh i')).toBe('i hope you like my article');
});

test('result to be truthy ', () => {
  expect(stringReverse('elcitra ym ekil uoy epoh i')).toBeTruthy();
});
