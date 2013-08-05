
var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var buffer = fs.readFileSync('index.html');
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000pp.listen(port, function() {
  console.log("Listening on " + port);
});
