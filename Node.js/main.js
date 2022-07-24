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

// const { readFileSync } = require('fs');
// console.log(readFileSync('file.txt', 'utf-8'));

const { createServer } = require('http');
let server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<h1>Hello World</h1>
  `);
  response.end();
});

server.listen(8000);
console.log('Listening at port 8000');
console.log('http://localhost:8000');

// const { request } = require('http');
// let requestStream = request(
//   {
//     hostname: 'eloquentjavascript.net',
//     path: '/20_node.html',
//     method: 'GET',
//     headers: { Accept: 'text/html' },
//   },
//   (response) => {
//     console.log('Server responded with status code', response.statusCode);
//   }
// );
// requestStream.end();
