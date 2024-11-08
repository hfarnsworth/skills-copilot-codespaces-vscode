// Create web server
// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var commentFilePath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());
app.use(express.static(__dirname));

// Read comments from file
app.get('/api/comments', function(req, res) {
  fs.readFile(commentFilePath, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    res.json(JSON.parse(data));
  });
});

// Add comment to file
app.post('/api/comments', function(req, res) {
  fs.readFile(commentFilePath, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),