const parseRow = require('../parseRow');

describe('parseRow', () => {
  it('should call next with is_valid=true and 2d json for perfect squared length arrays', () => {
    const next = jest.fn();
    const row = { id: '1', json: '[1,2,3,4]' };
    parseRow(row, next);
    expect(next).toBeCalledWith(null, { id: 1, json: [[1, 2], [3, 4]], is_valid: true });
  });

  it('should call next with is_valid=false and json=[] for arrays of other lengths', () => {
    const next = jest.fn();
    const row = { id: '1', json: '[1,2,3,4,5]' };
    parseRow(row, next);
    expect(next).toBeCalledWith(null, { id: 1, json: [], is_valid: false });
  });

  it('should throw error for incorrectly formatted json', () => {
    const next = jest.fn();
    const row = { id: '1', json: '[1,2,3,4,5' };
    expect(() => parseRow(row, next)).toThrowError();
  });
});
