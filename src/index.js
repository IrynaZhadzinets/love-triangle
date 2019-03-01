/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countTriangle, i, a, b, c;
  countTriangle = 0;
  for (i = 0; i < preferences.length; i++) {
    if (preferences[i] != 0) {
      a = preferences[i];
      b = preferences[a - 1];
      c = preferences[b - 1];
      if (c == i+1 & b != c) {
        countTriangle++;
        preferences[i] = 0;
        preferences[a - 1] = 0;
        preferences[b - 1] = 0;
      }
    }
  }
  console.log(countTriangle);
  return countTriangle;
};
