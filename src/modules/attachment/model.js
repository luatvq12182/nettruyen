const { model, Schema } = require('mongoose');

const schema = new Schema(
    {
        filename: {
            type: String,
            maxlength: 255,
            required: true,
        },
        size: {
            type: Number,
        },
        type: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Attachment', schema);