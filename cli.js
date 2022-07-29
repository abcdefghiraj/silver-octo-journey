const fs = require('fs');
const csv = require('fast-csv');

const filePath = process.argv.slice(2)[0];

const isPerfectSquare = (num) => Number.isInteger(Math.sqrt(num));

const test = csv.parse({ headers: true })
  .transform((data, next) => {
    console.log('t1');
    next(null, {
      id: parseInt(data.id, 10),
      json: JSON.parse(data.json),
      is_valid: undefined,
    });
  });

const test2 = csv.format({ headers: true, quoteColumns: { json: true } })
  .transform((data, next) => {
    console.log('t3');
    if (isPerfectSquare(data.json.length)) {
      return next(null, { ...data, json: `[${data.json.join(', ')}]`, is_valid: true });
    }
    return next(null, { ...data, json: '[]', is_valid: false });
  });

fs.createReadStream(filePath)
  .pipe(test)
  .pipe(test2)
  .on('error', (err) => {
    console.log(err);
  })
  .pipe(process.stdout)
  .on('end', () => process.exit());
