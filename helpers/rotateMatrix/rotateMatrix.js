module.exports = function rotateMatrix(arr) {
  const size = arr.length;
  const adjustmentMatrix = JSON.parse(JSON.stringify(arr));
  // Go in layer by layer
  for (let layer = size; layer > 1; layer -= 1) {
    // top left corner
    let [i, j] = [size - layer, size - layer];

    // base case where you reach inside most square
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
    // Crossed top right edge index. Reset column for next traversal
    j -= 1;
    // traverse down
    for (;i < layer; i += 1) {
      if (i !== layer - 1) {
        adjustmentMatrix[i + 1][j] = arr[i][j];
      }
    }
    // Crossed bottom right edge index. Reset row for next traversal
    i -= 1;
    // traverse left
    for (;j >= 0; j -= 1) {
      if (j !== 0) {
        adjustmentMatrix[i][j - 1] = arr[i][j];
      }
    }
    // Crossed bottom left edge index. Reset column for next traversal
    j = 0;
    // traverse up
    for (;i >= 0; i -= 1) {
      if (i !== 0) {
        adjustmentMatrix[i - 1][j] = arr[i][j];
      }
    }
  }
  return adjustmentMatrix;
};
