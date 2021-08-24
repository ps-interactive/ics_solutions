let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.on('connection', function (client) {
  console.log("Client connected...");

  client.on('question', function (question) {
    client.broadcast.emit('question', question);
  });
});

server.listen(8080);
