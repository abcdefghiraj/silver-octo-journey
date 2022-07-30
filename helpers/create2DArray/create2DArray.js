module.exports = function create2DArray(arr, splitEvery = 1) {
  return arr.reduce((acc, curr, index) => {
    if (index % splitEvery === 0) {
      acc[acc.length] = [];
    }
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);
};
