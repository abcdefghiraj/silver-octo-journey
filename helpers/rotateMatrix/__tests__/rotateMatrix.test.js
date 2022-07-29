const rotateMatrix = require('../rotateMatrix');

describe('rotate matrix', () => {
  it('should rotate array with single array correctly', () => {
    const result = rotateMatrix([[5]]);
    expect(result).toEqual([[5]]);
  });
  it('should rotate array with odd number of elements correctly', () => {
    const result = rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[4, 1, 2], [7, 5, 3], [8, 9, 6]]);
  });
  it('should rotate array with even number of elements correctly', () => {
    const result = rotateMatrix([[1, 2], [3, 4]]);
    expect(result).toEqual([[3, 1], [4, 2]]);
  });
  it('should not fail for empty array', () => {
    const result = rotateMatrix([]);
    expect(result).toEqual([]);
  });
  it('should not fail for jagged array', () => {
    expect(() => rotateMatrix([[1], [4, 5]])).not.toThrowError();
  });
});
