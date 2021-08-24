let redis = require('redis');
let client = redis.createClient();
client.set('name', 'nick');
