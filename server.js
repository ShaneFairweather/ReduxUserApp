const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');
const User = require('./models/user');

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


const port = process.env.port || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('listening on: ' + port);