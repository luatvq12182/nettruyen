require('dotenv').config();

const server = require('./server');
const db = require('./db');

server.init();
db.connect();