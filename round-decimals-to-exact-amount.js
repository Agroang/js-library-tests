// function that *round* decimals to a certain number of decimal places
// **Warning**: bugging with numbers that have more than 3 commas as the input
// is not picking the whole number, just the first 3 numbers after the comma.
function round(n, d) {
  return Number(Math.round(n + "e" + d) + "e-" + d);
}

module.exports = round
