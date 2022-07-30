const { create2DArray } = require('../create2DArray');

function parseRow(row, next) {
  const data = {
    id: parseInt(row.id, 10),
    json: JSON.parse(row.json),
  };
  const lengthSqrt = Math.sqrt(data.json.length);

  if (Number.isInteger(lengthSqrt)) {
    return next(null, {
      id: data.id,
      json: create2DArray(data.json, lengthSqrt),
      is_valid: true,
    });
  }
  return next(null, {
    id: data.id,
    json: [],
    is_valid: false,
  });
}

module.exports = parseRow;
