var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/health.json', function (req, res) {
  console.log("healthy checker");
  res.send({status: 'UP'});
});

app.listen(3033, function () {
  console.log('Example app listening on port 3033!');
});
