let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

io.sockets.on('connection', function (client) {
  console.log("Client connected...");

  client.on('answer', function (question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function (question) {
    if (!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});

server.listen(8080);
