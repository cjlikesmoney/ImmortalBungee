const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('KeepAlive\n');
});

const PORT = process.env.PORT || 9999;
server.listen(PORT, () => {
  console.log(`KeepAlive server running on port ${PORT}`);
});