const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connect = () => {
    try {
        mongoose.connect(MONGO_URI, () => {
            console.log('Connect success');
        });
    } catch (error) {
        console.log('Connect fail ' + error);
    }
};

module.exports = {
    connect,
};
