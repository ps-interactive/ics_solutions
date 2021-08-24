let redis = require('redis');
let client = redis.createClient();
client.lrange('questions', 0, -1, function (err, questions) {
  console.log(questions);
});
