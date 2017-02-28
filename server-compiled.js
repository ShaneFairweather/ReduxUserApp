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

mongoose.connect('mongodb://localhost:auth/auth');

// User.create({
//     email: "123@123.com",
//     username: "newguy",
//     password: "123"
// }, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("New user added");
//         console.log(post);
//     }
// });

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

var port = process.env.port || 3030;
var server = http.createServer(app);
server.listen(port);
console.log('listening on: ' + port);

//# sourceMappingURL=server-compiled.js.map