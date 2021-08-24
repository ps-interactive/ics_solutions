let redis = require('redis');
let client = redis.createClient();

let question1 = "Where is the dog?";
let question2 = "Where is the cat?";

client.lpush("questions", question1, function (err, reply) {
  console.log(reply);
});
client.lpush("questions", question2, function (err, reply) {
  console.log(reply);
});
