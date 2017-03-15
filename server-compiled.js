'use strict';

var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');
var Post = require('./models/post');
var User = require('./models/user');
var path = require('path');

// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://admin:admin1@ds129600.mlab.com:29600/interreact');
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
app.use(express.static(__dirname + '/public/'));
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.join(__dirname, 'client/build')));
router(app);

var port = process.env.port || 3030;
var server = http.createServer(app);
server.listen(process.env.PORT || port);
console.log('listening on: ' + port);

//# sourceMappingURL=server-compiled.js.map