var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.on('request', function(request, response) {
  console.log('New request coming in...');
});
server.listen(8080);
