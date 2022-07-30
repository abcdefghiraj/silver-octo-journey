const { rotateMatrix } = require('../rotateMatrix');

module.exports = function formatRow(row, next) {
  const data = {
    ...row,
    json: row.is_valid ? `[${rotateMatrix(row.json).flat().join(', ')}]` : '[]',
  };
  next(null, data);
};
