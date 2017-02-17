'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var router = require('router');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

var port = process.env.port || 3030;
var server = http.createServer(app);
server.listen(port);
console.log('listening on: ' + port);

//# sourceMappingURL=server-compiled.js.map