// function to get the highest sum of the upper left corner in a matrix(array)
function flippingMatrix(array) {
  let sum = 0;
  const n = array.length;
  const m = array[0].length;
  let cur = 0;
  let right = 0;
  let down = 0;
  let diag = 0;
  let ans = 0;
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < m / 2; j++) {
      cur = array[i][j];
      right = array[i][m - j - 1];
      down = array[n - i - 1][j];
      diag = array[n - i - 1][m - j - 1];
      ans = Math.max(cur, right, down, diag);
      sum += ans;
    }
  }
  return sum;
}

module.exports = flippingMatrix
