# silver-octo-journey

Simple node js app to parse a csv file with the format

> id, json

where id is a number and json is a stringified array, e.g "[1,2,3]"

### How to Run

- checkout repo and run `npm` or `yarn` to install packages
- run `node cli.js [file.csv]` to transform tables in the csv to a rotated table
- run `yarn test` or `npm run test` to run the unit tests

### Sample test run

A folder test-runs has an input and output csv for the happy path scenario

### Error handling

On incorrect formatting of the input csv, the program stops gracefully. There are no restrictions of the type of data in your array. It could be string or numbers.

### Efficiency

This uses `fast-csv` npm package. The package takes in a file stream and outputs csv row by row. The program use piping streams to read and parse input data and then a second format stream to transform this data to the expected output. Finally the output is piped to `stdout`. 

The array has to be represented together (without the length, the program cannot run successfully) and hence needs to be processed all at once. Once the array is processed into a 2d array, from here technically, one could start piping layers into the next transform stream.

