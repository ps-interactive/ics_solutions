var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
chat.on('message', function(message) {
  console.log(message);
});
