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

const init = () => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
};

module.exports = {
    init,
};
