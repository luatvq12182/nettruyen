const { model, Schema } = require('mongoose');

const scheme = new Schema(
    {
        name: {
            type: String,
            required: true,
            index: {
                unique: true,
            },
        },
        slug: {
            type: String,
            required: true,
            index: {
                unique: true,
            },
        },
        title: {
            type: String,
            maxlength: 255
        },
        description: {
            type: String,
            maxlength: 1000
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model('Category', scheme);
