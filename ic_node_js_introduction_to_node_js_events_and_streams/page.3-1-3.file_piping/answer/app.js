var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);
