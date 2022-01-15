// shuffle array function
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = shuffle


// https://ankishb.github.io/2019/08/05/flip-the-matrix-to-maximize-sum-in-top-quadrant.html
// if I want to try to understand better again, result is 414
// [112, 42, 83, 119]
// [56, 125, 56, 49]
// [15, 78, 101, 43]
// [62, 98, 114, 108]
