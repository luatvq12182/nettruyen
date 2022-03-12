const fs = require('fs');

const modules = [];

const dirs = fs.readdirSync(__dirname);

dirs.forEach((dir) => {
    if (dir === 'index.js') return;

    modules.push(require(`./${dir}`));
});

module.exports = modules;
