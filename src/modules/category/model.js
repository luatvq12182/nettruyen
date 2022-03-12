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
    },
    {
        timestamps: true,
    }
);

module.exports = model('Category', scheme);
