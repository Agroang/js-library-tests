// function that round decimals to a certain number of decimal places
function round(n, d) {
  return Number(Math.round(n + "e" + d) + "e-" + d);
}

module.exports = round
