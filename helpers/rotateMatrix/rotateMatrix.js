module.exports = function rotateMatrix(arr) {
  const size = arr.length;
  const adjustmentMatrix = JSON.parse(JSON.stringify(arr));
  // Layer numbers
  for (let layer = size; layer > 1; layer -= 1) {
    let i = size - layer;
    let j = size - layer;
    if (i === layer - 1 && j === layer - 1) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // traverse right
    for (;j < layer; j += 1) {
      if (j !== layer - 1) {
        adjustmentMatrix[i][j + 1] = arr[i][j];
      }
    }
    j -= 1;
    for (;i < layer; i += 1) {
      if (i !== layer - 1) {
        adjustmentMatrix[i + 1][j] = arr[i][j];
      }
    }
    i -= 1;
    for (;j >= 0; j -= 1) {
      if (j !== 0) {
        adjustmentMatrix[i][j - 1] = arr[i][j];
      }
    }
    j = 0;
    for (;i >= 0; i -= 1) {
      if (i !== 0) {
        adjustmentMatrix[i - 1][j] = arr[i][j];
      }
    }
  }
  return adjustmentMatrix;
};
