const path = require('path');
const express = require('express');
const middlewares = require('./middleware');
const modules = require('../modules');

const app = express();
const PORT = process.env.PORT || 3000;

middlewares.forEach((mdw) => {
    app.use(mdw);
});

modules.forEach(({ prefix, route }) => {
    app.use('/api' + prefix, route);
});

const PUBLIC_PATH = path.join(__dirname, '..', '..', '/public');

app.get('/admin*', (_req, res) => {
    res.sendFile(PUBLIC_PATH + '/admin/index.html')
});

app.get('*', (_req, res) => {
    res.sendFile(PUBLIC_PATH + '/client/index.html')
});

const init = () => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
};

module.exports = {
    init,
};
