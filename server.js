const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:auth/auth');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);


const port = process.env.port || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('listening on: ' + port);