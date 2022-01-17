// function that returns the average number given an array of numbers
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

module.exports = average
