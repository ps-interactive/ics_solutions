let url = require('url');
let request = require('request');
let express = require('express');

let options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

let searchURL = url.format(options);

let app = express();

app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});

app.listen(8080);
