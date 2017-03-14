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

// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://admin:admin1@ds129600.mlab.com:29600/interreact');


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


const port = process.env.port || 3030;
const server = http.createServer(app);
server.listen(process.env.PORT || port);
console.log('listening on: ' + port);