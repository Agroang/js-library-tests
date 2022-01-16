const capitalize = require('./capitalize-string')

test('capitalized str to be I hope you like my article.', () => {
  expect(capitalize('i hope you like my article.')).toBe('I hope you like my article.');
});


test('str to be truthy', () => {
  expect(capitalize('i hope you like my article.')).toBeTruthy();
});
