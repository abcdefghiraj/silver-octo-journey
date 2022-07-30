const create2DArray = require('../create2DArray');

describe('create2DArray', () => {
  it('should create correct 2D array for given parameters', () => {
    const result = create2DArray([1, 2, 3], 1);
    expect(result).toEqual([[1], [2], [3]]);
  });

  it('should return empty array for empty array', () => {
    const result = create2DArray([]);
    expect(result).toEqual([]);
  });
});
