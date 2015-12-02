var http = require('http');
var express = require('express');
var server = express();

server.use(express.static(__dirname));

server.listen(3000);
console.log('Server running at http://localhost:3000');

