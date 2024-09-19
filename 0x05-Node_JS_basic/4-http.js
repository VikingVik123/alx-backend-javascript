const http = require('http');

/**
 * create a basic web server
 */

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
