const { model, Schema } = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            maxlength: 255,
            minlength: 1,
            required: true,
            trim: true,
            index: {
                unique: true,
            },
        },
        slug: {
            type: String,
            maxlength: 255,
            minlength: 1,
            required: true,
            index: {
                unique: true,
            },
        },
        attachmentId: {
            type: Schema.Types.ObjectId,
            ref: 'Attachment',
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Category',
            },
        ],
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Tag',
            },
        ],
        author: {
            type: String,
            maxlength: 255,
        },
        progress: {
            type: Number,
            default: 0,
        },
        status: {
            type: Number,
            default: 0,
        },
        intro: {
            type: String,
            maxlength: 5000,
        },
        views: {
            type: Number,
            default: 0,
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

module.exports = model('Story', schema);
