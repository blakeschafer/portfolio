var http = require('http');
var express = require('express');
var fs = require('fs');
const path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
  });


app.get('*', function (req, res) {
    res.status(404).render('404');
  });


app.listen(port, function () {
    console.log("==Server is listening on port", port);
  });