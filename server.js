const express = require('express');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const Post = require('./models/post');
const User = require('./models/user');
const path = require('path');

// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://admin:admin1@ds129600.mlab.com:29600/interreact');

app.use(express.static(__dirname + '/public/'));
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(path.join(__dirname, 'client/build')));
router(app);


const port = process.env.port || 3030;
const server = http.createServer(app);
server.listen(process.env.PORT || port);
console.log('listening on: ' + port);