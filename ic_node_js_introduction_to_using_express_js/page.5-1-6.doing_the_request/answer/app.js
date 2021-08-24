let url = require('url');
let options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

let searchURL = url.format(options);

let request = require('request');
request(searchURL, function(err, response, body) {
  console.log(body);
});
