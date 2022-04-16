const { model, Schema } = require('mongoose');

const scheme = new Schema({
    title: {
        type: String,
        maxlength: 255,
        min: 1,
        trim: true,
    },
    description: {
        type: String,
        maxlength: 2000,
        trim: true,
    },
    logo: {
        type: Schema.Types.ObjectId,
        ref: 'Attachment',
    },
    intro: {
        type: String,
        maxlength: 15000,
        trim: true,
    },
});

module.exports = model('Config', scheme);
