let express = require('express');
let app = express();
let server = require('http').createServer(app);
let socket = require('socket.io');
let io = socket.listen(server);

let redis = require('redis');
let redisClient = redis.createClient();

io.sockets.on('connection', function (client) {
  client.on('answer', function (question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function (question) {
    if (!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush('questions', question);
    }
  });
});
