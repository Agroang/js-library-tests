const flippingMatrix = require ('./flipping-matrix-array')

test('2n x 2n matrix(array) to have a max sum of upper left part elements to be 414', () => {
  expect(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])).toBe(414);
});

test('result to be defined(truthy)', () => {
  expect(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]])).toBeTruthy();
});
