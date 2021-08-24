let express = require('express');
let app = express();

app.get('/tweets', function(req, res) {
  res.sendFile(__dirname + "/tweets.html");
});

app.listen(8080);
