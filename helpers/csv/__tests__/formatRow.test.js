const formatRow = require('../formatRow');

jest.mock('../../rotateMatrix', () => ({ rotateMatrix: () => [[1], [2]] }));

describe('formatRow', () => {
  it('should format the output array correctly if is_valid = true', () => {
    const next = jest.fn();
    const row = { id: 1, json: [], is_valid: true };
    formatRow(row, next);
    expect(next).toBeCalledWith(null, { id: 1, json: '[1, 2]', is_valid: true });
  });

  it('should format the output array as empty arry correctly if is_valid = false', () => {
    const next = jest.fn();
    const row = { id: 1, json: [], is_valid: false };
    formatRow(row, next);
    expect(next).toBeCalledWith(null, { id: 1, json: '[]', is_valid: false });
  });
});
