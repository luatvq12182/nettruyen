const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression')

const middlewares = [
    helmet(),

    express.json({ limit: '5mb' }),

    express.urlencoded({ 
        extended: true, 
        parameterLimit: 20,
        limit: '5mb'
    }),

    express.static('public/upload'),

    morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'),

    cors({
        origin: "*"
    }),

    compression(),
];

module.exports = middlewares;