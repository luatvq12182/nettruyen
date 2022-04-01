const { model, Schema } = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            maxlength: 255,
        },
        content: {
            type: String,
            maxlength: 50000,
            required: true,
            trim: true,
        },
        order: {
            type: Number,
            required: true,
        },
        storyId: {
            type: Schema.Types.ObjectId,
            ref: 'Story',
            required: true,
        },
        status: {
            type: Number,
            default: 0,
            required: true,
        },
        title: {
            type: String,
            maxlength: 255,
        },
        description: {
            type: String,
            maxlength: 1000,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model('Chapter', schema);
