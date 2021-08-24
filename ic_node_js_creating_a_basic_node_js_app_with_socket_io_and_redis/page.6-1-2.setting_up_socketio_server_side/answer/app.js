let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
io.sockets.on('connection', function (client) {
  console.log("Client connected...");
});

server.listen(8080);