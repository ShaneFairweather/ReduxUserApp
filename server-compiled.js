'use strict';

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');
var Post = require('./models/post');
var User = require('./models/user');

// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://admin:admin1@ds129600.mlab.com:29600/interreact');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

var port = process.env.port || 3030;
var server = http.createServer(app);
server.listen(process.env.PORT || port);
console.log('listening on: ' + port);

//# sourceMappingURL=server-compiled.js.map