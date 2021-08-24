let url = require('url');

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

let searchURL = url.format(options);
console.log(searchURL);
