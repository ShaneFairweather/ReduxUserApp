'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

var port = process.env.port || 3030;
var server = http.createServer(app);
server.listen(port);
console.log('listening on: ' + port);

//# sourceMappingURL=server-compiled.js.map