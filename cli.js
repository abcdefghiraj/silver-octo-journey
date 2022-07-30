const fs = require('fs');
const csv = require('fast-csv');
const { formatRow, parseRow } = require('./helpers/csv');

const filePath = process.argv.slice(2)[0];

const parse = csv.parse({ headers: true })
  .transform(parseRow);

const format = csv.format({ headers: true, quoteColumns: { json: true } })
  .transform(formatRow);

fs.createReadStream(filePath)
  .pipe(parse)
  .pipe(format)
  .on('error', () => {
    // Do nothing
  })
  .pipe(process.stdout)
  .on('end', () => process.exit());
