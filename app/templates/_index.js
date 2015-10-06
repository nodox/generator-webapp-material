var express = require('express');
var app = express();

var port = process.env.PORT || 9000; 

app.use(express.static(__dirname + '/dist'));

app.listen(port);      

// shoutout to the user                     
console.log('Magic happens on port ' + port);


// expose app           
exports = module.exports = app;   