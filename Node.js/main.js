// const { reverse } = require('./reverse');

// let argument = process.argv[2];
// console.log(reverse(argument));

// let { readFile } = require('fs');
// readFile('file.txt', 'utf-8', (error, text) => {
//   if (error) throw error;
//   console.log(text);
// });

// let { readFile } = require('fs');
// readFile('file.txt', (error, buffer) => {
//   if (error) throw error;
//   console.log(buffer.length);
//   console.log(buffer);
// });

// const { writeFile } = require('fs');
// writeFile('grafitti.txt', 'Node was here', (err) => {
//   if (err) console.error('Failed to write file');
//   else console.log('File written');
// });

// const { readFile } = require('fs').promises;
// readFile('file.txt', 'utf-8').then((text) => console.log(text));

const { readFileSync } = require('fs');
console.log(readFileSync('file.txt', 'utf-8'));
