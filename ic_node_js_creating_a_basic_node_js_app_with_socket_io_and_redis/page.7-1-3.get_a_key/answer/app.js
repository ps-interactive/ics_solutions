let redis = require('redis');
let client = redis.createClient();
let result = client.get('question', function (err, data) {
  console.log(data);
});
