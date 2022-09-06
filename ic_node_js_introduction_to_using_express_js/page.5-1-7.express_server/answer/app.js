let url = require('url');
let request = require('request');
let express = require('express');

let options = {
  protocol: "http:",
  host: "openlibrary.org",
  pathname: '/search.json',
  query: { q: "programming" }
};

let searchURL = url.format(options);

let app = express();

app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});

app.listen(8080);

